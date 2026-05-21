# compose-and-agent

Advanced CSS · Woche 3 · Tag 3 · Donnerstag 21.05.2026

## Start

```bash
git clone https://github.com/OthmanAdi/compose-and-agent
cd compose-and-agent
bun install
bun run dev
```

Browser auf `http://localhost:5173`.

## Stack

React 19, Vite 6, Tailwind v4, motion 12, R3F 9, drei 10.

## Was heute gebaut wird

Block A — `src/components/FeatureMotion.tsx` (Motion Variants + AnimatePresence).
Block B — Live-Demo View Transitions API.
Block C — Live-Demo @scope in `src/index.css`.
Block D — `src/components/Dialog.tsx` (Claude Code Agent + shadcn/ui).

## Deploy

```bash
bun run build
~/.claude/skills/here-now/scripts/publish.sh ./dist
```
