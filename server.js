/**
 * Express backend for local development: serves the built site and handles
 * contact submissions. Submissions are emailed, not stored.
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';

import { sendContactEmail } from './api/_email.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 4000;
const isProduction = process.env.NODE_ENV === 'production';
const MAX_MESSAGE = 1000;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by');
app.enable('trust proxy');

app.use((req, res, next) => {
  const hostname = (req.hostname || '').toLowerCase();
  const originalHost = req.headers.host;
  const protoHeader = req.get('x-forwarded-proto');
  const proto = protoHeader || (req.secure ? 'https' : 'http');
  const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';

  if (!isLocal && proto === 'http' && originalHost) {
    return res.redirect(301, `https://${originalHost}${req.originalUrl}`);
  }

  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

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
    const { sent, reason } = await sendContactEmail({
      name: String(name).trim(),
      email: String(email).trim(),
      message: trimmedMessage,
    });

    if (!sent) {
      console.error('Contact email skipped:', reason);
      return res.status(500).json({ success: false, error: 'Server error' });
    }

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error('Contact email failed:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '30d',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    }
  }
}));

// Custom 404 for API and web requests
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ success: false, error: 'Route not found' });
  }

  const notFoundPage = path.join(__dirname, 'dist', '404.html');
  res.status(404).sendFile(notFoundPage);
});

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && !isProduction) {
      const nextPort = port + 1;
      console.warn(`Port ${port} in use. Trying ${nextPort}...`);
      startServer(nextPort);
    } else {
      throw err;
    }
  });
};

startServer(DEFAULT_PORT);
