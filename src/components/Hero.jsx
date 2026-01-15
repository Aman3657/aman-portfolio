import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gray-900/80" />
            </div>
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 mb-4 border border-neon-blue/30 rounded-full bg-neon-blue/5 backdrop-blur-sm text-neon-blue text-sm">
                        Available for Freelance Projects
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        Hi, I'm <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Aman Kumar Gupta</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
                        WordPress Developer | Platform & Operations Specialist
                    </h2>

                    <p className="text-gray-400 mb-8 text-lg max-w-lg">
                        Final-year B.Tech CS student with 8+ months internship and 2.5+ years of freelancing experience building scalable web solutions and AI applications.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all">
                            View Projects
                        </a>
                        <a href="/resume.pdf" download className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center gap-2 group">
                            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                            Download Resume
                        </a>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/aman-kumar-gupta-61a59b262/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors hover:scale-110 transform">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:amanjobs1234@gmail.com" className="text-gray-400 hover:text-neon-purple transition-colors hover:scale-110 transform">
                            <Mail size={24} />
                        </a>
                        <a href="https://aman-portfoliopro.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                            <ExternalLink size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Visual / Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    {/* Abstract Tech Visual */}
                    <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 border-2 border-neon-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Profile Image Placeholder */}
                        <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.2)] bg-dark-card flex items-center justify-center group">
                            {/* Replace src with actual image later */}
                            <img
                                src="/Aman_Headshot.jpg"
                                alt="Aman Kumar Gupta"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white/90 dark:bg-dark-card border border-gray-200 dark:border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                                <span className="font-bold">W</span>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Experience</div>
                                <div className="font-bold text-lg text-gray-900 dark:text-white">2.5+ Years</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-dark-card border border-gray-200 dark:border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">AI</div>
                            <div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
                                <div className="font-bold text-lg text-gray-900 dark:text-white">20+ Delivered</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
