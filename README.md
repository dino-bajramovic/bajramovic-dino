# Dino Bajramovic — Portfolio

Modern React + Vite portfolio with sections Hero, About, Skills, Experience, Work, Certifications, and Contact. Tailwind utility classes, GSAP animations, and Lenis smooth scroll are used. Contact submissions are emailed via Resend; there is no database.

## Local setup
1. `npm install`
2. Create `.env` with:
   ```
   VITE_API_URL=http://localhost:5000
   VITE_SITE_URL=http://localhost:5173
   VITE_GSC_VERIFICATION=   # optional, Search Console meta
   ```
3. Run frontend: `npm run dev`
4. Run backend (Express) if you use the local API: `npm run server`

## Build and preview
- Build: `npm run build`
- Preview build: `npm run preview`

## Deploy (short)
- Set production URLs in `.env` (`VITE_SITE_URL`, `VITE_GSC_VERIFICATION` optional). `VITE_API_URL` can stay empty because the FE calls `/api` on the same host.
- Update `public/robots.txt` and `public/sitemap.xml` to the correct domain.
- For Render/Netlify/Vercel:
  - Build command: `npm run build`
  - Publish dir: `dist`
  - Backend (if separate): deploy the Express server (`npm run server`) and set `RESEND_API_KEY`.

### Vercel (FE + serverless API in the same repo)
- One function lives under `api/`: `contact.js`, which emails the submission through Resend (`api/_email.js`).
- Set env vars in Vercel Dashboard:
  - `RESEND_API_KEY=<key from resend.com>`
  - `VITE_SITE_URL=https://your-domain`
  - Optional: `CONTACT_TO_EMAIL` (recipient), `CONTACT_FROM_EMAIL` (needs a domain verified in Resend), `VITE_GSC_VERIFICATION`, `VITE_API_URL` (can be empty).
- Build command: `npm run build`; Output dir: `dist`.

## Contact form
- Submissions are emailed, not stored. Reply-to is set to the sender, so replying from your inbox answers them directly.
- Without `RESEND_API_KEY` the endpoint returns 500 and logs the reason; nothing else depends on it.

## SEO
- React Helmet meta (title, description, keywords, canonical, OG/Twitter), JSON-LD (Person/Organization/WebSite), `robots.txt`, `sitemap.xml`, descriptive alts, canonical from `VITE_SITE_URL`. After deploy, run Lighthouse SEO and save the report.

## Download CV
- `public/files/dino-bajramovic-cv.pdf` is served directly; the Hero “Download CV” button downloads it.
