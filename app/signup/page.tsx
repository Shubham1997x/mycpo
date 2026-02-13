'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Check, Sparkles, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function PartnerNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-[#FAFAFA] py-3 sm:py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center z-50">
                        <a href="/">
                            <img src="/logo.svg" alt="MyCPO" className="h-6 sm:h-7" />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {['Services', 'About', 'Partners', 'Contact', 'Blog'].map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                className="text-sm lg:text-base font-medium text-zinc-600 relative group hover:text-[#2ca3c9] transition-colors"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 h-0.5 bg-[#2ca3c9] w-0 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#login"
                            className="text-sm font-bold text-zinc-700 px-6 py-1.5 rounded-md border border-black hover:bg-black hover:text-white transition-colors"
                        >
                            Log In
                        </a>
                    </div>

                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-zinc-700 hover:text-black focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 top-[60px] bg-white z-40 md:hidden flex flex-col p-6 overflow-y-auto border-t border-zinc-100">
                    <div className="flex flex-col gap-6">
                        {['Services', 'About', 'Partners', 'Contact', 'Blog'].map((item) => (
                            <a
                                key={item}
                                href={`/#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-zinc-800 border-b border-zinc-100 pb-2"
                            >
                                {item}
                            </a>
                        ))}
                        <div className="flex flex-col gap-3 mt-4">
                            <a href="#login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 border border-zinc-200 rounded-lg font-semibold text-zinc-700">
                                Log In
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default function PartnerSignupPage() {
    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: '#FAFAFA' }}>
            <PartnerNavbar />

            <main className="relative pt-20 sm:pt-24 lg:pt-28">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2ca3c9]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                        {/* Left Column - Partner Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-bold leading-[1.1] tracking-tight text-zinc-900 mb-3 sm:mb-4">
                                Welcome, <span className="text-[#2ca3c9]">Partner</span>
                            </h1>

                            <p className="text-base sm:text-lg text-zinc-600 mb-6 sm:mb-8">
                                Exclusive pricing and pre-configured settings tailored for you.
                            </p>

                            {/* Partner-Specific Benefits */}
                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3 sm:mb-4">What's Included:</h3>

                                {[
                                    {
                                        icon: <Zap className="w-5 h-5 text-[#2ca3c9]" />,
                                        title: 'Custom Pricing',
                                        description: 'Negotiated rates for your business'
                                    },
                                    {
                                        icon: <Shield className="w-5 h-5 text-[#2ca3c9]" />,
                                        title: 'Pre-Configured',
                                        description: 'Optimized settings ready to go'
                                    },
                                    {
                                        icon: <Check className="w-5 h-5 text-[#2ca3c9]" />,
                                        title: 'Priority Support',
                                        description: 'Dedicated assistance when needed'
                                    },

                                ].map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="flex gap-3 sm:gap-4 p-3 sm:p-4  rounded-lg sm:rounded-xl border border-zinc-200  transition-shadow"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm sm:text-base text-zinc-900 mb-0.5 sm:mb-1">{benefit.title}</h4>
                                            <p className="text-xs sm:text-sm text-zinc-600">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Important Note */}
                            <div className="p-4 sm:p-5">
                                <p className="text-xs sm:text-sm leading-relaxed text-zinc-700">
                                    <span className="font-bold text-[#2ca3c9]">Note: </span>
                                    No credit pull until reviewed and e-signed.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column - Application Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            id="apply"
                            className="w-full"
                        >
                            {/* Minimal Premium Card - Dark Theme */}
                            <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">

                                {/* Header with Gradient Accent */}
                                <div className="relative px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
                                    {/* Subtle gradient orb */}
                                    <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#2ca3c9]/10 to-purple-500/10 rounded-full blur-3xl -z-10" />

                                    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 mb-2 sm:mb-3">
                                        <div className="flex-1">
                                            <h2 className="text-2xl sm:text-3xl font-bold !text-white mb-1">
                                                Apply Now
                                            </h2>
                                            <p className="text-xs sm:text-sm !text-zinc-400">
                                                Quick & easy setup
                                            </p>
                                        </div>
                                        <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#2ca3c9] rounded-full shadow-md shadow-[#2ca3c9]/20 flex-shrink-0">
                                            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide">PARTNER</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing Callout */}
                                <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#2ca3c9]/10 via-[#2ca3c9]/5 to-transparent border-b border-zinc-800">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ca3c9]" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs sm:text-sm font-semibold !text-white truncate">Custom Pricing</p>
                                            <p className="text-[10px] sm:text-xs !text-zinc-400 truncate">Exclusive rates</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Section - Minimal */}
                                <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                                    <div className="text-center">
                                        <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#2ca3c9] text-white text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl shadow-sm hover:shadow-sm hover:shadow-[#2ca3c9]/40 transition-all duration-300 hover:scale-105">
                                            <span className="flex items-center justify-center gap-2">
                                                Start Application
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                        </button>
                                        <p className="text-[10px] sm:text-xs !text-zinc-500 mt-3 sm:mt-4">
                                            Less than 5 minutes
                                        </p>
                                    </div>
                                </div>

                                {/* Footer - Minimal Security Badge */}
                                <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
                                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 py-3 sm:py-4 px-4 sm:px-6 bg-zinc-950/50 rounded-lg sm:rounded-xl border border-zinc-800">
                                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 fill-current !text-zinc-400 flex-shrink-0" />
                                        <span className="text-[10px] sm:text-xs !text-zinc-400 font-medium text-center">
                                            Secure & Encrypted
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>

                </div>
            </main>
        </div>
    );
}
