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

    // Handle video metadata and initialize scrubbing for mobile/desktop
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force explicit video DOM attributes for mobile Safari / Chrome
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        const onLoadedMetadata = () => {
            if (video.duration && !isNaN(video.duration)) {
                setVideoDuration(video.duration);
            }
        };

        // Prime video for mobile iOS/Android Safari on first user interaction or scroll
        const primeMobileVideo = () => {
            if (video && video.paused) {
                video.play().then(() => {
                    video.pause();
                }).catch(() => {});
            }
        };

        if (video.readyState >= 1) {
            onLoadedMetadata();
        } else {
            video.addEventListener('loadedmetadata', onLoadedMetadata);
        }

        window.addEventListener('touchstart', primeMobileVideo, { once: true, passive: true });
        window.addEventListener('scroll', primeMobileVideo, { once: true, passive: true });

        return () => {
            video.removeEventListener('loadedmetadata', onLoadedMetadata);
            window.removeEventListener('touchstart', primeMobileVideo);
            window.removeEventListener('scroll', primeMobileVideo);
        };
    }, []);

    // Frame-by-frame Scroll Scrubbing Engine (requestAnimationFrame optimized with fastSeek support)
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
                        if ('fastSeek' in video) {
                            try {
                                (video as any).fastSeek(targetTime);
                            } catch {
                                (video as HTMLVideoElement).currentTime = targetTime;
                            }
                        } else {
                            (video as HTMLVideoElement).currentTime = targetTime;
                        }
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
    // CHOREOGRAPHY & VERTICAL CONVEYOR QUEUES
    // ========================================================
    // Main Title Overlay (0% -> 20%)
    const textOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.16], [0, -45]);

    // DESKTOP DUAL-COLUMN QUEUES (>=640px) - Full-Height Ascension
    // Desktop Q1: Google & UC Berkeley
    const deskQ1Opacity = useTransform(scrollYProgress, [0, 0.26, 0.34], [1, 1, 0]);
    const deskQ1Y = useTransform(scrollYProgress, [0, 0.34], [0, -780]);

    // Desktop Q2: UPenn & UNICAMP
    const deskQ2Opacity = useTransform(scrollYProgress, [0.20, 0.30, 0.54, 0.62], [0, 1, 1, 0]);
    const deskQ2Y = useTransform(scrollYProgress, [0.20, 0.36, 0.62], [320, 0, -780]);

    // Desktop Q3: IFSP & Hermes AI
    const deskQ3Opacity = useTransform(scrollYProgress, [0.50, 0.60, 0.82, 0.88], [0, 1, 1, 0]);
    const deskQ3Y = useTransform(scrollYProgress, [0.50, 0.66, 0.88], [320, 0, -780]);

    // MOBILE SINGLE-COLUMN 6-STEP STREAM (<640px) - Full-Height Ascension
    // Mob 1: Google (0% -> 18%)
    const mob1Opacity = useTransform(scrollYProgress, [0, 0.13, 0.18], [1, 1, 0]);
    const mob1Y = useTransform(scrollYProgress, [0, 0.18], [0, -560]);

    // Mob 2: UC Berkeley (15% -> 32%)
    const mob2Opacity = useTransform(scrollYProgress, [0.14, 0.20, 0.29, 0.34], [0, 1, 1, 0]);
    const mob2Y = useTransform(scrollYProgress, [0.14, 0.22, 0.34], [220, 0, -560]);

    // Mob 3: UPenn (30% -> 48%)
    const mob3Opacity = useTransform(scrollYProgress, [0.30, 0.36, 0.45, 0.50], [0, 1, 1, 0]);
    const mob3Y = useTransform(scrollYProgress, [0.30, 0.38, 0.50], [220, 0, -560]);

    // Mob 4: UNICAMP (46% -> 64%)
    const mob4Opacity = useTransform(scrollYProgress, [0.46, 0.52, 0.61, 0.66], [0, 1, 1, 0]);
    const mob4Y = useTransform(scrollYProgress, [0.46, 0.54, 0.66], [220, 0, -560]);

    // Mob 5: IFSP (62% -> 78%)
    const mob5Opacity = useTransform(scrollYProgress, [0.62, 0.68, 0.75, 0.80], [0, 1, 1, 0]);
    const mob5Y = useTransform(scrollYProgress, [0.62, 0.70, 0.80], [220, 0, -560]);

    // Mob 6: Applied AI Hermes (76% -> 90%)
    const mob6Opacity = useTransform(scrollYProgress, [0.76, 0.82, 0.88, 0.92], [0, 1, 1, 0]);
    const mob6Y = useTransform(scrollYProgress, [0.76, 0.84, 0.92], [220, 0, -560]);

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
                    
                    {/* Full-Bleed Scroll-Scrubbed Video Element with Poster Backup */}
                    <div className="absolute inset-0 w-full h-full bg-[#07080b]">
                        <img
                            src={posterSrc}
                            alt="Luis Henrique Abrantes AI Studio"
                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                        />
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            poster={posterSrc}
                            preload="auto"
                            playsInline
                            webkit-playsinline="true"
                            muted
                            className="relative w-full h-full object-cover object-center scale-[1.01]"
                        />
                    </div>

                    {/* Cinematic Scrim Vignettes (Clean read on top & bottom) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/60 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Headline & Identity Overlay (Positioned with safe space below navbar) */}
                    <motion.div 
                        className="absolute top-6 sm:top-8 md:top-10 inset-x-4 max-w-5xl mx-auto text-center pointer-events-none z-20 space-y-2 sm:space-y-2.5"
                        style={{ opacity: textOpacity, y: textY }}
                    >
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md text-[10px] sm:text-xs font-mono text-zinc-300 shadow-xl">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>SOFTWARE & APPLIED AI ENGINEER</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                            Luis Henrique Abrantes
                        </h1>

                        <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light max-w-xs sm:max-w-md md:max-w-lg mx-auto drop-shadow-lg leading-relaxed">
                            Building intelligent systems, agent harnesses, and high-performance applications.
                        </p>
                    </motion.div>


                    {/* ========================================================
                        DESKTOP / TABLET DUAL-COLUMN STREAM (>= 640px)
                       ======================================================== */}
                    
                    {/* DESKTOP LEFT FLANK */}
                    <div className="hidden sm:block">
                        {/* Desk L1: Google */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-10 md:left-14 lg:left-16 z-20 pointer-events-none text-left sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ1Opacity, y: deskQ1Y }}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/google.svg`}
                                        alt="Google Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            AFFILIATION // 2026
                                        </span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">
                                        Google Student Ambassador
                                    </h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                        Global Ambassador Cohort
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Desk L2: UPenn */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-10 md:left-14 lg:left-16 z-20 pointer-events-none text-left sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ2Opacity, y: deskQ2Y }}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/upenn.svg`}
                                        alt="UPenn Shield"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            ENGINEERING // UPENN
                                        </span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">
                                        PennApps XXV
                                    </h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                        University of Pennsylvania
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Desk L3: IFSP */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-10 md:left-14 lg:left-16 z-20 pointer-events-none text-left sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ3Opacity, y: deskQ3Y }}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/ifsp.svg`}
                                        alt="IFSP Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            ACADEMIA // LEADERSHIP
                                        </span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">
                                        Instituto Federal (IFSP)
                                    </h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                        Computer Science & Community Lead
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* DESKTOP RIGHT FLANK */}
                    <div className="hidden sm:block">
                        {/* Desk R1: UC Berkeley */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-10 md:right-14 lg:right-16 z-20 pointer-events-none text-right sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ1Opacity, y: deskQ1Y }}
                        >
                            <div className="flex items-center justify-end gap-4 md:gap-6">
                                <div>
                                    <div className="flex items-center justify-end gap-2 mb-1.5">
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            HACKATHON // BERKELEY
                                        </span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">
                                        UC Berkeley AI Hackathon
                                    </h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                        Cal Hacks • San Francisco
                                    </p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/berkeley.svg`}
                                        alt="UC Berkeley Seal"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Desk R2: UNICAMP */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-10 md:right-14 lg:right-16 z-20 pointer-events-none text-right sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ2Opacity, y: deskQ2Y }}
                        >
                            <div className="flex items-center justify-end gap-4 md:gap-6">
                                <div>
                                    <div className="flex items-center justify-end gap-2 mb-1.5">
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            QUANTUM LAB // FIFE
                                        </span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">
                                        UNICAMP Quantum Physics
                                    </h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                        Gleb Wataghin Physics Institute
                                    </p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/unicamp.png`}
                                        alt="UNICAMP Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Desk R3: Hermes AI */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-10 md:right-14 lg:right-16 z-20 pointer-events-none text-right sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ3Opacity, y: deskQ3Y }}
                        >
                            <div className="flex items-center justify-end gap-4 md:gap-6">
                                <div>
                                    <div className="flex items-center justify-end gap-2 mb-1.5">
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            PRODUCTION SYSTEMS
                                        </span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">
                                        Applied AI & Harnesses
                                    </h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">
                                        Autonomous Developer Tooling
                                    </p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/hermes.png`}
                                        alt="Applied AI Hermes"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>


                    {/* ========================================================
                        MOBILE FULL 6-ITEM SINGLE-STREAM (< 640px)
                       ======================================================== */}
                    <div className="block sm:hidden">
                        
                        {/* Mob 1: Google */}
                        <motion.div 
                            className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left"
                            style={{ opacity: mob1Opacity, y: mob1Y }}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/google.svg`}
                                        alt="Google Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            AFFILIATION // 2026
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                                        Google Student Ambassador
                                    </h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">
                                        Global Ambassador Cohort
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 2: UC Berkeley */}
                        <motion.div 
                            className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left"
                            style={{ opacity: mob2Opacity, y: mob2Y }}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/berkeley.svg`}
                                        alt="UC Berkeley Seal"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            HACKATHON // BERKELEY
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                                        UC Berkeley AI Hackathon
                                    </h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">
                                        Cal Hacks • San Francisco
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 3: UPenn */}
                        <motion.div 
                            className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left"
                            style={{ opacity: mob3Opacity, y: mob3Y }}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/upenn.svg`}
                                        alt="UPenn Shield"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            ENGINEERING // UPENN
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                                        PennApps XXV
                                    </h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">
                                        University of Pennsylvania
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 4: UNICAMP */}
                        <motion.div 
                            className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left"
                            style={{ opacity: mob4Opacity, y: mob4Y }}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/unicamp.png`}
                                        alt="UNICAMP Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            QUANTUM LAB // FIFE
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                                        UNICAMP Quantum Physics
                                    </h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">
                                        Gleb Wataghin Physics Institute
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 5: IFSP */}
                        <motion.div 
                            className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left"
                            style={{ opacity: mob5Opacity, y: mob5Y }}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/ifsp.svg`}
                                        alt="IFSP Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            ACADEMIA // LEADERSHIP
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                                        Instituto Federal (IFSP)
                                    </h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">
                                        Computer Science & Community Lead
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 6: Applied AI Hermes */}
                        <motion.div 
                            className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left"
                            style={{ opacity: mob6Opacity, y: mob6Y }}
                        >
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={`${cleanBasePath}assets/logos/hermes.png`}
                                        alt="Applied AI Hermes"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                                            PRODUCTION SYSTEMS
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                                        Applied AI & Harnesses
                                    </h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">
                                        Autonomous Developer Tooling
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                    </div>


                    {/* Center Bottom Scroll Cue (Only visible at start) */}
                    <motion.div 
                        className="absolute bottom-4 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1 text-zinc-400 z-20 pointer-events-none"
                        style={{ opacity: textOpacity }}
                    >
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] sm:text-[11px] font-mono text-zinc-400 backdrop-blur-md">
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
