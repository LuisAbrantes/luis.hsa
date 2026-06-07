import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import { projects } from '@/data/projects';
import { staggerContainer, revealViewport } from '@/lib/motion';
import type { Project } from '@/types';

const categories = ['all', ...new Set(projects.map(p => p.category))];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [filter, setFilter] = useState('all');

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);

    return (
        <section className="min-h-screen bg-black pt-40 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-light text-white mb-4 tracking-tight">
                        Selected Projects
                    </h1>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto">
                        A collection of my work in web development, AI, and open
                        source contributions.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setFilter(category)}
                            className={`px-5 py-2 rounded-full text-sm font-light transition-all duration-300 border ${
                                filter === category
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </button>
                    ))}
                </div>

                <motion.div
                    key={filter}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >
                    {filteredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onSelect={setSelectedProject}
                        />
                    ))}
                </motion.div>

                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            </div>
        </section>
    );
};

export default Projects;
