/**
 * images.js — Central image manifest for Code Kompany.
 *
 * Every component gets images ONLY from this file.
 * Generated dimensions + LQIP come from images.generated.json (created by `npm run images`).
 * Alt text, focal points and fallback names are curated here by hand.
 *
 * To replace an image: put a new file in /raw-images/<folder>/, then run `npm run images`.
 * To add a new image: add the raw file, run `npm run images`, then add an entry below.
 * To change alt text or focal points: edit this file only.
 */

// Auto-generated data (dimensions + LQIP). Created by `npm run images`.
// Falls back to empty object if the file doesn't exist yet (before first image run).
import generatedRaw from './images.generated.json';
const generated = generatedRaw ?? {};

/**
 * Build a complete image entry by merging generated data with hand-curated metadata.
 * @param {string} rawKey   - matches the key in images.generated.json, e.g. "hero/hero-dark"
 * @param {object} meta     - { alt, focal?, fallback? }
 */
function entry(rawKey, meta) {
  const gen = generated[rawKey] ?? {};
  return {
    key:         rawKey,
    base:        `/images/${rawKey}`,   // e.g. /images/hero/hero-dark
    widths:      gen.widths      ?? [],
    width:       gen.width       ?? null,
    height:      gen.height      ?? null,
    aspectRatio: gen.aspectRatio ?? null,
    lqip:        gen.lqip        ?? null,
    alt:         meta.alt,
    focal:       meta.focal      ?? '50% 50%',
    fallback:    meta.fallback   ?? 'gradient-dark',
  };
}

/* ==========================================================================
   IMAGE ENTRIES
   ========================================================================== */

// ── Hero ─────────────────────────────────────────────────────────────────────
// Sources and credits for the stock photos: scripts/image-sources.json
export const heroDark = entry('hero/hero-dark', {
  alt: 'Minimal dark workspace at night with a desk lamp lighting a monitor, keyboard and laptop',
  focal: '60% 55%',
  fallback: 'gradient-dark',
});
export const heroMobileDark = entry('hero/hero-mobile-dark', {
  alt: 'Desktop monitor and laptop both showing source code in a code editor',
  focal: '50% 45%',
  fallback: 'gradient-dark',
});

// ── Services ─────────────────────────────────────────────────────────────────
export const aiAgents = entry('services/ai-agents', {
  alt: 'Person mapping an automated customer workflow on a whiteboard, with trigger, delay and follow-up steps',
  focal: '45% 25%',
  fallback: 'gradient-orange',
});
export const softwareDevelopment = entry('services/software-development', {
  alt: 'Laptop showing application source code in a code editor',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const websiteDevelopment = entry('services/website-development', {
  alt: 'Laptop displaying a product website, with a smartphone, notebook and coffee mug on the desk',
  focal: '40% 40%',
  fallback: 'gradient-dark',
});
export const mobileApp = entry('services/mobile-app', {
  alt: 'Hand holding a smartphone running a dashboard-style mobile app, with interface designs on screens behind',
  focal: '45% 50%',
  fallback: 'gradient-dark',
});
export const cloudSolutions = entry('services/cloud-solutions', {
  alt: 'Server racks with network cabling and status lights in a data centre',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const digitalTransformation = entry('services/digital-transformation', {
  alt: 'Hand connecting process steps on a systems board covered with workflow diagrams',
  focal: '40% 50%',
  fallback: 'gradient-dark',
});
export const mvpDevelopment = entry('services/mvp-development', {
  alt: 'Hand sketching app wireframes and user-flow arrows on paper',
  focal: '55% 50%',
  fallback: 'gradient-dark',
});
export const ecommerce = entry('services/ecommerce', {
  alt: 'Person holding a payment card while checking out online on a laptop',
  focal: '45% 15%',
  fallback: 'gradient-dark',
});
export const industrySolutions = entry('services/industry-solutions', {
  alt: 'Engineer working on a laptop beside an automated test rig in an engineering lab',
  focal: '55% 60%',
  fallback: 'gradient-dark',
});

// ── AI section + CTA ─────────────────────────────────────────────────────────
export const aiCoreWide = entry('ai/ai-core-wide', {
  alt: 'Analytics dashboard with time-series charts and distribution graphs on a dark screen',
  focal: '50% 75%',
  fallback: 'gradient-dark',
});
export const ctaRibbon = entry('cta/cta-ribbon', {
  alt: 'City lights stretching to the horizon at night',
  focal: '50% 55%',
  fallback: 'gradient-orange',
});
export const introWide = entry('intro/intro-wide', {
  alt: 'Close-up of Python source code on a monitor',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});

// ── 404 (not currently rendered — NotFound uses GenerativeVisual) ────────────
export const notFound = entry('cta/not-found', {
  alt: 'Dark minimalist studio workspace — representing page not found',
  fallback: 'gradient-dark',
});

// ── OG background ────────────────────────────────────────────────────────────
export const ogBg = entry('og/og-bg', {
  alt: 'Minimal dark workspace at night with a desk lamp and monitor',
  focal: '70% 50%',
  fallback: 'gradient-dark',
});

// ── Projects (placeholder covers) ─────────────────────────────────────────────
// Illustrative stock photography only, NOT client work. Replace with real
// project screenshots when each case study is published.
export const project01 = entry('projects/project-01', {
  alt: 'Hand-drawn watercolour website wireframes — illustrative cover, case study coming soon',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const project02 = entry('projects/project-02', {
  alt: 'Smartphone and laptop showing mobile app screens — illustrative cover, case study coming soon',
  focal: '55% 50%',
  fallback: 'gradient-dark',
});
export const project03 = entry('projects/project-03', {
  alt: 'Person planning a quarterly product roadmap with sticky notes on a glass wall — illustrative cover, case study coming soon',
  focal: '35% 40%',
  fallback: 'gradient-dark',
});
export const project04 = entry('projects/project-04', {
  alt: 'Desktop monitor showing a grid of mobile interface designs — illustrative cover, case study coming soon',
  focal: '45% 50%',
  fallback: 'gradient-dark',
});
export const project05 = entry('projects/project-05', {
  alt: 'Hand holding a smartphone showing an app onboarding screen in front of interface designs — illustrative cover, case study coming soon',
  focal: '45% 45%',
  fallback: 'gradient-dark',
});
export const project06 = entry('projects/project-06', {
  alt: 'Angled view of source code on a monitor — illustrative cover, case study coming soon',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});

// ── Industries ────────────────────────────────────────────────────────────────
export const industryManufacturing = entry('industries/manufacturing', {
  alt: 'Automated production line with a touchscreen machine control panel on a factory floor',
  focal: '32% 55%',
  fallback: 'gradient-dark',
});
export const industryHealthcare = entry('industries/healthcare', {
  alt: 'Clinician in a white coat with a stethoscope using a smartphone',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const industryRealEstate = entry('industries/real-estate', {
  alt: 'Looking up at modern glass high-rise towers',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const industryEcommerce = entry('industries/ecommerce', {
  alt: 'Fulfilment warehouse with long rows of shelving stocked with parcels',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const industryStartups = entry('industries/startups', {
  alt: 'Team mapping a customer journey with sticky notes on a large sheet of paper',
  focal: '50% 45%',
  fallback: 'gradient-dark',
});
export const industryGrowingBusiness = entry('industries/growing-business', {
  alt: 'Business owner managing bookings on a tablet at a reception desk',
  focal: '65% 55%',
  fallback: 'gradient-dark',
});

// ── About ─────────────────────────────────────────────────────────────────────
// Stock photography. Replace with genuine photos of the Code Kompany studio and team when available.
export const aboutStudio = entry('about/studio', {
  alt: 'Warm-lit software workstation with two monitors showing code',
  focal: '50% 50%',
  fallback: 'gradient-dark',
});
export const aboutMindset = entry('about/mindset', {
  alt: 'Two people sketching a product plan and user flow on a whiteboard',
  focal: '55% 45%',
  fallback: 'gradient-dark',
});

/* ==========================================================================
   HELPER FUNCTIONS
   ========================================================================== */

/**
 * All entries as a keyed object for programmatic access.
 * Useful for the /dev/images review page.
 */
export const allImages = {
  heroDark, heroMobileDark,
  aiAgents, softwareDevelopment, websiteDevelopment, mobileApp, cloudSolutions,
  digitalTransformation, mvpDevelopment, ecommerce, industrySolutions,
  aiCoreWide, ctaRibbon, introWide, notFound, ogBg,
  project01, project02, project03, project04, project05, project06,
  industryManufacturing, industryHealthcare, industryRealEstate,
  industryEcommerce, industryStartups, industryGrowingBusiness,
  aboutStudio, aboutMindset,
};

/**
 * Get an image entry by its friendly key name.
 * Returns null if the key doesn't exist in allImages.
 */
export function getImage(key) {
  return allImages[key] ?? null;
}

/**
 * Build a srcset string from an image entry.
 * e.g. "/images/hero/hero-dark-640.webp 640w, /images/hero/hero-dark-1024.webp 1024w"
 */
export function buildSrcSet(imageEntry) {
  if (!imageEntry?.widths?.length) return '';
  return imageEntry.widths
    .map(w => `${imageEntry.base}-${w}.webp ${w}w`)
    .join(', ');
}

/**
 * Get the closest available file src to the preferred width.
 */
export function getSrc(imageEntry, preferredWidth = 1600) {
  if (!imageEntry?.widths?.length) return '';
  const w = imageEntry.widths.reduce((prev, curr) =>
    Math.abs(curr - preferredWidth) < Math.abs(prev - preferredWidth) ? curr : prev
  );
  return `${imageEntry.base}-${w}.webp`;
}
