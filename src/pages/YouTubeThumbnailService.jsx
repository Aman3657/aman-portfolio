import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Contact from '../components/Contact';

const thumbnails = [
    '1Xkt-P9po0A-HD.jpg',
    'unnamed (16).jpg',
    'unnamed (17).jpg',
    'unnamed (18).jpg',
    'unnamed (19).jpg',
    'unnamed (20).jpg',
    'unnamed (22).jpg',
    'unnamed (62).jpg',
    'unnamed (63).jpg',
    'unnamed (64).jpg',
    'unnamed (65).jpg',
    'unnamed (66).jpg',
    'unnamed (67).jpg',
    'unnamed (68).jpg',
    'unnamed (69).jpg',
    'unnamed (70).jpg',
];

const YouTubeThumbnailService = () => {
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
                        YouTube Thumbnail Design
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Boost your Click-Through Rate (CTR) with high-quality, eye-catching thumbnails designed to grab attention.
                    </p>
                    <div className="mt-8">
                        <a href="https://www.fiverr.com/aman_20y/design-youtube-thumbnails-using-ai" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-neon-blue text-black font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                            Order Now
                        </a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {thumbnails.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-white/10"
                        >
                            <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative z-10 w-full h-full">
                                {/* Using standard img for now, assuming public/thumbnails path */}
                                <img
                                    src={`/thumbnails/${src}`}
                                    alt={`Thumbnail sample ${index + 1}`}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
                                <span className="text-white font-medium px-4 py-2 bg-neon-purple/80 rounded-full backdrop-blur-sm">
                                    View Full Size
                                </span>
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
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to explode your views?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">Get custom thumbnails tailored to your brand and niche.</p>
                    <Link to="contact" smooth={true} duration={500} className="inline-block px-8 py-3 border border-neon-purple text-neon-purple font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all cursor-pointer">
                        Let's Work Together
                    </Link>
                </motion.div>
            </div>
            <Contact />
        </div>
    );
};

export default YouTubeThumbnailService;
