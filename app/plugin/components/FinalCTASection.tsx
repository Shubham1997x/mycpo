'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32  bg-zinc-900">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-[#2ca3c9]/20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-8 tracking-tight">
            Ready to <span className="!text-[#2ca3c9]">Upgrade</span> Your Checkout?
          </h2>
          <p className="text-lg sm:text-xl !text-white mb-10 leading-relaxed">
            Join thousands of WooCommerce success stories. Get fast payouts, reliable security, and a better experience for your customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#get-started"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-100 transition-all hover:scale-105 min-w-[200px]"
            >
              Install Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.getmycpo.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-500 !text-white rounded-full font-bold text-lg hover:bg-zinc-800 hover:border-zinc-400 transition-all hover:scale-105 min-w-[200px]"
            >
              Talk to Sales
            </a>
          </div>

          <p className="mt-8 !text-white text-sm">
            No credit card required for setup • 24/7 Support • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
