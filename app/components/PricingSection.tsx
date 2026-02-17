'use client';

import { motion } from 'framer-motion';
import { Sparkle } from 'phosphor-react';
import PricingComparisonTable from './PricingComparisonTable';
import PricingFootnotes from './PricingFootnotes';
import CustomPricingSection from './CustomPricingSection';
import IdealMerchantProfiles from './IdealMerchantProfiles';

export default function PricingSection() {
    return (
        <section className="relative overflow-hidden w-full py-20 sm:py-24 lg:py-32 bg-zinc-50">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6"
                    >
                        <Sparkle className="w-4 h-4" weight="fill" />
                        <span>Transparent Pricing</span>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 sm:mb-6">
                        Simple, <span className="text-brand">Competitive</span> Pricing
                    </h2>
                    <p className="text-zinc-600 text-base sm:text-lg max-w-3xl mx-auto">
                        No hidden fees. No surprises. See exactly how MyCPO compares to other payment processors.
                    </p>
                </motion.div>

                {/* Part 1: Comparison Table */}
                <PricingComparisonTable />

                {/* Part 2: Footnotes */}
                <PricingFootnotes />

                {/* Part 3: Custom Pricing */}
                <CustomPricingSection />

                {/* Part 4: Ideal Merchant Profiles */}
                <IdealMerchantProfiles />
            </div>
        </section>
    );
}
