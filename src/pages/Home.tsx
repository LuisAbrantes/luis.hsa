import { useRef, useEffect, useState, type MouseEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import { ArrowUpRight, ChevronDown, MapPin } from 'lucide-react';
import Eyebrow from '@/components/ui/Eyebrow';
import ProjectRow from '@/components/projects/ProjectRow';
import { experiences } from '@/data/experience';
import { papers } from '@/data/papers';
import { projects } from '@/data/projects';
import { timeline } from '@/data/timeline';
import { CONTACT_EMAIL } from '@/data/socials';
import { fadeInUp, staggerContainer, revealViewport } from '@/lib/motion';
import portrait from '@/assets/home/luis-penn-engineering.jpg';
import {
    AVAILABILITY,
    CREDENTIALS,
    PAPERS_EN_URL,
    PERSON
} from '@/data/site';
import { pageMeta, papersNode, profilePageNode } from '@/lib/seo';

// "Papers" is a separate hub on its own subdomain — the Home only links out.

const TITLE = `${PERSON.name} | ${PERSON.jobTitle}`;

export const meta: MetaFunction = () =>
    pageMeta({
        title: TITLE,
        description:
            'Luis Henrique Abrantes (Luis Abrantes) is a software engineer building agent harnesses, LLM agents and full-stack products. Google Student Ambassador 2026.',
        path: '/',
        ogType: 'profile',
        jsonLd: [profilePageNode(TITLE), papersNode()]
    });

const featuredProjects = projects.filter(project => project.featured);

const Home = () => {
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const posterRef = useRef<HTMLImageElement>(null);
    const [videoDuration, setVideoDuration] = useState<number>(0);
    // The 5 MB video only starts downloading once the poster has loaded, so it
    // does not compete with the page's largest paint for bandwidth.
    const [posterLoaded, setPosterLoaded] = useState(false);

    const videoSrc = '/static/hero/video.mp4';
    const posterSrc = '/static/hero/image.webp';

    // 250vh Scroll Runway for direct frame-by-frame scrub
    const { scrollYProgress } = useScroll({
        target: scrollTrackRef,
        offset: ['start start', 'end start']
    });

    useEffect(() => {
        const poster = posterRef.current;
        if (!poster || poster.complete) {
            setPosterLoaded(true);
            return;
        }
        const release = () => setPosterLoaded(true);
        poster.addEventListener('load', release, { once: true });
        poster.addEventListener('error', release, { once: true });
        return () => {
            poster.removeEventListener('load', release);
            poster.removeEventListener('error', release);
        };
    }, []);

    // Handle video metadata and initialize scrubbing for mobile/desktop
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        const onLoadedMetadata = () => {
            if (video.duration && !isNaN(video.duration)) {
                setVideoDuration(video.duration);
            }
        };

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

            const clampedProgress = Math.min(Math.max(progress / 0.85, 0), 1);
            const targetTime = clampedProgress * videoDuration;

            if (Math.abs(targetTime - lastTargetTime) > 0.01) {
                lastTargetTime = targetTime;
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    if (video && !video.seeking) {
                        // fastSeek is not available in every browser.
                        if (typeof video.fastSeek === 'function') {
                            try {
                                video.fastSeek(targetTime);
                            } catch {
                                video.currentTime = targetTime;
                            }
                        } else {
                            video.currentTime = targetTime;
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
    // CHOREOGRAPHY & VERTICAL CONVEYOR QUEUES (Full-Height Flight)
    // ========================================================
    const textOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.16], [0, -45]);

    // Jump past the intro. Scrolling is done here instead of leaving it to the
    // "#main" hash: on a hash change the router restores the scroll position
    // it saved earlier in the same tab, which can land back inside the intro.
    const skipIntro = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        document.getElementById('main')?.scrollIntoView();
    };

    // The intro links stop taking clicks once the intro has faded out.
    const introPointerEvents = useTransform(
        scrollYProgress,
        (v): 'none' | 'auto' => (v > 0.12 ? 'none' : 'auto')
    );

    // DESKTOP DUAL-COLUMN QUEUES (>=640px)
    const deskQ1Opacity = useTransform(scrollYProgress, [0, 0.26, 0.34], [1, 1, 0]);
    const deskQ1Y = useTransform(scrollYProgress, [0, 0.34], [0, -780]);

    const deskQ2Opacity = useTransform(scrollYProgress, [0.20, 0.30, 0.54, 0.62], [0, 1, 1, 0]);
    const deskQ2Y = useTransform(scrollYProgress, [0.20, 0.36, 0.62], [320, 0, -780]);

    const deskQ3Opacity = useTransform(scrollYProgress, [0.50, 0.60, 0.82, 0.88], [0, 1, 1, 0]);
    const deskQ3Y = useTransform(scrollYProgress, [0.50, 0.66, 0.88], [320, 0, -780]);

    // MOBILE SINGLE-COLUMN 6-STEP STREAM (<640px)
    const mob1Opacity = useTransform(scrollYProgress, [0, 0.13, 0.18], [1, 1, 0]);
    const mob1Y = useTransform(scrollYProgress, [0, 0.18], [0, -560]);

    const mob2Opacity = useTransform(scrollYProgress, [0.14, 0.20, 0.29, 0.34], [0, 1, 1, 0]);
    const mob2Y = useTransform(scrollYProgress, [0.14, 0.22, 0.34], [220, 0, -560]);

    const mob3Opacity = useTransform(scrollYProgress, [0.30, 0.36, 0.45, 0.50], [0, 1, 1, 0]);
    const mob3Y = useTransform(scrollYProgress, [0.30, 0.38, 0.50], [220, 0, -560]);

    const mob4Opacity = useTransform(scrollYProgress, [0.46, 0.52, 0.61, 0.66], [0, 1, 1, 0]);
    const mob4Y = useTransform(scrollYProgress, [0.46, 0.54, 0.66], [220, 0, -560]);

    const mob5Opacity = useTransform(scrollYProgress, [0.62, 0.68, 0.75, 0.80], [0, 1, 1, 0]);
    const mob5Y = useTransform(scrollYProgress, [0.62, 0.70, 0.80], [220, 0, -560]);

    const mob6Opacity = useTransform(scrollYProgress, [0.76, 0.82, 0.88, 0.92], [0, 1, 1, 0]);
    const mob6Y = useTransform(scrollYProgress, [0.76, 0.84, 0.92], [220, 0, -560]);

    // Overall Hero Pinned Stage Handoff
    const stageFade = useTransform(scrollYProgress, [0.85, 0.98], [1, 0]);
    const stagePointerEvents = useTransform(
        scrollYProgress,
        (v): 'none' | 'auto' => (v > 0.9 ? 'none' : 'auto')
    );

    return (
        <div className="home-root relative bg-[#07080b] text-[#EDEDED] font-sans selection:bg-zinc-700 selection:text-white">
            
            {/* ========================================================
                1. PINNED SCROLL-SCRUB HERO (100% Full-Bleed Video Engine)
               ======================================================== */}
            <div ref={scrollTrackRef} className="relative h-[250vh] w-full pt-16">
                
                <motion.div 
                    className="sticky top-16 h-[calc(100dvh-4rem)] w-full overflow-hidden flex items-center justify-center bg-[#07080b]"
                    style={{ opacity: stageFade, pointerEvents: stagePointerEvents }}
                >
                    <div className="absolute inset-0 w-full h-full bg-[#07080b]">
                        <img
                            ref={posterRef}
                            src={posterSrc}
                            alt="3D illustration of Luis Henrique Abrantes working at a laptop"
                            // Largest paint on the page: fetch it ahead of the
                            // hero video. Lowercase because React 18 does not
                            // know the camelCase prop.
                            {...{ fetchpriority: 'high' }}
                            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                        />
                        <video
                            ref={videoRef}
                            src={posterLoaded ? videoSrc : undefined}
                            poster={posterSrc}
                            preload="auto"
                            playsInline
                            // Legacy iOS Safari attribute; not part of React's DOM typings.
                            {...{ 'webkit-playsinline': 'true' }}
                            muted
                            className="relative w-full h-full object-cover object-center scale-[1.01]"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/60 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Headline & Identity (Positioned with ample safe area below navbar) */}
                    <motion.div 
                        className="absolute top-12 sm:top-14 md:top-16 inset-x-4 max-w-5xl mx-auto text-center pointer-events-none z-20 space-y-2 sm:space-y-2.5"
                        style={{ opacity: textOpacity, y: textY }}
                    >
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono text-zinc-300 shadow-2xl">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>SOFTWARE ENGINEER & APPLIED AI DEVELOPER</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                            Luis Henrique Abrantes
                        </h1>

                        <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-light max-w-xs sm:max-w-md md:max-w-lg mx-auto drop-shadow-lg leading-relaxed text-balance">
                            I build LLM agents and the full-stack products around them.
                        </p>

                        <motion.div
                            className="flex items-center justify-center gap-2.5 pt-2"
                            style={{ pointerEvents: introPointerEvents }}
                        >
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-2xl"
                            >
                                <span>View projects</span>
                                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-zinc-100 text-xs sm:text-sm font-medium hover:border-white/50 transition-colors shadow-2xl"
                            >
                                Get in touch
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* DESKTOP STREAM */}
                    <div className="hidden sm:block">
                        {/* Desk L1: Google */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-10 md:left-14 lg:left-16 z-20 pointer-events-none text-left sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ1Opacity, y: deskQ1Y }}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/google.svg" alt="Google Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">AFFILIATION // 2026</span>
                                    </div>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">Google Student Ambassador</p>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Global Ambassador Cohort</p>
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
                                    <img src="/static/logos/upenn.svg" alt="UPenn Shield" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">ENGINEERING // UPENN</span>
                                    </div>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">PennApps XXV</p>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">University of Pennsylvania</p>
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
                                    <img src="/static/logos/ifsp.svg" alt="IFSP Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">ACADEMIA // LEADERSHIP</span>
                                    </div>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">Instituto Federal (IFSP)</p>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Computer Science & Community Lead</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Desk R1: UC Berkeley */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-10 md:right-14 lg:right-16 z-20 pointer-events-none text-right sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ1Opacity, y: deskQ1Y }}
                        >
                            <div className="flex items-center justify-end gap-4 md:gap-6">
                                <div>
                                    <div className="flex items-center justify-end gap-2 mb-1.5">
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">HACKATHON // BERKELEY</span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                                    </div>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">UC Berkeley AI Hackathon</p>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Cal Hacks • Berkeley, CA</p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/berkeley.svg" alt="UC Berkeley Seal" className="w-full h-full object-contain" />
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
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">QUANTUM & ASTRO // IFGW</span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                                    </div>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">UNICAMP Quantum & Physics Camps</p>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Gleb Wataghin Physics Institute</p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/unicamp.png" alt="UNICAMP Logo" className="w-full h-full object-contain" />
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
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">APPLIED AI // AGENTS</span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">Applied AI & Harnesses</p>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Agent Harness Engineering</p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/hermes.png" alt="Applied AI Hermes" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* MOBILE STREAM */}
                    <div className="block sm:hidden">
                        {/* Mob 1 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob1Opacity, y: mob1Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/google.svg" alt="Google Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">AFFILIATION // 2026</span>
                                    </div>
                                    <p className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">Google Student Ambassador</p>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Global Ambassador Cohort</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 2 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob2Opacity, y: mob2Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/berkeley.svg" alt="UC Berkeley Seal" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">HACKATHON // BERKELEY</span>
                                    </div>
                                    <p className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">UC Berkeley AI Hackathon</p>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Cal Hacks • Berkeley, CA</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 3 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob3Opacity, y: mob3Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/upenn.svg" alt="UPenn Shield" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">ENGINEERING // UPENN</span>
                                    </div>
                                    <p className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">PennApps XXV</p>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">University of Pennsylvania</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 4 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob4Opacity, y: mob4Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/unicamp.png" alt="UNICAMP Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">QUANTUM & ASTRO // IFGW</span>
                                    </div>
                                    <p className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">UNICAMP Quantum & Physics Camps</p>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Gleb Wataghin Physics Institute</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 5 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob5Opacity, y: mob5Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/ifsp.svg" alt="IFSP Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">ACADEMIA // LEADERSHIP</span>
                                    </div>
                                    <p className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">Instituto Federal (IFSP)</p>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Computer Science & Community Lead</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 6 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob6Opacity, y: mob6Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src="/static/logos/hermes.png" alt="Applied AI Hermes" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">APPLIED AI // AGENTS</span>
                                    </div>
                                    <p className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">Applied AI & Harnesses</p>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Agent Harness Engineering</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll cue. It is also a link that skips the intro, and
                        it stays in place for the whole pinned stage so there is
                        always a way past the animation. */}
                    <div className="absolute bottom-3 sm:bottom-6 inset-x-0 flex justify-center z-30">
                        <a
                            href="#main"
                            onClick={skipIntro}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 text-[10px] sm:text-[11px] font-mono text-zinc-300 backdrop-blur-md hover:text-white hover:border-white/40 transition-colors"
                        >
                            <span>SCROLL, OR SKIP THE INTRO</span>
                            <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                    </div>
                </motion.div>
            </div>


            {/* ========================================================
                2. MAIN CONTENT REGION (Wide Spotlight & Metrics)
               ======================================================== */}
            <main id="main" className="relative z-30 scroll-mt-16 bg-[#07080b] pt-12 pb-8 shadow-[0_-50px_80px_rgba(7,8,11,1)]">

                {/* ========================================================
                    PROFILE: who, what, and what he is looking for
                   ======================================================== */}
                <section aria-labelledby="profile-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-stretch">

                        {/* Portrait */}
                        <div className="md:col-span-5 lg:col-span-4 rounded-2xl overflow-hidden border border-zinc-800/90 relative bg-zinc-950">
                            <img
                                src={portrait}
                                width={780}
                                height={1040}
                                loading="lazy"
                                decoding="async"
                                alt="Luis Henrique Abrantes at Penn Engineering"
                                draggable={false}
                                className="w-full h-full min-h-[380px] object-cover object-top select-none pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-5 left-5 right-5 space-y-1">
                                <span className="text-base font-semibold text-white tracking-tight block drop-shadow-md">
                                    {PERSON.name}
                                </span>
                                <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5 drop-shadow">
                                    <MapPin className="w-3.5 h-3.5 text-zinc-300" aria-hidden="true" />
                                    Penn Engineering, Philadelphia, PA
                                </span>
                            </div>
                        </div>

                        {/* Statement */}
                        <div className="md:col-span-7 lg:col-span-5 flex flex-col justify-between gap-8 py-1">
                            <div className="space-y-5">
                                <Eyebrow>Profile</Eyebrow>

                                <h2 id="profile-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.08]">
                                    {PERSON.jobTitle}
                                </h2>

                                <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                                    {PERSON.statement}
                                </p>

                                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                                    {AVAILABILITY.summary} Based in {AVAILABILITY.location}. {AVAILABILITY.relocation}.
                                </p>
                            </div>

                            <div className="pt-6 border-t border-zinc-800/80 flex items-center gap-3 flex-wrap">
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
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="hidden sm:inline-flex items-center px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-colors text-sm sm:text-base"
                                >
                                    Email me
                                </a>
                            </div>
                        </div>

                        {/* At a glance */}
                        <div className="md:col-span-12 lg:col-span-3 lg:border-l lg:border-zinc-800/80 lg:pl-10 py-1">
                            <Eyebrow as="h3" tone="muted" className="mb-6">
                                At a glance
                            </Eyebrow>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-x-8 gap-y-5">
                                {CREDENTIALS.map(item => (
                                    <li key={item.title} className="space-y-0.5">
                                        <span className="text-sm sm:text-base text-white font-semibold block leading-snug">
                                            {item.title}
                                        </span>
                                        <span className="text-xs font-mono text-zinc-400 block leading-relaxed">
                                            {item.detail}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </section>


                {/* ========================================================
                    SELECTED WORK: the featured projects, linked to their pages
                   ======================================================== */}
                <section aria-labelledby="work-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
                    <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
                        <div className="space-y-3">
                            <Eyebrow>Selected work</Eyebrow>
                            <h2 id="work-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                Projects
                            </h2>
                        </div>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-1.5 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                            All {projects.length} projects
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>

                    <ol className="border-b border-zinc-800/80">
                        {featuredProjects.map((project, index) => (
                            <ProjectRow
                                key={project.slug}
                                project={project}
                                index={String(index + 1).padStart(2, '0')}
                                size="featured"
                            />
                        ))}
                    </ol>
                </section>


                {/* ========================================================
                    EXPERIENCE
                   ======================================================== */}
                <section aria-labelledby="experience-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
                    <div className="space-y-3 pb-8">
                        <Eyebrow>Experience</Eyebrow>
                        <h2 id="experience-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            Where I have worked
                        </h2>
                    </div>

                    <ul className="border-b border-zinc-800/80">
                        {experiences.map(exp => (
                            <li
                                key={`${exp.company}-${exp.role}`}
                                className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 py-10 border-t border-zinc-800/80"
                            >
                                <div className="md:col-span-4 space-y-1.5">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                                        {exp.company}
                                    </h3>
                                    <p className="text-sm sm:text-base text-zinc-300 font-light">
                                        {exp.role}
                                    </p>
                                    <p className="text-xs sm:text-sm font-mono text-zinc-500">
                                        {exp.period}
                                        {exp.location && (
                                            <>
                                                <br />
                                                {exp.location}
                                            </>
                                        )}
                                    </p>
                                </div>
                                <div className="md:col-span-8 space-y-4">
                                    <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
                                        {exp.description}
                                    </p>
                                    {exp.highlights && (
                                        <ul className="space-y-2 max-w-2xl">
                                            {exp.highlights.map(highlight => (
                                                <li key={highlight} className="flex items-start gap-3 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                                                    <span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/about"
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                        Education and full background
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </section>


                {/* ========================================================
                    MILESTONES (TIMELINE)
                   ======================================================== */}
                <section aria-labelledby="milestones-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
                    <div className="space-y-3 pb-10">
                        <Eyebrow>Trajectory</Eyebrow>
                        <h2 id="milestones-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                            Milestones
                        </h2>
                    </div>

                    <motion.ol
                        className="border-b border-zinc-800/80"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={revealViewport}
                    >
                        {timeline.map(item => (
                            <motion.li
                                key={item.year}
                                className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-7 border-t border-zinc-800/80"
                                variants={fadeInUp}
                            >
                                <span className="md:col-span-2 text-base sm:text-lg font-mono text-zinc-400 font-semibold">
                                    {item.year}
                                </span>
                                <p className="md:col-span-9 text-zinc-300 leading-relaxed text-base sm:text-lg font-light max-w-3xl">
                                    {item.description}
                                </p>
                            </motion.li>
                        ))}
                    </motion.ol>
                </section>


                {/* ========================================================
                    WRITING: teasers only. The articles live on the Papers hub.
                   ======================================================== */}
                <section aria-labelledby="writing-title" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
                    <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
                        <div className="space-y-3">
                            <Eyebrow>Writing</Eyebrow>
                            <h2 id="writing-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                Papers by Luis Abrantes
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
                                Technical notes on AI agent harnesses, tooling and infrastructure, published in English and Portuguese on their own site.
                            </p>
                        </div>
                        <a
                            href={PAPERS_EN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
                        >
                            papers.luisabrantes.dev
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </div>

                    <ul className="border-b border-zinc-800/80">
                        {papers.map(paper => (
                            <li
                                key={paper.url}
                                className="group relative grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-8 border-t border-zinc-800/80 transition-colors hover:border-zinc-600"
                            >
                                <div className="md:col-span-8 space-y-2.5">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                                        <a
                                            href={paper.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="outline-none after:absolute after:inset-0 focus-visible:after:rounded-lg focus-visible:after:ring-2 focus-visible:after:ring-white/70"
                                        >
                                            {paper.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                                        {paper.summary}
                                    </p>
                                </div>
                                <div className="md:col-span-4 flex md:flex-col md:items-end justify-between gap-4 md:text-right">
                                    <p className="text-xs font-mono text-zinc-500">
                                        {paper.topics}
                                    </p>
                                    <ArrowUpRight
                                        size={18}
                                        aria-hidden="true"
                                        className="flex-shrink-0 text-zinc-600 transition-all group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>


                {/* ========================================================
                    CLOSING: one clear next step
                   ======================================================== */}
                <section aria-labelledby="closing-title" className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-24">
                    <div className="max-w-3xl space-y-6">
                        <Eyebrow>Next step</Eyebrow>
                        <h2 id="closing-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                            Hiring for an internship or a junior role?
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                            I would like to hear about it. Write to{' '}
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="text-white font-medium underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors"
                            >
                                {CONTACT_EMAIL}
                            </a>{' '}
                            or use the{' '}
                            <Link
                                to="/contact"
                                className="text-white font-medium underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-colors"
                            >
                                contact page
                            </Link>
                            .
                        </p>
                    </div>
                </section>

            </main>

        </div>
    );
};

export default Home;
