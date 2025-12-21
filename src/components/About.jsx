import { useState } from 'react';
import { FaGraduationCap, FaTrophy, FaCode, FaUserAlt } from 'react-icons/fa';
import { Cpu, Star } from 'lucide-react';
import pullShark from '../assets/about/pullsharkbronze.png';
import arcticVault from '../assets/about/articcodevault.png';
import yolo from '../assets/about/yolo.png';
import starTruck from '../assets/about/startruck.png';
import quickdraw from '../assets/about/quickdraw.png';

const About = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const achievements = [
        {
            id: 1,
            name: 'Pull Shark',
            image: pullShark,
            description: 'Created numerous accepted pull requests'
        },
        {
            id: 2,
            name: 'Arctic Code Vault',
            image: arcticVault,
            description: 'Contributed code to the Arctic Code Vault'
        },
        {
            id: 3,
            name: 'YOLO',
            image: yolo,
            description: 'Merged without review'
        },
        {
            id: 4,
            name: 'Starstruck',
            image: starTruck,
            description: 'Created a repository that earned stars'
        },
        {
            id: 7,
            name: 'Quickdraw',
            image: quickdraw,
            description: 'Completed a pull request review in record time'
        },
        {
            id: 5,
            name: 'Developer Program Member',
            icon: <Cpu className="w-6 h-6 text-gray-400" />,
            description: 'Member of the GitHub Developer Program'
        },
        {
            id: 6,
            name: 'PRO',
            icon: (
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Star className="w-6 h-6 text-gray-400" />
                </div>
            ),
            description: 'GitHub PRO Member'
        }
    ];

    return (
        <div className="about-section bg-black text-dark-text min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Profile Section */}
                    <div className="profile-section w-full md:w-1/3 flex flex-col items-center md:items-start">
                        <div className="relative mb-8">
                            <img
                                src="https://avatars.githubusercontent.com/u/24616338?v=4"
                                alt="Profile"
                                className="rounded-full shadow-lg w-40 h-40 object-cover border border-gray-700/50"
                            />
                        </div>

                        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4 w-full text-center md:text-left">
                            GitHub Achievements
                        </h3>

                        <div className="achievements-grid flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                            {achievements.slice(0, 5).map(achievement => (
                                <div
                                    key={achievement.id}
                                    className="group relative cursor-pointer"
                                    onClick={() =>
                                        setSelectedAchievement(achievement)
                                    }
                                >
                                    <div className="w-12 h-12 rounded-full bg-dark-secondary/30 border border-gray-800 flex items-center justify-center transition-all duration-300 group-hover:border-gray-600 group-hover:bg-dark-secondary/50">
                                        <img
                                            src={achievement.image}
                                            alt={achievement.name}
                                            className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="highlights-grid flex flex-col gap-3 w-full">
                            {achievements.slice(5).map(achievement => (
                                <div
                                    key={achievement.id}
                                    className="group cursor-pointer"
                                    onClick={() =>
                                        setSelectedAchievement(achievement)
                                    }
                                >
                                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-secondary/30 border border-gray-800 transition-all duration-300 hover:border-gray-600 hover:bg-dark-secondary/50">
                                        <div className="text-gray-400 group-hover:text-white transition-colors">
                                            {achievement.icon}
                                        </div>
                                        <span className="font-light text-sm text-gray-300 group-hover:text-white transition-colors">
                                            {achievement.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div className="flex-1 w-full space-y-12">
                        {/* Academic Achievements Section */}
                        <div className="academic-section">
                            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                <FaGraduationCap
                                    className="text-gray-400"
                                    size={24}
                                />
                                Academic Profile
                            </h2>
                            <div className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
                                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                                    <div className="p-3 bg-dark-primary rounded-xl border border-gray-800">
                                        <FaTrophy className="text-gray-300 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-2">
                                            Instituto Federal de São Paulo
                                            (IFSP)
                                        </h3>
                                        <p className="text-sm text-gray-400 font-light mb-4">
                                            Brazil&apos;s Top Technical
                                            Education Institutions
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-500 font-light">
                                            <li>
                                                • Excellence in Technical and
                                                Academic Education
                                            </li>
                                            <li>
                                                • Recognized for Innovation and
                                                Research
                                            </li>
                                            <li>
                                                • Strong Industry Partnerships
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-dark-primary/50 border border-gray-800 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-light text-white mb-1">
                                            8.34
                                        </div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                                            GPA
                                        </div>
                                    </div>
                                    <div className="bg-dark-primary/50 border border-gray-800 p-4 rounded-xl text-center">
                                        <div className="text-2xl font-light text-white mb-1">
                                            X
                                        </div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                                            SAT Score
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Section */}
                        <div className="skills-section">
                            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                <FaCode className="text-gray-400" size={24} />
                                Tech Stack
                            </h2>
                            <div className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-gray-800">
                                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                                    Category
                                                </th>
                                                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
                                                    Technologies
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            <tr className="hover:bg-dark-primary/30 transition-colors">
                                                <td className="py-4 px-4 text-sm text-gray-300 font-light">
                                                    Frontend
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind'].map(tech => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-300 font-light"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-dark-primary/30 transition-colors">
                                                <td className="py-4 px-4 text-sm text-gray-300 font-light">
                                                    Backend
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {['Node.js', 'Python', 'FastAPI', 'SQL', 'Relational Databases', 'Supabase'].map(tech => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-300 font-light"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-dark-primary/30 transition-colors">
                                                <td className="py-4 px-4 text-sm text-gray-300 font-light">
                                                    Tools
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {['Git/GitHub', 'GitHub Pages', 'Vercel', 'Railway', 'Render', 'Linux Terminal'].map(tech => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-300 font-light"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-dark-primary/30 transition-colors">
                                                <td className="py-4 px-4 text-sm text-gray-300 font-light">
                                                    Languages
                                                </td>
                                                <td className="py-4 px-4">
                                                    <div className="flex flex-wrap gap-2">
                                                        {['JavaScript', 'TypeScript', 'Python', 'SQL'].map(lang => (
                                                            <span
                                                                key={lang}
                                                                className="px-3 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-300 font-light"
                                                            >
                                                                {lang}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* About Me Section */}
                        <div className="about-me-section">
                            <h2 className="text-2xl font-light text-white mb-6 flex items-center gap-3">
                                <FaUserAlt
                                    className="text-gray-400"
                                    size={20}
                                />
                                About Me
                            </h2>
                            <div className="bg-dark-secondary/30 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors duration-300">
                                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                                    <p>
                                        <strong className="text-white font-medium">
                                            True innovation happens outside our
                                            comfort zone – and that’s exactly
                                            where I choose to be.
                                        </strong>{' '}
                                        My greatest dream is to one day
                                        establish a church that goes beyond a
                                        place of worship, serving as a hub where
                                        children and young people can learn
                                        programming from an early age,
                                        developing both technical skills and
                                        character.
                                    </p>
                                    <p>
                                        Dedicating myself every day to studying
                                        and improving my skills, even in the
                                        face of daily challenges and problems, I
                                        maintain a routine of constant growth.
                                        Demonstrating discipline and
                                        consistency, I approach learning as an
                                        uninterrupted process, regardless of
                                        circumstances. Facing the rapid changes
                                        in technology, I adapt to new
                                        advancements with creativity and
                                        determination. Through practical
                                        projects—such as creating
                                        community-oriented applications or
                                        group-based learning activities—I
                                        demonstrate that programming is not just
                                        about writing code but about building
                                        solutions that merge innovation,
                                        empathy, and collaboration.
                                    </p>
                                    <p>
                                        With my skills, certifications, and
                                        passion for learning, I aim to present
                                        myself as someone committed to growth
                                        and to one day fulfilling this dream of
                                        inspiring and transforming lives. I
                                        believe that the knowledge I acquire
                                        will be essential to generate a positive
                                        impact on the people around me and those
                                        who, for some reason, come into contact
                                        with me or something I create. And it is
                                        in this spirit of faith, innovation, and
                                        dedication that I continue to seek
                                        opportunities to learn and share.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimalist Modal */}
            {selectedAchievement && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedAchievement(null)}
                >
                    <div
                        className="bg-dark-primary border border-gray-800 p-8 rounded-2xl w-full max-w-sm mx-4 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        {selectedAchievement.image && (
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-dark-secondary/50 flex items-center justify-center p-4">
                                <img
                                    src={selectedAchievement.image}
                                    alt={selectedAchievement.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        )}
                        <h3 className="text-xl font-medium text-white mb-3 text-center">
                            {selectedAchievement.name}
                        </h3>
                        <p className="mb-8 text-sm text-gray-400 text-center font-light leading-relaxed">
                            {selectedAchievement.description}
                        </p>
                        <a
                            href="https://github.com/LuisAbrantes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 px-4 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-colors text-sm"
                        >
                            View GitHub Profile
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
