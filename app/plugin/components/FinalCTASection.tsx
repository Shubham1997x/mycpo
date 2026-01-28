'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32  bg-zinc-900">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-900 to-[#2ca3c9]/20" />
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white! mb-8 tracking-tight">
            Ready to <span className="text-[#2ca3c9]!">Upgrade</span> Your Checkout?
          </h2>
          <p className="text-lg sm:text-xl text-white! mb-10 leading-relaxed">
            Join thousands of WooCommerce success stories. Get fast payouts, reliable security, <strong>zero gateway fees</strong>, and a unified all-in-one solution that works for all risk levels.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="#get-started"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-md font-bold text-lg min-w-[200px]"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Install Now
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.div>
            </motion.a>
            <motion.a
              href="https://www.getmycpo.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-zinc-500 text-white! rounded-md font-bold text-lg min-w-[200px]"
              whileHover={{
                scale: 1.05,
                y: -3,
                backgroundColor: 'rgba(39, 39, 42, 0.8)',
                borderColor: 'rgba(161, 161, 170, 0.6)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Talk to Sales
            </motion.a>
          </motion.div>

          <p className="mt-8 text-white! text-sm">
            No credit card required for setup • 24/7 Support • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
