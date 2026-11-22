/**
 * Site-wide identity facts. Single source of truth for <head> metadata and
 * JSON-LD (see `src/lib/seo.ts`). Edit here, never in generated HTML.
 */
export const SITE_URL = 'https://luisabrantes.dev';

export const PERSON = {
    name: 'Luis Henrique Abrantes',
    givenName: 'Luis Henrique',
    familyName: 'Abrantes',
    alternateNames: [
        'Luis Abrantes',
        'Luis Henrique dos Santos Abrantes',
        'luis.hsa'
    ],
    jobTitle: 'Software Engineer & Applied AI Developer',
    description:
        'Software engineer building LLM agents, agent harnesses and full-stack products. Former AI and software engineering intern at Kaffa Tech, Google Student Ambassador (2026) and Computer Science student at Instituto Federal de São Paulo (IFSP).',
    /** First-person summary shown on the home page. */
    statement:
        'I build LLM agents and the full-stack products around them, and I write about agent harness engineering: the structured context that makes an agent reliable.',
    email: 'luis.hsa@gmail.com',
    /** Square portrait served from /public. */
    image: '/images/luis-henrique-abrantes.jpg',
    /** Profiles that identify the same person (schema.org sameAs). */
    profiles: [
        'https://github.com/LuisAbrantes',
        'https://www.linkedin.com/in/luishenriqueabrantes/',
        'https://devpost.com/LuisAbrantes',
        'https://instagram.com/luis.hsa'
    ],
    knowsAbout: [
        'Agent Harness Engineering',
        'LLM Agents',
        'LLM Tool Calling',
        'Context Engineering',
        'Full-Stack Web Development',
        'TypeScript',
        'React',
        'Python',
        'FastAPI',
        'LangGraph',
        'Node.js',
        'PostgreSQL',
        'Supabase'
    ],
    awards: [
        'Google Student Ambassador (2026 Global Cohort)',
        'UC Berkeley AI Hackathon (Cal Hacks) 2025 participant, built GirlTalk AI',
        'PennApps XXV (University of Pennsylvania) 2024 participant, built SpeakScribe',
        'Brazilian Olympiad in Informatics (OBI) 2024, qualified for the second of three phases',
        'UNICAMP FIFE (Física nas Férias) selection: Quantum Computing (2025) and Theoretical Cosmology (2024)',
        'National English Language Olympiad (OBLI) 2025, gold medal',
        'Invited speaker, three talks including the JECET Congress at IFSP'
    ]
} as const;

/**
 * What Luis is looking for and where he is. Shown on Home, About and Contact.
 * Keep it to what he has stated himself.
 */
export const AVAILABILITY = {
    /** One full sentence, for leads and meta copy. */
    summary:
        'Open to internships and junior roles in software engineering and applied AI.',
    roles: 'Internships and junior roles in software engineering and applied AI',
    location: 'Brazil (UTC-3)',
    relocation: 'Open to relocating to the San Francisco Bay Area',
    languages: 'English and Portuguese'
} as const;

/** The short list a visitor should see first. Shown on the home page. */
export const CREDENTIALS = [
    { title: 'Google Student Ambassador', detail: '2026 global cohort' },
    {
        title: 'Kaffa Tech',
        detail: 'AI & software engineering intern, 2026'
    },
    {
        title: 'UC Berkeley AI Hackathon',
        detail: 'Cal Hacks, Berkeley, CA, 2025'
    },
    { title: 'PennApps XXV', detail: 'University of Pennsylvania, 2024' },
    {
        title: 'Computer Science student',
        detail: 'B.S. at IFSP since 2026, GPA 8.92 out of 10'
    }
] as const;

/** One-page résumé. The PDF is generated from the /resume page (`npm run resume`). */
export const RESUME_PDF = '/luis-henrique-abrantes-resume.pdf';

/** Projects listed on the résumé, in order. Slugs from `projects.ts`. */
export const RESUME_PROJECTS = [
    'college-list-ai',
    'encantos-do-forno',
    'girltalk-ai',
    'harness-study'
] as const;

export const PAPERS_URL = 'https://papers.luisabrantes.dev';
/** English index of the papers hub. This site is in English, so links go here. */
export const PAPERS_EN_URL = `${PAPERS_URL}/en`;

/** Default social card (1200x630), served from /public. */
export const DEFAULT_OG_IMAGE = {
    path: '/og.jpg',
    width: 1200,
    height: 630,
    alt: 'Luis Henrique Abrantes, Software Engineer & Applied AI Developer'
} as const;

/** Third-party pages about Luis (schema.org subjectOf). */
export const PRESS = [
    {
        url: 'https://jcr.ifsp.edu.br/index.php/ultimas-noticias/2381-alunos-do-curso-tecnico-em-informatica-do-campus-jacarei-sao-aprovados-para-a-segunda-fase-da-olimpiada-brasileira-de-informatica',
        publisher: 'Instituto Federal de São Paulo (IFSP), Jacareí campus'
    }
] as const;
