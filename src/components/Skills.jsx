import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Programming & Dev',
        skills: ['C++', 'DSA', 'JavaScript', 'PHP', 'MySQL', 'Python']
    },
    {
        title: 'Front-End',
        skills: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Bootstrap', 'HTML5/CSS3']
    },
    {
        title: 'Web Platforms',
        skills: ['WordPress', 'WooCommerce', 'Elementor', 'Shopify', 'Wix']
    },
    {
        title: 'Tools & AI',
        skills: ['ChatGPT & Gemini API', 'N8N (Automation)', 'Cursor IDE', 'VS Code', 'Git/GitHub', 'Figma/Canva']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark-bg relative">
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
                            className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all hover:-translate-y-2"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full border border-white/5 hover:border-neon-purple/50 hover:bg-neon-purple/10 hover:text-white transition-colors cursor-default">
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
