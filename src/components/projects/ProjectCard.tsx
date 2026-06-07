import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { techIcons } from '@/lib/techIcons';
import { fadeInUp } from '@/lib/motion';
import type { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -5 }}
        className="bg-dark-secondary/30 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 group cursor-pointer"
        onClick={() => onSelect(project)}
    >
        <div className="relative aspect-video overflow-hidden">
            <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-light tracking-wide border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    View Details
                </span>
            </div>
        </div>

        <div className="p-6">
            <h3 className="text-xl font-medium text-white mb-2">
                {project.title}
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

            <div className="flex gap-4 pt-2 border-t border-gray-800/50">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                >
                    <Github size={14} /> Code
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                    >
                        <ExternalLink size={14} /> Demo
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

export default ProjectCard;
