import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, Award, Mail } from 'lucide-react';
import meOne from '../assets/home/meOne.png';

const timelineData = [
    {
        year: '2016',
        description:
            'Started programming at the age of nine, creating small projects to solve problems and learn new skills.'
    },
    {
        year: '2022',
        description:
            'Accepted into the most competitive and prestigious free high school program in Brazil, Federal Institute of Science and Technology, excelling in various subjects.'
    },
    {
        year: '2024',
        description:
            'Developed TutorTime, my first full stack application. Achieved a dream by participating in my first hackathon at an Ivy League, PennApps at UPenn, marking my first academic trip abroad. I successfully organized a fundraiser campaign to raise the necessary funds for this independent journey.'
    },
    {
        year: '2024-2025',
        description:
            'Completed an intensive programming challenge by coding every day from September 22, 2024 to January 16, 2025. This consistent practice strengthened my skills, expanded my portfolio, and demonstrated my dedication to continuous improvement in software development.'
    }
];

const navigationCards = [
    {
        title: 'About',
        path: '/about',
        icon: User,
        description: 'Learn more about me'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: Briefcase,
        description: 'See my work'
    },
    {
        title: 'Academic Achievements',
        path: '/achievements',
        icon: Award,
        description: 'My accomplishments'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: Mail,
        description: 'Get in touch'
    }
];

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-section bg-dark-primary text-dark-text min-h-screen pt-24 pb-16 px-4 font-sans">
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
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {navigationCards.map(card => {
                        const IconComponent = card.icon;
                        return (
                            <motion.div
                                key={card.path}
                                className="group cursor-pointer"
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
                    <div className="relative border-l border-gray-800 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Year Marker */}
                                <div className="md:w-32 flex-shrink-0 flex md:justify-end items-center md:pt-1">
                                    <span className="text-lg font-mono text-gray-400 font-medium bg-dark-primary pr-4 z-10 relative">
                                        {item.year}
                                    </span>
                                    {/* Dot for desktop */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full border-4 border-dark-primary"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8 md:pb-0 border-l border-gray-800 md:border-none pl-8 md:pl-0 -ml-[17px] md:ml-0">
                                    {/* Dot for mobile */}
                                    <div className="md:hidden absolute left-0 top-1 w-3 h-3 bg-gray-700 rounded-full border-4 border-dark-primary -translate-x-[5px]"></div>

                                    <p className="text-gray-300 leading-relaxed text-base font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        {/* Vertical Line for Desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2 -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
