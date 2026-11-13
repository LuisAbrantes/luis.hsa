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
        'Software engineer specializing in agent harness engineering, autonomous LLM agents, RAG systems and production full-stack systems. Google Student Ambassador (2026) and Computer Science student at Instituto Federal de São Paulo (IFSP).',
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
        'Autonomous AI Agents',
        'LLM Orchestration',
        'Retrieval-Augmented Generation (RAG)',
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
        'Brazilian Olympiad of Informatics (OBI) 2024, advanced through 2 of 3 national phases',
        'UNICAMP FIFE (Física nas Férias) selection: Quantum Computing (2025) and Theoretical Cosmology (2024)',
        'National English Language Olympiad (OBLI) gold medal',
        'Invited speaker (3 times) at the JECET Congress, IFSP'
    ]
} as const;

export const PAPERS_URL = 'https://papers.luisabrantes.dev';

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
