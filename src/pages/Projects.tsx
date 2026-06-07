import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import { projects } from '@/data/projects';
import { staggerContainer, revealViewport } from '@/lib/motion';
import type { Project } from '@/types';

const featuredProjects = projects.filter(p => p.featured);
const categories = ['all', ...new Set(projects.map(p => p.category))];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [filter, setFilter] = useState('all');

    const isAll = filter === 'all';
    // On "all", featured projects get their own section, so the main grid shows
    // the rest. On a specific category, show every project in that category.
    const gridProjects = isAll
        ? projects.filter(p => !p.featured)
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
                        A collection of my work in Applied AI, web development,
                        and open source contributions.
                    </p>
                </motion.div>

                {/* Featured section (only on "all") */}
                {isAll && (
                    <div className="mb-16">
                        <h2 className="flex items-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                            <Star size={14} className="fill-gray-400" /> Featured
                        </h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={revealViewport}
                        >
                            {featuredProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onSelect={setSelectedProject}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}

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

                {isAll && (
                    <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
                        More Projects
                    </h2>
                )}

                <motion.div
                    key={filter}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={revealViewport}
                >
                    {gridProjects.map(project => (
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
