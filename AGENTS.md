# AGENTS.md — Developer & AI Agent Architecture Guide

> **Official engineering and design specification for the portfolio of Luis Henrique Abrantes (`luis.hsa`).**  
> Any AI agent (Claude Code, Google Antigravity, Cursor, etc.) working on this repository MUST strictly follow the rules, architectural patterns, and SEO/GEO protocols defined in this document.

---

## 1. Identity, Career Positioning & Core Truths

- **Full Name:** Luis Henrique Abrantes (Aliases: *Luis Abrantes*, *luis.hsa*). Legal name: *Luis Henrique dos Santos Abrantes* (never "Silva").
- **Core Title:** Software Engineer & Applied AI Developer
- **Specialization:** **Agent Harness Engineering**, **Autonomous LLM Agents**, **Retrieval-Augmented Generation (RAG)**, and **Production Full-Stack Systems**.
- **🚨 CRITICAL RULE:** **NEVER label Luis as a "computer science researcher" or "academic researcher".** He is an active software engineer building production systems, developer tooling, and applied AI applications for industry roles.

### Key Biographical Facts:
1. **Origin:** Started programming at age nine, guided by curiosity and mentored by his father (who is also a software engineer).
2. **8-Year Public Merit Education at IFSP:**
   - **B.S. in Computer Science (4-Year Degree · 2026 – Present):** Current GPA: **8.92** • Instituto Federal de São Paulo (IFSP). Admitted via competitive public entrance exam (*Vestibular*), 100% government-funded merit tuition.
   - **Integrated Technical High School in Informatics (4-Year Program · 2022 – 2024):** Graduation GPA: **8.34** • Completed Capstone Project (*TutorTime* platform) ahead of schedule during junior year.
3. **Key Honors & Hackathons:**
   - **Google Student Ambassador (2026 Global Cohort)**
   - **UC Berkeley AI Hackathon (Cal Hacks 2025 · San Francisco):** Built *GirlTalk AI*
   - **PennApps XXV (UPenn 2024 · Philadelphia):** Built *SpeakScribe*
   - **UNICAMP Quantum & Physics Camps (FIFE - Física nas Férias):** Intensive cohorts in Theoretical Cosmology (2024) and Quantum Computing (2025) at Gleb Wataghin Physics Institute (IFGW).
   - **Brazilian Olympiad of Informatics (OBI 2024):** Advanced through 2 national phases.
4. **Professional Experience:**
   - **Kaffa Tech (Jun 2026 – Aug 2026 · 3 mos):** AI & Software Engineering Intern. Engineered tools for the AI Agent Hub, implemented on-demand skill generation during agent setup, and debugged multi-agent execution workflows.
5. **Technical Papers & Writing:**
   - Published at **[https://papers.luisabrantes.dev](https://papers.luisabrantes.dev)** (standalone subdomain).

---

## 2. Design System & UI/UX Standards

- **Theme & Aesthetics:** Ultra-dark mode `#07080b` with high-contrast text (`#EDEDED`, `text-white`), subtle zinc borders (`border-zinc-800`), and curated accent tones (`emerald-400`, `amber-400`, `cyan-400`).
- **No Cliché Cards / No Box Nesting:** Favor open typographic layouts, clean horizontal divider lines (`border-t border-zinc-800/80`), and asymmetric editorial structures over generic rounded card grids.
- **Non-Draggable Images:** All images across the portfolio MUST have drag and accidental selection disabled:
  - CSS: `img { -webkit-user-drag: none; user-select: none; }` in `src/index.css`.
  - React/HTML: `draggable={false}` and `className="select-none pointer-events-none"` (or `pointer-events-auto` on clickable interactive badges).
- **Crawlable Internal Navigation:** Always use semantic React Router `<Link to="...">` components (imported from `react-router`) instead of `<button onClick={() => navigate(...)}>` or clickable `<div>`s, so crawlers and keyboard users can traverse internal routes. Project cards link to `/projects/<slug>`.

---

## 3. SEO & GEO Architecture (Search & AI Engine Optimization)

The portfolio is built for two kinds of readers:
1. **Search engines (Google, Bing, DuckDuckGo):** ranked for queries like `Luis Henrique Abrantes`, `Luis Abrantes`, and qualified variants (`software engineer`, `IFSP`, `Google Student Ambassador`).
2. **Generative engines (ChatGPT Search, Perplexity, Gemini, Claude):** their crawlers do not run JavaScript, so every URL must already contain its real content as HTML.

### 3.1 Static Pre-rendering (the core rule)
The site runs on **React Router framework mode** with `ssr: false` and `prerender` (`react-router.config.ts`). At build time every route is rendered to its own HTML file in `build/client/`:
- `/`, `/about`, `/projects`, `/achievements`, `/contact`
- one page per project: `/projects/<slug>` (slugs come from `src/data/projects.ts`)

There is **no `index.html` and no hand-written fallback**. The HTML crawlers read is produced by the same React components visitors see. Never reintroduce a static copy of the content.

Key files:
- `src/root.tsx`: document shell (`<html>`, `<head>`, nav, page transition).
- `src/routes.ts`: route table.
- `src/pages/*.tsx`: route modules. **Each one must export `meta`** built with `pageMeta()`.
- `src/pages/sitemap.ts`: generates `/sitemap.xml` at build time.
- `scripts/postbuild.mjs`: fails the build if any page lacks a title, description or unique canonical, or is missing from the sitemap. It also publishes the SPA fallback as `404.html`.

### 3.2 Per-page Metadata and JSON-LD (`src/lib/seo.ts`)
`pageMeta({ title, description, path, jsonLd })` returns the page's `<title>`, meta description, canonical, Open Graph/Twitter tags and one JSON-LD `@graph`. Every page's graph contains:
- `WebSite` (`https://luisabrantes.dev/#website`)
- `Person` (`https://luisabrantes.dev/#person`) with `sameAs` (identity profiles only: GitHub, LinkedIn, Devpost profile, Instagram), `alumniOf`, `memberOf` (Google Student Ambassador), `award`, `knowsAbout`
- page-specific nodes: `ProfilePage` (home), `AboutPage`, `CollectionPage` + `ItemList` (projects), `SoftwareSourceCode`/`CreativeWork` (project pages), `ContactPage`, plus `BreadcrumbList`

Identity facts (name, aliases, profiles, awards, default social image) live in **`src/data/site.ts`**.

> ⚠️ **AGENT MANDATE:** When a project, experience, or credential changes, edit `src/data/*` only (`projects.ts`, `experience.ts`, `certificates.ts`, `timeline.ts`, `site.ts`). Metadata, JSON-LD, the sitemap and the pre-rendered HTML are regenerated from that data on build. A new project needs a `slug` and a screenshot registered in `src/data/projectImages.ts`. A new route needs a `meta` export and an entry in `src/routes.ts`.

Writing rules for metadata: all metadata is in **English** (the site language), titles around 60 characters, descriptions under 160, no keyword stuffing, no `meta keywords`, no content written "for AI agents".

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
- Every `<img>` must point at a local file. Certificate logos live in `public/static/certificates/` (256px max); the build fails on a remote or missing image.
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
