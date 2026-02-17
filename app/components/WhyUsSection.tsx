'use client';

import { motion } from 'framer-motion';
import { Check, X, Sparkle, Trophy } from 'phosphor-react';

const features = [
    'No setup fees',
    'Free WooCommerce plugin',
    'Lower transaction rates',
    'Same-day payouts',
    'Open source (GPL 3.0)',
    '24/7 priority support',
    'Advanced analytics'
];

export default function WhyUsSection() {
    return (
        <section className="relative overflow-hidden w-full py-20 sm:py-24 lg:py-32 bg-zinc-50/50">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-bold mb-6 ring-1 ring-brand/20"
                    >
                        <Sparkle className="w-4 h-4" weight="fill" />
                        <span>Unbeatable Value</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
                        Why Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-brand-dark">MyCPO</span>?
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        Stop overpaying for standard payment gateways. Get more features for less.
                    </p>
                </motion.div>

                {/* Single Unified Comparison Card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-6xl mx-auto relative"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="absolute top-0 right-2 sm:right-1/3 translate-x-0 sm:translate-x-1/2 -translate-y-1/2 bg-brand text-white px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg flex items-center gap-1.5 sm:gap-2 z-20"
                    >
                        <Trophy weight="fill" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        BEST VALUE
                    </motion.div>

                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative"
                    >
                        {/* Decorative gradient blob */}
                        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-brand/5 rounded-full blur-3xl z-0" />

                        {/* Asymmetric Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-12 relative z-10">

                            {/* Left Side - Other Gateways (35%) */}
                            <div className="md:col-span-4 p-4 sm:p-6 lg:p-10 flex flex-col justify-center items-start text-left border-b md:border-b-0 md:border-r border-zinc-200 bg-zinc-50/30 min-w-0">
                                <h2 className="text-xl sm:text-2xl font-bold text-zinc-500 mb-1 sm:mb-2">Other Gateways</h2>
                                <p className="text-sm sm:text-base text-zinc-400 mb-5 sm:mb-6">What you get elsewhere</p>
                                <ul className="space-y-2.5 sm:space-y-3 flex flex-col items-start w-full">
                                    {['High setup fees', 'Expensive monthly costs', 'Higher transaction fees', 'Delayed payouts', 'Closed source'].map((label, i) => (
                                        <motion.li
                                            key={label}
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 * i }}
                                            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-zinc-500"
                                        >
                                            <X className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-zinc-400" weight="bold" />
                                            <span>{label}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Side - MyCPO Benefits (65%) */}
                            <div className="md:col-span-8 p-4 sm:p-6 lg:p-8 xl:p-10 min-w-0">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 mb-1 sm:mb-2">MyCPO</h3>
                                <p className="text-sm sm:text-base text-zinc-500 mb-6 sm:mb-8">Everything you need, nothing you don't</p>

                                {/* All Features with Checkmarks */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 mb-6 sm:mb-8">
                                    {features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-brand" weight="bold" />
                                            </div>
                                            <span className="text-sm font-semibold text-zinc-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pricing & CTA */}
                                <div className="pt-4 sm:pt-6 border-t border-zinc-200">
                                    <div className="mb-4 sm:mb-6">
                                        <h4 className="text-base sm:text-lg font-bold text-zinc-900 mb-3">Competitive Pricing</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                                                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" weight="bold" />
                                                <span>Custom & interchange-plus pricing available</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                                                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" weight="bold" />
                                                <span>Volume discounts for growing businesses</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                                                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" weight="bold" />
                                                <span>Free statement audit — we'll compare your current fees</span>
                                            </li>
                                            <li className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700">
                                                <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" weight="bold" />
                                                <span>Meet-or-beat pricing guarantee</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-bold text-white bg-black hover:bg-zinc-800 shadow-lg shadow-black/20 transition-all text-base sm:text-lg"
                                    >
                                        Get Started →
                                    </motion.button>
                                    <p className="text-center text-[10px] sm:text-xs text-zinc-400 mt-2 sm:mt-3 font-medium">
                                        No credit card required • Quick
                                        application
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
