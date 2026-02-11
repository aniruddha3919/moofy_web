import { Zap } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">Moofy</span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-8">
                            Transforming businesses through strategic social media content and high-converting websites. Let&apos;s scale your impact together.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Our Work</a></li>
                            <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                            <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Local Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="/social-media-management-kolkata" className="hover:text-blue-400 transition-colors">SMM in Kolkata</a></li>
                            <li><a href="/social-media-management-baguiati" className="hover:text-blue-400 transition-colors">SMM in Baguiati</a></li>
                            <li><a href="/website-development-baguiati" className="hover:text-blue-400 transition-colors">Web Dev in Baguiati</a></li>
                            <li><a href="/budget-website-development-kolkata" className="hover:text-blue-400 transition-colors font-semibold text-green-400">Budget Website (₹4999)</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Salt Lake Branding</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Connect</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">YouTube</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter (X)</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p>© 2026 Moofy Agency. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
