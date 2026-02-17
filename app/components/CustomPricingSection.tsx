'use client';

import { motion } from 'framer-motion';

export default function CustomPricingSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 bg-zinc-50 rounded-2xl border border-zinc-200"
        >
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-4">Need Custom Pricing?</h3>
            <p className="text-sm sm:text-base text-zinc-700 mb-4">
                We offer <strong>interchange-plus (cost-plus) pricing</strong> and volume discounts for established and growing businesses. Interchange-plus pricing passes through the actual card network costs with a small fixed markup — giving you maximum transparency and often the lowest possible rates.
            </p>
            <p className="text-sm sm:text-base text-zinc-700 mb-6">
                Not sure how we compare? Pricing in the payments industry is notoriously inconsistent — there are dozens of pricing models and rate structures out there. If you're not sure whether our standard pricing beats what you're paying now, email your most recent processing statement to{' '}
                <a
                    href="mailto:lowerfees@getmycpo.com?subject=Statement%20Audit%20Request"
                    className="text-[#2ca3c9] hover:underline font-semibold"
                >
                    lowerfees@getmycpo.com
                </a>
                {' '}and we'll provide a free, no-obligation audit showing exactly how MyCPO stacks up. Our goal is to offer tremendous pricing flexibility — we will meet or beat any competitor's fees.
            </p>
            <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-colors"
            >
                Get Started →
            </motion.a>
        </motion.div>
    );
}
