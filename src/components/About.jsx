import { useState } from 'react';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { Cpu, Star } from 'lucide-react';
import pullShark from '../assets/about/pullsharkbronze.png';
import arcticVault from '../assets/about/articcodevault.png';
import yolo from '../assets/about/yolo.png';
import starTruck from '../assets/about/startruck.png';

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
    <div className="about-section bg-dark-primary text-dark-text p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-row items-start gap-8">
          {/* Profile Section */}
          <div className="profile-section w-1/3">
            <img 
              src="https://avatars.githubusercontent.com/u/24616338?v=4"
              alt="Profile" 
              className="rounded-full shadow-xl w-48 h-48 mb-4"
            />
            
            <div className="achievements-grid flex gap-4 mt-4 flex-wrap justify-start">
              {achievements.slice(0, 4).map((achievement) => (
                <div key={achievement.id} className="relative">
                  <img
                    src={achievement.image}
                    alt={achievement.name}
                    className="w-12 h-12 cursor-pointer transform-gpu transition-all duration-300 
                             hover:rotate-[360deg] hover:scale-110 active:scale-95"
                    onClick={() => setSelectedAchievement(achievement)}
                  />
                  {selectedAchievement?.id === achievement.id && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 
                                  animate-fadeIn backdrop-blur-sm"
                         onClick={() => setSelectedAchievement(null)}>
                      <div className="bg-dark-secondary p-6 rounded-lg max-w-sm mx-4 transform-gpu 
                                    transition-all duration-300 animate-scaleIn"
                           onClick={e => e.stopPropagation()}>
                        <img src={achievement.image} alt={achievement.name} className="w-24 h-24 mx-auto mb-4"/>
                        <h3 className="text-xl font-bold mb-2">{achievement.name}</h3>
                        <p className="mb-4">{achievement.description}</p>
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

            <div className="highlights-grid flex flex-col gap-4 mt-8">
              {achievements.slice(4).map((achievement) => (
                <div key={achievement.id} className="relative">
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer 
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
                    onClick={() => setSelectedAchievement(achievement)}
                  >
                    <div className="relative z-10 flex items-center gap-3 bg-dark-primary rounded-lg">
                      {achievement.icon}
                      <span className={`font-medium text-base ${
                        achievement.name === 'Developer Program Member' ? 'text-gray-400 group-hover:text-gray-300' : 
                        achievement.name === 'PRO' ? 'text-purple-500 border-2 border-purple-500 rounded-full px-2 hover:bg-purple-500/10' : ''
                      }`}>
                        {achievement.name}
                      </span>
                    </div>
                  </div>
                  {selectedAchievement?.id === achievement.id && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 
                                  animate-fadeIn backdrop-blur-sm"
                         onClick={() => setSelectedAchievement(null)}>
                      <div className="bg-dark-secondary p-6 rounded-lg max-w-sm mx-4 transform-gpu 
                                    transition-all duration-300 animate-scaleIn"
                           onClick={e => e.stopPropagation()}>
                        <h3 className="text-xl font-bold mb-2">{achievement.name}</h3>
                        <p className="mb-4">{achievement.description}</p>
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

          {/* Academic Section */}
          <div className="flex-1">
            <div className="academic-section">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <FaGraduationCap className="mr-2" /> Academic Excellence
              </h2>
              <div className="bg-dark-secondary p-6 rounded-lg shadow-lg">
                <div className="achievement-timeline">
                  {/* Add your academic achievements here */}
                  <div className="achievement-item flex items-center mb-4">
                    <FaTrophy className="text-yellow-500 mr-4" />
                    <div>
                      <h3 className="font-bold">Your School Achievement</h3>
                      <p className="opacity-75">Description of your academic accomplishment</p>
                    </div>
                  </div>
                  {/* Add more achievements as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
