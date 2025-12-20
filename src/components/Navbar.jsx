import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const MobileNavLink = ({ to, children, onClick }) => (
    <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        className="block px-6 py-3 text-gray-800 dark:text-gray-300 hover:bg-white/5 hover:text-neon-blue transition-colors cursor-pointer font-medium"
        onClick={onClick}
    >
        {children}
    </ScrollLink>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home', isScroll: true },
        { name: 'About', to: 'about', isScroll: true },
        { name: 'Projects', to: 'projects', isScroll: true },
        {
            name: 'Services',
            isDropdown: true,
            items: [
                { name: 'YouTube Thumbnail Service', to: '/youtube-thumbnails' },
                { name: 'AI Avatars', to: '/avatar-service' }
            ]
        },
    ];

    const handleNavClick = (link) => {
        setIsOpen(false);
        if (link.isScroll) {
            if (!isHome) {
                navigate('/', { state: { scrollTo: link.to } });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/10 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-lg' : 'py-6 bg-transparent'}`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <RouterLink to="/" className="text-2xl font-bold font-outfit bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent cursor-pointer">
                    Aman.Dev
                </RouterLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.isDropdown ? (
                                <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors font-medium">
                                    {link.name}
                                    <ChevronDown size={16} />

                                    {/* Dropdown Content */}
                                    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top pt-4">
                                        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden">
                                            {link.items.map((item) => (
                                                <RouterLink
                                                    key={item.name}
                                                    to={item.to}
                                                    className="block px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-neon-blue transition-colors"
                                                >
                                                    {item.name}
                                                </RouterLink>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                            ) : link.isScroll ? (
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="relative text-gray-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors cursor-pointer group font-medium"
                                    onClick={() => handleNavClick(link)}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
                                </ScrollLink>
                            ) : (
                                <RouterLink
                                    to={link.to}
                                    className={`relative transition-colors cursor-pointer group font-medium ${location.pathname === link.to ? 'text-neon-blue' : 'text-gray-700 dark:text-gray-300 hover:text-neon-blue dark:hover:text-neon-blue'}`}
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all group-hover:w-full"></span>
                                </RouterLink>
                            )}
                        </div>
                    ))}

                    <a href="#contact" className="px-6 py-2 border border-neon-purple text-neon-purple rounded-full hover:bg-neon-purple/10 transition-all shadow-[0_0_10px_rgba(188,19,254,0.2)] hover:shadow-neon-purple">
                        Hire Me
                    </a>
                    <div className="ml-4">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col py-4">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.isDropdown ? (
                                        <div className="px-6 py-3">
                                            <div className="font-medium text-gray-800 dark:text-gray-300 mb-2">{link.name}</div>
                                            <div className="pl-4 border-l-2 border-neon-blue/20 space-y-2">
                                                {link.items.map((item) => (
                                                    <RouterLink
                                                        key={item.name}
                                                        to={item.to}
                                                        className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-neon-blue transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.name}
                                                    </RouterLink>
                                                ))}
                                            </div>
                                        </div>
                                    ) : link.isScroll ? (
                                        <MobileNavLink
                                            to={link.to}
                                            onClick={() => handleNavClick(link)}
                                        >
                                            {link.name}
                                        </MobileNavLink>
                                    ) : (
                                        <RouterLink
                                            to={link.to}
                                            className={`block px-6 py-3 font-medium hover:bg-white/5 hover:text-neon-blue transition-colors ${location.pathname === link.to ? 'text-neon-blue' : 'text-gray-800 dark:text-gray-300'}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </RouterLink>
                                    )}
                                </div>
                            ))}
                            <div className="px-6 py-3">
                                <ThemeToggle />
                            </div>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-6 py-3 font-medium text-neon-purple hover:bg-neon-purple/10 transition-colors">
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
