# Dino Bajramovic — Portfolio

Modern React + Vite portfolio with sections Hero, About, Skills, Work, Certifications, Contact, and Admin panel (for managing submissions). Tailwind utility classes, GSAP animations, and Lenis smooth scroll are used.

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
  - Backend (if separate): deploy Express server (`npm run server`) and set admin key/DB vars.

### Vercel (FE + serverless API in the same repo)
- Functions live under `api/` (contact, submissions list, submissions id, health).
- Set env vars in Vercel Dashboard:
  - `MONGO_URI`, `MONGO_DB=portfolioDB`, `ADMIN_KEY=<your_key>`
  - `VITE_SITE_URL=https://your-domain` (and `CANONICAL_HOST=your-domain` if you want forced redirect)
  - Optional: `VITE_GSC_VERIFICATION`, `VITE_API_URL` (can be empty).
- `vercel.json` rewrites: `/api/*` goes to functions, everything else to `index.html` (SPA).
- Build command: `npm run build`; Output dir: `dist`.

## Admin panel
- Access via header. Enter admin key and click Login/Refresh. Without the key, submissions are hidden.

## SEO
- React Helmet meta (title, description, keywords, canonical, OG/Twitter), JSON-LD (Person/Organization/WebSite), `robots.txt`, `sitemap.xml`, descriptive alts, canonical from `VITE_SITE_URL`. After deploy, run Lighthouse SEO and save the report.

## Download CV
- `public/files/dino-bajramovic-cv.pdf` is served directly; the Hero “Download CV” button downloads it.
