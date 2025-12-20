import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-dark-card border-t border-gray-200 dark:border-white/5 pt-12 pb-6 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">Aman.Dev</h2>
                        <p className="text-gray-400 text-sm">Building digital experiences that matter.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/aman-kumar-gupta-61a59b262/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-blue hover:text-black transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:amanjobs1234@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-purple hover:text-white transition-all">
                            <Mail size={20} />
                        </a>
                        <Link to="home" smooth={true} duration={1000} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer">
                            <ArrowUp size={20} />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Aman Kumar Gupta. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
