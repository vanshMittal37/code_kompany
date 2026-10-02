# Code Kompany — Image Guide & Art Direction

> Re-read this guide before generating, replacing or adding any image to the project.

---

## House Style

Append the following text verbatim to EVERY image prompt (except hero-light, which has a noted modification):

> "Cinematic premium editorial image, dark charcoal and near-black matte environment, soft directional studio lighting, a single warm signal-orange accent light (#FF5A1F) as a glow or thin light lines, subtle film grain, shallow depth of field, minimal composition with generous negative space, main subject centred with safe margins, high detail, photorealistic 3D render or editorial photograph, muted desaturated palette, no text, no letters, no numbers, no logos, no watermarks, no recognisable human faces, no humanoid robots, no cartoon or illustration style, no busy background."

**hero-light exception:** Replace "dark charcoal and near-black matte environment" with "warm off-white paper studio environment".

---

## Consistency Rules

- Same lighting mood, same orange accent (#FF5A1F), same film grain and same dark palette in every image.
- Tech/service concepts are abstract 3D objects (glass, ceramic, brushed metal, matte panels, light filaments).
- Industry scenes are moody editorial photography of empty or anonymous spaces (no people, or only distant unrecognisable silhouettes).
- Keep the main subject CENTRED with important detail inside the middle 60%, so each image can crop to 21:9, 16:9, 4:3, 4:5 and 1:1.
- Device screens show only abstract, blurred, unreadable interface shapes with orange highlights. No readable text, no brand marks.

---

## Shot List

### PRIORITY 1 — Hero

| File | Ratio | Description |
|---|---|---|
| `hero/hero-dark` | 16:9 | Monolithic sculptural object, layered translucent dark glass panels floating in black studio, fine glowing orange light filaments forming a network |
| `hero/hero-light` | 16:9 | Same composition in warm off-white paper studio, smoked glass and pale ceramic, orange filaments still glowing |
| `hero/hero-mobile-dark` | 4:5 | hero-dark concept recomposed vertically |
| `hero/hero-mobile-light` | 4:5 | hero-light concept recomposed vertically |

### PRIORITY 2 — Services (3:2 landscape)

| File | Description |
|---|---|
| `services/ai-agents` | Glowing orange core sphere, orbiting glass nodes, thin light paths with pulses — MOST striking image |
| `services/software-development` | Stacked dark glass UI panels in perspective, abstract blurred UI blocks, orange highlight on active panel |
| `services/mobile-app` | Two dark smartphones at angles, abstract blurred app layouts, orange accents, studio light |
| `services/cloud-solutions` | Stacked translucent server slabs rising like a tower, vertical light streams, misty atmosphere |
| `services/digital-transformation` | Scattered grid cells morphing into neat glowing grid, dark studio |
| `services/mvp-development` | Rough clay prototype next to refined polished object on dark pedestal, orange rim light |
| `services/ecommerce` | Premium product boxes and bag on dark steps, orange light tracing checkout flow path |
| `services/industry-solutions` | Three miniature abstract scenes (factory, clinic, building) unified on dark surface |

### PRIORITY 3 — AI Section + CTA (21:9 ultra-wide)

| File | Description |
|---|---|
| `ai/ai-core-wide` | Vast dark space, central soft orange glowing core, concentric orbit rings, centre slightly darker |
| `cta/cta-ribbon` | Flowing ribbon of soft orange light curving through deep darkness, empty space for text |

### PRIORITY 4 — Project Placeholders

| File | Ratio | Description |
|---|---|---|
| `projects/project-01` | 4:3 | Dark laptop on black stone, blurred abstract dashboard with orange charts |
| `projects/project-02` | 4:5 | Single phone floating, abstract blurred app UI, orange rim light |
| `projects/project-03` | 4:5 | Tablet on dark fabric, abstract blurred interface, soft side light |
| `projects/project-04` | 4:3 | Wide monitor and keyboard on dark minimal desk, abstract blurred web interface |
| `projects/project-05` | 1:1 | Small wearable device and phone side by side, abstract UI glow |
| `projects/project-06` | 16:9 | Floating browser-window glass panel in fog, abstract layout blocks |

### PRIORITY 5 — Industries (3:2, moody editorial)

| File | Description |
|---|---|
| `industries/manufacturing` | Dark modern factory floor, precise machinery, industrial arms, warm orange lights, haze, no people |
| `industries/healthcare` | Calm clinic corridor at night, tablet on counter with blurred abstract UI, no people |
| `industries/real-estate` | Modern minimal building facade at blue hour, warm lit windows, strong architectural lines |
| `industries/ecommerce` | Neatly stacked shipping boxes on softly lit conveyor, dark warehouse, orange accent |
| `industries/startups` | Top-down dark desk with sketches, sticky notes (no text), prototype device, coffee cup |
| `industries/growing-business` | Wide dark modern workspace, empty desks, glowing screens, evening light |

### PRIORITY 6 — About, Intro, 404, OG

| File | Ratio | Description |
|---|---|---|
| `about/studio` | 3:2 | Quiet premium studio desk at dusk: laptop, notebook, ceramics, lamp, city-light bokeh |
| `about/mindset` | 4:5 | Single glass prism splitting beam into fine orange light lines on black background |
| `intro/intro-wide` | 21:9 | Macro close-up of dark brushed-metal with circuit grooves, one orange light line |
| `cta/not-found` | 16:9 | Single small glowing node alone in vast dark empty space |
| `og/og-bg` | 1.91:1 | Simplified hero object placed RIGHT side, leaving empty dark space on left for text |

---

## How to Replace an Image

1. Put a new file with the SAME name in `/raw-images/<folder>/`
2. Run `npm run images`
3. If alt text or focal point changes, edit `/src/data/images.js`

## How to Add a New Image

1. Add the raw PNG to `/raw-images/<folder>/`
2. Run `npm run images`
3. Add an entry in `/src/data/images.js`

## Quality Rules (reject and regenerate if any of these are present)

- Readable or garbled text, letters, numbers, logos or watermarks
- Human faces or humanoid robots
- Distorted hands, objects or warped geometry
- Different colour mood, lighting or grain from the rest of the set
- Cluttered, busy composition
- Subject too close to the edges to crop safely
- Cheap, cartoonish or obviously "AI-generic" look
