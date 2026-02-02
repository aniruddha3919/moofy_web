'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const shorts = [
    { id: 'IzL6SaXuGa0', title: 'Brand Awareness Reel' },
    { id: 'yteRIwT3Dus', title: 'Product Selling Reel' },
    { id: 'akudHGEr_0A', title: 'Local Business Promo' },
    { id: 'K4lu-4A4VAM', title: 'New Portfolio Short' }
];

const carousels = [
    { src: 'https://i.pinimg.com/1200x/d1/e4/0e/d1e40eac9b4a604e9c13cba5e2f7350e.jpg', alt: 'Educational infographic' },
    { src: 'https://i.pinimg.com/736x/29/3f/09/293f097b0e8d19a20ac93bcfc85e3b22.jpg', alt: 'Promotional offer' },
    { src: 'https://i.pinimg.com/736x/e3/8a/7d/e38a7dcee237e04e4b7030b7301e52d6.jpg', alt: 'Brand storytelling' },
    { src: 'https://i.pinimg.com/1200x/3a/b2/4c/3ab24ccd84abe5bb566c7f8e24a17306.jpg', alt: 'Data visualization' }
];

const websites = [
    {
        name: 'Kathatale',
        description: 'Luxury Saree & Traditional Wear E-commerce',
        url: 'https://kathatale.com/',
        image: 'https://img.drz.lazcdn.com/static/bd/p/ee587d38c683b809e2dc3da6ef72f5a7.jpg_720x720q80.jpg'
    },
    {
        name: 'Wanderlust Travels',
        description: 'Adventure booking and tour packages',
        url: 'https://www.farepayer.com/',
        image: 'https://images.moneycontrol.com/static-mcnews/2025/03/20250306121138_1.jpg?impolicy=website&width=770&height=431'
    },
    {
        name: 'IronForge Gym',
        description: 'Modern fitness studio with scheduling',
        url: 'https://iconicfitnessindia.lovable.app/',
        image: 'https://intowellness.in/wp-content/uploads/2024/05/product-detail-banner.webp'
    },
    {
        name: 'TrendSet Store',
        description: 'Premium fashion and lifestyle e-commerce',
        url: 'https://animemart.in/',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
    }
];

const Portfolio = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const { scrollLeft, clientWidth } = carouselRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Shorts Portfolio */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3 block">Our Reel & Shorts Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Viral-Worthy Content</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">Engaging short-form videos that capture attention and drive action</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {shorts.map((short) => (
                            <div key={short.id} className="shorts-card group relative overflow-hidden rounded-2xl aspect-[9/16] bg-slate-900">
                                <div className="absolute inset-0 z-30 cursor-default"></div>
                                <iframe
                                    className="w-full h-full pointer-events-none"
                                    src={`https://www.youtube.com/embed/${short.id}?autoplay=1&mute=1&loop=1&playlist=${short.id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`}
                                    title={short.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Posters */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3 block">Carousel Designs That Convert</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Instagram Excellence</h2>
                    </div>

                    <div className="relative group/carousel">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 right-0 -right-4 md:-right-6 flex justify-between pointer-events-none z-30 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                            <button onClick={() => scroll('left')} className="p-3 bg-white shadow-xl rounded-full text-slate-900 border border-slate-200 hover:bg-blue-600 hover:text-white transition-all pointer-events-auto transform hover:scale-110 active:scale-95">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={() => scroll('right')} className="p-3 bg-white shadow-xl rounded-full text-slate-900 border border-slate-200 hover:bg-blue-600 hover:text-white transition-all pointer-events-auto transform hover:scale-110 active:scale-95">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div ref={carouselRef} className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory no-scrollbar scroll-smooth">
                            {carousels.map((item, idx) => (
                                <div key={idx} className="carousel-item min-w-[320px] md:min-w-[400px] snap-center bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group">
                                    <div className="aspect-square relative overflow-hidden">
                                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Website Portfolio */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3 block">Websites We've Built</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Digital Storefronts</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {websites.map((site) => (
                            <div key={site.name} className="website-card group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all flex flex-col h-full">
                                <div className="aspect-video relative overflow-hidden bg-slate-100 flex-shrink-0">
                                    <img src={site.image} alt={site.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{site.name}</h3>
                                    <p className="text-slate-600 text-sm mb-6 flex-grow">{site.description}</p>
                                    <a href={site.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors mt-auto gap-2">
                                        Visit Website <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
