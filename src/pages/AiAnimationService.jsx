import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Contact from '../components/Contact';

const videos = [
    { id: '1', url: 'https://www.youtube.com/embed/FOrer7YR0R4' },
    { id: '2', url: 'https://www.youtube.com/embed/9Ji2knD07T8' },
    { id: '3', url: 'https://www.youtube.com/embed/7QGIeth-jT0' },
    { id: '4', url: 'https://www.youtube.com/embed/f-JO_jrZefs' },
];

const AiAnimationService = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                        AI Animation Showcase
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        High-quality, dynamic AI-generated animations tailored to bring your visions to life. Check out some of my recent work below!
                    </p>
                    <div className="mt-8">
                        <Link to="contact" smooth={true} duration={500} className="px-8 py-3 cursor-pointer bg-neon-blue text-black font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                            Request an Animation
                        </Link>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {videos.map((video, index) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-white/10"
                        >
                            <div className="aspect-video relative w-full h-full bg-black">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={video.url}
                                    title={`AI Animation ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-white/5 dark:bg-white/5 rounded-2xl p-12 border border-gray-200 dark:border-white/10"
                >
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Need custom animations?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">Let's discuss how we can create engaging visuals for your next project.</p>
                    <Link to="contact" smooth={true} duration={500} className="inline-block px-8 py-3 border border-neon-purple text-neon-purple font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all cursor-pointer">
                        Let's Work Together
                    </Link>
                </motion.div>
            </div>
            <Contact />
        </div>
    );
};

export default AiAnimationService;
