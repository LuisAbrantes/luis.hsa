# AGENTS.md — Developer & AI Agent Architecture Guide

> **Official engineering and design specification for the portfolio of Luis Henrique Abrantes (`luis.hsa`).**  
> Any AI agent (Claude Code, Google Antigravity, Cursor, etc.) working on this repository MUST strictly follow the rules, architectural patterns, and SEO/GEO protocols defined in this document.

---

## 1. Identity, Career Positioning & Core Truths

- **Full Name:** Luis Henrique Abrantes (Aliases: *Luis Abrantes*, *luis.hsa*). Legal name: *Luis Henrique dos Santos Abrantes* (never "Silva").
- **Core Title:** Software Engineer & Applied AI Developer
- **Specialization:** **LLM agents with tool calling**, **agent harness engineering** and **full-stack products**. Only claim what the public repositories or the internship description back: no "production RAG", "multi-agent orchestration" or "evaluation loops" unless a project on the site shows it.
- **Looking for:** internships and junior roles in software engineering and applied AI. Based in Brazil (UTC-3), open to relocating to the San Francisco Bay Area. Say nothing about visas, work authorization or graduation dates.
- **🚨 CRITICAL RULE:** **NEVER label Luis as a "computer science researcher" or "academic researcher".** He is an active software engineer building production systems, developer tooling, and applied AI applications for industry roles.

### Key Biographical Facts:
1. **Origin:** Started programming at age nine, guided by curiosity and mentored by his father (who is also a software engineer).
2. **Education at IFSP** (a tuition-free federal institute with admission by competitive public exam; describe it that way, since "merit-funded" and "8-year" confuse readers outside Brazil):
   - **B.S. in Computer Science (4-Year Degree · 2026 – Present):** Current GPA: **8.92 out of 10** • Instituto Federal de São Paulo (IFSP).
   - **Technical High School Diploma in Informatics (4-Year Program · 2022 – 2024):** Final GPA: **8.34 out of 10** • Admitted in the top 10 of 181 candidates for 40 seats • Completed the capstone project (*TutorTime*) ahead of schedule during junior year.
3. **Key Honors & Hackathons:**
   - **Google Student Ambassador (2026 Global Cohort)**
   - **UC Berkeley AI Hackathon (Cal Hacks 2025 · Berkeley, California):** Built *GirlTalk AI* with a team of four. The event was held on the UC Berkeley campus, not in San Francisco.
   - **PennApps XXV (UPenn 2024 · Philadelphia):** Built *SpeakScribe*
   - **UNICAMP Quantum & Physics Camps (FIFE - Física nas Férias):** Intensive cohorts in Theoretical Cosmology (2024) and Quantum Computing (2025) at Gleb Wataghin Physics Institute (IFGW).
   - **Brazilian Olympiad in Informatics (OBI 2024):** Qualified for the second of three phases.
4. **Professional Experience:**
   - **Kaffa Tech (Jun 2026 – Aug 2026 · 3 mos):** AI & Software Engineering Intern. Built tools and integrations for the AI agent platform, implemented on-demand skill generation during agent setup, and debugged agent execution workflows.
5. **Technical Papers & Writing:**
   - Published at **[https://papers.luisabrantes.dev](https://papers.luisabrantes.dev)** (standalone subdomain).

---

## 2. Design System & UI/UX Standards

- **Theme & Aesthetics:** Ultra-dark mode `#07080b` with high-contrast text (`#EDEDED`, `text-white`), subtle zinc borders (`border-zinc-800`), and curated accent tones (`emerald-400`, `amber-400`, `cyan-400`).
- **No Cliché Cards / No Box Nesting:** Favor open typographic layouts, clean horizontal divider lines (`border-t border-zinc-800/80`), and asymmetric editorial structures over generic rounded card grids.
- **Non-Draggable Images:** All images across the portfolio MUST have drag and accidental selection disabled:
  - CSS: `img { -webkit-user-drag: none; user-select: none; }` in `src/index.css`.
  - React/HTML: `draggable={false}` and `className="select-none pointer-events-none"` (or `pointer-events-auto` on clickable interactive badges).
- **Shared building blocks:** `Eyebrow` (section label), `PageHeader` (page title block) and `ProjectRow` (a project as a typographic row). Every inner page uses them; do not reintroduce card grids, filters that hide content, or modals that hold text a crawler should read.
- **Crawlable Internal Navigation:** Always use semantic React Router `<Link to="...">` components (imported from `react-router`) instead of `<button onClick={() => navigate(...)}>` or clickable `<div>`s, so crawlers and keyboard users can traverse internal routes. Project cards link to `/projects/<slug>`.

---

## 3. SEO & GEO Architecture (Search & AI Engine Optimization)

The portfolio is built for two kinds of readers:
1. **Search engines (Google, Bing, DuckDuckGo):** ranked for queries like `Luis Henrique Abrantes`, `Luis Abrantes`, and qualified variants (`software engineer`, `IFSP`, `Google Student Ambassador`).
2. **Generative engines (ChatGPT Search, Perplexity, Gemini, Claude):** their crawlers do not run JavaScript, so every URL must already contain its real content as HTML.

### 3.1 Static Pre-rendering (the core rule)
The site runs on **React Router framework mode** with `ssr: false` and `prerender` (`react-router.config.ts`). At build time every route is rendered to its own HTML file in `build/client/`:
- `/`, `/about`, `/projects`, `/achievements`, `/resume`, `/contact`
- one page per project: `/projects/<slug>` (slugs come from `src/data/projects.ts`)

There is **no `index.html` and no hand-written fallback**. The HTML crawlers read is produced by the same React components visitors see. Never reintroduce a static copy of the content.

Key files:
- `src/root.tsx`: document shell (`<html>`, `<head>`, nav, page transition).
- `src/routes.ts`: route table.
- `src/pages/*.tsx`: route modules. **Each one must export `meta`** built with `pageMeta()`.
- `src/pages/sitemap.ts`: generates `/sitemap.xml` at build time.
- `src/pages/llms.ts`: generates `/llms.txt`, a plain-text index of the site for answer engines, from the same data as the pages.
- `scripts/postbuild.mjs`: fails the build if any page lacks a title, description or unique canonical, or is missing from the sitemap. It also publishes the SPA fallback as `404.html`.

### 3.2 Per-page Metadata and JSON-LD (`src/lib/seo.ts`)
`pageMeta({ title, description, path, jsonLd })` returns the page's `<title>`, meta description, canonical, Open Graph/Twitter tags and one JSON-LD `@graph`. Every page's graph contains:
- `WebSite` (`https://luisabrantes.dev/#website`)
- `Person` (`https://luisabrantes.dev/#person`) with `sameAs` (identity profiles only: GitHub, LinkedIn, Devpost profile, Instagram), `alumniOf`, `memberOf` (Google Student Ambassador), `award`, `knowsAbout`
- page-specific nodes: `ProfilePage` (home), `AboutPage`, `CollectionPage` + `ItemList` (projects), `SoftwareSourceCode`/`CreativeWork` (project pages), `ContactPage`, plus `BreadcrumbList`

Identity facts (name, aliases, profiles, awards, default social image) live in **`src/data/site.ts`**.

> ⚠️ **AGENT MANDATE:** When a project, experience, or credential changes, edit `src/data/*` only (`projects.ts`, `experience.ts`, `education.ts`, `skills.ts`, `certificates.ts`, `timeline.ts`, `papers.ts`, `site.ts`). Metadata, JSON-LD, the sitemap and the pre-rendered HTML are regenerated from that data on build. A new project needs a `slug`, a `year` and cover art registered in `src/data/projectImages.ts`; add a real capture of the running product to `projectScreenshots` there when one exists. A new route needs a `meta` export and an entry in `src/routes.ts`.

Writing rules for metadata: all metadata is in **English** (the site language), titles around 60 characters, descriptions under 160, no keyword stuffing, no `meta keywords`, no content written "for AI agents" (`/llms.txt` only repeats what the pages say).

### 3.2.1 Content rules (projects, honors, experience)
- Describe what the code does today. A claim that the repository does not show does not go on the site.
- On a team project, set `team: true` and write `role` from the commit history or from Luis's own public statement (for example his Devpost entry). Never credit him with a teammate's part.
- No superlatives about an event, school or organizer, and no outcomes that cannot be checked.
- Explain Brazilian institutions and grades for a reader abroad (what IFSP is, GPA "out of 10", what OBI is).
- Event facts (venue, dates, attendance) follow the event's own page. Devpost lists 1,035 participants for the UC Berkeley AI Hackathon 2025 and 362 for PennApps XXV.

### 3.3 AI Bot Permissions (`public/robots.txt`)
`public/robots.txt` explicitly authorizes:
- `OAI-SearchBot`, `GPTBot`, `ChatGPT-User` (OpenAI)
- `ClaudeBot`, `anthropic-ai`, `Claude-Web` (Anthropic)
- `PerplexityBot` (Perplexity AI)
- `Google-Extended`, `Googlebot` (Google Gemini & Search)
- `CCBot` (Common Crawl)
- `Cohere-ai`, `Applebot-Extended`, `Meta-ExternalAgent`, `Bytespider`, `Amazonbot`

### 3.4 Static Assets
- Files in `public/static/` (hero video/poster, `logos/`, `certificates/`) and `public/images/` are served as-is. Do **not** put anything in `public/assets/`: that path is reserved for hashed build output, which is cached as immutable.
- Every `<img>` must point at a local file; the build fails on a remote or missing image. Honors logos come from `public/static/logos/`.
- Project captures live in `src/assets/projects/screens/` (1280px wide WebP, under ~100 KB). Use real captures only; a project without one shows its cover art.
- Résumé: `/resume` is rendered from the data files, and `public/luis-henrique-abrantes-resume.pdf` is printed from that page. After changing experience, education, featured projects, honors or skills, run `npm run build && npm run resume` and commit the PDF (the script needs a local Chrome and fails if the résumé no longer fits one page).
- Social card: `public/og.jpg` (1200x630). Person image: `public/images/luis-henrique-abrantes.jpg` (800x800). Keep images small: nothing above ~300 KB.
- Fonts (Geist, Geist Mono) are self-hosted from `src/assets/fonts/`.

---

## 4. Quality Assurance & Verification Protocols

Before committing or deploying ANY changes, agents MUST execute:

```bash
# 1. Typecheck (Must pass with 0 errors)
npm run typecheck

# 2. Production Build (pre-renders every route, then runs the SEO checks in scripts/postbuild.mjs)
npm run build
```

After a build, spot-check the generated HTML in `build/client/` (for example `build/client/about/index.html`): the page's real text, its own `<title>` and its own canonical must be in the file.

### External Validation Checks:
1. **Google Rich Results Test:** [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. **Schema.org Validator:** [https://validator.schema.org/](https://validator.schema.org/)
3. **LinkedIn Post Inspector:** [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)

---

## 5. Deployment Workflow

- **Production Host:** **Vercel** (`https://luisabrantes.dev/`), static output only.
- **Trigger:** Automated on `git push origin main`.
- **Configuration (`vercel.json`):** build command `npm run build`, output directory `build/client`. There is **no catch-all rewrite**: each route is a real file, and unknown URLs get `404.html` with a 404 status.
- **Redirects:** `www.luisabrantes.dev` to the apex domain, trailing slashes removed.
- **Caching:** `/assets/*` (hashed) is immutable for a year; `/static/*` and `/images/*` for a day.
