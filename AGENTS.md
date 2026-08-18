# AGENTS.md — Developer & AI Agent Architecture Guide

> **Official engineering and design specification for the portfolio of Luis Henrique Abrantes (`luis.hsa`).**  
> Any AI agent (Claude Code, Google Antigravity, Cursor, etc.) working on this repository MUST strictly follow the rules, architectural patterns, and SEO/GEO protocols defined in this document.

---

## 1. Identity, Career Positioning & Core Truths

- **Full Name:** Luis Henrique Abrantes (Aliases: *Luis Abrantes*, *luis.hsa*)
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
- **Crawlable Internal Navigation:** Always use semantic React Router `<Link to="...">` components instead of `<button onClick={() => navigate(...)}>` on CTA buttons so search engine crawlers can traverse internal routes.

---

## 3. SEO & GEO / DEO / LLMO Architecture (Search & AI Engine Optimization)

The portfolio is architected for dual-engine discovery:
1. **Traditional Search Engines (Google, Bing, DuckDuckGo):** Ranked for queries like `Luis Henrique Abrantes`, `Luis Abrantes`, and `luis.hsa`.
2. **Generative Engines (ChatGPT / SearchGPT, Perplexity AI, Google Gemini, Claude):** Optimized for zero-shot RAG scraping, entity citations, and authoritative question-answering.

### 3.1 JSON-LD Structured Data Schema (`index.html`)
The `<script type="application/ld+json">` inside `index.html` uses an enterprise-grade `@graph` array linking:
- `WebSite` (`https://luisabrantes.dev/#website`)
- `ProfilePage` (`https://luisabrantes.dev/#profilepage`)
- `Person` (`https://luisabrantes.dev/#person`) with complete `sameAs` authority links (GitHub, LinkedIn, Devpost, Papers subdomain, IFSP press).
- `ItemList` (`https://luisabrantes.dev/#projects`) cataloging key applications (*College List AI*, *GirlTalk AI*, *SpeakScribe*, *Harness Study*, *TutorTime*).
- `hasOccupation`, `alumniOf`, `affiliation` (Google), and `award` arrays.

> ⚠️ **AGENT MANDATE:** Whenever a new project, experience, or major credential is added to the codebase, the JSON-LD `@graph` in `index.html` MUST be updated simultaneously.

### 3.2 Static Fallback Content (`<div id="root">` in `index.html`)
Because AI scrapers (like `GPTBot` and `PerplexityBot`) and shallow crawlers often do not execute full JavaScript bundles, `index.html` contains a **complete semantic HTML5 fallback inside `<div id="root">`**:
- Includes an exhaustive **FAQ section** in natural language Q&A pairs.
- Includes executive summary, work experience, milestones, projects, and skills table.
- When React mounts in the browser, `main.tsx` dynamically replaces this fallback with the client-side SPA.

### 3.3 AI Bot Permissions (`public/robots.txt`)
`public/robots.txt` explicitly authorizes:
- `OAI-SearchBot`, `GPTBot`, `ChatGPT-User` (OpenAI / SearchGPT)
- `ClaudeBot`, `anthropic-ai`, `Claude-Web` (Anthropic)
- `PerplexityBot` (Perplexity AI)
- `Google-Extended`, `Googlebot` (Google Gemini & Search)
- `CCBot` (Common Crawl foundation corpus)
- `Cohere-ai`, `Applebot-Extended`, `Meta-ExternalAgent`, `Bytespider`, `Amazonbot`

### 3.4 Sitemap (`public/sitemap.xml`)
Contains all 5 core routes (`/`, `/about`, `/projects`, `/achievements`, `/contact`) with `lastmod`, priorities, and image schema tags (`xmlns:image`).

---

## 4. Quality Assurance & Verification Protocols

Before committing or deploying ANY changes, agents MUST execute:

```bash
# 1. Typecheck (Must pass with 0 errors)
npm run typecheck

# 2. Production Build (Must bundle successfully with Vite)
npm run build
```

### External Validation Checks:
1. **Google Rich Results Test:** [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. **Schema.org Validator:** [https://validator.schema.org/](https://validator.schema.org/)
3. **LinkedIn Post Inspector:** [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)

---

## 5. Deployment Workflow

- **Primary Production Host:** **Vercel** (`https://luisabrantes.dev/`)
- **Trigger:** Automated on `git push origin main`.
- **SPA Routing Configuration:** `vercel.json` rewrites all requests to `/index.html`.
- **Secondary Host (GitHub Pages):** Deployable via `npm run deploy` (`gh-pages` branch).
