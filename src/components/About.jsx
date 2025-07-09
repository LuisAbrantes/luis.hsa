import { useState } from 'react';
import { FaGraduationCap, FaCode } from 'react-icons/fa';
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
            icon: <Cpu className="w-6 h-6 text-dark-accent" />,
            description: 'Member of the GitHub Developer Program'
        },
        {
            id: 6,
            name: 'PRO',
            icon: <Star className="w-6 h-6 text-dark-accent" />,
            description: 'GitHub PRO Member'
        }
    ];

    return (
        <div className="about-section bg-transparent text-dark-text p-4 sm:p-8 min-h-screen relative">
            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-purple-glass opacity-20"></div>
                        <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-10"></div>

                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-dark-accent to-dark-accentHover bg-clip-text text-transparent animate-gradient-x">
                                About Me
                            </h1>
                            <p className="text-xl text-dark-muted max-w-2xl mx-auto">
                                Discover my journey, achievements, and passion
                                for technology
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Profile Section */}
                    <div className="profile-section w-full lg:w-1/3">
                        <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-purple-glass opacity-10"></div>
                            <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-5"></div>

                            <div className="relative z-10 text-center">
                                <div className="relative mb-6 inline-block">
                                    <div className="relative bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-full p-2 shadow-glass hover:shadow-glass-hover transition-all duration-500 animate-glass-float">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/24616338?v=4"
                                            alt="Profile"
                                            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 object-cover"
                                        />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-dark-text mb-2">
                                    GitHub Achievements
                                </h2>
                                <p className="text-dark-muted mb-6">
                                    Click on any achievement to learn more
                                </p>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {achievements
                                        .slice(0, 5)
                                        .map(achievement => (
                                            <div
                                                key={achievement.id}
                                                className="relative group"
                                            >
                                                <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-3 hover:border-dark-purpleGlassBorder transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-inner-glass">
                                                    <img
                                                        src={achievement.image}
                                                        alt={achievement.name}
                                                        className="w-12 h-12 object-contain"
                                                        onClick={() =>
                                                            setSelectedAchievement(
                                                                achievement
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {achievements.slice(5).map(achievement => (
                                        <div
                                            key={achievement.id}
                                            className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-4 hover:border-dark-purpleGlassBorder transition-all duration-300 cursor-pointer group relative"
                                        >
                                            <div className="flex items-center gap-3">
                                                {achievement.icon}
                                                <span className="text-dark-text font-medium group-hover:text-dark-accentHover transition-colors duration-300">
                                                    {achievement.name}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 w-full space-y-8">
                        {/* Academic Section */}
                        <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-purple-glass opacity-10"></div>
                            <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-5"></div>

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-6 flex items-center text-dark-text">
                                    <FaGraduationCap className="mr-3 text-dark-accent" />{' '}
                                    Academic Background
                                </h2>
                                <div className="space-y-6">
                                    <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-dark-text mb-2">
                                            Integrated Computer Science
                                            Technical Program
                                        </h3>
                                        <p className="text-dark-muted mb-2">
                                            Federal Institute of São Paulo
                                            (IFSP)
                                        </p>
                                        <p className="text-dark-text">
                                            Currently pursuing an integrated
                                            technical program that combines high
                                            school education with specialized
                                            computer science training.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 shadow-glass hover:shadow-glass-hover transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-purple-glass opacity-10"></div>
                            <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-5"></div>

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-6 flex items-center text-dark-text">
                                    <FaCode className="mr-3 text-dark-accent" />{' '}
                                    Technical Skills
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-dark-text mb-3">
                                            Frontend
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'React',
                                                'TypeScript',
                                                'JavaScript',
                                                'Tailwind CSS'
                                            ].map(skill => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-dark-glass backdrop-blur-sm border border-dark-glassBorder text-dark-accent rounded-xl text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-dark-glass backdrop-blur-md border border-dark-glassBorder rounded-2xl p-6 hover:border-dark-purpleGlassBorder transition-all duration-300">
                                        <h3 className="text-lg font-semibold text-dark-text mb-3">
                                            Backend
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                'Node.js',
                                                'Python',
                                                'MySQL',
                                                'Supabase'
                                            ].map(skill => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-dark-glass backdrop-blur-sm border border-dark-glassBorder text-dark-accent rounded-xl text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievement Modal */}
            {selectedAchievement && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedAchievement(null)}
                >
                    <div
                        className="bg-dark-glass backdrop-blur-xl border border-dark-glassBorder rounded-3xl p-8 max-w-md w-full shadow-glass relative overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="absolute inset-0 bg-purple-glass opacity-20"></div>
                        <div className="absolute inset-0 bg-shimmer bg-no-repeat animate-glass-shimmer opacity-10"></div>

                        <div className="relative z-10 text-center">
                            <img
                                src={selectedAchievement.image}
                                alt={selectedAchievement.name}
                                className="w-20 h-20 mx-auto mb-4 rounded-2xl"
                            />
                            <h3 className="text-2xl font-bold text-dark-text mb-4">
                                {selectedAchievement.name}
                            </h3>
                            <p className="text-dark-muted mb-6 leading-relaxed">
                                {selectedAchievement.description}
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/LuisAbrantes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-dark-accent hover:bg-dark-accentHover text-dark-text py-3 px-6 rounded-2xl font-medium transition-all duration-300 shadow-purple-glow hover:shadow-purple-glow-lg"
                                >
                                    View GitHub
                                </a>
                                <button
                                    onClick={() => setSelectedAchievement(null)}
                                    className="px-6 py-3 bg-dark-glass backdrop-blur-md border border-dark-glassBorder text-dark-muted hover:text-dark-text hover:border-dark-purpleGlassBorder rounded-2xl font-medium transition-all duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
