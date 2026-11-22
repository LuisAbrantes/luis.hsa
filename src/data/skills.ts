import type { SkillGroup } from '@/types';

/**
 * Technologies shown on the About page. Rule: list a tool only if it is in
 * code Luis wrote for a project on this site. Parts of team projects that
 * teammates built (for example Firestore in GirlTalk AI) stay out.
 */
export const skillGroups: SkillGroup[] = [
    {
        title: 'Languages',
        items: ['TypeScript', 'Python', 'JavaScript', 'SQL', 'HTML and CSS']
    },
    {
        title: 'AI and agents',
        items: [
            'Tool-calling LLM agents',
            'LangGraph',
            'Groq, Perplexity and Gemini APIs',
            'Agent harnesses',
            'Claude Code'
        ]
    },
    {
        title: 'Backend and data',
        items: [
            'FastAPI',
            'Node.js and Express',
            'PostgreSQL (Supabase)',
            'SQLModel and Alembic',
            'Sequelize',
            'pandas'
        ]
    },
    {
        title: 'Frontend',
        items: ['React', 'React Router', 'Vite', 'Tailwind CSS']
    },
    {
        title: 'Delivery',
        items: [
            'Git and GitHub Actions',
            'Vercel and Edge Functions',
            'Streamlit'
        ]
    }
];
