import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Video, Layers, PenTool, TrendingUp, MapPin, Sparkles, Target, Zap, ArrowRight, Phone, Share2 } from 'lucide-react';

export const metadata = {
    title: 'Social Media Management Service in Baguiati | Digital Marketing Agency VIP Road',
    description: 'Expert Social Media Management in Baguiati. Moofy Agency offers premium social media marketing, Instagram marketing, and Reels creation for businesses in Baguiati, VIP Road, and Teghoria.',
    keywords: 'Social Media Management Baguiati, Digital Marketing Agency VIP Road, Social Media Marketing Teghoria, Instagram Marketing Baguiati, Social Media Marketing Joramandir, VIP Road Branding Agency, Baguiati Business Growth',
    alternates: {
        canonical: "https://moofy.in/social-media-management-baguiati"
    }
};

const whatsappNumber = "919831209756";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Moofy,%20I'm%20interested%20in%20Social%20Media%20Management%20for%20my%20business%20in%20Baguiati.`;

const BaguiatiSMMPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Moofy Agency - Social Media Management Baguiati",
        "description": "Premium social media management services in Baguiati and VIP Road area. Specializing in local Reels, Content Strategy, and Instagram marketing for neighborhood businesses.",
        "url": "https://moofy.in/social-media-management-baguiati",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Baguiati, Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "22.6186",
            "longitude": "88.4239"
        },
        "serviceArea": ["Baguiati", "VIP Road", "Teghoria", "Joramandir", "Kestopur", "Dum Dum Park", "Lake Town"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Social Media Services Baguiati",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Social Media Management Baguiati"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Social Media Marketing VIP Road"
                    }
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
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                                <MapPin className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Digital Marketing Agency Baguiati</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                                Social Media Management in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Baguiati</span>
                            </h1>
                            <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-xl">
                                Dominating the digital landscape along <strong>VIP Road</strong>. We create hyper-local viral content that drives customers straight to your doorstep in Baguiati.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center gap-3 scale-100 hover:scale-105 active:scale-95 group">
                                    Grow Your Baguiati Brand <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-full aspect-square md:aspect-[4/5] bg-slate-800 rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
                                    <Image
                                        src="https://i.pinimg.com/736x/89/3e/7b/893e7b1652438c8235edda799511674a.jpg"
                                        alt="Social Media Management Baguiati"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl z-20">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-bold text-blue-400 uppercase">Baguiati Market Growth</span>
                                            <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-1 rounded-full">+520% Local Reach</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-[90%] bg-blue-500 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Baguiati Solution Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3 block">Expert Social Media Management Baguiati</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Social Media Marketing VIP Road VIP Solutions</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Baguiati is a high-traffic zone where thousand of potential customers pass by every day. Tap into this massive local market with <strong>social media marketing in Baguiati</strong> that actually converts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hyper-Local Reach",
                                desc: "We target users within a 2-5km radius of Baguiati/Teghoria for maximum local footfall.",
                                icon: Sparkles,
                                color: "bg-blue-500"
                            },
                            {
                                title: "VIP Road Trending Reels",
                                desc: "High-impact visual content designed to capture the attention of VIP Road commuters.",
                                icon: Target,
                                color: "bg-purple-500"
                            },
                            {
                                title: "Neighborhood Branding",
                                desc: "Build a reputation as the go-to spot in Joramandir and Kestopur.",
                                icon: TrendingUp,
                                color: "bg-green-500"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-500 transition-all group">
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AEO Section (FAQ for AI) */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-3 block">Digital Marketing Baguiati Insights</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Baguiati SMM FAQ</h2>
                        <p className="text-slate-500 text-lg">Insights on <strong>social media marketing in Baguiati</strong> and <strong>social media management VIP Road</strong>.</p>
                    </div>
                    <div className="space-y-6 text-left">
                        {[
                            {
                                q: "Why do businesses in Baguiati need social media management?",
                                a: "Baguiati is a highly competitive commercial hub. With <strong>social media management in Baguiati</strong>, businesses can stand out from local competitors by professionalizing their digital presence and targeting local residents along VIP Road."
                            },
                            {
                                q: "What is the best digital marketing agency near VIP Road?",
                                a: "Moofy Agency is the top choice for <strong>digital marketing near VIP Road</strong>. We specialize in growing local brands through hyper-local targeting and viral content creation for areas like Teghoria and Baguiati."
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

            {/* Baguiati Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 border-t border-slate-100 pt-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Winning the Digital Race in Baguiati & VIP Road</h2>

                    <div className="prose prose-slate max-w-none text-slate-600 space-y-8 leading-relaxed">
                        <p>
                            Baguiati has transformed from a transit point into a major commercial destination in Kolkata. For businesses operating here, <strong>social media management in Baguiati</strong> is the key to unlocking the massive potential of the local population. From shoppers at Big Bazaar to residents of the large housing complexes in Teghoria, your audience is active on social media 24/7.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The High-Traffic Advantage of VIP Road</h3>
                        <p>
                            Businesses along VIP Road have a unique advantage: high visibility. However, physical billboards are expensive and static. Digital <strong>social media marketing on VIP Road</strong> acts as a dynamic billboard in the pockets of thousands of commuters. By targeting people who frequently cross the Joramandir bridge or Baguiati crossing, you ensure that your brand is the first one they think of when they need your product or service.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Instagram Growth in the Baguiati Ecosystem</h3>
                        <p>
                            Instagram is where Baguiati&apos;s youth and young professionals hang out. Our <strong>Instagram marketing in Baguiati</strong> strategies focus on creating content that resonates with this crowd. Whether it&apos;s showcasing a new menu at a local cafe or a clearance sale at a boutique, we make sure your content cuts through the noise. We use geo-tagging and local influencer collaborations to build a strong community around your brand.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Total Digital Dominance with a Baguiati Digital Marketing Agency</h3>
                        <p>
                            Why settle for just being &quot;on social media&quot; when you can dominate it? As a premier <strong>digital marketing agency in Baguiati</strong>, Moofy provides end-to-end solutions. We manage your Facebook groups, Instagram Reels, and local SEO to ensure that when someone searches for a business like yours in Baguiati, they find you everywhere. Our approach is data-driven, results-oriented, and perfectly localized for the VIP Road audience.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BaguiatiSMMPage;
