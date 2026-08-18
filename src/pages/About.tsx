import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaTrophy, FaCode, FaUserAlt } from 'react-icons/fa';
import { Briefcase, ExternalLink, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { badgeAchievements, highlightAchievements } from '@/data/achievements';
import { experiences } from '@/data/experience';
import type { GithubAchievement } from '@/types';
import meOne from '@/assets/home/meOne.png';

const techStack: { category: string; items: string[] }[] = [
    {
        category: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind']
    },
    {
        category: 'Backend',
        items: [
            'Node.js',
            'Python',
            'FastAPI',
            'SQL',
            'Relational Databases',
            'Supabase'
        ]
    },
    {
        category: 'Tools',
        items: [
            'Git/GitHub',
            'GitHub Pages',
            'Vercel',
            'Railway',
            'Render',
            'Linux Terminal'
        ]
    },
    {
        category: 'Languages',
        items: ['JavaScript', 'TypeScript', 'Python', 'SQL']
    }
];

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentLayout = searchParams.get('layout') || 'new'; // 'new' (Minimalist Editorial) vs 'legacy' (Anterior)
    const navigate = useNavigate();

    const [selectedAchievement, setSelectedAchievement] =
        useState<GithubAchievement | null>(null);

    return (
        <div className="about-root bg-[#07080b] text-[#EDEDED] min-h-screen pt-28 sm:pt-32 pb-28 px-4 sm:px-6 lg:px-8 font-sans selection:bg-zinc-700 selection:text-white">
            
            {/* ========================================================
                PROTOTYPE LAYOUT 1: MINIMALIST EDITORIAL (Novo & Sem Cards)
               ======================================================== */}
            {currentLayout === 'new' && (
                <div className="max-w-5xl mx-auto space-y-20">
                    
                    {/* Header & Hero Bio Spread */}
                    <section className="space-y-12">
                        <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>BACKGROUND & IDENTITY</span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                                From self-taught roots at age 9 to autonomous AI agents.
                            </h1>
                        </div>

                        {/* Asymmetric 2-Column Spread (Photo + Narrative) */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-4">
                            
                            {/* Photo with UPenn Campus Context */}
                            <div className="lg:col-span-5 relative group">
                                <div className="relative rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-950 shadow-2xl">
                                    <img
                                        src={meOne}
                                        alt="Luis Henrique Abrantes at Penn Engineering"
                                        className="w-full h-auto object-cover object-top filter contrast-[105%]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-xs font-mono">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-zinc-200 backdrop-blur-md">
                                            <MapPin className="w-3.5 h-3.5 text-red-400" />
                                            <span>UPENN • PHILADELPHIA, PA</span>
                                        </div>
                                        <span className="text-zinc-400">PENNAPPS XXV</span>
                                    </div>
                                </div>
                            </div>

                            {/* Crisp 1-Paragraph Origin + Focus */}
                            <div className="lg:col-span-7 space-y-6">
                                <div className="space-y-4 text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed">
                                    <p>
                                        I wrote my first line of code at nine years old, driven by a natural curiosity to build software that solves concrete problems. Over the past decade, that initial spark evolved through an <strong className="text-white font-medium">8-year merit-funded technical education</strong> at Instituto Federal de São Paulo (IFSP), international hackathon journeys at <strong className="text-white font-medium">UPenn</strong> and <strong className="text-white font-medium">UC Berkeley</strong>, and an active role as a <strong className="text-white font-medium">Google Student Ambassador (2026)</strong>.
                                    </p>
                                    <p className="text-sm sm:text-base text-zinc-400">
                                        Today, my work centers on <strong className="text-white font-medium">Agent Harness Engineering</strong>, <strong className="text-white font-medium">LLM Agents</strong>, and <strong className="text-white font-medium">production RAG systems</strong>—building the infrastructure and tools that make AI models reliable, fast, and actionable in real-world environments.
                                    </p>
                                </div>

                                <div className="pt-2 flex items-center gap-4 flex-wrap">
                                    <button
                                        onClick={() => navigate('/projects')}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-sm shadow-md"
                                    >
                                        <span>View Featured Projects</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-all text-sm"
                                    >
                                        <span>Get in Touch</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </section>


                    {/* ========================================================
                        WORK EXPERIENCE (Clean Typographic Spread - 100% No Card)
                       ======================================================== */}
                    <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-emerald-400" />
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-mono text-sm tracking-wider">
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
                        EDUCATION & PUBLIC MERIT
                       ======================================================== */}
                    <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                        <div className="flex items-center gap-2">
                            <FaGraduationCap className="w-5 h-5 text-amber-400" />
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-mono text-sm tracking-wider">
                                EDUCATION & MERIT
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {/* IFSP Computer Science */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                                        B.S. in Computer Science
                                    </h3>
                                    <span className="text-xs sm:text-sm font-mono text-zinc-500">2026 – Present</span>
                                </div>
                                <p className="text-sm sm:text-base text-zinc-400 font-light">
                                    Instituto Federal de São Paulo (IFSP) • Public Federal Network
                                </p>
                                <p className="text-xs sm:text-sm text-zinc-500 font-light pt-1">
                                    Admitted via competitive public entrance exam. Full government-funded tuition scholarship.
                                </p>
                            </div>

                            {/* IFSP Tech High School */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                                        Integrated Technical High School in Informatics
                                    </h3>
                                    <span className="text-xs sm:text-sm font-mono text-zinc-500">2022 – 2024</span>
                                </div>
                                <p className="text-sm sm:text-base text-zinc-400 font-light">
                                    Instituto Federal de São Paulo (IFSP) • Jacareí Campus
                                </p>
                                <p className="text-xs sm:text-sm text-zinc-500 font-light pt-1">
                                    Completed Capstone Project (TutorTime full-stack platform) ahead of schedule during junior year.
                                </p>
                            </div>

                            {/* UNICAMP Physics Camps */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                                        UNICAMP Quantum & Physics Camps (FIFI)
                                    </h3>
                                    <span className="text-xs sm:text-sm font-mono text-zinc-500">2024, 2025</span>
                                </div>
                                <p className="text-sm sm:text-base text-zinc-400 font-light">
                                    Gleb Wataghin Physics Institute (IFGW) • University of Campinas
                                </p>
                                <p className="text-xs sm:text-sm text-zinc-500 font-light pt-1">
                                    Intensive academic immersion cohorts covering Theoretical Cosmology (2024) and Quantum Computing (2025).
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* ========================================================
                        CORE OPERATING PRINCIPLES
                       ======================================================== */}
                    <section className="border-t border-zinc-800/80 pt-12 space-y-8">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-cyan-400" />
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-mono text-sm tracking-wider">
                                ENGINEERING PRINCIPLES
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <span className="text-xs font-mono text-emerald-400 font-semibold block">01 // HARNESSES & TOOLS</span>
                                <h3 className="text-base font-semibold text-white">Harnesses Over Raw Prompts</h3>
                                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                    Reliable autonomous systems depend on tight feedback loops, structured tool schemas, and verifiable guardrails.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-mono text-blue-400 font-semibold block">02 // ARCHITECTURAL DEPTH</span>
                                <h3 className="text-base font-semibold text-white">Systems Under Load</h3>
                                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                    Designing backend services and agent orchestrations that scale reliably with predictable latency and clean telemetry.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-mono text-purple-400 font-semibold block">03 // HIGH CRAFT & UX</span>
                                <h3 className="text-base font-semibold text-white">Precision & Ergonomics</h3>
                                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                                    The best developer tools and AI interfaces feel invisible, intuitive, and blisteringly fast.
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            )}


            {/* ========================================================
                PROTOTYPE LAYOUT 2: LEGACY LAYOUT (Anterior)
               ======================================================== */}
            {currentLayout === 'legacy' && (
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        {/* Profile Section */}
                        <div className="profile-section w-full md:w-1/3 flex flex-col items-center md:items-start">
                            <div className="relative mb-8">
                                <img
                                    src="https://avatars.githubusercontent.com/u/24616338?v=4"
                                    alt="Profile"
                                    className="rounded-full shadow-lg w-40 h-40 object-cover border border-gray-700/50"
                                />
                            </div>

                            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 w-full text-center md:text-left">
                                GitHub Achievements
                            </h3>

                            <div className="achievements-grid flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                                {badgeAchievements.map(achievement => (
                                    <div
                                        key={achievement.id}
                                        className="group relative cursor-pointer"
                                        onClick={() =>
                                            setSelectedAchievement(achievement)
                                        }
                                    >
                                        <div className="w-12 h-12 rounded-full bg-dark-secondary/30 border border-gray-800 flex items-center justify-center transition-all duration-300 group-hover:border-gray-600 group-hover:bg-dark-secondary/50">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.name}
                                                className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="highlights-grid flex flex-col gap-3 w-full">
                                {highlightAchievements.map(achievement => (
                                    <div
                                        key={achievement.id}
                                        className="group cursor-pointer"
                                        onClick={() =>
                                            setSelectedAchievement(achievement)
                                        }
                                    >
                                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-secondary/30 border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:bg-dark-secondary/50">
                                            <div className="text-gray-400 group-hover:text-white transition-colors">
                                                {achievement.icon}
                                            </div>
                                            <span className="font-light text-sm text-gray-300 group-hover:text-white transition-colors">
                                                {achievement.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Main Content Section */}
                        <div className="flex-1 w-full space-y-12">
                            {/* Experience Section */}
                            <div className="experience-section">
                                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                    <Briefcase
                                        className="text-gray-400"
                                        size={22}
                                    />
                                    Experience
                                </h2>
                                <div className="space-y-4">
                                    {experiences.map(exp => (
                                        <div
                                            key={`${exp.company}-${exp.role}`}
                                            className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300"
                                        >
                                            <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
                                                <div>
                                                    <h3 className="text-xl font-medium text-white">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-sm text-gray-400 font-light">
                                                        {exp.company}
                                                        {exp.location &&
                                                            ` • ${exp.location}`}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {exp.current && (
                                                        <span className="text-xs font-medium text-green-400 border border-green-400/30 rounded-full px-2.5 py-0.5">
                                                            Current
                                                        </span>
                                                    )}
                                                    <span className="text-xs font-light text-gray-500 border border-gray-800 rounded-full px-3 py-1">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                                {exp.description}
                                            </p>
                                            {exp.highlights &&
                                                exp.highlights.length > 0 && (
                                                <ul className="mt-4 space-y-2">
                                                    {exp.highlights.map(
                                                        highlight => (
                                                            <li
                                                                key={highlight}
                                                                className="flex items-start gap-3 text-sm text-gray-500 font-light"
                                                            >
                                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0"></span>
                                                                <span>
                                                                    {highlight}
                                                                </span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                            {exp.url && (
                                                <a
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 mt-4 text-xs text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <ExternalLink size={13} />
                                                    {exp.company}
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Academic Achievements Section */}
                            <div className="academic-section">
                                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                    <FaGraduationCap
                                        className="text-gray-400"
                                        size={24}
                                    />
                                    Academic Profile
                                </h2>
                                <div className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
                                    <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                                        <div className="p-3 bg-dark-primary rounded-xl border border-gray-800">
                                            <FaTrophy className="text-gray-300 text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-medium text-white mb-2">
                                                Instituto Federal de São Paulo
                                                (IFSP)
                                            </h3>
                                            <p className="text-sm text-gray-400 font-light mb-4">
                                                Brazil&apos;s Top Technical
                                                Education Institutions
                                            </p>
                                            <ul className="space-y-2 text-sm text-gray-500 font-light">
                                                <li>
                                                    • Excellence in Technical and
                                                    Academic Education
                                                </li>
                                                <li>
                                                    • Recognized for Innovation and
                                                    Research
                                                </li>
                                                <li>
                                                    • Strong Industry Partnerships
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-dark-primary/50 border border-gray-800 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-light text-white mb-1">
                                                8.34
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                GPA
                                            </div>
                                        </div>
                                        <div className="bg-dark-primary/50 border border-gray-800 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-light text-white mb-1">
                                                X
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                SAT Score
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Section */}
                            <div className="skills-section">
                                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                    <FaCode className="text-gray-400" size={24} />
                                    Tech Stack
                                </h2>
                                <div className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-gray-800">
                                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                                        Category
                                                    </th>
                                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                                        Technologies
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-800">
                                                {techStack.map(row => (
                                                    <tr
                                                        key={row.category}
                                                        className="hover:bg-dark-primary/30 transition-colors"
                                                    >
                                                        <td className="py-4 px-4 text-sm text-gray-300 font-light">
                                                            {row.category}
                                                        </td>
                                                        <td className="py-4 px-4">
                                                            <div className="flex flex-wrap gap-2">
                                                                {row.items.map(
                                                                    tech => (
                                                                        <span
                                                                            key={
                                                                                tech
                                                                            }
                                                                            className="px-3 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-300 font-light"
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* About Me Section */}
                            <div className="about-me-section">
                                <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                    <FaUserAlt
                                        className="text-gray-400"
                                        size={20}
                                    />
                                    About Me
                                </h2>
                                <div className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors duration-300">
                                    <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                                        <p>
                                            <strong className="text-white font-medium">
                                                True innovation happens outside our
                                                comfort zone – and that’s exactly
                                                where I choose to be.
                                            </strong>{' '}
                                            My greatest dream is to one day
                                            establish a church that goes beyond a
                                            place of worship, serving as a hub where
                                            children and young people can learn
                                            programming from an early age,
                                            developing both technical skills and
                                            character.
                                        </p>
                                        <p>
                                            Dedicating myself every day to studying
                                            and improving my skills, even in the
                                            face of daily challenges and problems, I
                                            maintain a routine of constant growth.
                                            Demonstrating discipline and
                                            consistency, I approach learning as an
                                            uninterrupted process, regardless of
                                            circumstances.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========================================================
                FLOATING PROTOTYPE SWITCHER BAR (About Page)
               ======================================================== */}
            <div className="fixed bottom-5 inset-x-0 mx-auto w-fit z-50 flex items-center gap-2 p-1.5 rounded-full bg-black/90 backdrop-blur-2xl border border-white/20 shadow-2xl">
                <button
                    onClick={() => setSearchParams({ layout: 'new' })}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all ${
                        currentLayout === 'new'
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'text-zinc-400 hover:text-white'
                    }`}
                >
                    1. Minimalist Editorial (Novo) ⭐
                </button>
                <button
                    onClick={() => setSearchParams({ layout: 'legacy' })}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all ${
                        currentLayout === 'legacy'
                            ? 'bg-white text-black font-bold shadow-md'
                            : 'text-zinc-400 hover:text-white'
                    }`}
                >
                    2. Layout Anterior (Legado)
                </button>
            </div>

            {/* Achievement Modal (Legacy) */}
            <Modal
                isOpen={selectedAchievement !== null}
                onClose={() => setSelectedAchievement(null)}
                className="w-full max-w-sm p-8"
                labelledBy="achievement-title"
            >
                {selectedAchievement && (
                    <>
                        {selectedAchievement.image && (
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-secondary/50 flex items-center justify-center p-4">
                                <img
                                    src={selectedAchievement.image}
                                    alt={selectedAchievement.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                        <h3
                            id="achievement-title"
                            className="text-xl font-medium text-white mb-3 text-center"
                        >
                            {selectedAchievement.name}
                        </h3>
                        <p className="mb-8 text-sm text-gray-400 text-center font-light leading-relaxed">
                            {selectedAchievement.description}
                        </p>
                        <a
                            href="https://github.com/LuisAbrantes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-colors text-sm"
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
