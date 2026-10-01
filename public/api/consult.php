<?php

declare(strict_types=1);

ini_set('display_errors', '0');

require __DIR__ . '/smtp.php';

const CONCERN_LABELS = [
    'hairline' => 'The hairline',
    'crown' => 'The crown',
    'density' => 'Overall density',
    'repair' => 'An earlier transplant',
    'opinion' => 'I want an opinion first',
];

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

if (!same_origin()) {
    respond(false, 'We could not send that just now. Please call or WhatsApp the clinic.', 403);
}

if (rate_limited(client_ip())) {
    respond(false, 'Please wait a few minutes before sending another request.', 429);
}

$data = request_data();
if ($data === null) {
    respond(false, 'Invalid request.', 400);
}

if (trim((string) ($data['sa_hp'] ?? '')) !== '') {
    respond(true, '', 200);
}

$name = clean_line((string) ($data['name'] ?? ''), 80);
$phone = clean_line((string) ($data['phone'] ?? ''), 40);
$concern = (string) ($data['concern'] ?? '');
$note = clean_text((string) ($data['note'] ?? ''), 2000);

$fields = [];
if (text_length($name) < 2) {
    $fields['name'] = 'Please give your name.';
}
if (strlen(preg_replace('/\D/', '', $phone) ?? '') < 8) {
    $fields['phone'] = 'A full phone number, please.';
}
if (!isset(CONCERN_LABELS[$concern])) {
    $fields['concern'] = 'Choose what you want to talk about.';
}

if ($fields !== []) {
    respond(false, 'Please check the form.', 422, $fields);
}

try {
    $settings = mail_settings(load_mail_config());
    $body = implode("\n", [
        'New consultation request',
        '',
        'Name: ' . $name,
        'Phone: ' . $phone,
        'Concern: ' . CONCERN_LABELS[$concern],
        'Note: ' . ($note !== '' ? $note : '—'),
        '',
        'Sent: ' . gmdate('Y-m-d H:i:s') . ' UTC',
        'Page: StyleAge ads page',
    ]);

    $client = new SmtpClient(
        $settings['host'],
        $settings['port'],
        $settings['encryption'],
        $settings['username'],
        $settings['password'],
        $settings['verify_ssl'],
    );
    $client->send(
        $settings['from_email'],
        $settings['from_name'],
        $settings['to_email'],
        $settings['to_name'],
        'Consultation request: ' . $name,
        $body,
    );
} catch (Throwable $error) {
    error_log('styleage consult: ' . $error->getMessage());
    respond(false, 'We could not send that just now. Please call or WhatsApp the clinic.', 500);
}

respond(true, '', 200);

function request_data(): ?array
{
    $contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
    if (str_contains($contentType, 'application/json')) {
        $raw = file_get_contents('php://input');
        if ($raw === false || strlen($raw) > 20000) {
            return null;
        }

        $data = json_decode($raw, true);

        return is_array($data) ? $data : null;
    }

    if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
        return null;
    }

    return $_POST;
}

function load_mail_config(): array
{
    $candidates = [
        dirname(__DIR__, 3) . '/mail-config.php',
        dirname(__DIR__, 2) . '/mail-config.php',
        dirname(__DIR__) . '/mail-config.php',
        __DIR__ . '/mail-config.php',
    ];
    $docroot = realpath((string) ($_SERVER['DOCUMENT_ROOT'] ?? '')) ?: '';
    $fallback = null;

    foreach ($candidates as $path) {
        if (!is_file($path)) {
            continue;
        }

        $real = realpath($path);
        if ($real === false) {
            continue;
        }

        $config = require $real;
        if (!is_array($config)) {
            continue;
        }

        $underWebRoot = $docroot !== '' && str_starts_with($real, $docroot . DIRECTORY_SEPARATOR);
        if (!$underWebRoot) {
            return $config;
        }

        $fallback ??= $config;
    }

    if ($fallback === null) {
        throw new RuntimeException('mail-config.php was not found.');
    }

    return $fallback;
}

function mail_settings(array $config): array
{
    $settings = [
        'host' => trim((string) ($config['host'] ?? '')),
        'port' => (int) ($config['port'] ?? 465),
        'encryption' => strtolower(trim((string) ($config['encryption'] ?? 'ssl'))),
        'username' => trim((string) ($config['username'] ?? '')),
        'password' => (string) ($config['password'] ?? ''),
        'from_email' => trim((string) ($config['from_email'] ?? '')),
        'from_name' => trim((string) ($config['from_name'] ?? 'StyleAge')),
        'to_email' => trim((string) ($config['to_email'] ?? '')),
        'to_name' => trim((string) ($config['to_name'] ?? 'StyleAge')),
        'verify_ssl' => array_key_exists('verify_ssl', $config) ? (bool) $config['verify_ssl'] : true,
    ];

    $validHost = $settings['host'] === 'localhost'
        || filter_var($settings['host'], FILTER_VALIDATE_IP) !== false
        || (
            preg_match('/^[A-Za-z0-9.-]+$/', $settings['host']) === 1
            && !str_contains($settings['host'], '..')
        );

    if (
        !$validHost
        || $settings['port'] < 1
        || $settings['port'] > 65535
        || !in_array($settings['encryption'], ['ssl', 'tls', 'none'], true)
        || $settings['username'] === ''
        || $settings['password'] === ''
        || !valid_email($settings['from_email'])
        || !valid_email($settings['to_email'])
    ) {
        throw new RuntimeException('mail-config.php is incomplete.');
    }

    return $settings;
}

function valid_email(string $email): bool
{
    return !preg_match('/[\r\n]/', $email) && filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function clean_line(string $value, int $max): string
{
    $value = trim(str_replace(["\r", "\n"], ' ', $value));
    if (text_length($value) > $max) {
        $value = function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
    }

    return $value;
}

function clean_text(string $value, int $max): string
{
    $value = trim(str_replace("\r\n", "\n", $value));
    $value = str_replace("\r", "\n", $value);
    if (text_length($value) > $max) {
        $value = function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
    }

    return $value;
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

function same_origin(): bool
{
    $host = strtolower(preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? '')) ?? '');
    if ($host === '') {
        return false;
    }

    $origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
    if ($origin !== '') {
        $originHost = parse_url($origin, PHP_URL_HOST);

        return is_string($originHost) && strtolower($originHost) === $host;
    }

    $referer = (string) ($_SERVER['HTTP_REFERER'] ?? '');
    if ($referer !== '') {
        $refererHost = parse_url($referer, PHP_URL_HOST);

        return is_string($refererHost) && strtolower($refererHost) === $host;
    }

    return true;
}

function client_ip(): string
{
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');

    return filter_var($ip, FILTER_VALIDATE_IP) ? $ip : 'unknown';
}

function rate_limited(string $ip): bool
{
    $dir = sys_get_temp_dir() . '/styleage-consult';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false;
    }

    $file = $dir . '/' . hash('sha256', $ip);
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            foreach ($decoded as $timestamp) {
                if (is_int($timestamp) && $timestamp > $now - 900) {
                    $hits[] = $timestamp;
                }
            }
        }
    }

    if (count($hits) >= 8) {
        return true;
    }

    $hits[] = $now;
    @file_put_contents($file, json_encode($hits), LOCK_EX);

    return false;
}

function wants_json(): bool
{
    $accept = strtolower((string) ($_SERVER['HTTP_ACCEPT'] ?? ''));
    $contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));

    return str_contains($accept, 'application/json') || str_contains($contentType, 'application/json');
}

function respond(bool $ok, string $error, int $status, array $fields = []): void
{
    http_response_code($status);
    header('X-Content-Type-Options: nosniff');

    if (wants_json()) {
        header('Content-Type: application/json; charset=UTF-8');
        $payload = ['ok' => $ok];
        if (!$ok) {
            $payload['error'] = $error;
        }
        if ($fields !== []) {
            $payload['fields'] = $fields;
        }
        echo json_encode($payload, JSON_UNESCAPED_UNICODE);
        exit;
    }

    header('Content-Type: text/html; charset=UTF-8');
    $title = $ok ? 'Request received' : 'Request not sent';
    $message = $ok
        ? 'Thank you. The clinic will reply on the phone number you gave.'
        : $error;
    echo '<!DOCTYPE html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'
        . e($title)
        . '</title><body style="margin:0;background:#f6f3ee;color:#241c16;font:18px/1.5 Georgia,serif"><main style="max-width:36rem;margin:4rem auto;padding:0 1.5rem"><h1 style="font-weight:500">'
        . e($title)
        . '</h1><p>'
        . e($message)
        . '</p><p><a href="/">Back to StyleAge</a></p></main></body></html>';
    exit;
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
