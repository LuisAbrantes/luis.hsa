import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Github, ExternalLink, Star } from 'lucide-react';
import { techIcons } from '@/lib/techIcons';
import { fadeInUp } from '@/lib/motion';
import { projectImages } from '@/data/projectImages';
import type { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

/**
 * Project teaser. The title is a real link to the project's own page and is
 * stretched over the whole card (`after:absolute after:inset-0`), so the card
 * is clickable, keyboard-focusable and crawlable without nesting anchors.
 */
const ProjectCard = ({ project }: ProjectCardProps) => (
    <motion.article
        variants={fadeInUp}
        whileHover={{ y: -5 }}
        className={`relative bg-dark-secondary/30 border rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer ${
            project.featured
                ? 'border-gray-600 hover:border-gray-500'
                : 'border-gray-800 hover:border-gray-600'
        }`}
    >
        <div className="relative aspect-video overflow-hidden">
            <img
                src={projectImages[project.slug]}
                alt={`${project.title} screenshot`}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
            />
            {project.featured && (
                <span className="absolute top-3 left-3 flex items-center gap-1 text-xs font-medium text-white bg-black/60 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
                    <Star size={12} className="fill-white" /> Featured
                </span>
            )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-light tracking-wide border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    View Details
                </span>
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-xl font-medium text-white mb-2">
                <Link
                    to={`/projects/${project.slug}`}
                    className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-white/70"
                >
                    {project.title}
                </Link>
            </h3>
            <p className="text-gray-400 text-sm font-light mb-4 line-clamp-2">
                {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map(tech => (
                    <span
                        key={tech}
                        className="px-2 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-500 font-light flex items-center gap-1"
                    >
                        {techIcons[tech]} {tech}
                    </span>
                ))}
                {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-dark-primary border border-gray-800 rounded-lg text-xs text-gray-500 font-light">
                        +{project.technologies.length - 3}
                    </span>
                )}
            </div>

            {/* Above the stretched link so these stay independently clickable. */}
            <div className="relative z-10 flex gap-4 pt-2 border-t border-gray-800/50">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        <Github size={14} /> Code
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        <ExternalLink size={14} /> Demo
                    </a>
                )}
            </div>
        </div>
    </motion.article>
);

export default ProjectCard;
