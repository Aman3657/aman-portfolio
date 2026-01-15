import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
    {
        degree: 'Bachelor of Technology - Computer Science',
        school: 'J.S University, Uttar Pradesh',
        year: '2022 – 2026'
    },
    {
        degree: 'Intermediate Education',
        school: 'Dehradun Public School',
        year: '2020 – 2022'
    },
    {
        degree: 'High School Education',
        school: 'Dav Public School',
        year: '2015 – 2020'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-dark-bg/50 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all group shadow-lg dark:shadow-none"
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-neon-purple/10 rounded-full flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                                <GraduationCap size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-neon-blue transition-colors">{edu.degree}</h3>
                                <div className="text-gray-500 dark:text-gray-400 text-lg mb-1">{edu.school}</div>
                                <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
                                    <Calendar size={14} />
                                    {edu.year}
                                    {edu.status && <span className="text-neon-blue ml-2">• {edu.status}</span>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
