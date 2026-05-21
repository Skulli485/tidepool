# Agent rules — compose-and-agent

Use this repo to learn the compose layer (Motion + View Transitions + @scope) and the agent layer (Claude Code Agent-Modus + shadcn/ui).

## Hard constraints

- React 19 + TypeScript strict
- Tailwind v4 only, config in CSS (`@theme` in `src/index.css`). No `tailwind.config.js`. No `postcss.config.js`.
- `motion` package (NOT `framer-motion`). Import path is `motion/react`.
- `@react-three/fiber` v9 + `@react-three/drei` v10
- `styled-components` is NOT installed and stays out
- `framer-motion` is NOT installed and stays out
- Package manager: Bun

## What NOT to do

- Do not auto-fill `FeatureMotion.tsx` or `Dialog.tsx`. They are class build targets.
- Do not install additional animation libraries.
- Do not introduce CSS-in-JS.
- Do not add a tailwind.config file.

## Token system

3 layers in `src/index.css`:
- Primitive: `--color-iris-*`, `--color-coal-*`
- Semantic: `--color-brand`, `--color-bg`, `--color-ink`
- Component: `--color-card-bg`, `--color-card-border`

Reference tokens, never hardcode `oklch()` or hex in components.

## Agent brief structure (Block D)

When using Claude Code Agent-Modus to write code, every brief must have:

- **Context** — what already exists in the repo, concrete (e.g. "FeatureMotion has motion.div with Variants and staggerChildren=0.12")
- **Goal** — what the finished component must do, concrete
- **Constraints** — what NOT to do (see Hard constraints above)
- **Output** — show diff before applying

Read every line of the diff. You are senior. The agent is junior pair. You are responsible for every committed line.

## Document agent work

Add a NOTES.md entry per agent session with: verbatim brief, first agent proposal summary, corrections made, what shipped.
