import { Github, ExternalLink, Hexagon, Youtube, FileText, X } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { techIcons } from '@/lib/techIcons';
import type { Project } from '@/types';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
    <Modal
        isOpen={project !== null}
        onClose={onClose}
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        labelledBy="project-title"
    >
        {project && (
            <>
                <div className="relative h-64 sm:h-80">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-primary to-transparent rounded-t-2xl"></div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-8 -mt-12 relative">
                    <h2
                        id="project-title"
                        className="text-3xl font-light text-white mb-4"
                    >
                        {project.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-dark-secondary/50 border border-gray-700 rounded-full text-sm text-gray-300 font-light flex items-center gap-2"
                            >
                                {techIcons[tech]} {tech}
                            </span>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                    Overview
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                    Key Highlights
                                </h3>
                                <ul className="space-y-2">
                                    {project.highlights.map(highlight => (
                                        <li
                                            key={highlight}
                                            className="flex items-start gap-3 text-gray-400 font-light"
                                        >
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0"></span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                Links
                            </h3>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                                >
                                    <Github size={18} /> View Code
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-700 text-white hover:bg-gray-800 transition-colors"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                            {project.devpost && (
                                <a
                                    href={project.devpost}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-700 text-white hover:bg-gray-800 transition-colors"
                                >
                                    <Hexagon size={18} /> Devpost
                                </a>
                            )}
                            {project.youtube && (
                                <a
                                    href={project.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-700 text-white hover:bg-gray-800 transition-colors"
                                >
                                    <Youtube size={18} /> Video
                                </a>
                            )}
                            {project.slides && (
                                <a
                                    href={project.slides}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-700 text-white hover:bg-gray-800 transition-colors"
                                >
                                    <FileText size={18} /> Slides
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )}
    </Modal>
);

export default ProjectModal;
