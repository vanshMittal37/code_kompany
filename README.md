# Code Kompany Website

Premium website for **Code Kompany** (Sahayoga Tech Pvt Ltd) — an AI-native software studio based in Vadodara, India.

## Tech Stack

- React 18 + Vite
- React Router v6 (SPA)
- EmailJS (contact form)
- CSS custom properties (no Tailwind / UI kits)
- Manrope Variable + JetBrains Mono (self-hosted via Fontsource)

## Getting Started

```bash
cp .env.example .env.local   # Fill in your EmailJS credentials
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deployment

Configured for both **Vercel** (`vercel.json`) and **Netlify** (`public/_redirects`).

## Project Structure

See `/docs/PROJECT_BRIEF.md` for full project context and design rules.

## Images

Images are generated with the art direction defined in `/docs/IMAGE_GUIDE.md`.

The pipeline:
1. Raw originals live in `/raw-images/<folder>/<name>.png`
2. `npm run images` converts them to multi-width `.webp` files in `/public/images/` and writes `/src/data/images.generated.json`
3. `/src/data/images.js` is the single manifest all components use

**To replace an image:** Put a new file with the same name in `/raw-images/<folder>/`, then run `npm run images`.

**To add a new image:** Add the raw file to `/raw-images/<folder>/`, run `npm run images`, then add an entry in `/src/data/images.js`.

**To change alt text or focal points:** Edit `/src/data/images.js` only.

**To regenerate the OG image:** Run `npm run og` (after placing `og-bg.png` in `/raw-images/og/`).

**Dev image review:** Visit `/dev/images` in development (`npm run dev`) to see all images, dimensions, LQIP placeholders and MISSING indicators.
