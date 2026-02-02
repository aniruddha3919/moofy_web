'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, CheckCircle } from 'lucide-react';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

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
        <section ref={heroRef} className="min-h-screen flex flex-col pt-20 relative overflow-hidden justify-center items-center px-6">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-400/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Geometric Shapes */}
            <div className="absolute top-20 right-20 w-20 h-20 border-4 border-blue-200 rounded-lg rotate-12 opacity-30 hidden lg:block"></div>
            <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 hidden lg:block"></div>

            <div className="relative z-10 text-center max-w-6xl mx-auto space-y-8">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm shadow-md animate-fade-up">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">Scale your IMPACT ORGANICALLY</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight text-slate-900 animate-fade-up">
                    We Turn Social Media<br />
                    Into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sales</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-up">
                    End-to-end social media branding, content creation, and website development for shops & businesses. From Reels to Revenue.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up">
                    <a
                        href="#portfolio"
                        className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center"
                    >
                        View Our Work
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc7fj_dr0lk-gYq3ywLIYfk4_rc6w2bGzYXLKZ8wBVvCeYK9g/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 text-base font-semibold bg-white text-slate-900 border-2 border-slate-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all w-full sm:w-auto text-center"
                    >
                        Get Started
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-slate-400" />
            </div>
        </section>
    );
};

export default Hero;
