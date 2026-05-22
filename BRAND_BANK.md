# Brand Bank — W3 Advanced CSS

> 5 fictional dev-tool brands (students pick ONE as their playground) + 5 real companies (students pick ONE as their CSS case study). Mix structure locked.

---

## How Students Use This

**Dienstag morning:** Each student picks:
- **ONE fictional brand** from Section A (their playground for the week) — they will fork the class repo and rebrand it as this fictional product
- **ONE real company** from Section B (their case study) — they will inspect the real site's CSS architecture and write a 1-paragraph analysis in their fork's README

No two students must pick the same fictional brand. Real companies may overlap (different angles).

---

## Section A — Fictional Brands (Pick ONE)

Each fictional brand has: name + one-line product + brand color + typography vibe + 3D motif suggestion. All fit the "developer tool 2026" aesthetic — dark backgrounds, sharp typography, restrained color.

### 1. **Splitwave**
- **Product:** Real-time JSON streaming for AI agents — "what Kafka is for events, Splitwave is for LLM tokens"
- **Brand color:** Acid green on near-black (`oklch(85% 0.22 145)` on `oklch(15% 0.02 250)`)
- **Typography:** Geist Mono headlines + Geist Sans body
- **3D motif:** Particles streaming through a torus (pmndrs particles example) → can be R3F or Spline
- **Vibe reference:** Resend + Vercel

### 2. **Klein.dev**
- **Product:** End-to-end-typed API client — "Zod schemas, generated SDKs, zero runtime cost"
- **Brand color:** Deep magenta on bone white (`oklch(45% 0.25 350)` on `oklch(97% 0.005 90)`)
- **Typography:** Inter Display + Inter
- **3D motif:** A Möbius strip slowly rotating (geometric, calm, intellectual)
- **Vibe reference:** Stripe + Linear

### 3. **Glasshalt**
- **Product:** Browser-native observability — "OpenTelemetry without the agents"
- **Brand color:** Indigo on charcoal (`oklch(60% 0.2 270)` on `oklch(18% 0.01 250)`)
- **Typography:** IBM Plex Sans + IBM Plex Mono
- **3D motif:** Wireframe globe with traced request paths (network observability metaphor)
- **Vibe reference:** Vercel + Honeycomb

### 4. **Reedline**
- **Product:** AI-native code review — "the senior reviewer your PRs deserve"
- **Brand color:** Warm amber on near-black (`oklch(78% 0.18 75)` on `oklch(12% 0.01 280)`)
- **Typography:** Lora serif headlines + Inter body (editorial)
- **3D motif:** Floating code blocks with subtle parallax (paper-stack metaphor)
- **Vibe reference:** Linear + The Browser Company

### 5. **Tidepool**
- **Product:** Edge cache for AI model outputs — "deterministic inference, semantic keys"
- **Brand color:** Ocean teal on slate (`oklch(70% 0.15 200)` on `oklch(25% 0.02 230)`)
- **Typography:** Inter Tight + JetBrains Mono
- **3D motif:** Animated waves (R3F Plane with custom vertex shader OR Spline water scene)
- **Vibe reference:** Cloudflare + Supabase

---

## Section B — Real Companies (Pick ONE for Case Study)

Each student writes a **1-paragraph CSS architecture analysis** of their picked real company in their fork's README. The analysis must answer:
- What styling approach does the site use today? (Tailwind / CSS Modules / styled / vanilla / mix)
- What system or library do they ship/maintain? (Geist, shadcn, Radix, etc.)
- What ONE visible CSS technique can you inspect in DevTools that's worth stealing for your fictional brand?

### 1. **Resend** (https://resend.com)
- Email API. Dark theme. Polished motion.
- **Why study:** Dark theme done right. Subtle gradients, restrained motion, scroll-driven hero.
- **What to inspect:** Their gradient implementation + scroll behavior on the hero.

### 2. **Linear** (https://linear.app)
- Project management. Emil Kowalski's recent home.
- **Why study:** Animation taste benchmark. They ship Sonner + Vaul. Production-grade Motion library usage.
- **What to inspect:** Their landing page motion choreography + view-transition feel.

### 3. **Vercel** (https://vercel.com)
- Hosting. Next.js maker. Geist design system home.
- **Why study:** The Geist design system + shadcn family. Token discipline.
- **What to inspect:** Geist UI on their docs site, the typography scale, the token-as-CSS-variable approach.

### 4. **Stripe** (https://stripe.com — especially `stripe.com/climate`)
- Payments. Stripe Climate's 3D scene is canonical.
- **Why study:** Long-form CSS history visible. They have hand-built scenes alongside modern tooling.
- **What to inspect:** stripe.com/climate hero scene (WebGL + DOM overlay) + their gradient annotations.

### 5. **Cal.com** (https://cal.com)
- Open-source scheduling. Heavy Tailwind adoption.
- **Why study:** Public codebase. You can `git clone` and read the actual CSS architecture.
- **What to inspect:** Their Tailwind v4 token structure on the public site + their open-source repo's `tailwind.config` or `@theme` block.

---

## Forbidden in fictional brand choice

- ❌ Copying a real company's name (no "Linear-clone")
- ❌ Naming after a person
- ❌ German names (international fluency = part of the lesson)
- ❌ Joke names

If a student wants to invent their own fictional brand instead of picking from the 5: green-light only if it fits the "dev tool 2026" frame and has a strong color + typography + 3D motif.

---

## Why This Mix Matters

Single-source brand study = students copy. Mix structure = students COMPOSE. They pull one technique from their real company case study and apply it to their fictional brand — that's the design-engineering reflex we're building.

Recruiters reading the Friday-shipped repo see:
1. A clean fictional brand (proves design taste)
2. A README citing a real company's technique (proves they can read other people's CSS)
3. An agent-prompt log (proves they wield AI as a tool, not a crutch)

That's the package. That's why the mix.
