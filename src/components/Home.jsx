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
        <div className="home-section bg-dark-primary text-dark-text flex flex-col items-center md:flex-row md:items-start">
            <div className="profile-picture-container md:mr-8 mb-8 md:mb-0">
                <img
                    src={meOne}
                    alt="Luis Henrique Abrantes at University of Pennsylvania"
                    className="rounded-full w-60 h-60 object-cover object-top"
                />
            </div>
            <div className="content-container flex-1">
                <h1 className="text-4xl font-bold mb-4">
                    HACK is all you need !!
                </h1>
                <h2 className="name text-2xl font-semibold">
                    Luis Henrique Abrantes
                </h2>
                <h3 className="title text-xl text-gray-400">
                    Christian & Tech Enthusiast
                </h3>
                <motion.div
                    className="portfolio-highlights bg-dark-secondary p-8 my-8 rounded-lg text-center shadow-xl hover:shadow-2xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-2xl font-bold mb-6 text-dark-accent">
                        Highlights
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.li
                            className="bg-dark-primary p-4 rounded-lg hover:bg-dark-hover cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Experience in hackathons and international projects
                        </motion.li>
                        <motion.li
                            className="bg-dark-primary p-4 rounded-lg hover:bg-dark-hover cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Creative approach to problem-solving
                        </motion.li>
                        <motion.li
                            className="bg-dark-primary p-4 rounded-lg hover:bg-dark-hover cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Passion for inspiring and sharing knowledge
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Expanded multi-paragraph introduction */}
                <div className="intro mt-4 text-lg leading-relaxed space-y-4">
                    <p>
                        I&apos;m Luis Henrique Abrantes, a high school senior
                        enrolled in an integrated technical program at the
                        Federal Institute of São Paulo (IFSP). With a passion
                        for innovation and programming, I focus on creating
                        scalable and efficient full-stack applications using
                        React, Node.js, and Python. As the Founder and CEO of
                        TutorTime, I&apos;ve led the development of an
                        innovative platform that connects students with peer
                        tutors and teachers, revolutionizing how academic
                        support is organized in educational institutions.
                    </p>
                    <p>
                        TutorTime represents my vision for making education more
                        accessible and efficiently managed. Under my leadership,
                        the platform has evolved from a concept to a
                        comprehensive solution built with Supabase, React, and
                        Vite. I oversee all aspects of development while
                        maintaining the strategic direction, transforming
                        TutorTime from a project into a potential startup
                        venture with real-world applications for schools and
                        universities.
                    </p>
                    <p>
                        Driven by curiosity and a commitment to excellence, I
                        approach new challenges with creativity and
                        determination. My journey includes hackathons like
                        PennApps XXV at the University of Pennsylvania, where I
                        participated after successfully organizing a
                        crowdfunding campaign to finance my first international
                        trip. As President of the Coding Club and ARINTER
                        Ambassador, I&apos;ve built leadership and
                        organizational abilities while collaborating with a
                        diverse tech community. My certifications in Artificial
                        Intelligence, Linux Network Administration, and Database
                        Management demonstrate my drive for continuous learning.
                    </p>
                    <p>
                        My expertise ranges from frontend development to backend
                        logic and database design. I&apos;ve explored astronomy
                        through Space INPE, blending curiosity for the cosmos
                        with the power of code. Beyond building software,
                        I&apos;m passionate about exploring new cultures,
                        brainstorming with fellow hackers, and pushing the
                        boundaries of technology to create transformative
                        solutions. I believe in leveraging programming to
                        inspire others and bring innovative ideas to life.
                    </p>
                </div>

                <div className="timeline-container mt-10 relative">
                    <h2 className="text-3xl font-bold mb-6 text-center text-dark-text">
                        My Journey
                    </h2>
                    <div className="timeline relative">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item mb-8 flex flex-col items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="timeline-content bg-dark-secondary p-6 rounded-lg shadow-lg w-2/3 hover:bg-dark-hover transition-all duration-300">
                                    <h4 className="text-xl font-semibold text-dark-text">
                                        {item.year}
                                    </h4>
                                    <p className="text-lg text-dark-text">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="timeline-circle bg-dark-accent h-6 w-6 rounded-full mt-4 border-2 border-dark-accent"></div>
                                {index !== timelineData.length - 1 && (
                                    <div className="timeline-line bg-dark-accent w-1 h-16"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
