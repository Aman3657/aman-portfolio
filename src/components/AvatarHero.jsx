import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AvatarHero = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    // Combine both sets of images for variety
    const redImages = ['unnamed.jpg', 'unnamed (1).jpg', 'unnamed (2).jpg', 'unnamed (3).jpg', 'unnamed (4).jpg', 'unnamed (5).jpg'];
    const baseImages = [21, 23, 25, 26, 27, 28, 29, 30, 31];

    // Simplified lists for testing stability
    const row1Images = [...redImages, ...baseImages];
    const row2Images = [...baseImages, ...redImages];

    /*
    useEffect(() => {
        // Row 1 Animation (Left to Right)
        const ctx = gsap.context(() => {
            if (!row1Ref.current || !row2Ref.current) return;

            gsap.to(row1Ref.current, {
                xPercent: -50,
                ease: "none",
                duration: 40,
                repeat: -1,
            });

            // Row 2 Animation (Right to Left)
            gsap.set(row2Ref.current, { xPercent: -50 });
            gsap.to(row2Ref.current, {
                xPercent: 0,
                ease: "none",
                duration: 45,
                repeat: -1,
            });
        });

        return () => ctx.revert();
    }, []);
    */

    return (
        <div className="relative w-full h-screen bg-gray-900/40 dark:bg-dark-bg overflow-hidden flex flex-col justify-center transition-colors duration-300">

            {/* Background Marquees */}
            <div className="absolute inset-0 flex flex-col justify-center gap-4 md:gap-8 opacity-60 dark:opacity-40 select-none pointer-events-none">

                {/* Row 1 */}
                <div className="flex gap-4 md:gap-6 w-max" ref={row1Ref}>
                    {row1Images.map((img, i) => (
                        <div
                            key={`row1-${i}`}
                            className={`w-32 h-44 md:w-48 md:h-64 flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 ${i % 3 === 0 ? 'opacity-20 hover:opacity-100' : 'opacity-100 hover:scale-105'}`}
                        >
                            <img
                                src={typeof img === 'string' ? `/avatars/red/${img}` : `/avatars/unnamed (${img}).jpg`}
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="flex gap-4 md:gap-6 w-max" ref={row2Ref}>
                    {row2Images.map((img, i) => (
                        <div
                            key={`row2-${i}`}
                            className={`w-32 h-44 md:w-48 md:h-64 flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300 ${i % 3 === 0 ? 'opacity-20 hover:opacity-100' : 'opacity-100 hover:scale-105'}`}
                        >
                            <img
                                src={typeof img === 'string' ? `/avatars/red/${img}` : `/avatars/unnamed (${img}).jpg`}
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* Dark Overlay for Text Visibility - Minimal Opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/90 dark:from-dark-bg/20 dark:via-transparent dark:to-dark-bg/90 pointer-events-none"></div>

            {/* Overlay & Content */}
            <div className="relative z-10 container mx-auto px-6 text-center mt-10 md:mt-0">
                <div
                    className="mb-6 md:mb-8 inline-block px-4 py-1 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md"
                >
                    <span className="text-neon-blue font-semibold tracking-wider text-sm md:text-base">NEW LAUNCH</span>
                </div>
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-500 drop-shadow-sm dark:drop-shadow-none">
                    10 - 100 Unique <br />
                    <span className="text-neon-purple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">AI Avatars</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-800 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                    Transform your selfies into hyper-realistic, cinematic, and artistic AI avatars.
                    <span className="text-neon-blue font-semibold mx-2">Professional</span>
                    quality,
                    <span className="text-neon-purple font-semibold mx-2">Instant</span>
                    generated from your photo.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center pointer-events-auto">
                    <button className="px-8 py-3 md:px-10 md:py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
                        Free Demo Available
                    </button>
                    <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 md:px-10 md:py-4 border border-gray-300 dark:border-white/30 bg-white/50 dark:bg-black/60 backdrop-blur-md text-gray-900 dark:text-white rounded-full text-base md:text-lg font-medium hover:bg-gray-100 dark:hover:bg-white/20 transition-all shadow-lg">
                        View Gallery
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AvatarHero;
