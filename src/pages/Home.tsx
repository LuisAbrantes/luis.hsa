import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { timeline } from '@/data/timeline';
import { fadeInUp, staggerContainer, revealViewport } from '@/lib/motion';

// "Papers" is a separate hub on its own subdomain — the Home only links out.
const PAPERS_URL = 'https://papers.luisabrantes.dev';

const editorialSections = [
    {
        index: '01',
        title: 'About',
        tag: 'FOUNDATIONS',
        path: '/about',
        description: 'Software engineering background, academic journey at IFSP, and philosophy on building autonomous AI systems.'
    },
    {
        index: '02',
        title: 'Projects',
        tag: 'APPLIED AI & TOOLS',
        path: '/projects',
        description: 'TutorTime, agent harness architectures, and production-grade developer tooling.'
    },
    {
        index: '03',
        title: 'Achievements',
        tag: 'GLOBAL HACKATHONS',
        path: '/achievements',
        description: 'Google Student Ambassador 2026, UC Berkeley AI Hackathon, and UPenn PennApps.'
    },
    {
        index: '04',
        title: 'Contact',
        tag: 'COLLABORATION',
        path: '/contact',
        description: 'Open for high-impact projects, AI research engineering, and technical partnerships.'
    }
];

const Home = () => {
    const navigate = useNavigate();
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState<number>(0);

    const basePath = import.meta.env.BASE_URL || '/';
    const cleanBasePath = basePath.endsWith('/') ? basePath : `${basePath}/`;
    const videoSrc = `${cleanBasePath}assets/hero/video.mp4`;
    const posterSrc = `${cleanBasePath}assets/hero/image.jpg`;

    // 250vh Scroll Runway for direct frame-by-frame scrub
    const { scrollYProgress } = useScroll({
        target: scrollTrackRef,
        offset: ['start start', 'end start']
    });

    // Handle video metadata and initialize scrubbing
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onLoadedMetadata = () => {
            if (video.duration && !isNaN(video.duration)) {
                setVideoDuration(video.duration);
            }
        };

        if (video.readyState >= 1) {
            onLoadedMetadata();
        } else {
            video.addEventListener('loadedmetadata', onLoadedMetadata);
        }

        return () => {
            video.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
    }, []);

    // Frame-by-frame Scroll Scrubbing Engine (requestAnimationFrame optimized)
    useEffect(() => {
        let animationFrameId: number;
        let lastTargetTime = 0;

        const unsubscribe = scrollYProgress.on('change', (progress) => {
            const video = videoRef.current;
            if (!video || !videoDuration) return;

            // Map progress (0 to 0.85) to full video duration
            const clampedProgress = Math.min(Math.max(progress / 0.85, 0), 1);
            const targetTime = clampedProgress * videoDuration;

            if (Math.abs(targetTime - lastTargetTime) > 0.01) {
                lastTargetTime = targetTime;
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    if (video && !video.seeking) {
                        video.currentTime = targetTime;
                    }
                });
            }
        });

        return () => {
            unsubscribe();
            cancelAnimationFrame(animationFrameId);
        };
    }, [scrollYProgress, videoDuration]);

    // ========================================================
    // CHOREOGRAPHY & VERTICAL CONVEYOR QUEUE (FILA NO SCROLL AMPLIADA)
    // ========================================================
    // Main Title Overlay (0% -> 22%)
    const textOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.18], [0, -55]);

    // QUEUE ITEM 1: Google & UC Berkeley (Starts active, ascends all the way up & exits near top)
    const q1Opacity = useTransform(scrollYProgress, [0, 0.24, 0.34], [1, 1, 0]);
    const q1Y = useTransform(scrollYProgress, [0, 0.34], [0, -420]);

    // QUEUE ITEM 2: UPenn & UNICAMP (Enters from below +280px, ascends high to -420px)
    const q2Opacity = useTransform(scrollYProgress, [0.20, 0.32, 0.54, 0.62], [0, 1, 1, 0]);
    const q2Y = useTransform(scrollYProgress, [0.20, 0.36, 0.62], [280, 0, -420]);

    // QUEUE ITEM 3: IFSP & Hermes AI (Enters from below +280px, ascends high to -420px)
    const q3Opacity = useTransform(scrollYProgress, [0.50, 0.62, 0.82, 0.88], [0, 1, 1, 0]);
    const q3Y = useTransform(scrollYProgress, [0.50, 0.66, 0.88], [280, 0, -420]);

    // Overall Hero Pinned Stage Handoff (85% -> 98%)
    const stageFade = useTransform(scrollYProgress, [0.85, 0.98], [1, 0]);
    const stagePointerEvents = useTransform(scrollYProgress, (v) => v > 0.9 ? 'none' : 'auto');

    return (
        <div className="home-root relative bg-[#07080b] text-[#EDEDED] font-sans selection:bg-zinc-700 selection:text-white">
            
            {/* ========================================================
                1. PINNED SCROLL-SCRUB HERO (100% Full-Bleed Video Engine)
               ======================================================== */}
            <div ref={scrollTrackRef} className="relative h-[250vh] w-full pt-16">
                
                {/* Pinned Viewport Stage - Perfectly flush right below the 16 (64px) Navbar */}
                <motion.div 
                    className="sticky top-16 h-[calc(100dvh-4rem)] w-full overflow-hidden flex items-center justify-center bg-[#07080b]"
                    style={{ opacity: stageFade, pointerEvents: stagePointerEvents as any }}
                >
                    
                    {/* Full-Bleed Scroll-Scrubbed Video Element */}
                    <div className="absolute inset-0 w-full h-full">
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            poster={posterSrc}
                            preload="auto"
                            playsInline
                            muted
                            className="w-full h-full object-cover object-center scale-[1.01]"
                        />
                    </div>

                    {/* Cinematic Scrim Vignettes (Clean read on top & bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/60 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Headline & Identity Overlay (Positioned with safe space below navbar) */}
                    <motion.div 
                        className="absolute top-6 sm:top-10 inset-x-4 max-w-5xl mx-auto text-center pointer-events-none z-20 space-y-2.5"
                        style={{ opacity: textOpacity, y: textY }}
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-xs font-mono text-zinc-300 shadow-xl">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>SOFTWARE & APPLIED AI ENGINEER</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                            Luis Henrique Abrantes
                        </h1>

                        <p className="text-xs sm:text-base text-zinc-300 font-light max-w-lg mx-auto drop-shadow-lg leading-relaxed">
                            Building intelligent systems, agent harnesses, and high-performance applications.
                        </p>
                    </motion.div>


                    {/* ========================================================
                        LEFT FLANK: VERTICAL QUEUE (GRANDE ESCALA & ALTA SUBIDA)
                       ======================================================== */}
                    
                    {/* Queue 1: Google Student Ambassador */}
                    <motion.div 
                        className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-12 md:left-16 z-20 pointer-events-none text-left"
                        style={{ opacity: q1Opacity, y: q1Y }}
                    >
                        <div className="flex items-center gap-5 sm:gap-6">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                <img
                                    src={`${cleanBasePath}assets/logos/google.svg`}
                                    alt="Google Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                        AFFILIATION // 2026
                                    </span>
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                                    Google Student Ambassador
                                </h4>
                                <p className="text-sm sm:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                    Global Ambassador Cohort
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Queue 2: PennApps XXV */}
                    <motion.div 
                        className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-12 md:left-16 z-20 pointer-events-none text-left"
                        style={{ opacity: q2Opacity, y: q2Y }}
                    >
                        <div className="flex items-center gap-5 sm:gap-6">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                <img
                                    src={`${cleanBasePath}assets/logos/upenn.svg`}
                                    alt="UPenn Shield"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                    <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                        ENGINEERING // UPENN
                                    </span>
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                                    PennApps XXV
                                </h4>
                                <p className="text-sm sm:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                    University of Pennsylvania
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Queue 3: Instituto Federal (IFSP) */}
                    <motion.div 
                        className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-12 md:left-16 z-20 pointer-events-none text-left"
                        style={{ opacity: q3Opacity, y: q3Y }}
                    >
                        <div className="flex items-center gap-5 sm:gap-6">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                <img
                                    src={`${cleanBasePath}assets/logos/ifsp.svg`}
                                    alt="IFSP Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                        ACADEMIA // LEADERSHIP
                                    </span>
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                                    Instituto Federal (IFSP)
                                </h4>
                                <p className="text-sm sm:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                    Computer Science & Community Lead
                                </p>
                            </div>
                        </div>
                    </motion.div>


                    {/* ========================================================
                        RIGHT FLANK: VERTICAL QUEUE (GRANDE ESCALA & ALTA SUBIDA)
                       ======================================================== */}

                    {/* Queue 1: UC Berkeley AI Hackathon */}
                    <motion.div 
                        className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-12 md:right-16 z-20 pointer-events-none text-right hidden sm:block"
                        style={{ opacity: q1Opacity, y: q1Y }}
                    >
                        <div className="flex items-center justify-end gap-5 sm:gap-6">
                            <div>
                                <div className="flex items-center justify-end gap-2 mb-1.5">
                                    <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                        HACKATHON // BERKELEY
                                    </span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                                    UC Berkeley AI Hackathon
                                </h4>
                                <p className="text-sm sm:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                    Cal Hacks • San Francisco
                                </p>
                            </div>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                <img
                                    src={`${cleanBasePath}assets/logos/berkeley.svg`}
                                    alt="UC Berkeley Seal"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Queue 2: UNICAMP Quantum Physics */}
                    <motion.div 
                        className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-12 md:right-16 z-20 pointer-events-none text-right hidden sm:block"
                        style={{ opacity: q2Opacity, y: q2Y }}
                    >
                        <div className="flex items-center justify-end gap-5 sm:gap-6">
                            <div>
                                <div className="flex items-center justify-end gap-2 mb-1.5">
                                    <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                        QUANTUM LAB // FIFE
                                    </span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                                    UNICAMP Quantum Physics
                                </h4>
                                <p className="text-sm sm:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                    Gleb Wataghin Physics Institute
                                </p>
                            </div>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                <img
                                    src={`${cleanBasePath}assets/logos/unicamp.png`}
                                    alt="UNICAMP Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Queue 3: Applied AI & Harnesses (Hermes) */}
                    <motion.div 
                        className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-12 md:right-16 z-20 pointer-events-none text-right hidden sm:block"
                        style={{ opacity: q3Opacity, y: q3Y }}
                    >
                        <div className="flex items-center justify-end gap-5 sm:gap-6">
                            <div>
                                <div className="flex items-center justify-end gap-2 mb-1.5">
                                    <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                        PRODUCTION SYSTEMS
                                    </span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                </div>
                                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-xl">
                                    Applied AI & Harnesses
                                </h4>
                                <p className="text-sm sm:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                    Autonomous Developer Tooling
                                </p>
                            </div>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                <img
                                    src={`${cleanBasePath}assets/logos/hermes.png`}
                                    alt="Applied AI Hermes"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* Center Bottom Scroll Cue (Only visible at start) */}
                    <motion.div 
                        className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1.5 text-zinc-400 z-20 pointer-events-none"
                        style={{ opacity: textOpacity }}
                    >
                        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-zinc-400 mb-1 backdrop-blur-md">
                            <Sparkles className="w-3 h-3 text-zinc-400" />
                            <span>SCROLL TO EXPLORE</span>
                        </div>
                        <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400" />
                    </motion.div>

                </motion.div>
            </div>


            {/* ========================================================
                2. EDITORIAL DIRECTORY (Smooth handoff from Video flight)
               ======================================================== */}
            <main className="relative z-30 bg-[#07080b] pt-12 pb-24 shadow-[0_-50px_80px_rgba(7,8,11,1)]">
                
                <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800/80 gap-4">
                        <div>
                            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase block mb-2">INDEX & DIRECTORY</span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                                Selected Work & Foundations
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                            4 SECTIONS • DIRECTORY
                        </p>
                    </div>

                    <motion.div
                        className="divide-y divide-zinc-800/80 border-y border-zinc-800/80"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={revealViewport}
                    >
                        {editorialSections.map((section) => (
                            <motion.div
                                key={section.path}
                                variants={fadeInUp}
                                onClick={() => navigate(section.path)}
                                className="group cursor-pointer py-7 sm:py-9 transition-all duration-300 hover:px-4 rounded-xl hover:bg-zinc-900/40"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                                    {/* Left: Number + Title */}
                                    <div className="flex items-baseline gap-6 sm:gap-8">
                                        <span className="font-mono text-sm sm:text-base text-zinc-600 group-hover:text-zinc-300 transition-colors">
                                            {section.index}
                                        </span>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-white transition-colors">
                                                    {section.title}
                                                </h3>
                                                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-700 transition-colors">
                                                    {section.tag}
                                                </span>
                                            </div>
                                            <p className="text-sm text-zinc-400 mt-2 max-w-xl font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Arrow Link Indicator */}
                                    <div className="flex items-center gap-2 self-end md:self-center">
                                        <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:border-zinc-600 group-hover:text-white group-hover:bg-zinc-800 transition-all">
                                            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>


                {/* ========================================================
                    3. MY JOURNEY (TIMELINE)
                   ======================================================== */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
                    <motion.div
                        className="timeline-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={revealViewport}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center mb-16">
                            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase block mb-2">TRAJECTORY</span>
                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
                                Milestones & Experience
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Continuous Hairline Timeline */}
                            <div className="absolute left-4 md:left-[8.5rem] top-0 bottom-0 w-px bg-zinc-800/80" />

                            <motion.div
                                className="space-y-12"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={revealViewport}
                            >
                                {timeline.map(item => (
                                    <motion.div
                                        key={item.year}
                                        className="relative flex flex-col md:flex-row md:items-start gap-2 md:gap-0"
                                        variants={fadeInUp}
                                    >
                                        {/* Year Marker */}
                                        <div className="md:w-32 flex-shrink-0 md:text-right md:pr-8 pl-12 md:pl-0">
                                            <span className="text-base font-mono text-zinc-400 font-medium block pt-1">
                                                {item.year}
                                            </span>
                                        </div>

                                        {/* Timeline Content */}
                                        <div className="flex-1 pl-12 md:pl-8">
                                            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </section>


                {/* ========================================================
                    4. PAPERS HUB (Technical Essays & Blog)
                   ======================================================== */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-28">
                    <motion.div
                        className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md p-8 sm:p-12 relative overflow-hidden group hover:border-zinc-700 transition-all duration-300"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={revealViewport}
                    >
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="space-y-3 max-w-xl">
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                                    <span>RESEARCH & LEARNING HUB</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                                    Papers by Luis Abrantes
                                </h3>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    Technical essays, deep-dives into autonomous AI agents, developer tooling, and applied software engineering. Published bilingually (PT/EN).
                                </p>
                                <span className="text-xs font-mono text-zinc-500 block pt-1">
                                    papers.luisabrantes.dev
                                </span>
                            </div>

                            <a
                                href={PAPERS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all duration-200 text-sm whitespace-nowrap shadow-lg shadow-white/5"
                            >
                                <span>Visit Papers</span>
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </motion.div>
                </section>

            </main>
        </div>
    );
};

export default Home;
