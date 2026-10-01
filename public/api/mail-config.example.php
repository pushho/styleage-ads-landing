<?php

/**
 * Copy this file to one of these locations and fill in a real mailbox:
 *
 * 1. Preferred: /home/USERNAME/mail-config.php
 *    (one level above public_html, so the password is not on the website)
 * 2. Fallback: public_html/api/mail-config.php
 *    (use this only if the host blocks reading files outside public_html)
 *
 * In cPanel, create the mailbox under Email Accounts. The From address has to
 * be that same mailbox. Port 465 uses ssl. Port 587 uses tls.
 * localhost is fine when the site and mailbox are on this server.
 */

if (realpath((string) ($_SERVER['SCRIPT_FILENAME'] ?? '')) === __FILE__) {
    http_response_code(404);
    exit;
}

return [
    'host' => 'localhost',
    'port' => 465,
    'encryption' => 'ssl',
    'username' => 'consults@yourdomain.com',
    'password' => 'mailbox-password',
    'from_email' => 'consults@yourdomain.com',
    'from_name' => 'StyleAge',
    'to_email' => 'styleagewhatsapp@gmail.com',
    'to_name' => 'StyleAge',
    'verify_ssl' => true,
];
