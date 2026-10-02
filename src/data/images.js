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
export const heroDark = entry('hero/hero-dark', {
  alt: 'Monolithic dark glass sculptural structure connected by glowing orange light filaments — representing an intelligent system',
  fallback: 'gradient-dark',
});
export const heroLight = entry('hero/hero-light', {
  alt: 'Warm white-studio version of the hero sculptural structure — representing the same intelligent system in a light environment',
  fallback: 'gradient-light',
});
export const heroMobileDark = entry('hero/hero-mobile-dark', {
  alt: 'Vertical composition of the dark glass sculptural structure with orange light network — for mobile hero display',
  fallback: 'gradient-dark',
});
export const heroMobileLight = entry('hero/hero-mobile-light', {
  alt: 'Vertical composition of the light studio glass sculpture — for mobile hero display in light mode',
  fallback: 'gradient-light',
});

// ── Services ─────────────────────────────────────────────────────────────────
export const aiAgents = entry('services/ai-agents', {
  alt: 'Glowing orange AI core sphere connected to smaller glass nodes via light paths, representing AI agents running business workflows',
  fallback: 'gradient-orange',
});
export const softwareDevelopment = entry('services/software-development', {
  alt: 'Stacked dark glass interface panels in perspective with an orange-lit active panel, representing modular software development',
  fallback: 'gradient-dark',
});
export const mobileApp = entry('services/mobile-app', {
  alt: 'Two dark smartphones on a matte plinth with abstract blurred app UI and orange accents, representing mobile app development',
  fallback: 'gradient-dark',
});
export const cloudSolutions = entry('services/cloud-solutions', {
  alt: 'Translucent server-slab tower with vertical light streams rising through mist, representing scalable cloud infrastructure',
  fallback: 'gradient-dark',
});
export const digitalTransformation = entry('services/digital-transformation', {
  alt: 'Scattered elements on the left transitioning to a neat glowing orange grid on the right, representing digital transformation',
  fallback: 'gradient-dark',
});
export const mvpDevelopment = entry('services/mvp-development', {
  alt: 'Rough clay prototype next to a polished metal object on a dark pedestal, representing the MVP development iteration process',
  fallback: 'gradient-dark',
});
export const ecommerce = entry('services/ecommerce', {
  alt: 'Premium dark product boxes and shopping bag on stone steps with an orange light trail, representing e-commerce solutions',
  fallback: 'gradient-dark',
});
export const industrySolutions = entry('services/industry-solutions', {
  alt: 'Three abstract miniature scale models (factory, clinic, building) with orange rim light, representing industry-specific solutions',
  fallback: 'gradient-dark',
});

// ── AI section + CTA ─────────────────────────────────────────────────────────
export const aiCoreWide = entry('ai/ai-core-wide', {
  alt: 'Vast dark space with a central glowing orange core and concentric orbit rings, representing AI intelligence at scale',
  fallback: 'gradient-dark',
});
export const ctaRibbon = entry('cta/cta-ribbon', {
  alt: 'Flowing ribbon of soft orange light curving through deep darkness — decorative CTA section background',
  fallback: 'gradient-orange',
});
export const introWide = entry('intro/intro-wide', {
  alt: 'Macro view of dark brushed-metal surface with circuit grooves and an orange light line — representing engineering precision',
  fallback: 'gradient-dark',
});

// ── 404 ──────────────────────────────────────────────────────────────────────
export const notFound = entry('cta/not-found', {
  alt: 'A single small glowing node alone in a vast dark empty space — representing a page not found',
  fallback: 'gradient-dark',
});

// ── OG background ────────────────────────────────────────────────────────────
export const ogBg = entry('og/og-bg', {
  alt: 'Simplified hero sculptural structure on the right with dark empty space on the left — Open Graph image background',
  focal: '70% 50%',
  fallback: 'gradient-dark',
});

// ── Projects (placeholders) ───────────────────────────────────────────────────
export const project01 = entry('projects/project-01', {
  alt: 'Abstract dashboard on a dark laptop — placeholder image for an upcoming case study',
  fallback: 'gradient-dark',
});
export const project02 = entry('projects/project-02', {
  alt: 'Single floating phone with abstract app UI and orange rim light — placeholder for an upcoming project',
  fallback: 'gradient-dark',
});
export const project03 = entry('projects/project-03', {
  alt: 'Tablet on dark fabric with abstract blurred interface — placeholder for an upcoming project',
  fallback: 'gradient-dark',
});
export const project04 = entry('projects/project-04', {
  alt: 'Wide monitor and keyboard on a dark minimal desk with abstract web interface — placeholder for an upcoming project',
  fallback: 'gradient-dark',
});
export const project05 = entry('projects/project-05', {
  alt: 'Wearable device and phone side by side with abstract UI glow — placeholder for an upcoming project',
  fallback: 'gradient-dark',
});
export const project06 = entry('projects/project-06', {
  alt: 'Floating glass browser panel in fog with abstract layout blocks — placeholder for an upcoming project',
  fallback: 'gradient-dark',
});

// ── Industries ────────────────────────────────────────────────────────────────
export const industryManufacturing = entry('industries/manufacturing', {
  alt: 'Dark modern factory floor with precise machinery and warm orange indicator lights — representing manufacturing ERP solutions',
  fallback: 'gradient-dark',
});
export const industryHealthcare = entry('industries/healthcare', {
  alt: 'Calm clinic corridor at night with a tablet showing abstract UI — representing healthcare systems',
  fallback: 'gradient-dark',
});
export const industryRealEstate = entry('industries/real-estate', {
  alt: 'Modern minimal building facade at blue hour with warm lit windows — representing real estate and PropTech solutions',
  fallback: 'gradient-dark',
});
export const industryEcommerce = entry('industries/ecommerce', {
  alt: 'Neatly stacked shipping boxes on a softly lit conveyor in a dark warehouse — representing e-commerce operations',
  fallback: 'gradient-dark',
});
export const industryStartups = entry('industries/startups', {
  alt: 'Top-down view of a dark desk with sketches and a prototype device — representing early-stage startup solutions',
  fallback: 'gradient-dark',
});
export const industryGrowingBusiness = entry('industries/growing-business', {
  alt: 'Wide dark modern workspace with glowing screens in the evening — representing growing business solutions',
  fallback: 'gradient-dark',
});

// ── About ─────────────────────────────────────────────────────────────────────
export const aboutStudio = entry('about/studio', {
  alt: 'Quiet premium studio desk at dusk with a lamp, notebook and ceramic objects — representing the Code Kompany studio environment',
  fallback: 'gradient-dark',
});
export const aboutMindset = entry('about/mindset', {
  alt: 'Single glass prism splitting a light beam into fine orange light lines — representing clear, focused thinking',
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
  heroDark, heroLight, heroMobileDark, heroMobileLight,
  aiAgents, softwareDevelopment, mobileApp, cloudSolutions,
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
