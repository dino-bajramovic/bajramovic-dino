import { sendContactEmail } from './_email.js';

const MAX_MESSAGE = 1000;
const ALLOWED_ORIGINS = ['https://www.dinobajramovic.com', 'https://dinobajramovic.com'];

const parseBody = (req) => {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body || '{}');
    } catch {
      return {};
    }
  }
  return req.body;
};

function applyCors(req, res) {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }

  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, email, message } = parseBody(req);
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }

  const trimmedMessage = String(message).trim();
  if (trimmedMessage.length > MAX_MESSAGE) {
    return res
      .status(400)
      .json({ success: false, error: `Message is too long (max ${MAX_MESSAGE} characters).` });
  }

  try {
    const { sent } = await sendContactEmail({
      name: String(name).trim(),
      email: String(email).trim(),
      message: trimmedMessage,
    });

    if (!sent) {
      console.error('Contact email skipped: RESEND_API_KEY is not set');
      return res.status(500).json({ success: false, error: 'Server error' });
    }

    return res.status(201).json({ success: true });
  } catch (e) {
    console.error('Contact email failed:', e);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
