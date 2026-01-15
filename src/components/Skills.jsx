import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Programming & Development',
        skills: ['C++', 'DSA', 'JavaScript', 'MySQL', 'Bootstrap']
    },
    {
        title: 'Web Technologies',
        skills: ['WordPress Development', 'Front-End Development', 'WooCommerce', 'HTML', 'CSS', 'JavaScript', 'ReactJS']
    },
    {
        title: 'Tools & Platforms',
        skills: ['ChatGPT', 'Gemini', 'Canva', 'Zoho', 'Vee3', 'Capcut', 'VS Code', 'Veo3']
    },
    {
        title: 'Professional Skills',
        skills: ['Operations Management', 'Team Coordination', 'Communication', 'Problem Solving', 'Teaching']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-bg relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-neon-blue">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/80 dark:bg-dark-card/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-neon-blue/30 transition-all hover:-translate-y-2 shadow-lg dark:shadow-none"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 text-sm bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/5 hover:border-neon-purple/50 hover:bg-neon-purple/10 hover:text-neon-purple dark:hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
