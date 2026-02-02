import {
    MessageSquare,
    Video,
    Layers,
    PenTool,
    Calendar,
    Globe,
    ShoppingBag,
    TrendingUp
} from 'lucide-react';

const services = [
    {
        title: "Social Media Branding",
        description: "Complete brand identity and visual consistency across all platforms",
        icon: MessageSquare
    },
    {
        title: "Reels / Shorts Creation",
        description: "High-quality video content that stops scrolling and drives engagement",
        icon: Video
    },
    {
        title: "Carousel Post Design",
        description: "Eye-catching carousel designs that educate and convert",
        icon: Layers
    },
    {
        title: "Content Scripting",
        description: "Strategic content planning and copywriting that resonates",
        icon: PenTool
    },
    {
        title: "Posting & Management",
        description: "Consistent posting schedule and community engagement",
        icon: Calendar
    },
    {
        title: "Website Development",
        description: "Fast, mobile-friendly websites that convert visitors into customers",
        icon: Globe
    },
    {
        title: "Product Selling Setup",
        description: "E-commerce integration and payment gateway setup",
        icon: ShoppingBag
    },
    {
        title: "Growth Optimization",
        description: "Data-driven strategies to maximize reach and conversions",
        icon: TrendingUp
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3 block">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Complete Digital Solutions</h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        We help businesses grow online by handling everything — from content ideas to posting and selling through a high-converting website.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
