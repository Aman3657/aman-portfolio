import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Employer-Candidate Dashboard',
        category: 'Full Stack / WordPress',
        description: 'A two-sided dashboard enabling seamless workflow between employers and candidates. Built using custom PHP code snippets within WordPress and integrated with Gemini AI for data processing.',
        tech: ['PHP', 'WordPress', 'Gemini AI', 'MySQL'],
        link: '#', // Placeholder
        image: 'https://placehold.co/600x400/1a1a2e/FFF?text=Dashboard+System'
    },
    {
        title: 'AI Resume Builder App',
        category: 'React / AI',
        description: 'A custom resume-builder web app leveraging generative AI to create professional resumes tailored to job descriptions.',
        tech: ['React', 'OpenAI API', 'Tailwind', 'Node.js'],
        link: 'https://resume-builder-by-aman.vercel.app',
        image: 'https://placehold.co/600x400/0a0a0a/FFF?text=AI+Resume+Builder'
    },
    {
        title: 'SahntechSolution',
        category: 'Corporate Website',
        description: 'Developed a comprehensive client website for a software and blockchain consulting firm, focusing on performance and SEO.',
        tech: ['WordPress', 'Elementor', 'SEO', 'CSS3'],
        link: 'https://www.sahntechsolution.com',
        image: 'https://placehold.co/600x400/2a2a3e/FFF?text=SahntechSolution'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-dark-bg relative overflow-hidden">
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
                            className="group rounded-2xl bg-dark-card border border-white/5 overflow-hidden hover:border-neon-blue/40 transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] flex flex-col"
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
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white border-b border-neon-blue hover:text-neon-blue transition-colors pb-1">
                        View all projects on GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
