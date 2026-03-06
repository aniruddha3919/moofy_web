'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronDown, CheckCircle } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const [typedText, setTypedText] = useState('');
    const fullText = "BUILD YOUR STARTUP";

    useEffect(() => {
        let i = 0;
        let isDeleting = false;
        const typingSpeed = 100;

        const type = () => {
            const current = fullText.slice(0, i);
            setTypedText(current);

            if (!isDeleting && i < fullText.length) {
                i++;
                setTimeout(type, typingSpeed);
            } else if (isDeleting && i > 0) {
                i--;
                setTimeout(type, typingSpeed / 2);
            } else {
                isDeleting = !isDeleting;
                setTimeout(type, 1500); // Pause at end
            }
        };

        type();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.animate-fade-up', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="min-h-screen pt-20 pb-20 relative overflow-hidden bg-white bg-grid font-poppins">
            {/* Brand Color Vibe - Background Blobs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-400/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Team Image Section - Moved higher with negative margin */}
                <div className="relative mt-2 sm:-mt-20 mb-0 z-0 animate-fade-up w-full flex justify-center">
                    <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[600px]">
                        <img
                            src="/image-removebg-preview (7).png"
                            alt="Moofy Team"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        />
                    </div>
                </div>

                <div className="space-y-4 relative z-10 mt-5">
                    {/* Main Headline - Refined hierarchy with constant typing and shining effects */}
                    <h1 className="flex flex-col items-center">
                        <span className="block font-[500] text-sm sm:text-base md:text-xl tracking-[0.2em] text-slate-500 mb-2 min-h-[1.5em] typing-cursor uppercase">
                            {typedText}
                        </span>
                        <span className="block font-[900] text-6xl sm:text-7xl md:text-9xl tracking-tighter text-slate-900 leading-[0.85]">
                            WITH <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-shine">MOOFY</span>
                        </span>
                    </h1>

                    {/* CTA Buttons - Side by Side and Smaller */}
                    <div className="mb-10 flex flex-row items-center justify-center gap-4 pt-6 animate-fade-up">
                        <a
                            href="#portfolio"
                            className="px-6 py-3 text-sm font-[600] bg-slate-900 text-white rounded-full hover:bg-black transition-all text-center shadow-xl hover:-translate-y-1 uppercase tracking-wider"
                        >
                            Our Works
                        </a>
                        <a
                            href="https://wa.me/919831209756?text=Hi%20Moofy,%20I'm%20interested%20in%20getting%20started%20with%20your%20services!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 text-sm font-[600] bg-white text-slate-900 border-2 border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all text-center uppercase tracking-wider"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-25">
                <ChevronDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
};

export default Hero;
