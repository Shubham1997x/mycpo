'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
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
                    {/* Logo */}
                    <div className="flex items-center z-50">
                        <img
                            src="/logo.svg"
                            alt="MyCPO"
                            className="h-6 sm:h-7"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {['Services', 'About', 'Partners', 'Contact', 'Blog'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm lg:text-base font-medium text-zinc-600 hover:text-[#2ca3c9] transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2ca3c9] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#login"
                            className="text-sm font-semibold text-zinc-700 hover:text-black transition-colors px-4 py-2"
                        >
                            Log In
                        </a>
                        <a
                            href="#signup"
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white rounded-full font-semibold text-sm hover:bg-zinc-800 transition-all hover:scale-105"
                        >
                            Sign Up
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
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

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-[60px] bg-white z-40 md:hidden flex flex-col p-6 overflow-y-auto border-t border-zinc-100"
                    >
                        <div className="flex flex-col gap-6">
                            {['Services', 'About', 'Partners', 'Contact', 'Blog'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-zinc-800 border-b border-zinc-100 pb-2"
                                >
                                    {item}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <a
                                    href="#login"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center py-3 border border-zinc-200 rounded-lg font-semibold text-zinc-700"
                                >
                                    Log In
                                </a>
                                <a
                                    href="#signup"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center py-3 bg-black text-white rounded-lg font-semibold"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
