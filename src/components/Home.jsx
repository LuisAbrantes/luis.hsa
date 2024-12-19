import { motion } from 'framer-motion';

const timelineData = [
    {
        year: '2016',
        description: 'Started programming at the age of nine, creating small projects to solve problems and learn new skills.',
    },
    {
        year: '2022',
        description: 'Accepted into the most competitive and prestigious free high school program in Brazil, Federal Institute of Science and Technology, excelling in various subjects.',
    },
    {
        year: '2024',
        description: 'Achieved a dream by participating in my first hackathon at an Ivy League, PennApps at UPenn, marking my first academic and alone trip abroad.',
    },
    {
        year: '2025',
        description: 'Developing PiedPiper - IFSP, a full-stack project to train students aspiring to join my institute of science and technology.',
    },
    // Add more items as needed
];

const Home = () => {
    return (
        <div className="home-section bg-dark-primary text-dark-text">
            <h1 className="text-4xl font-bold mb-4">HACK is all you need !!</h1>
            <h2 className="name text-2xl font-semibold">
                Luis Henrique Abrantes
            </h2>
            <h3 className="title text-xl text-gray-400">
                Christian & Tech Enthusiast
            </h3>
            <p className="introduction mt-4 text-lg leading-relaxed">
                Hi, I’m Luis Henrique Abrantes, a high school senior enrolled in
                an integrated technical program in Information Technology at the
                Federal Institute of São Paulo (IFSP). With a passion for
                innovation and programming, I specialize in creating scalable
                and efficient full-stack applications using technologies like
                React, Node.js, and Python. Over the years, I’ve participated in
                competitive programming events and impactful projects, including
                Pied Piper-IFSP and PennApps XXV, honing my skills and
                contributing to meaningful solutions. Always driven by curiosity
                and a commitment to excellence, I’m eager to take on new
                challenges and collaborate on transformative ideas. Let’s create
                something extraordinary together!
            </p>
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
    );
};

export default Home;
