import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-50 dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Client <span className="text-neon-purple">Stories</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder Testimonials */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 hover:border-neon-blue/30 transition-all shadow-lg dark:shadow-none">
                            <div className="flex text-yellow-500 mb-4 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 italic mb-6">"Aman delivered exceptional results. The attention to detail and animations were exactly what we needed."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10"></div>
                                <div>
                                    <div className="text-gray-900 dark:text-white font-bold">Client Name</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">CEO, Company</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
