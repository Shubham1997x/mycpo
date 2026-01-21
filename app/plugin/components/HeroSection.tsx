'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, CreditCard } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8"> {/* Added pt-20 for sticky navbar offset */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'url(/bg-footer.svg)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Blue circular gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2ca3c9]/20 blur-[100px] pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2ca3c9]/10 text-[#2ca3c9] text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ca3c9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ca3c9]"></span>
            </span>
            New: WooCommerce Subscriptions Support
          </div>

          <h1 className="mb-6 text-[32px] sm:text-[48px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-zinc-900">
            <span className="sr-only">The Payment Gateway Built for WooCommerce</span>
            <span aria-hidden className="inline">
              <span className="inline-flex items-center justify-center gap-3 align-middle">
                <img
                  src="/logo.svg"
                  alt=""
                  className="h-[34px] sm:h-[44px] lg:h-[56px] w-auto"
                />
                <span>Gateway</span>
              </span>
              <br />
              <span className="inline-flex items-center justify-center gap-3 align-middle">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2ca3c9] to-blue-600">
                  Built for
                </span>
                <img
                  src="/woo.svg"
                  alt=""
                  className="h-[30px] sm:h-[38px] lg:h-[48px] w-auto"
                />
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-md lg:text-md text-zinc-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Accept payments, process refunds, and manage your business directly from your dashboard. Secure, fast, and completely seamless.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-6">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-semibold text-base hover:bg-zinc-800 transition-all hover:scale-105 shadow-lg shadow-black/20"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#book-call"
              className="inline-flex items-center justify-center px-8 py-3 border border-zinc-200 bg-white text-zinc-900 rounded-md font-semibold text-base hover:border-zinc-300 hover:bg-black hover:text-white transition-all hover:scale-105"
            >
              Book a Demo
            </a>
          </div>

        </motion.div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=2400&q=80"
              alt="Plugin Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
