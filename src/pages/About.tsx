import { useState } from 'react';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Page from '@/components/layout/Page';
import Eyebrow from '@/components/ui/Eyebrow';
import Modal from '@/components/ui/Modal';
import { badgeAchievements, highlightAchievements } from '@/data/achievements';
import { education } from '@/data/education';
import { experiences } from '@/data/experience';
import { AVAILABILITY, PAPERS_EN_URL, PERSON } from '@/data/site';
import { skillGroups } from '@/data/skills';
import { CONTACT_EMAIL } from '@/data/socials';
import { breadcrumbNode, pageMeta, webPageNode } from '@/lib/seo';
import type { GithubAchievement } from '@/types';

const TITLE = 'About Luis Henrique Abrantes | Software Engineer & Applied AI';

export const meta: MetaFunction = () =>
    pageMeta({
        title: TITLE,
        description:
            'Luis Henrique Abrantes: coding since age nine, software engineer intern on the AI team at Kaffa Tech, Computer Science at IFSP, focused on agent harnesses.',
        path: '/about',
        ogType: 'profile',
        jsonLd: [
            webPageNode('AboutPage', '/about', TITLE),
            breadcrumbNode([{ name: 'About', path: '/about' }])
        ]
    });

const inlineLink =
    'text-white font-medium underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors';

const About = () => {
    const [selectedAchievement, setSelectedAchievement] =
        useState<GithubAchievement | null>(null);

    return (
        <Page className="about-root">
                {/* Phone: identity, then the text, then the GitHub badges.
                    Desktop: identity and badges stack in the left column. */}
                <div className="flex flex-col gap-12 md:grid md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[18rem_minmax(0,1fr)] md:grid-rows-[auto_1fr] md:gap-x-12 lg:gap-x-16 md:gap-y-8 md:items-start">

                    {/* ========================================================
                        LEFT COLUMN: identity, contact, GitHub achievements
                       ======================================================== */}
                    <aside className="order-1 md:col-start-1 md:row-start-1 w-full flex flex-col items-center md:items-start space-y-6">

                        <div className="w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-950">
                            <img
                                src="/images/luis-abrantes-github-avatar.jpg"
                                alt="Luis Henrique Abrantes at GitHub"
                                width={192}
                                height={192}
                                draggable={false}
                                className="w-full h-full object-cover select-none pointer-events-none"
                            />
                        </div>

                        <div className="text-center md:text-left space-y-1">
                            <p className="text-xl font-bold text-white tracking-tight">
                                {PERSON.name}
                            </p>
                            <p className="text-sm text-zinc-400 font-light">
                                {PERSON.jobTitle}
                            </p>
                            <p className="text-xs font-mono text-zinc-500 pt-1">
                                {AVAILABILITY.location}
                            </p>
                        </div>

                        <ul className="w-full text-sm border-t border-zinc-900">
                            <li className="border-b border-zinc-900">
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="flex items-center justify-between py-3 text-zinc-300 hover:text-white transition-colors"
                                >
                                    <span>{CONTACT_EMAIL}</span>
                                </a>
                            </li>
                            <li className="border-b border-zinc-900">
                                <a
                                    href="https://github.com/LuisAbrantes"
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                    className="flex items-center justify-between py-3 text-zinc-300 hover:text-white transition-colors"
                                >
                                    <span>github.com/LuisAbrantes</span>
                                    <ExternalLink size={13} aria-hidden="true" className="text-zinc-600" />
                                </a>
                            </li>
                            <li className="border-b border-zinc-900">
                                <a
                                    href="https://www.linkedin.com/in/luishenriqueabrantes/"
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                    className="flex items-center justify-between py-3 text-zinc-300 hover:text-white transition-colors"
                                >
                                    <span>linkedin.com/in/luishenriqueabrantes</span>
                                    <ExternalLink size={13} aria-hidden="true" className="text-zinc-600" />
                                </a>
                            </li>
                        </ul>

                    </aside>


                    {/* ========================================================
                        RIGHT COLUMN: bio, experience, education, skills
                       ======================================================== */}
                    <main className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 w-full min-w-0 space-y-16">

                        <section className="space-y-5">
                            <Eyebrow>About</Eyebrow>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                                Software engineer focused on agent harnesses and applied AI.
                            </h1>

                            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed pt-1 max-w-3xl">
                                <p>
                                    I started programming at nine, guided by curiosity and by my father, who is also a software engineer. Ten years on, I am studying Computer Science at Instituto Federal de São Paulo (IFSP), a tuition-free federal institute that admits by competitive public exam.
                                </p>
                                <p>
                                    My work is applied AI: LLM agents and the structured context that makes them reliable. As an intern at Kaffa Tech I built tools and on-demand skill generation for an AI agent platform. On my own I built{' '}
                                    <Link to="/projects/college-list-ai" className={inlineLink}>
                                        College List AI
                                    </Link>
                                    , and I write about agent harnesses on{' '}
                                    <a href={PAPERS_EN_URL} target="_blank" rel="noopener noreferrer" className={inlineLink}>
                                        Papers
                                    </a>
                                    .
                                </p>
                                <p>
                                    {AVAILABILITY.summary} I am based in {AVAILABILITY.location}.
                                </p>
                            </div>

                            <div className="pt-2 flex items-center gap-3 flex-wrap">
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors text-sm sm:text-base"
                                >
                                    <span>View projects</span>
                                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                                <Link
                                    to="/resume"
                                    className="inline-flex items-center px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Résumé
                                </Link>
                                <Link
                                    to="/achievements"
                                    className="inline-flex items-center px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Honors and certificates
                                </Link>
                            </div>
                        </section>


                        {/* Experience */}
                        <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                            <Eyebrow as="h2" tone="muted">
                                Work experience
                            </Eyebrow>

                            <div className="space-y-10">
                                {experiences.map(exp => (
                                    <div key={`${exp.company}-${exp.role}`} className="space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-base text-zinc-400 font-light">
                                                    {exp.url ? (
                                                        <a
                                                            href={exp.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={inlineLink}
                                                        >
                                                            {exp.company}
                                                        </a>
                                                    ) : (
                                                        <strong className="text-white font-medium">
                                                            {exp.company}
                                                        </strong>
                                                    )}
                                                    {exp.location && ` · ${exp.location}`}
                                                </p>
                                            </div>
                                            <span className="text-xs sm:text-sm font-mono text-zinc-500 whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-3xl">
                                            {exp.description}
                                        </p>

                                        {exp.highlights && exp.highlights.length > 0 && (
                                            <ul className="space-y-2 pt-1 max-w-3xl">
                                                {exp.highlights.map(highlight => (
                                                    <li key={highlight} className="flex items-start gap-3 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                                                        <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* Education */}
                        <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                            <Eyebrow as="h2" tone="muted">
                                Education
                            </Eyebrow>

                            <div>
                                {education.map((item, index) => (
                                    <div
                                        key={item.degree}
                                        className={`grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-4 ${
                                            index > 0 ? 'mt-8 pt-8 border-t border-zinc-900' : ''
                                        }`}
                                    >
                                        <div className="sm:col-span-9 space-y-2">
                                            <div className="flex items-baseline gap-3 flex-wrap">
                                                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                                    {item.degree}
                                                </h3>
                                                <span className="text-xs sm:text-sm font-mono text-zinc-500">
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className="text-sm sm:text-base text-zinc-400 font-light">
                                                {item.school}
                                            </p>
                                            {item.notes.map(note => (
                                                <p key={note} className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                                                    {note}
                                                </p>
                                            ))}
                                        </div>
                                        <div className="sm:col-span-3 sm:text-right">
                                            <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight block">
                                                {item.gpa}
                                            </span>
                                            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                                                {item.gpaLabel}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* Skills */}
                        <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                            <div className="space-y-3">
                                <Eyebrow as="h2" tone="muted">
                                    Tools I have shipped with
                                </Eyebrow>
                                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
                                    Every item is in code I wrote for a project on this site.
                                </p>
                            </div>

                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                                {skillGroups.map(group => (
                                    <div key={group.title} className="space-y-2">
                                        <dt className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                            {group.title}
                                        </dt>
                                        <dd className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                                            {group.items.join(', ')}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                    </main>

                    {/* GitHub achievements */}
                    <section className="order-3 md:col-start-1 md:row-start-2 w-full space-y-3">
                        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest text-center md:text-left font-semibold">
                            GitHub achievements
                        </h2>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            {badgeAchievements.map(achievement => (
                                <button
                                    type="button"
                                    key={achievement.id}
                                    aria-label={`${achievement.name}: view details`}
                                    className="group relative cursor-pointer"
                                    onClick={() =>
                                        setSelectedAchievement(achievement)
                                    }
                                >
                                    <div className="w-11 h-11 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-500 group-hover:bg-zinc-900 group-hover:scale-110">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.name}
                                            draggable={false}
                                            className="w-7 h-7 object-contain opacity-85 group-hover:opacity-100 transition-opacity select-none pointer-events-none"
                                        />
                                    </div>
                                </button>
                            ))}
                        </div>

                        <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 pt-1">
                            {highlightAchievements.map(achievement => (
                                <li key={achievement.id}>
                                    <button
                                        type="button"
                                        className="text-xs font-mono text-zinc-500 hover:text-white transition-colors cursor-pointer"
                                        onClick={() =>
                                            setSelectedAchievement(achievement)
                                        }
                                    >
                                        {achievement.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>

            {/* Achievement Modal */}
            <Modal
                isOpen={selectedAchievement !== null}
                onClose={() => setSelectedAchievement(null)}
                className="w-full max-w-sm p-8 bg-zinc-950 border border-zinc-800 rounded-2xl"
                labelledBy="achievement-title"
            >
                {selectedAchievement && (
                    <>
                        {selectedAchievement.image && (
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center p-4">
                                <img
                                    src={selectedAchievement.image}
                                    alt={selectedAchievement.name}
                                    draggable={false}
                                    className="w-full h-full object-contain select-none pointer-events-none"
                                />
                            </div>
                        )}
                        <h3
                            id="achievement-title"
                            className="text-xl font-semibold text-white mb-3 text-center"
                        >
                            {selectedAchievement.name}
                        </h3>
                        <p className="mb-8 text-sm text-zinc-400 text-center font-light leading-relaxed">
                            {selectedAchievement.description}
                        </p>
                        <a
                            href="https://github.com/LuisAbrantes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors text-sm"
                        >
                            View GitHub Profile
                        </a>
                    </>
                )}
            </Modal>
        </Page>
    );
};

export default About;
