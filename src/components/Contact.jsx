import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxodx3UxuVvfuG0PgO59RDEktnkk8dICSJ-Kec9JHFolFo-j7DEwz_7YdMJZFin2q0G/exec';

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(e.target),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-bg relative transition-colors duration-300">
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
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">Have a project in mind or want to discuss modern web solutions? I'm available for freelance work and collaborations.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-6 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-white/5 flex items-start gap-4 shadow-lg dark:shadow-none">
                            <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-xl">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email Me</h4>
                                <a href="mailto:amanjobs1234@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-neon-blue dark:hover:text-white transition-colors">amanjobs1234@gmail.com</a>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-white/5 flex items-start gap-4 shadow-lg dark:shadow-none">
                            <div className="p-3 bg-neon-purple/10 text-neon-purple rounded-xl">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Call Me</h4>
                                <a href="tel:+918116334670" className="text-gray-600 dark:text-gray-400 hover:text-neon-purple dark:hover:text-white transition-colors">+91 81163 34670</a>
                            </div>
                        </div>

                        <div className="p-6 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-white/5 flex items-start gap-4 shadow-lg dark:shadow-none">
                            <div className="p-3 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white rounded-xl">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Location</h4>
                                <p className="text-gray-600 dark:text-gray-400">Varanasi, Uttar Pradesh, India</p>
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
                        <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-white/5 shadow-xl space-y-6">
                            <div>
                                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue transition-colors"
                                    placeholder="How can I help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]'}`}
                            >
                                {isSubmitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-500 text-center font-semibold mt-4">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-center font-semibold mt-4">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
