import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, ChevronDown, Sparkles, MapPin, Award, Layers, GraduationCap } from 'lucide-react';
import { timeline } from '@/data/timeline';
import { fadeInUp, staggerContainer, revealViewport } from '@/lib/motion';
import meOne from '@/assets/home/meOne.png';

// "Papers" is a separate hub on its own subdomain — the Home only links out.
const PAPERS_URL = 'https://papers.luisabrantes.dev';

const Home = () => {
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
    // CHOREOGRAPHY & VERTICAL CONVEYOR QUEUES (Full-Height Flight)
    // ========================================================
    const textOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.16], [0, -45]);

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
    const stagePointerEvents = useTransform(scrollYProgress, (v) => v > 0.9 ? 'none' : 'auto');

    return (
        <div className="home-root relative bg-[#07080b] text-[#EDEDED] font-sans selection:bg-zinc-700 selection:text-white">
            
            {/* ========================================================
                1. PINNED SCROLL-SCRUB HERO (100% Full-Bleed Video Engine)
               ======================================================== */}
            <div ref={scrollTrackRef} className="relative h-[250vh] w-full pt-16">
                
                <motion.div 
                    className="sticky top-16 h-[calc(100dvh-4rem)] w-full overflow-hidden flex items-center justify-center bg-[#07080b]"
                    style={{ opacity: stageFade, pointerEvents: stagePointerEvents as any }}
                >
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

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-black/60 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

                    {/* Top Headline & Identity (Positioned with ample safe area below navbar) */}
                    <motion.div 
                        className="absolute top-12 sm:top-14 md:top-16 inset-x-4 max-w-5xl mx-auto text-center pointer-events-none z-20 space-y-2 sm:space-y-2.5"
                        style={{ opacity: textOpacity, y: textY }}
                    >
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/70 backdrop-blur-md text-[10px] sm:text-xs font-mono text-zinc-300 shadow-2xl">
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

                    {/* DESKTOP STREAM */}
                    <div className="hidden sm:block">
                        {/* Desk L1: Google */}
                        <motion.div 
                            className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-6 sm:left-10 md:left-14 lg:left-16 z-20 pointer-events-none text-left sm:max-w-xs md:max-w-sm lg:max-w-md"
                            style={{ opacity: deskQ1Opacity, y: deskQ1Y }}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/google.svg`} alt="Google Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">AFFILIATION // 2026</span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">Google Student Ambassador</h4>
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
                                    <img src={`${cleanBasePath}assets/logos/upenn.svg`} alt="UPenn Shield" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">ENGINEERING // UPENN</span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">PennApps XXV</h4>
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
                                    <img src={`${cleanBasePath}assets/logos/ifsp.svg`} alt="IFSP Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">ACADEMIA // LEADERSHIP</span>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">Instituto Federal (IFSP)</h4>
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
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">UC Berkeley AI Hackathon</h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Cal Hacks • San Francisco</p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/berkeley.svg`} alt="UC Berkeley Seal" className="w-full h-full object-contain" />
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
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">UNICAMP Quantum & Physics Camps</h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Gleb Wataghin Physics Institute</p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/unicamp.png`} alt="UNICAMP Logo" className="w-full h-full object-contain" />
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
                                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase font-semibold">PRODUCTION SYSTEMS</span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-xl leading-tight">Applied AI & Harnesses</h4>
                                    <p className="text-sm md:text-base font-mono text-zinc-300 drop-shadow-md mt-0.5">Autonomous Developer Tooling</p>
                                </div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center flex-shrink-0 drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/hermes.png`} alt="Applied AI Hermes" className="w-full h-full object-contain" />
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
                                    <img src={`${cleanBasePath}assets/logos/google.svg`} alt="Google Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">AFFILIATION // 2026</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">Google Student Ambassador</h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Global Ambassador Cohort</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 2 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob2Opacity, y: mob2Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/berkeley.svg`} alt="UC Berkeley Seal" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">HACKATHON // BERKELEY</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">UC Berkeley AI Hackathon</h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Cal Hacks • San Francisco</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 3 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob3Opacity, y: mob3Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/upenn.svg`} alt="UPenn Shield" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">ENGINEERING // UPENN</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">PennApps XXV</h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">University of Pennsylvania</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 4 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob4Opacity, y: mob4Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/unicamp.png`} alt="UNICAMP Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-purple-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">QUANTUM & ASTRO // IFGW</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">UNICAMP Quantum & Physics Camps</h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Gleb Wataghin Physics Institute</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 5 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob5Opacity, y: mob5Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/ifsp.svg`} alt="IFSP Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">ACADEMIA // LEADERSHIP</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">Instituto Federal (IFSP)</h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Computer Science & Community Lead</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mob 6 */}
                        <motion.div className="absolute bottom-16 left-4 right-4 z-20 pointer-events-none text-left" style={{ opacity: mob6Opacity, y: mob6Y }}>
                            <div className="flex items-center gap-3.5">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0 drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                                    <img src={`${cleanBasePath}assets/logos/hermes.png`} alt="Applied AI Hermes" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1.5 mb-0.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">PRODUCTION SYSTEMS</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight leading-tight drop-shadow-lg">Applied AI & Harnesses</h4>
                                    <p className="text-xs font-mono text-zinc-300 drop-shadow-md">Autonomous Developer Tooling</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Cue */}
                    <motion.div className="absolute bottom-4 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1 text-zinc-400 z-20 pointer-events-none" style={{ opacity: textOpacity }}>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] sm:text-[11px] font-mono text-zinc-400 backdrop-blur-md">
                            <Sparkles className="w-3 h-3 text-zinc-400" />
                            <span>SCROLL TO EXPLORE</span>
                        </div>
                        <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400" />
                    </motion.div>
                </motion.div>
            </div>


            {/* ========================================================
                2. MAIN CONTENT REGION (Wide Spotlight & Metrics)
               ======================================================== */}
            <main className="relative z-30 bg-[#07080b] pt-12 pb-24 shadow-[0_-50px_80px_rgba(7,8,11,1)]">
                
                {/* WIDE SPOTLIGHT & KEY CREDENTIALS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                        
                        {/* Col 1: Portrait with Penn Engineering Banner */}
                        <div className="md:col-span-4 rounded-2xl overflow-hidden border border-zinc-800/90 relative group bg-zinc-950 shadow-2xl">
                            <img
                                src={meOne}
                                alt="Luis Henrique Abrantes at Penn Engineering"
                                draggable={false}
                                className="w-full h-full min-h-[380px] object-cover object-top filter contrast-[105%] group-hover:scale-102 transition-transform duration-500 select-none pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-5 left-5 right-5 space-y-1">
                                <span className="text-base font-semibold text-white tracking-tight block drop-shadow-md">
                                    Luis Henrique Abrantes
                                </span>
                                <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5 drop-shadow">
                                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                                    Penn Engineering • Philadelphia, PA
                                </span>
                            </div>
                        </div>

                        {/* Col 2: Profile & Mission (Keywords: Agent Harness Engineering, LLM Agents, RAG) */}
                        <div className="md:col-span-5 flex flex-col justify-between py-2 space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-widest uppercase font-semibold">
                                        PROFILE & MISSION
                                    </span>
                                </div>
                                
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                                    Software Engineer & Applied AI Developer
                                </h3>
                                
                                <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
                                    Specializing in <strong className="text-white font-semibold">Agent Harness Engineering</strong>, <strong className="text-white font-semibold">LLM Agents</strong>, and <strong className="text-white font-semibold">production RAG systems</strong>. Computer Science at <strong className="text-white font-medium">IFSP</strong> and <strong className="text-white font-medium">Google Student Ambassador (2026)</strong>.
                                </p>

                                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                                    Focused on building multi-agent orchestrations, context evaluation loops, and high-performance developer tooling that turn AI models into reliable, production-grade applications.
                                </p>
                            </div>

                            <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-4 flex-wrap">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-sm sm:text-base shadow-lg shadow-white/5"
                                >
                                    <span>View Full Background</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-medium hover:border-zinc-600 hover:text-white transition-all text-sm sm:text-base"
                                >
                                    <span>View Projects</span>
                                </Link>
                            </div>
                        </div>

                        {/* Col 3: Key Stats & Badges (Clear, Large, High-Contrast with IFSP 8-Year Merit Highlight) */}
                        <div className="md:col-span-3 flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 shadow-xl space-y-6">
                            <div>
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-4 font-semibold">
                                    KEY CREDENTIALS
                                </span>
                                
                                <div className="space-y-4">
                                    {/* Google Ambassador */}
                                    <div className="flex items-start gap-3">
                                        <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-sm sm:text-base text-white font-semibold block leading-tight">Google Ambassador</span>
                                            <span className="text-xs font-mono text-zinc-400">2026 Global Cohort</span>
                                        </div>
                                    </div>

                                    {/* IFSP 8-Year Merit Funded */}
                                    <div className="flex items-start gap-3">
                                        <GraduationCap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-sm sm:text-base text-white font-semibold block leading-tight">IFSP • 8-Yr Tech & CS</span>
                                            <span className="text-xs font-mono text-zinc-400">100% Merit-Funded • B.S. + Tech</span>
                                        </div>
                                    </div>
                                    
                                    {/* UC Berkeley */}
                                    <div className="flex items-start gap-3">
                                        <Layers className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-sm sm:text-base text-white font-semibold block leading-tight">UC Berkeley AI</span>
                                            <span className="text-xs font-mono text-zinc-400">Cal Hacks • San Francisco</span>
                                        </div>
                                    </div>
                                    
                                    {/* PennApps UPenn */}
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                        <div>
                                            <span className="text-sm sm:text-base text-white font-semibold block leading-tight">PennApps XXV</span>
                                            <span className="text-xs font-mono text-zinc-400">UPenn • Philadelphia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-zinc-800/80">
                                <span className="text-[11px] font-mono text-zinc-500 block uppercase">ACADEMIA // PUBLIC MERIT</span>
                            </div>
                        </div>

                    </div>
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
                            <span className="text-xs sm:text-sm font-mono text-zinc-500 tracking-widest uppercase block mb-2 font-semibold">
                                TRAJECTORY
                            </span>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-sans">
                                Milestones & Experience
                            </h3>
                        </div>

                        <div className="relative">
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
                                            <span className="text-base sm:text-lg font-mono text-zinc-400 font-semibold block pt-1">
                                                {item.year}
                                            </span>
                                        </div>

                                        {/* Timeline Content */}
                                        <div className="flex-1 pl-12 md:pl-8">
                                            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light">
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
                    4. PAPERS HUB (Open Typographic Editorial - 100% NO CARDS)
                   ======================================================== */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-28">
                    <motion.div
                        className="border-t border-zinc-800/80 pt-10"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={revealViewport}
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                            <div className="space-y-2 max-w-2xl">
                                <span className="text-xs sm:text-sm font-mono text-zinc-500 uppercase tracking-widest font-semibold block">
                                    TECHNICAL ESSAYS & PAPERS
                                </span>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                    Papers by Luis Abrantes
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-light leading-relaxed">
                                    Technical essays, deep-dives into autonomous AI agents, developer tooling, and systems engineering. Published bilingually (PT/EN) on its own dedicated space.
                                </p>
                                <span className="text-xs sm:text-sm font-mono text-zinc-500 block pt-1">
                                    papers.luisabrantes.dev
                                </span>
                            </div>

                            <a
                                href={PAPERS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-sm sm:text-base whitespace-nowrap shadow-md shadow-white/5"
                            >
                                <span>Visit Papers Hub</span>
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
