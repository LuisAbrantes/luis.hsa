import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import { Briefcase, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { badgeAchievements, highlightAchievements } from '@/data/achievements';
import { experiences } from '@/data/experience';
import type { GithubAchievement } from '@/types';

const About = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const gpaStyle = searchParams.get('gpaStyle') || '1'; // '1' (Editorial Lockup), '2' (Dual Stat Cards), '3' (Terminal Spec Line)

    const [selectedAchievement, setSelectedAchievement] =
        useState<GithubAchievement | null>(null);

    return (
        <div className="about-root bg-[#07080b] text-[#EDEDED] min-h-screen pt-28 sm:pt-36 pb-28 px-4 sm:px-6 lg:px-8 font-sans selection:bg-zinc-700 selection:text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-16">
                    
                    {/* ========================================================
                        LEFT COLUMN: GITHUB IDENTITY & ACHIEVEMENTS SIDEBAR
                       ======================================================== */}
                    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 flex flex-col items-center md:items-start space-y-6">
                        
                        {/* Circular Avatar at GitHub HQ */}
                        <div className="relative group">
                            <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl bg-zinc-950 group-hover:border-zinc-600 transition-all duration-300">
                                <img
                                    src="https://avatars.githubusercontent.com/u/24616338?v=4"
                                    alt="Luis Henrique Abrantes at GitHub"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Name & Handle */}
                        <div className="text-center md:text-left space-y-0.5">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                Luis Henrique Abrantes
                            </h2>
                            <a
                                href="https://github.com/LuisAbrantes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-mono text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                            >
                                <span>@LuisAbrantes</span>
                                <ExternalLink size={12} />
                            </a>
                        </div>

                        {/* GitHub Achievements Badges */}
                        <div className="w-full space-y-3 pt-2">
                            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest text-center md:text-left font-semibold">
                                GITHUB ACHIEVEMENTS
                            </h3>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {badgeAchievements.map(achievement => (
                                    <div
                                        key={achievement.id}
                                        className="group relative cursor-pointer"
                                        onClick={() =>
                                            setSelectedAchievement(achievement)
                                        }
                                    >
                                        <div className="w-11 h-11 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-zinc-500 group-hover:bg-zinc-900 group-hover:scale-110 shadow-lg">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.name}
                                                className="w-7 h-7 object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Highlight Badges */}
                        <div className="flex flex-col gap-2.5 w-full pt-1">
                            {highlightAchievements.map(achievement => (
                                <div
                                    key={achievement.id}
                                    className="group cursor-pointer"
                                    onClick={() =>
                                        setSelectedAchievement(achievement)
                                    }
                                >
                                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800/90 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900">
                                        <div className="text-zinc-400 group-hover:text-white transition-colors">
                                            {achievement.icon}
                                        </div>
                                        <span className="font-medium text-xs sm:text-sm text-zinc-300 group-hover:text-white transition-colors">
                                            {achievement.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </aside>


                    {/* ========================================================
                        RIGHT COLUMN: ABOUT BIO, EXPERIENCE, ACADEMIC & PRINCIPLES
                       ======================================================== */}
                    <main className="flex-1 w-full space-y-16">
                        
                        {/* 1. Origin & Core Identity (With Bold Highlights and Father Mentorship) */}
                        <section className="space-y-4">
                            <div className="inline-flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-widest uppercase font-semibold">
                                    ABOUT & PHILOSOPHY
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                                Software Engineer focused on Agent Harnesses & Applied AI.
                            </h1>

                            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed pt-2">
                                <p>
                                    I started programming at age nine, guided by curiosity and mentored by my father, who is also a software engineer. Over the past decade, that early foundation grew through an <strong className="text-white font-semibold">8-year merit-funded technical education</strong> at Instituto Federal de São Paulo (IFSP) and hands-on production engineering into a specialized focus on <strong className="text-white font-semibold">Agent Harness Engineering</strong>, <strong className="text-white font-semibold">LLM Agents</strong>, and <strong className="text-white font-semibold">production software systems</strong>.
                                </p>
                            </div>

                            <div className="pt-2 flex items-center gap-4 flex-wrap">
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-sm sm:text-base shadow-md"
                                >
                                    <span>Explore Projects</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => navigate('/achievements')}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-all text-sm sm:text-base"
                                >
                                    <span>View Honors & Certificates</span>
                                </button>
                            </div>
                        </section>


                        {/* 2. Professional Experience (Card-Free Editorial Spread) */}
                        <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-emerald-400" />
                                <h2 className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                                    WORK EXPERIENCE
                                </h2>
                            </div>

                            <div className="space-y-10">
                                {experiences.map(exp => (
                                    <div key={`${exp.company}-${exp.role}`} className="space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-base text-zinc-400 font-light">
                                                    <strong className="text-white font-medium">{exp.company}</strong>
                                                    {exp.location && ` • ${exp.location}`}
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
                                                    <li key={highlight} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>


                        {/* ========================================================
                            3. ACADEMIC PROFILE & GPAs (3 High-Craft Styles)
                           ======================================================== */}
                        <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                            <div className="flex items-center gap-2">
                                <FaGraduationCap className="w-5 h-5 text-amber-400" />
                                <h2 className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                                    ACADEMIC PROFILE & 8-YEAR PUBLIC MERIT
                                </h2>
                            </div>

                            {/* ----------------------------------------------------
                                STYLE 1: EDITORIAL METRIC LOCKUP (Linear/Vercel)
                               ---------------------------------------------------- */}
                            {gpaStyle === '1' && (
                                <div className="space-y-6">
                                    
                                    {/* Item 1: Computer Science */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 pb-6 border-b border-zinc-900">
                                        {/* Stat Callout */}
                                        <div className="flex sm:flex-col items-baseline sm:items-center justify-center p-3 sm:p-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-xl min-w-[120px] text-center shrink-0">
                                            <span className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 tracking-tight">
                                                8.92
                                            </span>
                                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider pl-2 sm:pl-0 sm:pt-0.5">
                                                CURRENT GPA
                                            </span>
                                        </div>
                                        {/* Context */}
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                                    B.S. in Computer Science (4-Year Degree)
                                                </h3>
                                                <span className="text-xs font-mono text-zinc-500">2026 – Present</span>
                                            </div>
                                            <p className="text-sm sm:text-base text-zinc-400 font-light">
                                                Instituto Federal de São Paulo (IFSP) • Public Federal Network
                                            </p>
                                            <p className="text-xs sm:text-sm text-zinc-500 font-light">
                                                • Admitted via highly competitive selective entrance exam (Vestibular). 100% tuition-free public education.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Item 2: Informatics Technician */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 pt-2">
                                        {/* Stat Callout */}
                                        <div className="flex sm:flex-col items-baseline sm:items-center justify-center p-3 sm:p-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 shadow-xl min-w-[120px] text-center shrink-0">
                                            <span className="text-2xl sm:text-3xl font-mono font-bold text-zinc-200 tracking-tight">
                                                8.34
                                            </span>
                                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider pl-2 sm:pl-0 sm:pt-0.5">
                                                GRADUATION GPA
                                            </span>
                                        </div>
                                        {/* Context */}
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                                    Integrated Technical High School in Informatics (4-Year Program)
                                                </h3>
                                                <span className="text-xs font-mono text-zinc-500">2022 – 2024</span>
                                            </div>
                                            <p className="text-sm sm:text-base text-zinc-400 font-light">
                                                Instituto Federal de São Paulo (IFSP) • Jacareí Campus
                                            </p>
                                            <p className="text-xs sm:text-sm text-zinc-500 font-light">
                                                • Completed Capstone Project (TutorTime full-stack platform) ahead of schedule during junior year.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {/* ----------------------------------------------------
                                STYLE 2: DUAL STAT CARDS (Apple Tech Specs)
                               ---------------------------------------------------- */}
                            {gpaStyle === '2' && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Card 1: CS */}
                                    <div className="p-6 rounded-2xl border border-zinc-800/90 bg-zinc-950/60 shadow-xl space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold block">
                                                    CURRENT DEGREE • GPA
                                                </span>
                                                <span className="text-4xl font-mono font-bold text-emerald-400 tracking-tight block mt-1">
                                                    8.92
                                                </span>
                                            </div>
                                            <span className="text-xs font-mono text-zinc-500">2026 – PRES</span>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white">B.S. in Computer Science</h4>
                                            <p className="text-xs text-zinc-400 font-light mt-1">Instituto Federal de São Paulo (IFSP)</p>
                                            <p className="text-xs text-zinc-500 font-light mt-1">• 4-year undergraduate degree, 100% government-funded merit admission.</p>
                                        </div>
                                    </div>

                                    {/* Card 2: Tech High School */}
                                    <div className="p-6 rounded-2xl border border-zinc-800/90 bg-zinc-950/60 shadow-xl space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold block">
                                                    GRADUATION GPA
                                                </span>
                                                <span className="text-4xl font-mono font-bold text-zinc-200 tracking-tight block mt-1">
                                                    8.34
                                                </span>
                                            </div>
                                            <span className="text-xs font-mono text-zinc-500">2022 – 2024</span>
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white">Informatics Technician</h4>
                                            <p className="text-xs text-zinc-400 font-light mt-1">Instituto Federal de São Paulo (IFSP)</p>
                                            <p className="text-xs text-zinc-500 font-light mt-1">• 4-year integrated program, completed Capstone Project ahead of schedule.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ----------------------------------------------------
                                STYLE 3: TERMINAL SPEC LINE (Open Minimalist)
                               ---------------------------------------------------- */}
                            {gpaStyle === '3' && (
                                <div className="space-y-8 font-mono">
                                    <div className="space-y-1.5 pb-6 border-b border-zinc-900">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <span className="text-base font-bold text-white">
                                                IFSP // B.S. IN COMPUTER SCIENCE (4-YR)
                                            </span>
                                            <span className="text-sm font-semibold text-emerald-400">
                                                GPA 8.92 [CURRENT]
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 font-sans font-light">
                                            <span>Instituto Federal de São Paulo • Competitive Public Admission</span>
                                            <span className="font-mono text-zinc-500">2026 – PRESENT</span>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                            <span className="text-base font-bold text-white">
                                                IFSP // INFORMATICS TECHNICIAN (4-YR)
                                            </span>
                                            <span className="text-sm font-semibold text-zinc-300">
                                                GPA 8.34 [GRADUATED]
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 font-sans font-light">
                                            <span>Instituto Federal de São Paulo • Capstone Project Finished in Jr. Year</span>
                                            <span className="font-mono text-zinc-500">2022 – 2024</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </section>


                        {/* 4. Engineering Principles */}
                        <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xs sm:text-sm font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                                    ENGINEERING PRINCIPLES
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <span className="text-xs font-mono text-emerald-400 font-semibold block">HARNESSES & TOOLS</span>
                                    <h3 className="text-base font-semibold text-white">Harnesses Over Raw Prompts</h3>
                                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                        Reliable autonomous systems depend on tight feedback loops, structured tool schemas, and verifiable guardrails.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs font-mono text-blue-400 font-semibold block">ARCHITECTURAL DEPTH</span>
                                    <h3 className="text-base font-semibold text-white">Systems Under Load</h3>
                                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                        Designing backend services and agent orchestrations that scale reliably with predictable latency and clean telemetry.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs font-mono text-purple-400 font-semibold block">HIGH CRAFT & UX</span>
                                    <h3 className="text-base font-semibold text-white">Precision & Ergonomics</h3>
                                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                        The best developer tools and AI interfaces feel invisible, intuitive, and blisteringly fast.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </main>

                </div>
            </div>

            {/* ========================================================
                FLOATING PROTOTYPE SWITCHER (GPA Styles)
               ======================================================== */}
            <div className="fixed bottom-5 inset-x-0 mx-auto w-fit z-50 flex items-center gap-2 p-1.5 rounded-full bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl">
                <span className="text-[10px] font-mono text-zinc-400 pl-3 pr-1 hidden sm:inline">GPA STYLE:</span>
                <button
                    onClick={() => setSearchParams({ gpaStyle: '1' })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        gpaStyle === '1'
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'text-zinc-400 hover:text-white'
                    }`}
                >
                    1. Metric Lockup (Recomendado) ⭐
                </button>
                <button
                    onClick={() => setSearchParams({ gpaStyle: '2' })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        gpaStyle === '2'
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'text-zinc-400 hover:text-white'
                    }`}
                >
                    2. Dual Cards
                </button>
                <button
                    onClick={() => setSearchParams({ gpaStyle: '3' })}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                        gpaStyle === '3'
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'text-zinc-400 hover:text-white'
                    }`}
                >
                    3. Terminal Spec
                </button>
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
                                    className="w-full h-full object-contain"
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
        </div>
    );
};

export default About;
