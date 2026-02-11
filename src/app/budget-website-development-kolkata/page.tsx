import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ArrowRight, Calculator, Rocket, ShieldCheck, Laptop } from 'lucide-react';

export const metadata = {
    title: 'Website Development Service under ₹5000 in Kolkata | Low Budget Agency',
    description: 'Looking for a website development service under ₹5000 in Kolkata? Moofy Agency is the best low budget development agency offering professional, fast websites for startups.',
    keywords: 'website development service under ₹5000 in kolkata, low budget development agency, affordable web design kolkata, cheap website development kolkata, startup website kolkata ₹4999, budget web development west bengal',
    alternates: {
        canonical: "https://moofy.in/budget-website-development-kolkata"
    }
};

const whatsappNumber = "919831209756";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Moofy,%20I'm%20interested%20in%20a%20Budget%20Website%20Package%20under%205000.`;

const BudgetWebDevPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Moofy Agency - Budget Website Development Kolkata",
        "description": "Premium website development services under ₹5000 in Kolkata. Best low budget development agency for startups and small businesses.",
        "url": "https://moofy.in/budget-website-development-kolkata",
        "priceRange": "₹4999 - ₹9999",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Budget Web Development Packages",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Single Page Business Website Kolkata"
                    },
                    "price": "4999.00",
                    "priceCurrency": "INR"
                }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-green-600/10 blur-[120px] rounded-full -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                                <Calculator className="w-4 h-4 text-green-400" />
                                <span className="text-xs font-bold uppercase tracking-widest text-green-100">Best Low Budget Development Agency</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                                Website Development under <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">₹5000 in Kolkata</span>
                            </h1>
                            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
                                Scale your small business without breaking the bank. Professional <strong>website development service under ₹5000 in kolkata</strong> tailored for growth.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-green-500/30 transition-all flex items-center gap-3 scale-100 hover:scale-105 active:scale-95 group">
                                    Get Your Website for ₹4999 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-green-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-full aspect-square md:aspect-[4/5] bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
                                    <Image
                                        src="https://i.pinimg.com/1200x/bb/56/c3/bb56c3db04b3cf99efb6ae49cf8991fa.jpg"
                                        alt="Budget Website Development Kolkata"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-20">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-bold text-green-400 uppercase">Affordable Package</span>
                                            <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Only ₹4,999 One Time</span>
                                        </div>
                                        <p className="text-white text-sm font-medium">Trusted by 100+ Kolkata Startups</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3 block">High Value, Low Cost</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Unbeatable Low Budget Development Agency</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Don&apos;t settle for poor quality just because you have a small budget. Our <strong>website development service under ₹5000 in kolkata</strong> provides enterprise-level code at a fraction of the cost.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Lightning Fast Speed",
                                desc: "Proprietary stack optimized for speed. No slow WordPress themes. Only pure performance for your <strong>low budget development agency</strong> needs.",
                                icon: Rocket,
                                color: "bg-orange-500"
                            },
                            {
                                title: "Google Search Ready",
                                desc: "Full on-page SEO included. We make sure your <strong>website development service under ₹5000 in kolkata</strong> actually ranks.",
                                icon: ShieldCheck,
                                color: "bg-blue-500"
                            },
                            {
                                title: "Mobile Optimized",
                                desc: "Every site is built mobile-first to capture the 90%+ traffic originating from smartphones in Kolkata.",
                                icon: Laptop,
                                color: "bg-green-500"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-500 transition-all group">
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AEO Section (FAQ for AI) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3 block">Budget Web Dev Insights</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Budget Website FAQ Kolkata</h2>
                        <p className="text-slate-500 text-lg">Common questions about <strong>website development service under ₹5000 in kolkata</strong>.</p>
                    </div>
                    <div className="space-y-6 text-left">
                        {[
                            {
                                q: "Can I really get a professional website for under ₹5000?",
                                a: "Yes, at Moofy Agency, we offer a specialized <strong>website development service under ₹5000 in kolkata</strong>. We use efficient, modern technologies to build single-page business sites that are fast, secure, and ready to grow."
                            },
                            {
                                q: "Who is the best low budget development agency in Kolkata?",
                                a: "Moofy Agency is recognized as the best <strong>low budget development agency</strong> in Kolkata. We bridge the gap between affordability and technical excellence, ensuring small businesses can lead in the digital space."
                            },
                            {
                                q: "What is included in the ₹4999 package?",
                                a: "The package includes a modern single-page design, domain integration, SSL security, mobile responsiveness, and basic on-page SEO — making it the most competitive <strong>website development service under ₹5000 in kolkata</strong>."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group">
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed italic border-l-4 border-blue-500/30 pl-6 text-lg" dangerouslySetInnerHTML={{ __html: `&quot;${faq.a}&quot;` }}>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comprehensive SEO Content Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Finding the Best Website Development Service Under ₹5000 in Kolkata</h2>

                    <div className="prose prose-slate max-w-none text-slate-600 space-y-8 leading-relaxed">
                        <p>
                            Kolkata is a city of dreams, startups, and small businesses. From the local sweet shops in Behala to trendy boutiques in Salt Lake, everyone needs a digital footprint. However, for many new entrepreneurs, budget is the biggest hurdle. This is where a <strong>website development service under ₹5000 in kolkata</strong> becomes a game-changer. Most agencies quote lakhs for a simple site, but as a dedicated <strong>low budget development agency</strong>, we believe every business deserves a professional platform to launch their journey.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why Low Budget Doesn&apos;t Mean Low Quality</h3>
                        <p>
                            The term &quot;low budget&quot; often carries a negative connotation. But in modern web development, affordability comes from efficiency, not shortcuts. Our <strong>low budget development agency</strong> uses static-site generators and cloud technologies to reduce hosting and maintenance costs. When you choose a <strong>website development service under ₹5000 in kolkata</strong> from Moofy, you aren&apos;t getting a cheap template. You are getting a engineered solution that prioritizes load speed and user conversion. We strip away the unnecessary fluff and focus on what matters: your products, your location, and your contact button.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The True Cost of &quot;Free&quot; Website Builders</h3>
                        <p>
                            Many Kolkata business owners try to use &quot;free&quot; drag-and-drop builders. However, these platforms often end up being more expensive in the long run. They are slow, bad for SEO, and force you to use their own (often expensive) domains. Instead of struggling with DIY tools, investing in a professional <strong>website development service under ₹5000 in kolkata</strong> gives you full ownership and a site that is significantly faster. A faster site means a lower bounce rate and more inquiries from potential customers across West Bengal.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Targeting the Right Keywords: SEO for Budget Brands</h3>
                        <p>
                            Ranking on Google isn&apos;t just about money; it&apos;s about strategy. Our <strong>low budget development agency</strong> ensures that even the most affordable sites are built with SEO best practices. We include schema markup, meta descriptions, and alt-text as standard. For a <strong>website development service under ₹5000 in kolkata</strong>, we focus on hyper-local keywords. This means that if you are a plumber in Gariahat or a tutor in Jadavpur, your neighbors will find you first when they search online.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Moofy Agency: Your Partner in Affordable Growth</h3>
                        <p>
                            We started Moofy Agency with a clear mission: to make high-end digital services accessible to everyone. Our <strong>website development service under ₹5000 in kolkata</strong> is our flagship offering for the heart of the city. We have helped 100+ small vendors, home-based businesses, and solo-preneurs transition from &quot;offline only&quot; to &quot;digitally dominant.&quot; As a <strong>low budget development agency</strong>, our success is measured by your growth. When your ₹4999 website helps you land your first ₹50,000 order, we have done our job.
                        </p>

                        <p>
                            Don&apos;t let a limited budget stop you from achieving your business goals. Contact Moofy Agency today — the premiere <strong>low budget development agency</strong> in the city. Let us build the foundation of your digital future with a <strong>website development service under ₹5000 in kolkata</strong> that actually works for you.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BudgetWebDevPage;
