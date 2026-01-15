import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'SahntechSolution',
        category: 'WordPress Development',
        description: 'Developed a WordPress website for a client specializing in WordPress as a freelancer. Delivered a fully functional and responsive site.',
        tech: ['WordPress', 'Freelancing', 'Web Design'],
        link: 'https://www.sahntechsolution.com',
        image: 'https://placehold.co/600x400/2a2a3e/FFF?text=SahntechSolution'
    },
    {
        title: 'Resume Builder App',
        category: 'Web Application',
        description: 'Developed and launched an AI-based resume builder web app for automated resume generation. Streamlined the resume creation process.',
        tech: ['React', 'AI Integration', 'Web App'],
        link: 'https://resume-builder-by-aman.vercel.app',
        image: 'https://placehold.co/600x400/0a0a0a/FFF?text=AI+Resume+Builder'
    },
    {
        title: 'Employer & Candidate Dashboard',
        category: 'Full Stack / WordPress',
        description: 'Developed a custom two-sided dashboard for employers and candidates using PHP, WordPress, Gemini, and Code Snippets Plugin.',
        tech: ['Custom PHP', 'WordPress', 'Gemini', 'Code Snippets'],
        link: 'http://jobbinge.in',
        image: 'https://placehold.co/600x400/1a1a2e/FFF?text=Dashboard+System'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-neon-blue">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 overflow-hidden hover:border-neon-blue/40 transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] flex flex-col shadow-lg dark:shadow-none"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-neon-blue rounded-full text-black hover:bg-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs text-neon-purple font-semibold uppercase tracking-wider mb-2">{project.category}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-900 dark:text-white border-b border-neon-blue hover:text-neon-blue transition-colors pb-1">
                        View all projects on GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
