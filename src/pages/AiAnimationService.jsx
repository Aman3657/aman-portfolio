import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Contact from '../components/Contact';
import VideoCarousel from '../components/VideoCarousel';

const videos = [
    { id: '1', url: 'https://www.youtube.com/embed/opSde7YoQWk' },
    { id: '2', url: 'https://www.youtube.com/embed/FOrer7YR0R4' },
    { id: '3', url: 'https://www.youtube.com/embed/tDPOqxhoVf8' },
];

const reviewImages = [
    '/fiverrreview/review1.png',
    '/fiverrreview/review2.png',
    '/fiverrreview/review3.png',
    '/fiverrreview/review4.png'
];

const AiAnimationService = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen relative overflow-hidden">
            {/* Background elements to maintain premium look */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                        AI Media Producer & Artist
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        High-quality, dynamic AI-generated animations and visual media designed to bring your visions to life. Explore my latest work and client satisfaction below.
                    </p>
                    <div className="mt-8">
                        <Link to="contact" smooth={true} duration={500} className="px-8 py-3 cursor-pointer bg-neon-blue text-black font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                            Request an Animation
                        </Link>
                    </div>
                </motion.div>

                {/* Videos Showcase */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-2 dark:text-white">Recent Selected Work</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto flex justify-center">
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
                </div>

                {/* Client Reviews Showcase */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-2 dark:text-white">Client Satisfaction</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-2xl mx-auto">Trusted by professionals globally. Here's what my clients have to say about my AI artistry.</p>
                        <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {reviewImages.map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 flex items-center justify-center hover:border-neon-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.4)] transition-all duration-500 cursor-pointer"
                            >
                                <img 
                                    src={src} 
                                    alt={`Client Review ${index + 1}`} 
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call To Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-white/5 dark:bg-white/5 rounded-2xl p-12 border border-gray-200 dark:border-white/10 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-blue/20 rounded-full blur-3xl"></div>
                    
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white relative z-10">Need custom animations?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 relative z-10">Let's discuss how we can create engaging visuals for your next project.</p>
                    <Link to="contact" smooth={true} duration={500} className="inline-block px-8 py-3 border border-neon-purple text-neon-purple font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all cursor-pointer relative z-10">
                        Let's Work Together
                    </Link>
                </motion.div>
            </div>
            <VideoCarousel />
            <Contact />
        </div>
    );
};

export default AiAnimationService;
