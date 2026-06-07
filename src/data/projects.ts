import type { Project } from '@/types';
import agrolearn from '@/assets/projects/AgroLearn.png';
import quickreadme from '@/assets/projects/quickreadme.png';
import elementaryschoolwebsite from '@/assets/projects/elementaryschoolwebsite.png';
import tutortime from '@/assets/projects/tutortime.png';
import webdevclasses from '@/assets/projects/webDevClasses.png';
import historytestsite from '@/assets/projects/historyTestStudyPortal.png';
import speakScribeImage from '@/assets/projects/speakScribe.png';
import girlTalkAiImage from '@/assets/projects/girlTalkAI.png';
import encantosDoForno from '@/assets/projects/encantosDoForno.png';

export const projects: Project[] = [
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
        github: 'https://github.com/cicadaenjoyer/Girl-Talk-AI',
        devpost: 'https://devpost.com/software/girltalk-ai',
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
        id: 9,
        title: 'Encantos do Forno',
        shortDescription:
            'A freelance full-stack restaurant management system built for a local artisan restaurant, featuring real-time queue management, digital menu, reservation booking, and a complete admin dashboard for operations.',
        fullDescription:
            "Encantos do Forno is a comprehensive restaurant management system I developed as a freelance project for a local artisan restaurant in Jacareí/SP, designed to bridge traditional hospitality with modern digital operations. For customers, the platform provides an intuitive landing page showcasing the restaurant's story and team, a digital menu with categorized products, a reservation booking system, and a real-time queue management feature allowing walk-in customers to join waitlists and track their position. The system also includes direct WhatsApp contact integration and embedded Google Maps for easy location access. For administrators and staff, the platform offers a complete management dashboard with authentication and role-based access. Admin features include full CRUD operations for products, orders, tables, reservations, and employees, real-time queue administration with customer notification capabilities, scheduling conflict prevention, and class/workshop management for bakery courses. Built with React, Vite, and Tailwind CSS, the system delivers a responsive experience across all devices and is deployed on Vercel with proper SPA routing configuration.",
        image: encantosDoForno,
        thumbnail: encantosDoForno,
        technologies: [
            'React',
            'Tailwind CSS',
            'JavaScript',
            'Supabase',
            'WhatsApp',
            'Maps',
            'Railway',
            'Vercel'
        ],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/EncantosDoForno',
        demo: 'https://encantos-do-forno.vercel.app/',
        highlights: [
            'Full-stack restaurant management system deployed for real commercial client in Jacareí/SP',
            'Dual interface architecture: customer-facing landing page and authenticated admin dashboard with role-based access',
            'Real-time queue management system enabling walk-in customers to join waitlists digitally and receive position updates',
            'Comprehensive CRUD operations across multiple entities: products, orders, tables, employees, reservations, and classes',
            'Responsive design ensuring seamless experience across desktop, tablet, and mobile devices for both customers and staff',
            'Built with modern React patterns using Context API for state management and custom hooks for reusable logic',
            'Production deployment on Vercel with proper routing configuration for single-page application behavior'
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
        category: 'Hackathon Project',
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
