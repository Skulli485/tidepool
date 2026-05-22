# Tidepool

Edge cache for AI model outputs — deterministic inference, semantic keys.

Advanced CSS · Woche 3 · Morphos Module 1

## Live

| Plattform | URL |
|---|---|
| Vercel | https://tidepool-nine.vercel.app |
| here.now | https://clear-monsoon-g49v.here.now |
| Profil | https://here.now/@skulli4485 |
| GitHub | https://github.com/Skulli485/tidepool |

## Start

```bash
git clone https://github.com/Skulli485/tidepool
cd tidepool
bun install
bun run dev
```

Browser auf `http://localhost:5173`.

## Stack

- React 19 + TypeScript strict
- Tailwind v4 (`@theme` in `src/index.css`, kein `tailwind.config.js`)
- `motion` (Import: `motion/react`)
- `@react-three/fiber` v9 + `@react-three/drei` v10
- shadcn/ui v4 (`@base-ui/react`, nicht Radix)
- Vite 6 + Bun

## Brand Tokens

3 Layer in `src/index.css`:

| Layer | Beispiel |
|---|---|
| **Primitive** | `--color-teal-500`, `--color-slate-*` |
| **Semantic** | `--color-brand` → teal-500, `--color-bg` → slate-950 |
| **Component** | `--color-card-bg`, `--color-card-border` |

Typography: **Inter Tight** (display) + **JetBrains Mono** (code)

## Komponenten

| Block | Datei | Beschreibung |
|---|---|---|
| A | `src/components/FeatureMotion.tsx` | Motion Variants, AnimatePresence, View Transitions |
| B | Live-Demo | View Transitions API |
| C | `src/index.css` | @scope Style-Isolation |
| D | `src/components/Dialog.tsx` | shadcn/ui Dialog + motion Animation |

## CSS Case Study

Cloudflare — Edge-first CDN-Architektur mit Workers. Token-Disziplin und dunkle Theme-Umsetzung inspirieren die Tidepool-Ästhetik (Ocean Teal auf Slate).

## Deploy

```bash
bun run build
vercel deploy --prod
# oder
~/.agents/skills/here-now/scripts/publish.sh ./dist --spa
```
