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

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center text-center lg:text-left justify-center lg:justify-between gap-8 lg:gap-12">

                {/* Team Image Section */}
                <div className="relative mt-0 z-0 animate-fade-up w-full lg:w-[35%] flex justify-center lg:justify-start">
                    <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-full max-w-[400px]">
                        <img
                            src="/image-removebg-preview (7).png"
                            alt="Moofy Team"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                        />
                    </div>
                </div>

                <div className="lg:w-[65%] flex flex-col items-center lg:items-start space-y-2 relative z-10 -mt-2 sm:mt-0 lg:pl-10">
                    {/* Main Headline - Refined hierarchy with constant typing and shining effects */}
                    <div className="flex flex-col items-center lg:items-start">
                        <span className="block font-[500] text-sm sm:text-base xl:text-4xl md:text-xl tracking-[0.2em] text-slate-500 mb-2 min-h-[1.5em] typing-cursor uppercase">
                            {typedText}
                        </span>
                        <h1 className="block font-[900] text-5xl sm:text-7xl md:text-8xl xl:text-8xl tracking-tighter text-slate-900 leading-[1] lg:leading-[0.85] whitespace-nowrap">
                            WITH <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-shine">MOOFY</span>
                        </h1>
                        <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed animate-fade-up">
                            Empowering startups with cutting-edge digital solutions, creative branding, and scalable technology to bring your vision to life.
                        </p>
                    </div>

                    {/* CTA Buttons - Refined UI */}
                    <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-2 lg:pt-10 animate-fade-up w-full">
                        <a
                            href="#portfolio"
                            className="flex-1 lg:flex-none lg:min-w-[200px] px-8 py-3.5 text-sm font-[700] bg-slate-900 text-white rounded-xl hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center uppercase tracking-wider"
                        >
                            Works
                        </a>
                        <a
                            href="https://wa.me/919831209756?text=Hi%20Moofy,%20I'm%20interested%20in%20getting%20started%20with%20your%20services!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 lg:flex-none lg:min-w-[200px] px-8 py-3.5 text-sm font-[700] bg-white text-slate-900 border-2 border-slate-200 rounded-xl hover:border-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center uppercase tracking-wider"
                        >
                            Contact
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
