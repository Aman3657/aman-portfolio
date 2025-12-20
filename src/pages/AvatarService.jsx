import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { Camera, User, Sparkles, Instagram, Linkedin, Briefcase, Share2, Star, CheckCircle, Clock, Zap } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import AvatarHero from '../components/AvatarHero';
import Contact from '../components/Contact';

const AvatarService = () => {
    const galleryRow1Ref = useRef(null);
    const galleryRow2Ref = useRef(null);
    const galleryRow3Ref = useRef(null);
    const galleryRow4Ref = useRef(null);

    // Generate array of 12 images for testing
    const realityImages = Array.from({ length: 12 }, (_, i) => `reality-${i + 1}.webp`);

    // Split into 4 rows
    const row1 = realityImages.slice(0, 3);
    const row2 = realityImages.slice(3, 6);
    const row3 = realityImages.slice(6, 9);
    const row4 = realityImages.slice(9, 12);

    /*
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Safety checks
            if (!galleryRow1Ref.current || !galleryRow2Ref.current || !galleryRow3Ref.current || !galleryRow4Ref.current) return;

            // Row 1 (Right)
            gsap.to(galleryRow1Ref.current, { xPercent: -50, ease: "none", duration: 50, repeat: -1 });
            // Row 2 (Left)
            gsap.set(galleryRow2Ref.current, { xPercent: -50 });
            gsap.to(galleryRow2Ref.current, { xPercent: 0, ease: "none", duration: 55, repeat: -1 });
            // Row 3 (Right)
            gsap.to(galleryRow3Ref.current, { xPercent: -50, ease: "none", duration: 60, repeat: -1 });
            // Row 4 (Left)
            gsap.set(galleryRow4Ref.current, { xPercent: -50 });
            gsap.to(galleryRow4Ref.current, { xPercent: 0, ease: "none", duration: 65, repeat: -1 });
        });
        return () => ctx.revert();
    }, []);
    */

    const features = [
        {
            icon: <User className="w-8 h-8 text-neon-blue" />,
            title: "10 - 100 Unique Avatars",
            description: "Choose your package: Get anywhere from 10 to 100 high-quality, unique AI avatars."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-neon-purple" />,
            title: "Realistic, Anime & Cinematic",
            description: "Diverse styles included: Hyper-realistic 4K photos, Anime characters, and Cinematic shots."
        },
        {
            icon: <Share2 className="w-8 h-8 text-pink-500" />,
            title: "Platform Optimized",
            description: "Perfectly cropped and optimized for Instagram Stories, LinkedIn, TikTok, and Twitter."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
            title: "Commercial Use & High Res",
            description: "Full ownership rights for branding. Delivered in high-resolution suitable for print."
        }
    ];

    const useCases = [
        { title: "Influencers", icon: <Instagram /> },
        { title: "Virtual Personas", icon: <User /> },
        { title: "Branding", icon: <Zap /> },
        { title: "Profile Pics", icon: <User /> },
        { title: "Creative Projects", icon: <Sparkles /> },
    ];

    const workflowSteps = [
        { num: "01", title: "Upload Photos", desc: "Upload at least 2-3 clear, well-lit images." },
        { num: "02", title: "AI Expertise", desc: "Top Service" },
        { num: "03", title: "Generation", desc: "Your imagination, we will turn into reality." },
        { num: "04", title: "Delivery", desc: "Receive your avatars in 3 days or less." }
    ];

    return (
        <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white font-outfit transition-colors duration-300">

            {/* Hero Section */}
            <AvatarHero />
            {/* Hero Temporary Placeholder */}
            {/* <div className="h-96 flex items-center justify-center text-white bg-dark-card border border-white/10 rounded-2xl mb-12 mx-6">
                <h2 className="text-3xl font-bold">Hero Animation Updating...</h2>
            </div> */}

            <div className="pt-20"></div>

            {/* Features */}
            <section className="container mx-auto px-6 mb-20">
                <h2 className="text-3xl font-bold mb-12 text-center">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white dark:bg-dark-card/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/5 hover:border-neon-blue/50 transition-all hover:bg-gray-100 dark:hover:bg-dark-card shadow-lg dark:shadow-none"
                        >
                            <div className="mb-6 p-4 bg-gray-100 dark:bg-white/5 rounded-full w-fit">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Workflow */}
            <section className="container mx-auto px-6 mb-20 bg-white/5 py-16 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-50"></div>
                <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {workflowSteps.map((step, idx) => (
                        <div key={idx} className="relative text-center">
                            <div className="text-6xl font-bold text-gray-200 dark:text-white/5 mb-4">{step.num}</div>
                            <h3 className="text-xl font-bold mb-2 text-neon-blue">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{step.desc}</p>
                            {idx !== workflowSteps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gray-200 dark:bg-white/10"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Avatar Gallery - Static Grid for Stability */}
            <section id="gallery" className="min-h-screen py-20 bg-gray-50 dark:bg-dark-bg relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-300">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                    Welcome to AI Reality
                </h2>

                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
                        {realityImages.map((img, i) => (
                            <div key={`gallery-${i}`} className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105">
                                <img src={`/avatars/reality/${img}`} className="w-full h-full object-cover" alt={`Gallery ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Use Cases */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Perfect For</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {useCases.map((useCase, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-dark-card rounded-xl border border-white/5">
                                    <span className="text-neon-purple">{useCase.icon}</span>
                                    <span className="font-medium">{useCase.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-dark-card to-white/5 p-8 rounded-2xl border border-white/10">
                        <h2 className="text-3xl font-bold mb-6">Expertise & Performance</h2>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <Star className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-xl font-bold">4.6/5.0</span>
                                </div>
                                <span className="text-gray-400">Client Rating</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <Clock className="text-neon-blue" />
                                    <span className="text-xl font-bold">~1 Hour</span>
                                </div>
                                <span className="text-gray-400">Response Time</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-green-400" />
                                    <span className="text-xl font-bold">Consistent</span>
                                </div>
                                <span className="text-gray-400">Character Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <div className="inline-block p-6 bg-red-500/10 border border-red-500/20 rounded-2xl max-w-3xl">
                    <h3 className="text-red-400 font-bold mb-2">Important Notes</h3>
                    <p className="text-gray-400 text-sm">
                        High-quality results depend on the clarity of the photos provided. Outcomes may vary as with any AI-generated art.
                        Please ensure you have rights to the photos you submit.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-6 text-center">
                <div className="p-12 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl border border-neon-blue/30 backdrop-blur-md">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Create Your Avatar?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get your professional AI avatars in just 3 days. Level up your digital presence today.
                    </p>
                    <Link to="contact" smooth={true} duration={500} className="inline-block px-10 py-5 bg-white text-black rounded-full text-xl font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                        Order Service Now
                    </Link>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default AvatarService;
