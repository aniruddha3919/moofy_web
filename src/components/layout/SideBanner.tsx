'use client';

import { usePathname } from 'next/navigation';
import { Sparkles } from 'lucide-react';

const SideBanner = () => {
    const pathname = usePathname();

    // Hide banner on admin and studio routes
    if (pathname?.startsWith('/admin')) return null;

    const whatsappLink = "https://wa.me/919831209756?text=Hi%20Moofy,%20I'm%20interested%20in%20a%20website%20at%20₹5000!";

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] flex items-center group"
        >
            <div className="bg-gradient-to-b from-blue-600 to-purple-600 text-white px-2 py-6 rounded-r-xl shadow-2xl border-y border-r border-white/20 backdrop-blur-md transition-all duration-300 group-hover:px-4 group-hover:pr-6 flex flex-col items-center gap-4">
                <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
                <span className="[writing-mode:vertical-lr] rotate-180 font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
                    Get website at ₹5000
                </span>
            </div>

            {/* Tooltip on hover */}
            <div className="absolute left-full ml-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
                Claim Offer Now! 🚀
            </div>
        </a>
    );
};

export default SideBanner;
