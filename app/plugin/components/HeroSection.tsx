'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, CreditCard } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20"> {/* Added pt-20 for sticky navbar offset */}
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

          <h1 className="mb-6 text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-zinc-900">
            The Payment Gateway
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ca3c9] to-blue-600">
              Built for WooCommerce
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Accept payments, process refunds, and manage your business directly from your dashboard. Secure, fast, and completely seamless.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white rounded-full font-semibold text-base hover:bg-zinc-800 transition-all hover:scale-105 shadow-lg shadow-black/20"
            >
              Get Started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#book-call"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-200 bg-white text-zinc-900 rounded-full font-semibold text-base hover:border-zinc-300 hover:bg-zinc-50 transition-all hover:scale-105"
            >
              Book a Demo
            </a>
          </div>

          {/* Social Proof */}
          <div className="border-t border-zinc-100 pt-8 sm:pt-10">
            <p className="text-sm text-zinc-500 mb-6 font-medium uppercase tracking-wider">Trusted by 10,000+ Stores for Secure Payments</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-bold text-lg">PCI Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-6 h-6" />
                <span className="font-bold text-lg">AES-256</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6" />
                <span className="font-bold text-lg">Global</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                <span className="font-bold text-lg">Tokenized</span>
              </div>
            </div>
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

            {/* Floating Badge 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -right-4 top-10 bg-white p-3 rounded-xl shadow-xl border border-zinc-100 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Security Status</p>
                  <p className="text-sm font-bold text-zinc-900">Protected</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -left-4 bottom-10 bg-white p-3 rounded-xl shadow-xl border border-zinc-100 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Integration</p>
                  <p className="text-sm font-bold text-zinc-900">Seamless</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
