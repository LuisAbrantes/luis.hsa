import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink,
  Code2,
  Zap,
  Palette,
  Cloud,
  Terminal // Add this import
} from 'lucide-react';
import agrolearn from '../assets/projects/agrolearn.webp';
import quickreadme from '../assets/projects/quickreadme.png';

const techIcons = {
  'React': <Code2 size={14} className="inline-block" />,
  'Vite': <Zap size={14} className="inline-block" />,
  'Tailwind CSS': <Palette size={14} className="inline-block" />,
  'Vercel': <Cloud size={14} className="inline-block" />,
  'Python': <Terminal size={14} className="inline-block" /> // Add Python icon
};

const projectsData = [
    {
        id: 1,
        title: 'AgroLearn',
        shortDescription:
            'Distance learning platform for training agricultural machinery operators for the GP SENAI hackathon.',
        fullDescription:
            'Uma descrição mais detalhada do projeto que aparece no modal, explicando seus objetivos, desafios e soluções implementadas.',
        image: agrolearn,
        thumbnail: agrolearn,
        technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/AgroLearn',
        demo: 'https://agrolearn.vercel.app/',
        highlights: [
            'Feature principal implementada',
            'Desafio técnico superado',
            'Resultado alcançado'
        ]
    },
    {
        id: 2,
        title: 'QuickReadme',
        shortDescription:
            'Python Package to generate README.md files for your projects quickly.',
        fullDescription:
            'Uma descrição mais detalhada do projeto que aparece no modal, explicando seus objetivos, desafios e soluções implementadas.',
        image: quickreadme,
        thumbnail: quickreadme,
        technologies: ['Python'],
        category: 'Web App',
        github: 'https://github.com/LuisAbrantes/QuickReadme',
        demo: 'https://agrolearn.vercel.app/',
        highlights: [
            'Feature principal implementada',
            'Desafio técnico superado',
            'Resultado alcançado'
        ]
    }
    // Adicione mais projetos aqui
];

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-dark-secondary rounded-lg overflow-hidden shadow-xl"
  >
    <div className="relative group">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button
          onClick={() => onClick(project)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Ver Detalhes
        </button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.shortDescription}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-md text-sm flex items-center gap-1">
            {techIcons[tech]} {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
        >
          <Github size={18} /> Código
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
        >
          <ExternalLink size={18} /> Demo
        </a>
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
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h2 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h2>
        <p className="text-gray-400 mb-6">{project.fullDescription}</p>
        
        <h3 className="text-lg font-semibold text-gray-300 mb-3">Destaques</h3>
        <ul className="list-disc list-inside text-gray-400 mb-6">
          {project.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition flex items-center gap-2"
          >
            <Github size={18} /> Ver Código
          </a>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-600 text-gray-400 rounded-md hover:bg-gray-700 transition"
          >
            Fechar
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
  
  const filteredProjects = filter === 'all' 
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
          Meus Projetos
        </motion.h1>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition ${
                filter === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-dark-secondary text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
