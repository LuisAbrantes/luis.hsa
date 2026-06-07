import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { navCards } from '@/data/navigation';
import { timeline } from '@/data/timeline';
import { fadeInUp, staggerContainer, revealViewport } from '@/lib/motion';
import meOne from '@/assets/home/meOne.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-section relative bg-black text-dark-text min-h-screen pt-24 pb-16 px-4 font-sans overflow-hidden">
            {/* Content */}
            <div className="relative z-10">
                {/* Photo and Identity Section - Minimalist */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <motion.div
                        className="profile-picture-container mb-10"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <img
                            src={meOne}
                            alt="Luis Henrique Abrantes"
                            className="rounded-full w-48 h-48 object-cover object-top mx-auto shadow-lg border border-gray-700/50"
                        />
                    </motion.div>

                    <motion.div
                        className="identity-section space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: 'easeOut'
                        }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Luis Henrique Abrantes
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                            Christian & Tech Enthusiast
                        </h2>
                        <p className="text-lg text-gray-500 italic font-light mt-4">
                            &quot;HACK is all you need !!&quot;
                        </p>
                    </motion.div>
                </div>

                {/* Navigation Cards - Minimalist Outline Style */}
                <div className="max-w-5xl mx-auto mb-32">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {navCards.map(card => {
                            const IconComponent = card.icon;
                            return (
                                <motion.div
                                    key={card.path}
                                    className="group cursor-pointer"
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    onClick={() => navigate(card.path)}
                                >
                                    <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-800 bg-dark-secondary/30 hover:bg-dark-secondary/50 hover:border-gray-600 transition-all duration-300 h-full">
                                        <div className="p-4 rounded-full bg-dark-primary mb-4 group-hover:bg-white/5 transition-colors duration-300">
                                            <IconComponent
                                                className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h4 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                                            {card.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-2 text-center group-hover:text-gray-400 transition-colors duration-300">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Timeline Section - Clean & Minimal */}
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        className="timeline-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-16 text-center text-gray-200 tracking-wide uppercase">
                            My Journey
                        </h3>
                        <div className="relative">
                            {/* Continuous Line */}
                            <div className="absolute left-4 md:left-[9rem] top-0 bottom-0 w-px bg-gray-800/50"></div>

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
                                        <div className="md:w-36 flex-shrink-0 md:text-right md:pr-8 pl-12 md:pl-0">
                                            <span className="text-lg font-mono text-gray-400 font-medium block pt-1">
                                                {item.year}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pl-12 md:pl-8">
                                            <p className="text-gray-300 leading-relaxed text-base font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
