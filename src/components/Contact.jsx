import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:amanjobs1234@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section id="contact" className="py-20 bg-dark-bg relative">
            {/* Glows */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-neon-purple">Touch</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Have a project in mind or want to discuss modern web solutions? I'm available for freelance work and collaborations.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-6 bg-dark-card rounded-2xl border border-white/5 flex items-start gap-4">
                            <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-xl">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Email Me</h4>
                                <a href="mailto:amanjobs1234@gmail.com" className="text-gray-400 hover:text-white transition-colors">amanjobs1234@gmail.com</a>
                            </div>
                        </div>

                        <div className="p-6 bg-dark-card rounded-2xl border border-white/5 flex items-start gap-4">
                            <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-xl">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Call Me</h4>
                                <a href="tel:+918116334670" className="text-gray-400 hover:text-white transition-colors">+91 81163 34670</a>
                            </div>
                        </div>

                        <div className="p-6 bg-dark-card rounded-2xl border border-white/5 flex items-start gap-4">
                            <div className="p-3 bg-white/10 text-white rounded-xl">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                                <p className="text-gray-400">Varanasi, Uttar Pradesh, India</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-2xl overflow-hidden h-48 border border-white/10 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.2398295625!2d82.9087065910398!3d25.32074092415842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf0d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 bg-dark-card rounded-2xl border border-white/5 shadow-xl space-y-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-dark-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="How can I help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2"
                            >
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
