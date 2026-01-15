import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Globe, Zap } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Code size={24} />, value: '20+', label: 'Projects Delivered' },
        { icon: <Globe size={24} />, value: '2.5+', label: 'Years Experience' },
        { icon: <Zap size={24} />, value: '98%', label: 'Client Satisfaction' },
        { icon: <User size={24} />, value: '20+', label: 'Happy Clients' },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-dark-bg relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-neon-blue">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            Dedicated <span className="text-gray-900 dark:text-white font-semibold">Computer Science undergraduate</span> with experience in Home tuition, AI animation, IT support, WordPress management and Freelancing.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            Seeking a <span className="text-neon-purple">Non-Teaching / Academic Support / IT role</span> in a reputed educational institution like Sunbeam Group, where I can contribute to both student support and digital growth.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-gray-900 dark:text-white font-semibold mb-3">Key Competencies:</h4>
                            <ul className="flex flex-wrap gap-3">
                                {['WordPress Dev', 'Generative AI', 'Platform Ops', 'Automation', 'React / JS'].map(skill => (
                                    <li key={skill} className="px-4 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="p-6 bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 rounded-2xl hover:border-neon-blue/30 transition-all hover:-translate-y-1 group shadow-lg dark:shadow-none">
                                <div className="text-neon-blue mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
