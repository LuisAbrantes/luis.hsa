import quickreadme from '@/assets/projects/quickreadme.png';
import tutortime from '@/assets/projects/tutortime.png';
import webdevclasses from '@/assets/projects/webDevClasses.png';
import historytestsite from '@/assets/projects/historyTestStudyPortal.png';
import speakScribe from '@/assets/projects/speakScribe.png';
import girlTalkAi from '@/assets/projects/girlTalkAI.png';
import encantosDoForno from '@/assets/projects/encantosDoForno.png';
import collegeListAI from '@/assets/projects/collegeListAI.png';
import harnessStudy from '@/assets/projects/harnessStudy.png';
import publishingPipeline from '@/assets/projects/publishingPipeline.png';
import brazilWildfire from '@/assets/projects/brazilWildfire.png';
import activationIntelligence from '@/assets/projects/activationIntelligence.png';
import cyberTeens from '@/assets/projects/cyberTeens.png';

import encantosScreen from '@/assets/projects/screens/encantos-do-forno.webp';
import webdevScreen from '@/assets/projects/screens/webdevclasses.webp';
import cyberTeensScreen from '@/assets/projects/screens/cyberteens.webp';
import historyScreen from '@/assets/projects/screens/history-test-study-portal.webp';
import harnessScreen from '@/assets/projects/screens/harness-study.webp';
import pipelineScreen from '@/assets/projects/screens/publishing-pipeline.webp';
import speakScribeScreen from '@/assets/projects/screens/speakscribe.webp';

/** Cover art for each project, keyed by the project's slug. */
export const projectImages: Record<string, string> = {
    'college-list-ai': collegeListAI,
    'girltalk-ai': girlTalkAi,
    speakscribe: speakScribe,
    'harness-study': harnessStudy,
    'publishing-pipeline': publishingPipeline,
    'brazil-wildfire': brazilWildfire,
    'activation-intelligence': activationIntelligence,
    'encantos-do-forno': encantosDoForno,
    quickreadme,
    webdevclasses,
    cyberteens: cyberTeens,
    'history-test-study-portal': historytestsite,
    tutortime
};

export interface ProjectScreenshot {
    src: string;
    width: number;
    height: number;
    /** What the picture shows, for the alt text. */
    alt: string;
    /** Where the picture comes from, shown under it. */
    caption: string;
}

/**
 * Real captures of the running product, keyed by slug. A project without one
 * falls back to its cover art. Add a capture here only when it shows the
 * actual interface (1280px wide WebP, under ~100 KB).
 */
export const projectScreenshots: Record<string, ProjectScreenshot> = {
    speakscribe: {
        src: speakScribeScreen,
        width: 1280,
        height: 596,
        alt: 'SpeakScribe home page, with the headline "Your learning in multiple forms" and cards for visual, auditory and kinesthetic study',
        caption: "The app's home page, from the team's Devpost gallery."
    },
    'harness-study': {
        src: harnessScreen,
        width: 1280,
        height: 800,
        alt: 'The article "Harnesses: Building Structured Context for Agents" on papers.luisabrantes.dev',
        caption: 'The public write-up on papers.luisabrantes.dev.'
    },
    'encantos-do-forno': {
        src: encantosScreen,
        width: 1280,
        height: 800,
        alt: 'Encantos do Forno landing page, with links to the menu, reservations and the queue',
        caption: 'The landing page of the customer site.'
    },
    'publishing-pipeline': {
        src: pipelineScreen,
        width: 1280,
        height: 800,
        alt: 'The article "The Publishing Pipeline: from git push to Google, Hands-Off" on papers.luisabrantes.dev',
        caption: 'A page published by the pipeline.'
    },
    cyberteens: {
        src: cyberTeensScreen,
        width: 1280,
        height: 800,
        alt: 'cyberTeens scam simulator menu with five scenarios: bank scam, fake tech support, email analysis, romance scam and fake giveaway',
        caption: 'The simulator menu on the live site.'
    },
    webdevclasses: {
        src: webdevScreen,
        width: 1280,
        height: 800,
        alt: 'WebDevClasses home page, titled "Web Development Classes at Instituto Federal de Ciências e Educação de São Paulo"',
        caption: 'The home page of the live site.'
    },
    'history-test-study-portal': {
        src: historyScreen,
        width: 1280,
        height: 800,
        alt: 'History Test Study Portal home page, listing the four topics and study tips in Portuguese',
        caption: 'The home page of the live site.'
    }
};

/**
 * Image for social cards and structured data. It stays the PNG cover: link
 * previews on some platforms still do not render WebP reliably.
 */
export const projectShareImage = (slug: string): string => projectImages[slug];
