import { Star, Zap, Sparkles, Check } from 'lucide-react';

const individualServices = [
    {
        name: '1 Reel / Short',
        description: 'Professional editing included',
        price: '$15',
        icon: Zap,
        color: 'blue'
    },
    {
        name: 'Long Video (10 min)',
        description: 'Full video production',
        price: '$59',
        icon: Star,
        color: 'purple',
        note: '* Extra charges $6/minute after 10 mins'
    }
];

const packages = [
    {
        name: 'Basic Plan',
        tagline: 'Perfect for testing',
        features: [
            '10 Edited Reels per month',
            '3 Carousel Posts',
            'Content strategy (4 weeks)',
            'Monthly progress report',
            
        ],
        cta: 'Choose Plan',
        footer: 'Ideal for small trials',
        popular: false
    },
    {
        name: 'Medium Plan',
        tagline: 'Best for growth',
        features: [
            '18 Premium Reels per month',
            '8 Carousel Posts',
            '1 Website - FREE',
            'Weekly performance report',
            'Dedicated Manager',
            'Full profile branding',
            'Advance content strategy'
        ],
        cta: 'Choose Plan',
        footer: 'Best for growing brands',
        popular: true
    },
    {
        name: 'Premium Plan',
        tagline: 'Ultimate branding',
        features: [
            '25 Premium Reels per month',
            '12 Carousel Posts',
            '1 Website - FREE',
            'Daily performance report',
            '24/7 Priority Support',
            'Influencer outreach',
            'Paid Ads management'
        ],
        cta: 'Choose Plan',
        footer: 'For market leaders',
        popular: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full mb-6 shadow-lg animate-pulse">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-bold text-sm tracking-wide uppercase">NEW YEAR OFFER - Flat 10% Discount!</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple Pricing, Powerful Results</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">Choose the plan that fits your business goals. All plans include a FREE website.</p>
                </div>

                {/* Individual Services */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-800">Individual Services</h3>
                        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {individualServices.map((service, idx) => (
                            <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}`}>
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{service.name}</h4>
                                            <p className="text-slate-500 text-sm">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-3xl font-bold text-slate-900">{service.price}</span>
                                    </div>
                                </div>
                                {service.note && <p className="text-xs text-slate-400 mt-2 italic text-right">{service.note}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-800">Package Plans</h3>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`pricing-card rounded-2xl border-2 p-8 relative flex flex-col h-full transition-all ${pkg.popular
                            ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-transparent transform scale-105 shadow-2xl scale-y-105'
                            : 'bg-white border-slate-200 hover:border-blue-500 hover:shadow-xl'
                            }`}>
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.popular ? 'bg-white/20 backdrop-blur-sm' : 'bg-blue-100'}`}>
                                    <Zap className={`w-6 h-6 ${pkg.popular ? 'text-white' : 'text-blue-600'}`} />
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                                    <p className={`${pkg.popular ? 'text-white/80' : 'text-slate-500'} text-sm`}>{pkg.tagline}</p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-green-600'}`} />
                                        <span className={pkg.popular ? 'text-white' : 'text-slate-700'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                <a
                                    href="https://wa.me/919831209756?text=Hi%20Moofy,%20I'm%20interested%20in%20choosing%20a%20plan!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-colors shadow-lg ${pkg.popular ? 'bg-white text-blue-600 hover:bg-slate-50' : 'bg-slate-900 text-white hover:bg-slate-800'
                                        }`}
                                >
                                    {pkg.cta}
                                </a>
                                <p className={`text-center text-xs mt-4 ${pkg.popular ? 'text-white/80' : 'text-slate-500'}`}>{pkg.footer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
