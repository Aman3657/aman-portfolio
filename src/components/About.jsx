import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Globe, Zap } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: <Code size={24} />, value: '2.5+', label: 'Years Experience' },
        { icon: <Globe size={24} />, value: '20+', label: 'Completed Orders' },
        { icon: <Zap size={24} />, value: '20+', label: 'AI Projects' },
        { icon: <User size={24} />, value: '98%', label: 'Client Satisfaction' },
    ];

    return (
        <section id="about" className="py-20 bg-dark-bg relative">
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
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a <span className="text-white font-semibold">WordPress Developer</span> with over <span className="text-neon-purple">2.5 years of freelancing experience</span>, specializing in building high-performance websites and WooCommerce platforms.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            As a <span className="text-white font-semibold">Generative AI Artist</span> and Engineer, I've successfully delivered 20+ client orders with high satisfaction. My expertise extends to platform operations, where I leverage tools like <span className="text-neon-blue">ChatGPT, Gemini, and N8N</span> to automate workflows and scale products.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Passionate about bridging the gap between traditional development and emerging AI technologies, I thrive in roles that require problem-solving, coordination, and technical innovation.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-white font-semibold mb-3">Key Competencies:</h4>
                            <ul className="flex flex-wrap gap-3">
                                {['WordPress Dev', 'Generative AI', 'Platform Ops', 'Automation', 'React / JS'].map(skill => (
                                    <li key={skill} className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
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
                            <div key={index} className="p-6 bg-dark-card border border-white/5 rounded-2xl hover:border-neon-blue/30 transition-all hover:-translate-y-1 group">
                                <div className="text-neon-blue mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
