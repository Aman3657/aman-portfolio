import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Operations & Platform Intern',
        company: 'Job Binge',
        period: 'April 2025 – Nov 2025',
        description: [
            'Coordinated Intern schedules and workflows for smooth platform operations.',
            'Managed WordPress websites, databases (PHP/MySQL), and site updates to enhance user experience.'
        ]
    },
    {
        role: 'Generative AI Artist | Graphic Designer',
        company: 'Fiverr (Freelance)',
        period: 'Dec 2022 – Present',
        description: [
            'Delivered 20+ AI art & animation projects with 98% client satisfaction across multiple creative services.'
        ]
    },
    {
        role: '.Tech Support',
        company: 'GAO Tek Inc.',
        period: 'June 2024 – August 2024',
        description: [
            'Manage WordPress and WooCommerce Product.',
            'Excel Management Management.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-neon-purple">Experience</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-300 dark:bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-neon-purple rounded-full transform -translate-x-1/2 mt-1.5 hidden md:block shadow-[0_0_10px_rgba(188,19,254,0.8)]"></div>

                            <div className="flex-1 hidden md:block"></div>

                            <div className="flex-1">
                                <div className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 hover:border-neon-purple/30 transition-all shadow-lg hover:shadow-neon-purple/10">
                                    <div className="flex items-center gap-2 mb-2 text-neon-blue text-sm font-semibold uppercase tracking-wide">
                                        <Briefcase size={16} />
                                        {exp.period}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                    <div className="text-gray-500 dark:text-gray-400 mb-4">{exp.company}</div>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex gap-2">
                                                <span className="text-neon-purple mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
