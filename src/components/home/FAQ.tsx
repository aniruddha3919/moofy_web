'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How long does it take to see results?",
        answer: "Typically, you'll see increased engagement within the first 2-3 weeks. Conversion to sales usually follows as we optimize the content strategy based on initial data."
    },
    {
        question: "Do I really get a free website?",
        answer: "Yes! All our monthly packages (Basic, Medium, and Premium) include a professionally designed website to help you convert your social media traffic into sales."
    },
    {
        question: "Can I cancel my plan anytime?",
        answer: "Yes, our services are month-to-month. You can cancel at any time, though we recommend at least a 3-month commitment to see significant growth."
    },
    {
        question: "Who handles the content ideas?",
        answer: "We do! Our team researches trending topics and creates a strategic content plan tailored to your business niche."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white relative">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3 block">Got Questions?</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-slate-900">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed animate-fade-down">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
