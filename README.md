# luisabrantes.dev

Portfolio of Luis Henrique Abrantes, Software Engineer & Applied AI Developer.

Live at [luisabrantes.dev](https://luisabrantes.dev/).

## Stack

React 18, React Router 7 (framework mode, statically pre-rendered), TypeScript, Vite, Tailwind CSS and Framer Motion. Deployed on Vercel as static files.

## Commands

```bash
npm install
npm run dev        # local development
npm run typecheck  # route typegen + tsc
npm run build      # pre-render every route to build/client and run SEO checks
```

## Structure

- `src/data/`: all content (projects, experience, certificates, identity facts).
- `src/pages/`: one route module per page, each exporting its own `meta`.
- `src/lib/seo.ts`: per-page metadata and JSON-LD, generated from the data.
- `src/root.tsx`, `src/routes.ts`, `react-router.config.ts`: app shell, routes and pre-render list.

See [`AGENTS.md`](./AGENTS.md) for the architecture and SEO rules.
