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
                    <Star className="w-6 h-6 text-purple-500" />
                </div>
            ),
            description: 'GitHub PRO Member'
        }
    ];

    return (
        <div className="about-section bg-dark-primary text-dark-text p-4 sm:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Profile Section */}
                    <div className="profile-section w-full md:w-1/3 flex flex-col items-center md:items-start">
                        <img
                            src="https://avatars.githubusercontent.com/u/24616338?v=4"
                            alt="Profile"
                            className="rounded-full shadow-xl w-32 h-32 sm:w-48 sm:h-48 mb-4"
                        />

                        <div className="achievements-grid flex gap-3 sm:gap-4 mt-4 flex-wrap justify-center md:justify-start">
                            {achievements.slice(0, 5).map(achievement => (
                                <div key={achievement.id} className="relative">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.name}
                                        className="w-12 h-12 cursor-pointer transform-gpu transition-all duration-300 
                             hover:rotate-[360deg] hover:scale-110 active:scale-95"
                                        onClick={() =>
                                            setSelectedAchievement(achievement)
                                        }
                                    />
                                    {selectedAchievement?.id ===
                                        achievement.id && (
                                        <div
                                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 
                                  animate-fadeIn backdrop-blur-sm"
                                            onClick={() =>
                                                setSelectedAchievement(null)
                                            }
                                        >
                                            <div
                                                className="bg-dark-secondary p-6 rounded-lg max-w-sm mx-4 transform-gpu 
                                    transition-all duration-300 animate-scaleIn"
                                                onClick={e =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <img
                                                    src={achievement.image}
                                                    alt={achievement.name}
                                                    className="w-24 h-24 mx-auto mb-4"
                                                />
                                                <h3 className="text-xl font-bold mb-2">
                                                    {achievement.name}
                                                </h3>
                                                <p className="mb-4">
                                                    {achievement.description}
                                                </p>
                                                <a
                                                    href="https://github.com/LuisAbrantes"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                                                >
                                                    View GitHub Profile
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="highlights-grid flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8 w-full">
                            {achievements.slice(5).map(achievement => (
                                <div
                                    key={achievement.id}
                                    className="relative w-full"
                                >
                                    <div
                                        className="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg cursor-pointer 
                             relative after:absolute after:inset-0 after:rounded-lg
                             after:bg-gradient-to-r after:from-blue-500 
                             after:via-purple-500 after:to-pink-500 after:opacity-0
                             after:transition-all after:duration-300 hover:after:opacity-100
                             after:[background-size:0%_100%] hover:after:animate-border-draw
                             after:[mask:padding-box]
                             transform-gpu transition-all duration-300 
                             hover:scale-105 active:scale-95
                             group overflow-hidden before:absolute before:inset-[1px]
                             before:bg-dark-primary before:rounded-lg before:z-[1]"
                                        onClick={() =>
                                            setSelectedAchievement(achievement)
                                        }
                                    >
                                        <div className="relative z-10 flex items-center gap-3 bg-dark-primary rounded-lg">
                                            {achievement.icon}
                                            <span
                                                className={`font-medium text-base ${
                                                    achievement.name ===
                                                    'Developer Program Member'
                                                        ? 'text-gray-400 group-hover:text-gray-300'
                                                        : achievement.name ===
                                                          'PRO'
                                                        ? 'text-purple-500 border-2 border-purple-500 rounded-full px-2 hover:bg-purple-500/10'
                                                        : ''
                                                }`}
                                            >
                                                {achievement.name}
                                            </span>
                                        </div>
                                    </div>
                                    {selectedAchievement?.id ===
                                        achievement.id && (
                                        <div
                                            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 
                                  animate-fadeIn backdrop-blur-sm"
                                            onClick={() =>
                                                setSelectedAchievement(null)
                                            }
                                        >
                                            <div
                                                className="bg-dark-secondary p-6 rounded-lg max-w-sm mx-4 transform-gpu 
                                    transition-all duration-300 animate-scaleIn"
                                                onClick={e =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <h3 className="text-xl font-bold mb-2">
                                                    {achievement.name}
                                                </h3>
                                                <p className="mb-4">
                                                    {achievement.description}
                                                </p>
                                                <a
                                                    href="https://github.com/LuisAbrantes"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                                                >
                                                    View GitHub Profile
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Section */}
                    <div className="flex-1 w-full space-y-8">
                        {/* Academic Achievements Section */}
                        <div className="academic-section">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                                <FaGraduationCap className="mr-2" /> Academic
                                Profile
                            </h2>
                            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-lg">
                                <div className="bg-dark-secondary p-4 sm:p-6 rounded-lg shadow-lg space-y-6">
                                    {/* School Highlight */}
                                    <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-blue-500/20">
                                        <div className="flex items-start gap-4">
                                            <FaTrophy className="text-yellow-500 text-2xl mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                                    Instituto Federal de São
                                                    Paulo (IFSP)
                                                </h3>
                                                <p className="text-sm text-gray-300 mt-1">
                                                    Brazil&apos;s Top Technical
                                                    Education Institutions
                                                </p>
                                                <p className="text-sm opacity-75 mt-2">
                                                    • Excellence in Technical
                                                    and Academic Education
                                                    <br />
                                                    • Recognized for Innovation
                                                    and Research
                                                    <br />• Strong Industry
                                                    Partnerships
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Academic Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-dark-primary p-4 rounded-lg text-center">
                                            <div className="text-2xl font-bold text-blue-500">
                                                8.20
                                            </div>
                                            <div className="text-sm">GPA</div>
                                        </div>
                                        <div className="bg-dark-primary p-4 rounded-lg text-center">
                                            <div className="text-2xl font-bold text-purple-500">
                                                X
                                            </div>
                                            <div className="text-sm">
                                                SAT Score
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical & Leadership Section */}
                        <div className="skills-section">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                                <FaCode className="mr-2" /> Technical &
                                Leadership
                            </h2>
                            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-lg">
                                <div className="bg-dark-secondary p-4 sm:p-6 rounded-lg shadow-lg space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <h3 className="font-semibold">
                                                Programming
                                            </h3>
                                            <div className="bg-dark-primary p-2 rounded">
                                                Python
                                            </div>
                                            <div className="bg-dark-primary p-2 rounded">
                                                JavaScript
                                            </div>
                                            <div className="bg-dark-primary p-2 rounded">
                                                React
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-semibold">
                                                Leadership
                                            </h3>
                                            <div className="bg-dark-primary p-2 rounded">
                                                Coding Club President
                                            </div>
                                            <div className="bg-dark-primary p-2 rounded">
                                                ARINTER Ambassador
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Me Section */}
                        <div className="about-me-section">
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center">
                                <FaUserAlt className="mr-2" /> About Me
                            </h2>
                            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-lg">
                                <div className="bg-dark-secondary p-4 sm:p-6 rounded-lg shadow-lg space-y-6">
                                    {/* Personal Introduction */}
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-base sm:text-lg">
                                            <strong>
                                                True innovation happens outside
                                                our comfort zone – and that’s
                                                exactly where I choose to be.
                                            </strong>{' '}
                                            My greatest dream is to one day
                                            establish a church that goes beyond
                                            a place of worship, serving as a hub
                                            where children and young people can
                                            learn programming from an early age,
                                            developing both technical skills and
                                        </p>
                                        <p className="text-base sm:text-lg">
                                            Dedicating myself every day to
                                            studying and improving my skills,
                                            even in the face of daily challenges
                                            and problems, I maintain a routine
                                            of constant growth. Demonstrating
                                            discipline and consistency, I
                                            approach learning as an
                                            uninterrupted process, regardless of
                                            circumstances. Facing the rapid
                                            changes in technology, I adapt to
                                            new advancements with creativity and
                                            determination. Through practical
                                            projects—such as creating
                                            community-oriented applications or
                                            group-based learning activities—I
                                            demonstrate that programming is not
                                            just about writing code but about
                                            building solutions that merge
                                            innovation, empathy, and
                                            collaboration.
                                        </p>
                                        <p className="text-base sm:text-lg">
                                            With my skills, certifications, and
                                            passion for learning, I aim to
                                            present myself as someone committed
                                            to growth and to one day fulfilling
                                            this dream of inspiring and
                                            transforming lives. I believe that
                                            the knowledge I acquire will be
                                            essential to generate a positive
                                            impact on the people around me and
                                            those who, for some reason, come
                                            into contact with me or something I
                                            create. And it is in this spirit of
                                            faith, innovation, and dedication
                                            that I continue to seek
                                            opportunities to learn and share.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal - Adjust for mobile */}
            {selectedAchievement && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 
                      animate-fadeIn backdrop-blur-sm p-4"
                    onClick={() => setSelectedAchievement(null)}
                >
                    <div
                        className="bg-dark-secondary p-4 sm:p-6 rounded-lg w-full max-w-sm mx-4 transform-gpu 
                        transition-all duration-300 animate-scaleIn"
                        onClick={e => e.stopPropagation()}
                    >
                        {selectedAchievement.image && (
                            <img
                                src={selectedAchievement.image}
                                alt={selectedAchievement.name}
                                className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4"
                            />
                        )}
                        <h3 className="text-lg sm:text-xl font-bold mb-2">
                            {selectedAchievement.name}
                        </h3>
                        <p className="mb-4 text-sm sm:text-base">
                            {selectedAchievement.description}
                        </p>
                        <a
                            href="https://github.com/LuisAbrantes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors text-sm sm:text-base"
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
