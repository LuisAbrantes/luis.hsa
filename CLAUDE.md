# CLAUDE.md — Developer & AI Agent Architecture Guide

> See full specification in [`AGENTS.md`](./AGENTS.md).

## Quick Reference Commands

- **Development:** `npm run dev`
- **Typecheck:** `npm run typecheck` (`react-router typegen && tsc --noEmit`)
- **Build:** `npm run build` (typecheck, pre-render every route to `build/client/`, then SEO checks)
- **Deploy:** Push to `main` (auto-deployed to Vercel at `https://luisabrantes.dev/`)

## Core Agent Mandates

1. **Identity:** Luis Henrique Abrantes — Software Engineer & Applied AI Developer (NEVER "computer science researcher"). Legal name: Luis Henrique dos Santos Abrantes.
2. **Design:** Ultra-dark mode `#07080b`, open typographic layouts, zero generic cards, non-draggable images (`draggable={false}`, `user-select: none`).
3. **SEO & GEO:** Every route is pre-rendered to static HTML (React Router framework mode, `ssr: false` + `prerender`). There is no `index.html` and no hand-written fallback. When modifying projects, experience, or milestones:
   - Edit `src/data/*` only. Metadata, JSON-LD, sitemap and HTML are generated from it (`src/lib/seo.ts`, `src/data/site.ts`).
   - Every route module in `src/pages/` must export `meta` via `pageMeta()`; the build fails otherwise.
4. **Validation:** Always verify `npm run typecheck && npm run build` before committing.
