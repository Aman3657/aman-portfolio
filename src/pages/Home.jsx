import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white font-outfit overflow-x-hidden transition-colors duration-300">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;
