import type { Project } from '@/types';

// Content only. Screenshots are mapped by slug in `projectImages.ts`, which keeps
// this module free of asset imports so build tooling can read it from Node.
//
// Writing rules:
// - Describe what the code does today. If the repository does not show it,
//   it does not go here.
// - `role` on a team project says only what the commit history (or Luis's own
//   public statement, e.g. on Devpost) supports.
// - No superlatives and no outcomes that cannot be checked.

// Ordered by relevance. The first three (featured) are surfaced on top.
export const projects: Project[] = [
    {
        id: 10,
        slug: 'college-list-ai',
        title: 'College List AI',
        featured: true,
        year: '2025–2026',
        context: 'Solo project',
        shortDescription:
            "A college advisor where a student chats with an LLM agent that searches, scores and saves schools, labeling each one reach, target or safety against the student's profile.",
        fullDescription: [
            'College List AI is a full-stack app for building a US college list. A student fills in a profile and chats with an LLM agent that can call seven tools: search and score colleges, look up one college, read the profile, and add, remove, exclude or list schools on the saved list.',
            'College data comes from three places: a Postgres cache keyed by college and major with a 30-day freshness rule, the US College Scorecard API, and live web search through Perplexity Sonar, whose results a second model (Llama 3.3 70B on Groq) structures into JSON. Web discovery keeps running until a major has at least 50 fresh schools in the cache.',
            'The reach, target and safety labels are not left to the model. A deterministic scorer combines five weighted factors (academic fit, major strength, financial fit, location and special factors) and applies explicit acceptance-rate and percentile thresholds, so the labels come from rules that can be tested.',
            'The first version ran every request through a five-node LangGraph pipeline. I later replaced it on the chat path with a single tool-calling agent, and the graph still serves a separate endpoint. The backend is FastAPI with SQLModel and 15 Alembic migrations on Supabase Postgres with row-level security, plus Stripe checkout with a free tier.'
        ].join('\n\n'),
        technologies: [
            'Python',
            'FastAPI',
            'LangGraph',
            'Groq',
            'Perplexity API',
            'Supabase',
            'React',
            'TypeScript',
            'Tailwind CSS'
        ],
        category: 'AI Application',
        github: 'https://github.com/LuisAbrantes/collegeListAI',
        highlights: [
            'Tool-calling agent with seven tools over the student profile and saved college list',
            'Three data sources: a per-major Postgres cache, the US College Scorecard API and Perplexity Sonar web search structured by a second model',
            'Deterministic reach, target and safety scoring from five weighted factors, with unit tests on the scoring logic',
            'College lookups return international tuition and need-blind status alongside the domestic figures',
            'FastAPI, SQLModel and 15 Alembic migrations on Supabase Postgres with row-level security',
            'Solo build: 63 commits between December 2025 and February 2026'
        ]
    },
    {
        id: 8,
        slug: 'girltalk-ai',
        title: 'GirlTalk AI',
        context: 'UC Berkeley AI Hackathon · Berkeley, California',
        team: true,
        featured: true,
        year: '2025',
        shortDescription:
            'A web app that turns what a girl writes about her situation into a short, personalized advice podcast: an LLM writes the script and a text-to-speech voice reads it.',
        fullDescription: [
            "GirlTalk AI was built in two days by a team of four at the UC Berkeley AI Hackathon 2025. The idea came from a teammate's experience of growing up without a female role model to ask for advice and turning to podcasts, where the advice is never about your own situation.",
            'The user writes what she is going through. The app asks an LLM on the Hyperbolic API (Llama 3.3 70B in the final version) for a script in the voice of a supportive older sister, sends the script to Murf.ai for speech through a small Express server, plays the clip and stores the episode in Firestore. A support page lists mental-health resources and helplines.',
            'It is a hackathon prototype, so there are no accounts: every visitor shares one demo user.'
        ].join('\n\n'),
        role: 'I wrote the first version of the script generation against the Hyperbolic API and its "big sister" prompt, the panel that shows the generated script, the play and stop audio controls, and the README. Teammates built the Murf.ai voice pipeline, the Express server and the Firestore storage.',
        technologies: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'shadcn/ui',
            'Hyperbolic API',
            'Murf.ai',
            'Express.js',
            'Firestore'
        ],
        category: 'Hackathon Project',
        github: 'https://github.com/cicadaenjoyer/Girl-Talk-AI',
        devpost: 'https://devpost.com/software/girltalk-ai',
        highlights: [
            'Built in two days by a team of four, among more than 1,000 participants',
            'Pipeline: user message, LLM script on the Hyperbolic API, Murf.ai text to speech, playback',
            'Prompted for supportive, age-appropriate advice on sensitive topics',
            'Episodes stored in Firestore, and a support page with mental-health resources and helplines'
        ]
    },
    {
        id: 1,
        slug: 'speakscribe',
        title: 'SpeakScribe',
        context: 'PennApps XXV · University of Pennsylvania, Philadelphia',
        team: true,
        featured: true,
        year: '2024',
        shortDescription:
            'A study tool built in a weekend at PennApps: it reads class material from a screenshot and uses GPT-3.5 Turbo to write summaries, key points and practice assignments as PDFs.',
        fullDescription: [
            "SpeakScribe was built by a team of four at PennApps XXV, the University of Pennsylvania's hackathon. We wanted students to spend class time understanding the material instead of copying it down.",
            "The Python side takes a screenshot or scanned page, extracts the text with Tesseract OCR, and asks GPT-3.5 Turbo for a summary with key points and vocabulary, or for a practice assignment adapted to a student's learning style. Both come out as PDFs. The front end is React and TypeScript with Google sign-in and file upload on Firebase.",
            'The demo we presented also recorded speech and returned its transcript, key points and summary. The Devpost page shows that flow.'
        ].join('\n\n'),
        role: 'I worked on the back end, on the scanner feature that turns a screenshot into text.',
        technologies: [
            'Python',
            'GPT-3.5 Turbo',
            'Tesseract OCR',
            'Flask',
            'React',
            'TypeScript',
            'Firebase'
        ],
        category: 'Hackathon Project',
        github: 'https://github.com/pranayrishi/SpeakScribe',
        devpost: 'https://devpost.com/software/speakscribe',
        youtube: 'https://www.youtube.com/watch?v=-Jz9-tNqB88',
        slides: 'https://docs.google.com/presentation/d/1MZ2BW9BR5UsyCl-LKMA4JZM3C9MduWuxzFUxp7TmygE/edit?slide=id.g7290233416_0_2#slide=id.g7290233416_0_2',
        highlights: [
            'Built in a weekend by a team of four, among more than 360 participants',
            'Tesseract OCR, then GPT-3.5 Turbo summaries, key points and vocabulary, exported as PDF',
            "Practice assignments adapted to each student's learning style",
            'React and TypeScript front end with Google sign-in and uploads on Firebase'
        ]
    },
    {
        id: 14,
        slug: 'harness-study',
        title: 'Harness Study',
        year: '2026',
        context: 'Ongoing personal project',
        shortDescription:
            'A monorepo of "agent harnesses": versioned layers of context (profile, skills, memory and workflows) that turn a general-purpose model into a consistent assistant for one domain.',
        fullDescription: [
            'Harness Study is where I work out how to make AI agents reliable through structured context instead of longer prompts. A harness is a directory of Markdown that lives next to the code: a profile, documented skills, canonical prompts, memory and session workflows. It works with any model or vendor.',
            'The monorepo holds a template, a study harness, a finance harness and a harness-builder, which interviews the user in four blocks, waits for a human to approve the summary and only then scaffolds the files. Skills used by more than one harness live in a shared folder. Memory is split by how often it changes, and a bounded MEMORY.md of about 50 entries is distilled at the end of each session instead of appended to.',
            'The repository is private because the harnesses hold personal context. What I learn is published in the write-up linked above.'
        ].join('\n\n'),
        technologies: ['AI Agents', 'Claude Code', 'GitHub Actions', 'Markdown'],
        category: 'AI Application',
        // Private repo (has a privacy-guard) — linked to the public write-up only.
        demo: 'https://papers.luisabrantes.dev/en/harness-study',
        highlights: [
            'Six building blocks per harness: profile, skills, canonical prompts, memory, session workflow and agent',
            'Harness-builder: a four-block interview, a human checkpoint, then scaffolding',
            'Three-layer memory with a bounded, curated MEMORY.md distilled at the end of each session',
            'Vendor- and model-agnostic by design: the context is Markdown, not code',
            'Private source, public write-up, with a CI check that blocks private terms from the published pages'
        ]
    },
    {
        id: 9,
        slug: 'encantos-do-forno',
        title: 'Encantos do Forno',
        context: 'Freelance client work · Jacareí, SP, Brazil',
        team: true,
        year: '2025',
        shortDescription:
            'A website and back office for an artisan restaurant: a menu, table orders, reservations and a walk-in queue for customers, and a staff dashboard behind a login.',
        fullDescription: [
            'Encantos do Forno is client work for a restaurant in Jacareí, São Paulo, built by a two-person team. Customers get a landing page, a menu by category, table orders from a cart, a reservation request form and a walk-in queue where they can follow their position and estimated wait.',
            'Staff sign in to manage products and menu categories, reservations, employees, tables, orders and the queue. The API is Node.js and Express on PostgreSQL through Sequelize, with JWT sessions, bcrypt password hashing, an admin role and rate limiting. Orders are created in a database transaction with prices recomputed on the server. The queue engine handles priority, no-shows, automatic expiry and a nightly statistics job, and the pages refresh by polling every 5 to 10 seconds.'
        ].join('\n\n'),
        role: 'I built the React front end and most of the current API: the routes, services and middleware layers, authentication, the queue, tables, orders and the admin pages. My teammate set up the first database models and CRUD endpoints.',
        technologies: [
            'React',
            'JavaScript',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Sequelize',
            'JWT'
        ],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/EncantosDoForno',
        highlights: [
            'Customer side: menu, table orders, reservation requests and a walk-in queue with position and estimated wait',
            'Staff side: dashboard for products, categories, reservations, employees, tables, orders and the queue',
            'Express API over PostgreSQL with Sequelize: 11 models, a services layer, JWT auth and rate limiting',
            'Orders created in a database transaction with server-side pricing',
            'Queue engine with priority, no-show handling, automatic expiry and nightly statistics'
        ]
    },
    {
        id: 12,
        slug: 'activation-intelligence',
        title: 'Activation Intelligence',
        context: 'Built around the AbacatePay payments platform',
        year: '2026',
        shortDescription:
            'A customer-success tool for the AbacatePay payments platform: it scores how far a merchant has activated the product and uses an LLM to draft the next outreach message.',
        fullDescription: [
            "Activation Intelligence reads a merchant's data from the AbacatePay API, or from one of four built-in demo profiles, and computes an Activation Score from 0 to 100 out of six checks, such as having a webhook configured, a paid checkout or a paid subscription.",
            "Two chained calls to Llama 3.3 70B on Groq follow. The first returns a structured diagnosis with the merchant's stage, gaps and risk. The second turns that diagnosis into a short WhatsApp or email message the team can copy. Scored merchants go into a local portfolio with score history, a contact cadence by score tier and CSV export. API keys stay on the server, behind Vercel Edge Functions.",
            'I built it in one evening as a demo for a visit to AbacatePay. I wrote the product spec and split the implementation between two AI coding agents, with a document saying which agent owned which files.'
        ].join('\n\n'),
        technologies: [
            'React',
            'Vite',
            'Tailwind CSS',
            'Groq',
            'Vercel Edge Functions'
        ],
        category: 'AI Application',
        github: 'https://github.com/LuisAbrantes/activation-intelligence',
        highlights: [
            'Deterministic 0 to 100 score from six product-usage checks, kept in one pure function',
            'Two chained LLM calls with JSON-schema prompts: diagnosis first, outreach message second',
            'Portfolio view with score history, contact cadence by tier and CSV export',
            'Live mode through the AbacatePay API, or a demo mode with four mock merchants',
            'Planned as a written spec and implemented with two AI coding agents in one evening'
        ]
    },
    {
        id: 15,
        slug: 'publishing-pipeline',
        title: 'Publishing Pipeline',
        year: '2026',
        context: 'Infrastructure for papers.luisabrantes.dev',
        shortDescription:
            'The automation behind my technical writing: a git push runs a privacy check, generates the SEO files and deploys the page, with no manual steps.',
        fullDescription: [
            'Publishing Pipeline takes a paper from git push to a live, indexable page on papers.luisabrantes.dev. I write one bilingual HTML file, and everything after that is automatic.',
            'On every push, GitHub Actions runs a privacy guard that fails the build if a forbidden term appears in the public folder. A build step then splits the paper into one page per language with canonical, hreflang, Open Graph and JSON-LD tags, and regenerates the index pages, sitemap.xml and robots.txt, taking publication dates from git history. Vercel deploys only the papers folder of the monorepo, on a subdomain routed through Cloudflare DNS.',
            'The write-up linked above documents each layer and the bugs I hit on the way.'
        ].join('\n\n'),
        technologies: [
            'GitHub Actions',
            'Vercel',
            'Bash',
            'Python',
            'Cloudflare DNS'
        ],
        category: 'Automation',
        demo: 'https://papers.luisabrantes.dev/en/publishing-pipeline',
        highlights: [
            'One push runs the privacy check, the SEO generation and the deploy',
            'Privacy guard in CI fails the build when a private term would be published',
            'One static page per language, with hreflang, canonical and structured data generated at build time',
            'Sitemap dates come from git history, so they cannot drift from the content'
        ]
    },
    {
        id: 13,
        slug: 'cyberteens',
        title: 'cyberTeens',
        context: 'IFSP extension course',
        team: true,
        year: '2026',
        shortDescription:
            'A website that teaches teenagers to recognize online scams, with a five-scenario chat simulator, built by a team of seven for an extension course at IFSP.',
        fullDescription: [
            'cyberTeens is a Portuguese-language site made for the Extension course at Instituto Federal de São Paulo (IFSP), taught by Professor Ana Paula Shiguemori. A guide explains what cybersecurity is, why it matters, how to protect yourself and how common scams work.',
            'The simulator puts the visitor in five situations: a fake bank message, fake tech support, a set of emails to classify as phishing or legitimate, a romance scam and a fake giveaway. Each stage offers a choice of replies and explains why the choice was safe or risky, and the run ends with a count of safe choices. The site is plain HTML, CSS and JavaScript with no build step.'
        ].join('\n\n'),
        role: 'Credited on the site as author and engineer. I own the repository and the deployment on my domain, added the romance-scam and fake-giveaway simulations, and wrote the SEO metadata, sitemap and structured data.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        category: 'Community Project',
        github: 'https://github.com/LuisAbrantes/cyberTeens',
        demo: 'https://cyberteens.luisabrantes.dev',
        highlights: [
            'Five scam simulations with 25 stages and feedback on every choice',
            'Six-section guide to cybersecurity and common scams, in Portuguese',
            'Static site with no framework and no build step',
            'Team of seven, deployed at cyberteens.luisabrantes.dev'
        ]
    },
    {
        id: 11,
        slug: 'brazil-wildfire',
        title: 'brazilWildfire',
        year: '2026',
        context: 'Learning project',
        shortDescription:
            'A Python pipeline and Streamlit dashboard over 30 days of satellite fire-hotspot data for Brazil from INPE. My first data project.',
        fullDescription: [
            "brazilWildfire downloads the monthly fire-hotspot files published by INPE, Brazil's space research institute, keeps the last 30 days, cleans them with pandas and aggregates them by state, day and biome. A Streamlit page then shows the totals, a daily series, the ten states with the most hotspots, the split by biome and a map.",
            "It was my first data project and my first project with Claude Code, which I set up as a tutor: the instructions in the repository tell it to work alongside me and explain each step, and the code keeps those explanations as comments."
        ].join('\n\n'),
        technologies: ['Python', 'pandas', 'Streamlit', 'Altair', 'Claude Code'],
        category: 'Data Project',
        github: 'https://github.com/LuisAbrantes/brazilWildfire',
        highlights: [
            'Three scripts with one job each: fetch, process, visualize',
            'Source: INPE monthly hotspot files, with 26,414 records in the committed 30-day snapshot',
            'Aggregations by state, day and biome, and a map sampled to 5,000 points',
            'Built with Claude Code configured as a tutor that explains each step'
        ]
    },
    {
        id: 4,
        slug: 'tutortime',
        title: 'TutorTime',
        context: 'Capstone project · IFSP',
        team: true,
        year: '2024–2025',
        shortDescription:
            'A directory of the peer-tutoring sessions at my school: students browse subjects and find sessions by day and room, and staff manage the schedule. My first full-stack application.',
        fullDescription: [
            'TutorTime lists the peer-tutoring sessions at IFSP Jacareí. Staff register subjects and sessions with day, time, room, tutor and teacher, and students browse a subject, filter its sessions and mark their interest. It started in 2024 as my capstone project, built with a small team as a server-rendered app on Express and Handlebars with Sequelize, first on MySQL and later on PostgreSQL.',
            'In 2025 we added a React and Vite client with a calendar view, sharing by QR code, WhatsApp and email, and an AI tutor chat on Gemini 2.0 Flash that asks how deep an answer the student wants before it explains.'
        ].join('\n\n'),
        role: 'I was the main contributor, with 98 of the 120 commits in the repository, and I started the React client.',
        technologies: [
            'Node.js',
            'Express.js',
            'Handlebars',
            'Sequelize',
            'PostgreSQL',
            'React',
            'Vite',
            'Gemini API'
        ],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/TutorTimeModel',
        highlights: [
            'Subjects and tutoring sessions with day, time, room, tutor and teacher',
            'Express and Handlebars app on PostgreSQL through Sequelize',
            'React client with a calendar view and sharing by QR code, WhatsApp and email',
            'AI tutor chat on Gemini 2.0 Flash',
            '120 commits by a small team between 2024 and 2025'
        ]
    },
    {
        id: 6,
        slug: 'webdevclasses',
        title: 'WebDevClasses',
        context: 'Volunteer project · IFSP',
        year: '2025',
        shortDescription:
            'A site where I published the exercises and examples from each web development class of my technical course, so classmates who missed a lecture could catch up.',
        fullDescription: [
            'As class representative during the first semester of 2025, I kept a public record of our web development course at IFSP for my class of 40. After each class I added the exercises and examples from that week: HTML, CSS, responsive layouts, JavaScript, DOM manipulation and API calls with Axios.',
            'The repository holds 13 class folders and 5 assessments, added weekly from February to June 2025 over 71 commits. A React and Vite index page lists the classes with search, and each class is a set of plain HTML, CSS and JavaScript pages. Our instructors recommended it to the class as a study resource.'
        ].join('\n\n'),
        technologies: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
        category: 'Community Project',
        github: 'https://github.com/LuisAbrantes/WebDevClasses2025',
        demo: 'https://webdevclasses.vercel.app/',
        highlights: [
            '13 classes and 5 assessments published weekly over one semester',
            'React index with search over plain HTML, CSS and JavaScript class pages',
            'Kept up as class representative for a class of 40'
        ]
    },
    {
        id: 3,
        slug: 'quickreadme',
        title: 'QuickReadme',
        context: 'Open source Python tool',
        year: '2024',
        shortDescription:
            'A small Python command-line tool that asks six questions and writes a README.md from a template. My most starred repository.',
        fullDescription:
            'QuickReadme is a command-line tool written with Click and Jinja2. Run it inside a project and it asks for the title, description, installation, usage, contribution notes and license, then renders a README.md from a template. It installs from a clone of the repository and is released under the MIT license. With 21 stars it is my most starred repository on GitHub.',
        technologies: ['Python', 'Click', 'Jinja2'],
        category: 'Python Package',
        github: 'https://github.com/LuisAbrantes/QuickReadme',
        highlights: [
            'Six interactive prompts, one generated README.md',
            '21 stars on GitHub',
            'Packaged with setuptools under the MIT license'
        ]
    },
    {
        id: 7,
        slug: 'history-test-study-portal',
        title: 'History Test Study Portal',
        context: 'Volunteer project',
        year: '2025',
        shortDescription:
            'A study site for a history make-up exam at another school, built in one afternoon: readings, flashcards, quizzes and a glossary across four topics.',
        fullDescription: [
            'I built this in one afternoon for a history make-up exam at another school. It covers four topics (Napoleon, Liberalism, the Liberal Revolutions and Socialism) in 16 subtopics, each with a reading, a set of flashcards and a quiz with explanations, plus a glossary that shows definitions on hover.',
            'It is a static React and TypeScript app in strict mode, with the content kept in JSON files apart from the components, keyboard shortcuts for the flashcards and a print layout.'
        ].join('\n\n'),
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        category: 'Community Project',
        github: 'https://github.com/LuisAbrantes/HistoryTestStudy',
        demo: 'https://history-test-study.vercel.app',
        highlights: [
            '4 topics, 16 subtopics, 40 flashcards and 20 quiz questions with explanations',
            'Glossary of 20 terms shown as tooltips across the readings',
            'Strict TypeScript, content separated from components, keyboard shortcuts and print styles',
            'Written and shipped in a single afternoon'
        ]
    }
];

/** Look up a project by its URL slug. */
export const getProject = (slug: string | undefined): Project | undefined =>
    projects.find(p => p.slug === slug);
