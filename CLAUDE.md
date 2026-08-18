# CLAUDE.md — Developer & AI Agent Architecture Guide

> See full specification in [`AGENTS.md`](./AGENTS.md).

## Quick Reference Commands

- **Development:** `npm run dev`
- **Typecheck:** `npm run typecheck` (`tsc --noEmit`)
- **Build:** `npm run build` (`tsc --noEmit && vite build`)
- **Deploy:** Push to `main` (auto-deployed to Vercel at `https://luisabrantes.dev/`)

## Core Agent Mandates

1. **Identity:** Luis Henrique Abrantes — Software Engineer & Applied AI Developer (NEVER "computer science researcher").
2. **Design:** Ultra-dark mode `#07080b`, open typographic layouts, zero generic cards, non-draggable images (`draggable={false}`, `user-select: none`).
3. **SEO & GEO:** Whenever modifying projects, experience, or milestones, ALWAYS update both:
   - `<script type="application/ld+json">` (`@graph` schema) in `index.html`.
   - The static semantic HTML fallback inside `<div id="root">` in `index.html`.
4. **Validation:** Always verify `npm run typecheck && npm run build` before committing.
