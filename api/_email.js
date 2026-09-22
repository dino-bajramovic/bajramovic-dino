/**
 * Contact notifications via Resend.
 *
 * Email is the only delivery path for contact submissions - nothing is stored
 * server side, so the inbox is the record.
 */

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

// onboarding@resend.dev works without a verified domain and can only deliver
// to the Resend account owner's address. Swap both of these once
// dinobajramovic.com is verified in Resend.
const DEFAULT_FROM = 'Portfolio <onboarding@resend.dev>';
const DEFAULT_TO = 'dinobajramovic01@gmail.com';

const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char]
  );

const buildHtml = ({ name, email, message, receivedAt }) => `
  <div style="font-family:Inter,system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#18181b">
    <h2 style="margin:0 0 4px;font-size:18px">New portfolio inquiry</h2>
    <p style="margin:0 0 20px;color:#71717a;font-size:13px">${escapeHtml(receivedAt)}</p>

    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr>
        <td style="padding:8px 0;color:#71717a;width:80px;vertical-align:top">Name</td>
        <td style="padding:8px 0"><strong>${escapeHtml(name)}</strong></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#71717a;vertical-align:top">Email</td>
        <td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#0284c7">${escapeHtml(email)}</a></td>
      </tr>
    </table>

    <p style="margin:20px 0 8px;color:#71717a;font-size:14px">Message</p>
    <div style="white-space:pre-wrap;background:#f4f4f5;border-radius:12px;padding:16px;font-size:14px;line-height:1.6">${escapeHtml(message)}</div>

    <p style="margin:24px 0 0;color:#a1a1aa;font-size:12px">
      Reply directly to this email to answer ${escapeHtml(name)}.
    </p>
  </div>
`;

const buildText = ({ name, email, message, receivedAt }) =>
  `New portfolio inquiry (${receivedAt})\n\nName: ${name}\nEmail: ${email}\n\n${message}\n`;

/**
 * Sends the notification. Returns { sent: false } when no API key is
 * configured (local development), and throws when Resend rejects the call.
 */
export async function sendContactEmail({ name, email, message }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false, reason: 'RESEND_API_KEY is not set' };
  }

  const payload = {
    name,
    email,
    message,
    receivedAt: new Date().toUTCString(),
  };

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: [process.env.CONTACT_TO_EMAIL || DEFAULT_TO],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      html: buildHtml(payload),
      text: buildText(payload),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend responded ${response.status}: ${detail}`);
  }

  return { sent: true };
}
