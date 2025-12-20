import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        title: "The Future of AI in Web Development",
        excerpt: "How generative AI tools like Gemini and ChatGPT are reshaping the way we build websites.",
        date: "Dec 10, 2025",
        category: "AI & Tech"
    },
    {
        title: "Optimizing WordPress for High Performance",
        excerpt: "Tips and tricks to make your WordPress site load under 1 second.",
        date: "Nov 28, 2025",
        category: "WordPress"
    },
    {
        title: "My Journey as a Freelancer",
        excerpt: "Lessons learned from 2.5 years of freelancing and managing client expectations.",
        date: "Oct 15, 2025",
        category: "Career"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-32 pb-20 px-6 transition-colors duration-300">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">My <span className="text-neon-blue">Blog</span></h1>
                    <p className="text-gray-600 dark:text-gray-400">Thoughts, tutorials, and insights on tech.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-dark-card border border-gray-200 dark:border-white/5 rounded-2xl p-6 hover:border-neon-purple/50 transition-all cursor-pointer group shadow-lg dark:shadow-none"
                        >
                            <div className="text-xs text-neon-purple font-semibold mb-2">{post.category}</div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-neon-blue transition-colors">{post.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                            <div className="text-sm text-gray-500">{post.date}</div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
