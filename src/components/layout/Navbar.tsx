'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-lg border border-slate-200/50 rounded-2xl px-6 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900">Moofy</span>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {['Services', 'Our Work', 'Pricing', 'FAQ'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Services' ? '/#services' : `/#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc7fj_dr0lk-gYq3ywLIYfk4_rc6w2bGzYXLKZ8wBVvCeYK9g/viewform?usp=publish-editor"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    >
                        Get Started
                    </a>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-slate-900"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden mt-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl">
                    <div className="flex flex-col gap-4">
                        {['Services', 'Our Work', 'Pricing', 'FAQ'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Services' ? '/#services' : `/#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                        <hr className="border-slate-200 my-2" />
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSc7fj_dr0lk-gYq3ywLIYfk4_rc6w2bGzYXLKZ8wBVvCeYK9g/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
