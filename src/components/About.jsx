import { useState } from 'react';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
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
            
            <div className="achievements-grid flex gap-4 mt-4 flex-wrap justify-center">
              {achievements.map((achievement) => (
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
