import React from 'react';

const videos = [
    'opSde7YoQWk',
    'FOrer7YR0R4',
    'qKyiIEM3YxE',
    'fagr6ebIUno',
    'wAekNsEhyuc'
];

const shortsVideos = [
    'dT0aXj31Gls',
    'Qv8dZUGl1dY',
    '1eiXNtqb4tg',
    'MGxcs-LrqIc',
    'V7coTpBhA5A'
];

const AutoMarquee = ({ items, isShorts }) => {
    // Duplicate the items array 4 times to ensure it has enough width to scroll flawlessly even on ultrawide monitors
    const duplicatedItems = [...items, ...items, ...items, ...items];
    
    return (
        <div className="relative flex overflow-hidden group w-full py-4">
            <div className="flex w-max animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
                {duplicatedItems.map((id, index) => (
                    <div 
                        key={`${id}-${index}`} 
                        className={`flex-shrink-0 mx-4 bg-black rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10 hover:border-neon-blue hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all duration-300 ${isShorts ? 'w-[280px] md:w-[320px]' : 'w-[85vw] md:w-[500px]'}`}
                    >
                        <div className={`w-full ${isShorts ? 'aspect-[9/16]' : 'aspect-video'}`}>
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${id}?rel=0&controls=1`}
                                title={`Video ${index}`}
                                frameBorder="0"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const VideoCarousel = () => {
    return (
        <section id="more-videos" className="py-20 bg-gray-50 dark:bg-dark-bg relative overflow-hidden transition-colors duration-300 border-t border-gray-200 dark:border-white/5">
            {/* Inject keyframes for marquee natively */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); } 
                }
            `}} />

            <div className="container mx-auto px-6 mb-12 relative z-10">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">More <span className="text-neon-purple">Showcases</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full mx-auto"></div>
                </div>
            </div>

            {/* Standard Aspect Ratio Carousel Container */}
            <div className="w-full relative mb-16">
                <AutoMarquee items={videos} isShorts={false} />
            </div>

            {/* Vertical Shorts Carousel Container */}
            <div className="w-full relative">
                <div className="container mx-auto px-6 md:px-10 mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white border-l-4 border-neon-purple pl-4 text-center md:text-left">YouTube Shorts</h3>
                </div>
                <AutoMarquee items={shortsVideos} isShorts={true} />
            </div>
            
            <div className="text-center mt-10">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase">Hover over any video to pause auto-scroll</p>
            </div>
        </section>
    );
};

export default VideoCarousel;
