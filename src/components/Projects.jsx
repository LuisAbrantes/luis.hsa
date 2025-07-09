import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    ExternalLink,
    Code2,
    Zap,
    Palette,
    Triangle,
    Database,
    Hexagon,
    Youtube,
    FileText,
    FileType,
    FileJson,
    Brackets,
    Braces,
    SquareCode,
    Brain,
    Terminal,
    Mic // New icon for podcasting
} from 'lucide-react';
import agrolearn from '../assets/projects/agrolearn.png';
import quickreadme from '../assets/projects/quickreadme.png';
import elementaryschoolwebsite from '../assets/projects/elementaryschoolwebsite.png';
import tutortime from '../assets/projects/tutortime.png';
import webdevclasses from '../assets/projects/webDevClasses.png';
import historytestsite from '../assets/projects/historyTestStudyPortal.png';
import speakScribeImage from '../assets/projects/speakScribe.png';
import girlTalkAiImage from '../assets/projects/girlTalkAI.png';

const techIcons = {
    React: <Code2 size={14} className="inline-block text-current" />,
    Vite: <Zap size={14} className="inline-block text-current" />,
    'Tailwind CSS': <Palette size={14} className="inline-block text-current" />,
    Vercel: <Triangle size={14} className="inline-block text-current" />,
    Python: <Terminal size={14} className="inline-block text-current" />,
    HandleBars: <Brackets size={14} className="inline-block text-current" />,
    'Node.js': <FileJson size={14} className="inline-block text-current" />,
    'Express.js': (
        <SquareCode size={14} className="inline-block text-current" />
    ),
    MySQL: <Database size={14} className="inline-block text-current" />,
    Sequelize: <Database size={14} className="inline-block text-current" />,
    HTML: <Code2 size={14} className="inline-block text-current" />,
    CSS: <Palette size={14} className="inline-block text-current" />,
    JavaScript: <Braces size={14} className="inline-block text-current" />,
    TypeScript: <FileType size={14} className="inline-block text-current" />,
    Bootstrap: <Palette size={14} className="inline-block text-current" />,
    'Community Service': (
        <Hexagon size={14} className="inline-block text-current" />
    ),
    Supabase: <Database size={14} className="inline-block text-current" />,
    'GPT-3.5 Turbo': <Brain size={14} className="inline-block text-current" />,
    Firestore: <Database size={14} className="inline-block text-current" />,
    'Murf.ai': <Mic size={14} className="inline-block text-current" />,
    Llama: <Brain size={14} className="inline-block text-current" />
};

const projectsData = [
    {
        id: 8,
        title: 'GirlTalk AI',
        shortDescription:
            'AI-powered platform that generates personalized podcast clips to provide advice and support.',
        fullDescription: `Inspired by the need for a relatable female role model, GirlTalk AI was developed for the UC Berkeley AI Hackathon. It allows users to write their concerns into a chatbox and receive a personalized podcast clip from our AI host, Aisha. The platform leverages Llama API to generate personalized, empathetic text responses tailored to each user's specific situation, while Murf.ai API transforms these responses into humanized voice clips that make girls feel welcomed and supported. This creates a safe, supportive space for users to get advice tailored to their specific situations, moving beyond generalized online content. The platform also provides curated mental health resources and allows users to browse previously generated clips.`,
        image: girlTalkAiImage,
        thumbnail: girlTalkAiImage,
        technologies: [
            'React',
            'TypeScript',
            'Vite',
            'Tailwind CSS',
            'Firestore',
            'Express.js',
            'Murf.ai',
            'Llama'
        ],
        category: 'Hackathon Project',
        github: 'https://github.com/cicadaenjoyer/Girl-Talk-AI', // TODO: Add correct GitHub link
        devpost: 'https://devpost.com/software/girltalk-ai', // TODO: Add correct Devpost link
        highlights: [
            "Developed at the world's largest AI hackathon, hosted by UC Berkeley.",
            'Created a safe space for women to receive personalized, empathetic AI-generated advice.',
            "Integrated Llama API for generating personalized text responses tailored to each user's specific concerns.",
            'Utilized Murf.ai API to create humanized voice clips that make girls feel welcomed and supported.',
            'Engineered thoughtful and age-appropriate AI responses for sensitive topics.',
            'Utilized Firestore for data storage and built a modern frontend with React and TypeScript.'
        ]
    },
    {
        id: 1,
        title: 'SpeakScribe',
        shortDescription:
            'AI tool to assist students and educators, simplifying assignment creation and lecture summarization.',
        fullDescription: `SpeakScribe was developed at PennApps, the University of Pennsylvania's hackathon, with the goal of optimizing the learning and teaching process. For educators, the tool generates personalized assignments based on provided lesson plans, using GPT-3.5 Turbo to tailor activities to students' preferences and exporting them as PDFs. For students, with the teacher's permission, SpeakScribe records lectures, generates transcriptions, summaries, and key points, deepening their understanding of the content. The inspiration came from the need to process information more efficiently in the modern educational environment, especially with the growth of online learning. We wanted a solution that could convert speech to text and summarize visual data (like images into summaries, with future plans for charts) so students could focus on learning instead of manual note-taking. We used Python for the backend and React TypeScript for the frontend.`,
        image: speakScribeImage,
        thumbnail: speakScribeImage,
        technologies: ['React', 'TypeScript', 'Python', 'GPT-3.5 Turbo'],
        category: 'Hackathon Project',
        github: 'https://github.com/pranayrishi/SpeakScribe',
        devpost: 'https://devpost.com/software/speakscribe',
        youtube: 'https://www.youtube.com/watch?v=-Jz9-tNqB88',
        slides: 'https://docs.google.com/presentation/d/1MZ2BW9BR5UsyCl-LKMA4JZM3C9MduWuxzFUxp7TmygE/edit?slide=id.g7290233416_0_2#slide=id.g7290233416_0_2',
        highlights: [
            'Developed as a team during the PennApps hackathon at the University of Pennsylvania',
            'Creation of personalized assignments for students using GPT-3.5 Turbo',
            'Lecture recording, transcription, and summarization functionality for students',
            'Overcame challenges in installing Python packages and integrating pre-trained AI models',
            'Valuable learning about using API keys, handling real-time speech functions, and teamwork collaboration under pressure',
            'Future plans include expansion to more languages, summarization of long lectures, and reading charts/tables'
        ]
    },
    {
        id: 2,
        title: 'AgroLearn',
        shortDescription:
            'Distance learning platform for training agricultural machinery operators for the GP SENAI hackathon.',
        fullDescription:
            'AgroLearn is a distance learning platform designed to train agricultural machinery operators, created as part of the GP SENAI hackathon. The application is built using React and emphasizes modern web development practices to ensure a responsive and high-performance user experience. AgroLearn aims to provide an intuitive and efficient learning environment, offering various educational resources and tools specifically tailored for the agricultural sector. I used Vercel to deploy it.',
        image: agrolearn,
        thumbnail: agrolearn,
        technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/AgroLearn',
        demo: 'https://agrolearn.vercel.app/',
        highlights: [
            'Implemented a comprehensive distance learning platform for agricultural machinery operators',
            'Successfully developed and first deployed the application for the GP SENAI hackathon',
            'Utilized React, Vite, and Tailwind CSS to create a responsive and high-performance user interface'
        ]
    },
    {
        id: 3,
        title: 'QuickReadme',
        shortDescription:
            'Command-line Open Source Python Package tool to generate README.md files for your projects quickly.',
        fullDescription:
            "QuickReadme is a Python-based command-line tool designed to streamline the creation of README.md files for your projects. After installing the tool, you can navigate to your project directory and run quickreadme. The tool will guide you through interactive prompts to input your project's details, and then generate a comprehensive README.md file based on your responses. Contributions to the project are welcome, and you can follow the standard GitHub flow to propose improvements or new features. If you find QuickReadme useful, consider starring the repository on GitHub to show your support.",
        image: quickreadme,
        thumbnail: quickreadme,
        technologies: ['Python'],
        category: 'Python Package',
        github: 'https://github.com/LuisAbrantes/QuickReadme',
        demo: '',
        highlights: [
            'My current most starred project on GitHub',
            'Overcame the technical and criative challenge of create my first usable Python package by my own.',
            'My most starred project on GitHub, which earned me the StarTruck achievement.'
        ]
    },
    {
        id: 4,
        title: 'TutorTime',
        shortDescription:
            'A comprehensive platform for organizing and managing tutoring sessions and office hours in educational institutions.',
        fullDescription:
            'TutorTime is an innovative platform designed to streamline the organization and promotion of tutoring sessions and office hours in schools. The system helps connect students with peer tutors and teachers, manage schedules, and track academic support activities. Built with a modern tech stack including Supabase, React, and Vite, this project is being developed with the potential to become a startup venture.',
        image: tutortime,
        thumbnail: tutortime,
        technologies: ['Supabase', 'React', 'Vite'],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/TutorTimeModel',
        demo: '',
        highlights: [
            'Comprehensive scheduling system for tutoring sessions',
            'Student-tutor matching algorithm',
            'Real-time availability tracking',
            'Potential startup project for 2024'
        ]
    },
    {
        id: 5,
        title: 'Elementary School website',
        shortDescription:
            'A website I created at 13 to help organize exam schedules and study materials for my school.',
        fullDescription:
            "This is a website that I am very proud of because it was the first site I made using only HTML and CSS. When I was 13, my school was facing issues with exam organization, so I created a site with the exam calendar and their contents, followed by links to study materials. It was something that helped my class and increased everyone's productivity, including the teachers.",
        image: elementaryschoolwebsite,
        thumbnail: elementaryschoolwebsite,
        technologies: ['HTML', 'CSS'],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/MyElementarySchoolWebsite',
        demo: 'https://luisabrantes.github.io/MyElementarySchoolWebsite/',
        highlights: [
            'My first website ever',
            'Improved exam organization for my school',
            'Increased productivity for students and teachers'
        ]
    },
    {
        id: 6,
        title: 'WebDevClasses',
        shortDescription:
            'A living digital classroom I built and update after every web development lecture to support 40 classmates on their coding journey.',
        fullDescription:
            "WebDevClasses began with a simple observation: many of my classmates were struggling to keep pace with our intensive web development curriculum. Some missed crucial classes due to illness or commitments, while others found it challenging to take comprehensive notes while simultaneously absorbing complex coding concepts. Rather than watching my peers fall behind, I volunteered to create a solution. After each class, I meticulously document every lecture, transform complex concepts into accessible explanations, organize code examples, and create supplementary resources. The site grows organically with our curriculum—a living, breathing knowledge repository that evolves with each class session. What started as a personal initiative has become an essential lifeline for our cohort of 40 students. Beyond just lecture notes, it's now a complete learning ecosystem with detailed explanations, troubleshooting guides for common errors, and a centralized hub for assignments and resources. The platform has transformed our learning experience, fostering collaboration and ensuring no student gets left behind due to a missed class or a complex concept. It's become so valuable that instructors now officially recommend it as a course resource—a testament to how individual initiative can elevate an entire learning community.",
        image: webdevclasses,
        thumbnail: webdevclasses,
        technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
        category: 'Community Project',
        github: 'https://github.com/LuisAbrantes/WebDevClasses2025',
        demo: 'https://webdevclasses.vercel.app/',
        highlights: [
            'Voluntarily created and maintain a comprehensive digital classroom that grows with each lecture, providing real-time support to 40+ students',
            'Developed detailed code documentation, troubleshooting guides, and assignment resources all in one centralized hub',
            'Recognized by instructors who now officially recommend the platform as a supplementary course resource',
            'Transformed the learning experience for students who missed classes or needed additional support understanding complex concepts'
        ]
    },
    {
        id: 7,
        title: 'History Test Study Portal',
        shortDescription:
            'A rescue mission: I created this TypeScript-powered study platform when an entire class at another school was at risk of failing history.',
        fullDescription:
            "The History Test Study Portal emerged from an urgent call for help when I learned about a class at a neighboring school facing mass academic probation in history. The students were overwhelmed by the school's rigorous standards and struggling with complex topics like the Napoleonic Era, Liberalism, Socialism, and Liberal Revolutions. Within days, I volunteered to build a comprehensive digital lifeline using TypeScript (my first project with this language), React, Vite, and Tailwind CSS. The platform featured carefully crafted content based on their textbooks and class notes, AI-generated flashcards tailored to previous exam questions, interactive quizzes, and a comprehensive glossary of historical terms. What made this project special wasn't just the technology but the real human impact—watching students who had been demoralized transform into confident learners. The results spoke volumes: every student who used the platform passed their recovery exam, with many exceeding their targets. This experience taught me that technical skills gain their greatest meaning when applied to solve real human problems, and it remains one of my most meaningful volunteer contributions.",
        image: historytestsite,
        thumbnail: historytestsite,
        technologies: ['React', 'Vite', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        category: 'Community Project',
        github: 'https://github.com/LuisAbrantes/HistoryTestStudy',
        demo: 'https://history-test-study-kjwj7gyl1-luis-abrantes-projects.vercel.app/',
        highlights: [
            'Volunteered to create targeted study resources for four complex historical topics that were causing students to struggle',
            'Developed AI-powered flashcards and quizzes based on actual exam content to maximize study effectiveness',
            'My first TypeScript project, built under pressure to help students meet an urgent deadline',
            'Achieved 100% success rate with all students passing their recovery exams after using the platform'
        ]
    }
];

const ProjectCard = ({ project, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        className="bg-dark-secondary rounded-lg overflow-hidden shadow-xl"
    >
        <div className="relative group aspect-[16/9]">
            <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                    onClick={() => onClick(project)}
                    className="bg-dark-accent text-white px-4 py-2 rounded-md hover:bg-dark-accent transition"
                >
                    View Details
                </button>
            </div>
        </div>

        <div className="p-4">
            <h3 className="text-xl font-bold text-gray-200 mb-2">
                {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                    <span
                        key={tech}
                        className="px-2 py-1 bg-dark-accent bg-opacity-20 text-dark-accent rounded-md text-sm flex items-center gap-1"
                    >
                        {techIcons[tech]} {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-dark-accent transition"
                >
                    <Github size={18} /> Code
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-dark-accent transition"
                    >
                        <ExternalLink size={18} /> Demo
                    </a>
                )}
                {project.devpost && (
                    <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-dark-accent transition"
                    >
                        <Hexagon size={18} className="relative">
                            <text
                                x="50%"
                                y="52%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className="fill-current text-xs font-bold"
                                style={{ transform: 'translateY(1px)' }}
                            >
                                D
                            </text>
                        </Hexagon>{' '}
                        Devpost
                    </a>
                )}
                {project.youtube && (
                    <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-dark-accent transition"
                    >
                        <Youtube size={18} /> Video
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-secondary rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
            <div className="p-6">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-200 mb-4">
                    {project.title}
                </h2>
                <p className="text-gray-400 mb-6">{project.fullDescription}</p>

                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                    Highlights
                </h3>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                    {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                    ))}
                </ul>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-accent text-white px-6 py-2 rounded-md hover:bg-dark-accent transition flex items-center gap-2"
                    >
                        <Github size={18} /> View Code
                    </a>
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-accent text-white px-6 py-2 rounded-md hover:bg-dark-accent transition flex items-center gap-2"
                        >
                            <ExternalLink size={18} /> View Demo
                        </a>
                    )}
                    {project.devpost && (
                        <a
                            href={project.devpost}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-accent text-white px-6 py-2 rounded-md hover:bg-dark-accent transition flex items-center gap-2"
                        >
                            <Hexagon size={18} className="relative">
                                <text
                                    x="50%"
                                    y="52%"
                                    dominantBaseline="middle"
                                    textAnchor="middle"
                                    className="fill-current text-xs font-bold"
                                    style={{ transform: 'translateY(1px)' }}
                                >
                                    D
                                </text>
                            </Hexagon>{' '}
                            View on Devpost
                        </a>
                    )}
                    {project.youtube && (
                        <a
                            href={project.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-accent text-white px-6 py-2 rounded-md hover:bg-dark-accent transition flex items-center gap-2"
                        >
                            <Youtube size={18} /> Watch Video
                        </a>
                    )}
                    {project.slides && (
                        <a
                            href={project.slides}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-accent text-white px-6 py-2 rounded-md hover:bg-dark-accent transition flex items-center gap-2"
                        >
                            <FileText size={18} /> View Slides
                        </a>
                    )}
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-gray-600 text-gray-400 rounded-md hover:bg-dark-hover transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </motion.div>
    </div>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('all');

    const categories = ['all', ...new Set(projectsData.map(p => p.category))];

    const filteredProjects =
        filter === 'all'
            ? projectsData
            : projectsData.filter(p => p.category === filter);

    return (
        <section className="py-20 px-4 bg-dark-primary">
            <div className="container mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-gray-200 mb-8 text-center"
                >
                    My Projects
                </motion.h1>

                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-md transition ${
                                filter === category
                                    ? 'bg-dark-accent text-white'
                                    : 'bg-dark-secondary text-gray-400 hover:bg-dark-hover'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>

                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;
