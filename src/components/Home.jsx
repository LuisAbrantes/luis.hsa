import { motion } from 'framer-motion';

const timelineData = [
    {
        year: '2009',
        description: 'Started my first project at the age of 9.',
    },
    {
        year: '2015',
        description: 'Developed a full-stack web application for a local business.',
    },
    {
        year: '2020',
        description: 'Graduated with a degree in Computer Science.',
    },
    {
        year: '2023',
        description: 'Joined a leading tech company as a Software Engineer.',
    },
    // Adicione mais itens conforme necessário
];

const Home = () => {
    return (
        <div className="home-section bg-dark-primary text-dark-text">
            <h1 className="text-4xl font-bold mb-4">HACK is all you need !!</h1>
            <h2 className="name text-2xl font-semibold">
                Luis Henrique Abrantes
            </h2>
            <h3 className="title text-xl text-gray-400">
                Software Engineer & Tech Enthusiast
            </h3>
            <p className="introduction mt-4 text-lg leading-relaxed">
                Hi, I’m a passionate tech enthusiast and aspiring software
                engineer based in Brazil. With expertise in full-stack
                development and a strong focus on creating efficient and
                scalable solutions, I’ve been exploring modern web technologies
                since my first project at the age of 9. Driven by curiosity and
                a commitment to writing clean, maintainable code, I am always
                eager to tackle new challenges and make an impact in the tech
                world. Let&apos;s innovate together!
            </p>
            <div className="timeline-container mt-10 relative">
                <h2 className="text-3xl font-bold mb-6 text-center text-dark-text">My Journey</h2>
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
                                <h4 className="text-xl font-semibold text-dark-text">{item.year}</h4>
                                <p className="text-lg text-dark-text">{item.description}</p>
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
