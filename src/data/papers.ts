import { PAPERS_URL } from '@/data/site';

/**
 * Teasers for the articles on the Papers hub. The hub is a separate site: the
 * portfolio links to it and never hosts or copies the articles themselves.
 * Titles and summaries follow the published English versions.
 */
export const papers = [
    {
        title: 'Harnesses: Building Structured Context for AI Agents',
        summary:
            'The patterns that turn a generic language model into a specialized, repeatable and versioned assistant, with concrete examples of skills, chaining, memory and privacy.',
        topics: 'Architecture · Applied AI',
        url: `${PAPERS_URL}/en/harness-study`
    },
    {
        title: 'The Publishing Pipeline: from git push to Google, Hands-Off',
        summary:
            'How a single git push handles deploy, domain, privacy checks, SEO and indexing for my technical writing, layer by layer, with the real bugs along the way.',
        topics: 'Infrastructure · CI/CD · SEO',
        url: `${PAPERS_URL}/en/publishing-pipeline`
    }
] as const;
