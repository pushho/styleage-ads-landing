<?php

declare(strict_types=1);

if (realpath((string) ($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__) {
    http_response_code(404);
    exit;
}

final class SmtpException extends RuntimeException
{
}

final class SmtpClient
{
    public function __construct(
        private string $host,
        private int $port,
        private string $encryption,
        private string $username,
        private string $password,
        private bool $verifySsl,
        private int $timeout = 20,
    ) {
    }

    public function send(
        string $fromEmail,
        string $fromName,
        string $toEmail,
        string $toName,
        string $subject,
        string $textBody,
    ): void {
        $socket = $this->connect();

        try {
            $this->expect($socket, [220]);
            $ehloHost = $this->ehloHost($fromEmail);
            $this->command($socket, 'EHLO ' . $ehloHost, [250]);

            if ($this->encryption === 'tls') {
                $this->command($socket, 'STARTTLS', [220]);
                $this->enableTls($socket);
                $this->command($socket, 'EHLO ' . $ehloHost, [250]);
            }

            $this->command($socket, 'AUTH LOGIN', [334]);
            $this->command($socket, base64_encode($this->username), [334]);
            $this->command($socket, base64_encode($this->password), [235]);
            $this->command($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
            $this->command($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
            $this->command($socket, 'DATA', [354]);
            $this->write($socket, $this->message(
                $fromEmail,
                $fromName,
                $toEmail,
                $toName,
                $subject,
                $textBody,
            ));
            $this->expect($socket, [250]);
            $this->command($socket, 'QUIT', [221]);
        } finally {
            fclose($socket);
        }
    }

    /** @return resource */
    private function connect()
    {
        $remote = $this->encryption === 'ssl'
            ? 'ssl://' . $this->host . ':' . $this->port
            : 'tcp://' . $this->host . ':' . $this->port;

        $verify = $this->verifySsl && !in_array($this->host, ['localhost', '127.0.0.1'], true);
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => $verify,
                'verify_peer_name' => $verify,
                'allow_self_signed' => !$verify,
                'SNI_enabled' => true,
                'peer_name' => $this->host,
            ],
        ]);

        $socket = @stream_socket_client(
            $remote,
            $errno,
            $errstr,
            $this->timeout,
            STREAM_CLIENT_CONNECT,
            $context,
        );

        if ($socket === false) {
            throw new SmtpException('Could not connect to the mail server.');
        }

        stream_set_timeout($socket, $this->timeout);

        return $socket;
    }

    /** @param resource $socket */
    private function enableTls($socket): void
    {
        $method = STREAM_CRYPTO_METHOD_TLS_CLIENT;
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
            $method |= STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
        }

        if (!stream_socket_enable_crypto($socket, true, $method)) {
            throw new SmtpException('Could not start TLS with the mail server.');
        }
    }

    private function message(
        string $fromEmail,
        string $fromName,
        string $toEmail,
        string $toName,
        string $subject,
        string $textBody,
    ): string {
        $domain = substr(strrchr($fromEmail, '@') ?: '@localhost', 1);
        $messageId = bin2hex(random_bytes(16)) . '@' . $domain;
        $encodedBody = rtrim(chunk_split(base64_encode($this->normalize($textBody)), 76, "\r\n"));

        $headers = [
            'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000',
            'From: ' . $this->address($fromEmail, $fromName),
            'To: ' . $this->address($toEmail, $toName),
            'Subject: ' . $this->encodeHeader($subject),
            'Message-ID: <' . $messageId . '>',
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: base64',
        ];

        return implode("\r\n", $headers) . "\r\n\r\n" . $encodedBody . "\r\n.\r\n";
    }

    private function address(string $email, string $name): string
    {
        $name = trim(str_replace(["\r", "\n"], '', $name));
        if ($name === '') {
            return '<' . $email . '>';
        }

        return $this->encodeHeader($name) . ' <' . $email . '>';
    }

    private function encodeHeader(string $value): string
    {
        $value = trim(str_replace(["\r", "\n"], '', $value));
        if ($value === '' || preg_match('/^[\x20-\x7E]+$/', $value) === 1) {
            return $value;
        }

        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }

    private function normalize(string $value): string
    {
        $value = str_replace(["\r\n", "\r"], "\n", $value);

        return str_replace("\n", "\r\n", $value);
    }

    private function ehloHost(string $fromEmail): string
    {
        $domain = substr(strrchr($fromEmail, '@') ?: '', 1);
        if ($domain !== '' && preg_match('/^[A-Za-z0-9.-]+$/', $domain) === 1) {
            return $domain;
        }

        return 'localhost';
    }

    /** @param resource $socket */
    private function command($socket, string $command, array $expected): void
    {
        $this->write($socket, $command . "\r\n");
        $this->expect($socket, $expected);
    }

    /** @param resource $socket */
    private function write($socket, string $payload): void
    {
        $written = @fwrite($socket, $payload);
        if ($written === false || $written !== strlen($payload)) {
            throw new SmtpException('The connection to the mail server closed.');
        }
    }

    /**
     * @param resource $socket
     * @param list<int> $expected
     */
    private function expect($socket, array $expected): void
    {
        $code = 0;

        while (($line = fgets($socket, 515)) !== false) {
            if (strlen($line) < 4 || preg_match('/^(\d{3})([ \-])/', $line, $matches) !== 1) {
                throw new SmtpException('The mail server sent an unexpected response.');
            }

            $code = (int) $matches[1];
            if ($matches[2] === ' ') {
                break;
            }
        }

        $meta = stream_get_meta_data($socket);
        if (!empty($meta['timed_out'])) {
            throw new SmtpException('The mail server timed out.');
        }

        if ($line === false || !in_array($code, $expected, true)) {
            throw new SmtpException('The mail server refused the message.');
        }
    }
}
