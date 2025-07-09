// filepath: /Users/luisabrantes/Documents/luis.hsa/src/components/Home.jsx
import { motion } from 'framer-motion';
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
    // Add more items as needed
];

const Home = () => {
    return (
        <div className="min-h-screen bg-transparent text-dark-text flex flex-col items-center md:flex-row md:items-start p-8 md:p-16 relative">
            {/* Liquid Glass Profile Container */}
            <div className="profile-picture-container md:mr-12 mb-8 md:mb-0 relative">
                <div className="relative group">
                    {/* Glass Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-accent to-dark-accentHover rounded-full p-1 animate-pulse-glow">
                        <div className="w-full h-full bg-dark-primary rounded-full"></div>
                    </div>
                    {/* Profile Image */}
                    <div className="relative bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-full p-2 shadow-glass hover:shadow-glass-hover transition-all duration-500 animate-glass-float">
                        <img
                            src={meOne}
                            alt="Luis Henrique Abrantes at University of Pennsylvania"
                            className="rounded-full w-60 h-60 object-cover object-top"
                        />
                    </div>
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
            </div>

            <div className="content-container flex-1 max-w-4xl">
                {/* Header with Glass Effect */}
                <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 mb-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                    {/* Background Shimmer */}
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-10"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-dark-accent to-dark-accentHover bg-clip-text text-transparent animate-gradient-x">
                            HACK is all you need !!
                        </h1>
                        <h2 className="name text-3xl font-semibold mb-2 text-dark-text">
                            Luis Henrique Abrantes
                        </h2>
                        <h3 className="title text-xl text-dark-muted">
                            Christian & Tech Enthusiast
                        </h3>
                    </div>
                </div>
                {/* Highlights Section with Liquid Glass */}
                <motion.div
                    className="portfolio-highlights bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 mb-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-purple-glass opacity-30"></div>
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-10"></div>

                    <div className="relative z-10">
                        <h4 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-dark-accent to-dark-accentHover bg-clip-text text-transparent">
                            Highlights
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.li
                                className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:bg-dark-glassHover hover:border-dark-purpleGlassBorder cursor-pointer shadow-inner-glass transition-all duration-300 group"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="text-center group-hover:text-dark-accentHover transition-colors duration-300">
                                    Experience in hackathons and international
                                    projects
                                </div>
                                <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                            </motion.li>
                            <motion.li
                                className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:bg-dark-glassHover hover:border-dark-purpleGlassBorder cursor-pointer shadow-inner-glass transition-all duration-300 group"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="text-center group-hover:text-dark-accentHover transition-colors duration-300">
                                    Creative approach to problem-solving
                                </div>
                                <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                            </motion.li>
                            <motion.li
                                className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:bg-dark-glassHover hover:border-dark-purpleGlassBorder cursor-pointer shadow-inner-glass transition-all duration-300 group"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div className="text-center group-hover:text-dark-accentHover transition-colors duration-300">
                                    Passion for inspiring and sharing knowledge
                                </div>
                                <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
                            </motion.li>
                        </ul>
                    </div>
                </motion.div>

                {/* Introduction Section with Glass Effect */}
                <div className="intro bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 mb-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-glass opacity-20"></div>
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-5"></div>

                    <div className="relative z-10 text-lg leading-relaxed space-y-6">
                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                            <p className="text-dark-text">
                                I&apos;m Luis Henrique Abrantes, a high school
                                senior enrolled in an integrated technical
                                program at the Federal Institute of São Paulo
                                (IFSP). With a passion for innovation and
                                programming, I focus on creating scalable and
                                efficient full-stack applications using React,
                                Node.js, and Python. As the Founder and CEO of
                                TutorTime, I&apos;ve led the development of an
                                innovative platform that connects students with
                                peer tutors and teachers, revolutionizing how
                                academic support is organized in educational
                                institutions.
                            </p>
                        </div>
                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                            <p className="text-dark-text">
                                TutorTime represents my vision for making
                                education more accessible and efficiently
                                managed. Under my leadership, the platform has
                                evolved from a concept to a comprehensive
                                solution built with Supabase, React, and Vite. I
                                oversee all aspects of development while
                                maintaining the strategic direction,
                                transforming TutorTime from a project into a
                                potential startup venture with real-world
                                applications for schools and universities.
                            </p>
                        </div>
                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                            <p className="text-dark-text">
                                Driven by curiosity and a commitment to
                                excellence, I approach new challenges with
                                creativity and determination. My journey
                                includes hackathons like PennApps XXV at the
                                University of Pennsylvania, where I participated
                                after successfully organizing a crowdfunding
                                campaign to finance my first international trip.
                                As President of the Coding Club and ARINTER
                                Ambassador, I&apos;ve built leadership and
                                organizational abilities while collaborating
                                with a diverse tech community. My certifications
                                in Artificial Intelligence, Linux Network
                                Administration, and Database Management
                                demonstrate my drive for continuous learning.
                            </p>
                        </div>
                        <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                            <p className="text-dark-text">
                                My expertise ranges from frontend development to
                                backend logic and database design. I&apos;ve
                                explored astronomy through Space INPE, blending
                                curiosity for the cosmos with the power of code.
                                Beyond building software, I&apos;m passionate
                                about exploring new cultures, brainstorming with
                                fellow hackers, and pushing the boundaries of
                                technology to create transformative solutions. I
                                believe in leveraging programming to inspire
                                others and bring innovative ideas to life.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline Section with Liquid Glass */}
                <div className="timeline-container bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-glass opacity-10"></div>
                    <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-5"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-dark-accent to-dark-accentHover bg-clip-text text-transparent">
                            My Journey
                        </h2>
                        <div className="timeline relative">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-item mb-8 flex flex-col items-center relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2
                                    }}
                                >
                                    <div className="timeline-content bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-8 shadow-inner-glass hover:shadow-glass-hover hover:border-dark-purpleGlassBorder transition-all duration-500 w-full max-w-2xl group relative overflow-hidden">
                                        <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-semibold text-dark-accent mb-4 group-hover:text-dark-accentHover transition-colors duration-300">
                                                {item.year}
                                            </h4>
                                            <p className="text-lg text-dark-text leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Circle with Glass Effect */}
                                    <div className="timeline-circle bg-gradient-to-r from-dark-accent to-dark-accentHover h-8 w-8 rounded-full mt-6 mb-4 shadow-purple-glow animate-pulse-glow relative">
                                        <div className="absolute inset-0 bg-dark-glass backdrop-blur-sm rounded-full"></div>
                                    </div>

                                    {/* Timeline Line */}
                                    {index !== timelineData.length - 1 && (
                                        <div className="timeline-line bg-gradient-to-b from-dark-accent to-dark-accentHover w-0.5 h-16 relative">
                                            <div className="absolute inset-0 bg-dark-glass backdrop-blur-sm"></div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
