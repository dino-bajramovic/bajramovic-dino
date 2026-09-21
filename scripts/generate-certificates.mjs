/**
 * One-off generator for certificate thumbnail SVGs used in the Certifications
 * section. Recreates the visual layout of the source PDF certificates
 * (Anthropic "Certificate of Completion" + course-provider
 * "Certificate of Achievement" templates) as lightweight, crisp SVGs.
 *
 * Run with: node scripts/generate-certificates.mjs
 */
import { mkdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'certificates');
mkdirSync(OUT_DIR, { recursive: true });

const NAME = 'Dino Bajramovic';
const W = 1237;
const H = 950;

const escapeXml = (str) =>
  String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Wrap a title into up to 2 lines around a target character width.
function wrapTitle(title, maxCharsPerLine) {
  const words = title.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

/**
 * Anthropic-style "Certificate of Completion" badge.
 */
function anthropicCertificate({ title, bg = '#6b93c9', dark = false }) {
  const textColor = '#1c1c1c';
  const lines = wrapTitle(title, 22);
  const titleFontSize = 54;
  const titleStartY = 520;
  const lineHeight = 66;

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${titleStartY + i * lineHeight}" text-anchor="middle" font-family="'Poppins','Segoe UI',sans-serif" font-weight="700" font-size="${titleFontSize}" fill="${textColor}">${escapeXml(
          line
        )}</text>`
    )
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${bg}"/>
  <rect x="36" y="36" width="${W - 72}" height="${H - 72}" fill="none" stroke="${textColor}" stroke-opacity="0.08" stroke-width="1"/>

  <!-- badge pill -->
  <g transform="translate(280, 150)">
    <rect x="0" y="0" width="676" height="80" rx="40" fill="${dark ? '#ffffff10' : 'none'}" stroke="${textColor}" stroke-width="2"/>
    <circle cx="55" cy="40" r="24" fill="#ffffff"/>
    <path d="M43 40 L52 49 L69 30" stroke="${textColor}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="100" y="49" font-family="'Poppins','Segoe UI',sans-serif" font-weight="700" font-size="27" letter-spacing="2" fill="${textColor}">CERTIFICATE of COMPLETION</text>
  </g>

  <text x="50%" y="400" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="${textColor}">${escapeXml(NAME)}</text>
  <text x="50%" y="450" text-anchor="middle" font-family="Georgia, serif" font-size="26" fill="${textColor}" fill-opacity="0.75">has completed</text>

  ${titleLines}

  <text x="50%" y="836" text-anchor="middle" font-family="'Poppins','Segoe UI',sans-serif" font-weight="800" font-size="30" letter-spacing="1" fill="${textColor}">ANTHROP\\C</text>
</svg>`;
}

/**
 * Course-provider "Certificate of Achievement" badge (phishing / security
 * awareness training template).
 */
function achievementCertificate({ title, duration, date }) {
  const accent = '#ef7f1a';
  const gray = '#8a8a8a';
  const dark = '#1a1a1a';
  const lines = wrapTitle(title, 34);
  const titleFontSize = 46;
  const titleStartY = 700;

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${titleStartY + i * 56}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="${titleFontSize}" fill="${dark}">${escapeXml(
          line
        )}</text>`
    )
    .join('\n');
  const metaY = titleStartY + lines.length * 56 + 48;

  const corner = (x, y, rotate) => `
  <g transform="translate(${x}, ${y}) rotate(${rotate})">
    <path d="M0 60 A60 60 0 0 1 60 0" fill="none" stroke="#c9c9c9" stroke-width="3"/>
    <circle cx="18" cy="18" r="13" fill="none" stroke="#c9c9c9" stroke-width="2.5"/>
    <path d="M13 18v-4a5 5 0 0 1 10 0v4" fill="none" stroke="#c9c9c9" stroke-width="2"/>
    <rect x="10" y="17" width="16" height="11" rx="2" fill="#c9c9c9"/>
  </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="40" y="40" width="${W - 80}" height="${H - 80}" fill="#fbfbfb" stroke="#c9c9c9" stroke-width="3"/>

  ${corner(70, 70, 0)}
  ${corner(W - 130, 70, 90)}
  ${corner(70, H - 130, -90)}
  ${corner(W - 130, H - 130, 180)}

  <g transform="translate(${W / 2}, 165)">
    <circle r="72" fill="${accent}"/>
    <circle r="72" fill="none" stroke="${accent}" stroke-width="10" stroke-dasharray="6 6" opacity="0.6"/>
    <g fill="#ffffff" transform="translate(-22,-24)">
      <path d="M4 4h36v10a18 18 0 0 1-36 0V4z" fill="none" stroke="#ffffff" stroke-width="3"/>
      <path d="M4 8H-6a10 10 0 0 0 10 14" fill="none" stroke="#ffffff" stroke-width="3"/>
      <path d="M40 8h10a10 10 0 0 1-10 14" fill="none" stroke="#ffffff" stroke-width="3"/>
      <rect x="18" y="32" width="8" height="12" fill="#ffffff"/>
      <rect x="10" y="44" width="24" height="8" rx="2" fill="#ffffff"/>
    </g>
  </g>

  <text x="50%" y="330" text-anchor="middle" font-family="'Poppins','Segoe UI',sans-serif" font-weight="800" font-size="58" letter-spacing="2" fill="${accent}">CERTIFICATE OF ACHIEVEMENT</text>

  <text x="50%" y="400" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="24" letter-spacing="3" fill="${gray}">PRESENTED TO</text>

  <text x="50%" y="480" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="66" fill="${dark}">${escapeXml(NAME)}</text>
  <line x1="${W / 2 - 320}" y1="510" x2="${W / 2 + 320}" y2="510" stroke="#d5d5d5" stroke-width="2"/>

  <text x="50%" y="570" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="22" letter-spacing="2" fill="${gray}">FOR THE SUCCESSFUL COMPLETION OF</text>

  ${titleLines}

  <text x="50%" y="${metaY}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="24" fill="${gray}">DURATION: ${escapeXml(duration.toUpperCase())}</text>
  <text x="50%" y="${metaY + 48}" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="24" fill="${gray}">${escapeXml(date.toUpperCase())}</text>
</svg>`;
}

const certs = [
  {
    file: 'claude-code-in-action.svg',
    svg: anthropicCertificate({ title: 'Claude Code in Action', bg: '#7c9463' }),
  },
  {
    file: 'claude-anthropic-api.svg',
    svg: anthropicCertificate({ title: 'Claude with the Anthropic API', bg: '#6b93c9' }),
  },
  {
    file: 'intro-model-context-protocol.svg',
    svg: anthropicCertificate({ title: 'Introduction to Model Context Protocol', bg: '#b7ccc0' }),
  },
  {
    file: 'intro-agent-skills.svg',
    svg: anthropicCertificate({ title: 'Introduction to agent skills', bg: '#6b93c9' }),
  },
  {
    file: 'advanced-anti-phishing.svg',
    svg: achievementCertificate({ title: 'Advanced Anti-Phishing', duration: '8 minutes', date: 'June 26, 2026' }),
  },
  {
    file: 'spot-the-red-flag.svg',
    svg: achievementCertificate({ title: 'Spot the Red Flag', duration: '4 minutes', date: 'June 26, 2026' }),
  },
  {
    file: 'phishing-email-flooding.svg',
    svg: achievementCertificate({ title: 'Phishing and Email Flooding', duration: '2 minutes', date: 'June 26, 2026' }),
  },
  {
    file: 'using-qr-codes-safely.svg',
    svg: achievementCertificate({ title: 'Using QR Codes Safely', duration: '2 minutes', date: 'June 26, 2026' }),
  },
  {
    file: 'password-breaches-guide.svg',
    svg: achievementCertificate({ title: 'A Guide To Dealing With Password Breaches', duration: '6 minutes', date: 'June 26, 2026' }),
  },
  {
    file: 'the-art-of-phishing.svg',
    svg: achievementCertificate({ title: 'The Art of Phishing', duration: '2 minutes', date: 'June 25, 2026' }),
  },
];

for (const { file, svg } of certs) {
  writeFileSync(path.join(OUT_DIR, file), svg, 'utf8');
  console.log('wrote', file);
}
