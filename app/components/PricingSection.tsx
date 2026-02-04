'use client';

import { motion } from 'framer-motion';
import { CrossIcon, XCircle } from 'lucide-react';
import { Check, X, Sparkle, Trophy } from 'phosphor-react';

const features = [
    'No setup fees',
    'Free plan available',
    'Lower transaction rates',
    'Same-day payouts',
    'Open source (GPL 3.0)',
    '24/7 priority support',
    'Advanced analytics'
];

export default function PricingSection() {
    return (
        <section className="relative overflow-hidden w-full py-20 sm:py-24 lg:py-32 bg-zinc-50/50">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2ca3c9]/5 rounded-full blur-3xl -z-10" />

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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ca3c9]/10 text-[#2ca3c9] text-sm font-bold mb-6 ring-1 ring-[#2ca3c9]/20"
                    >
                        <Sparkle className="w-4 h-4" weight="fill" />
                        <span>Unbeatable Value</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 mb-6 tracking-tight">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3c9] to-[#1e8aa8]">myCPO</span>?
                    </h2>
                    <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Stop overpaying for standard payment gateways. Get more features for less.
                    </p>
                </motion.div>

                {/* Single Unified Comparison Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto relative"
                >
                    {/* Badge */}
                    <div className="absolute top-0 right-1/3 translate-x-1/2 -translate-y-1/2 bg-[#2ca3c9] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 z-20">
                        <Trophy weight="fill" className="w-4 h-4" />
                        BEST VALUE
                    </div>

                    {/* Main Card */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
                        {/* Decorative gradient blob */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ca3c9]/5 rounded-full blur-3xl -z-0" />

                        {/* Asymmetric Grid Layout */}
                        <div className="grid md:grid-cols-5 relative z-10">

                            {/* Left Side - What Others Don't Have (40%) */}
                            <div className="md:col-span-2  p-3 lg:p-10 flex flex-col justify-center border-r border-zinc-200">
                                <div className="flex items-center gap-3 mb-6">

                                    <h2 className="text-xl font-bold text-zinc-500">Other Gateways</h2>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-sm text-zinc-500">
                                        <XCircle className='text-zinc-500' />
                                        <span>High setup fees</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-500">
                                        <XCircle className='text-zinc-500' />
                                        <span>Expensive monthly costs</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-500">
                                        <XCircle className='text-zinc-500' />
                                        <span>Higher transaction fees</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-500">
                                        <XCircle className='text-zinc-500' />
                                        <span>Delayed payouts</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-zinc-500">
                                        <XCircle className='text-zinc-500' />
                                        <span>Closed source</span>
                                    </li>
                                </ul>


                            </div>

                            {/* Right Side - myCPO Benefits (60%) */}
                            <div className="md:col-span-3 p-8 lg:p-10">
                                <h3 className="text-3xl lg:text-4xl font-extrabold text-zinc-900 mb-2">myCPO</h3>
                                <p className="text-zinc-500 mb-8">Everything you need, nothing you don't</p>

                                {/* All Features with Checkmarks */}
                                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                                    {features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-[#2ca3c9]/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-[#2ca3c9]" weight="bold" />
                                            </div>
                                            <span className="text-sm font-semibold text-zinc-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pricing & CTA */}
                                <div className="pt-6 border-t border-zinc-200">
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-xl font-extrabold text-[#2ca3c9]">Custom</span>
                                        <span className="text-zinc-400 text-sm">pricing / flexible duration</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 px-8 rounded-xl font-bold text-white bg-[#2ca3c9] hover:bg-[#1e8aa8] shadow-lg shadow-[#2ca3c9]/30 hover:shadow-xl hover:shadow-[#2ca3c9]/40 transition-all text-lg"
                                    >
                                        Get Started Free →
                                    </motion.button>
                                    <p className="text-center text-xs text-zinc-400 mt-3 font-medium">
                                        No credit card required • Setup in minutes
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
