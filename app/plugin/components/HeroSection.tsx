'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-color/30 blur-3xl pointer-events-none"
        style={{ zIndex: 1 }}
      />




      <div className="relative max-w-1600 mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="mb-0 text-[32px] sm:text-[48px] lg:text-[60px] font-medium leading-[40px] sm:leading-[60px] lg:leading-[80px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.4px] heading-color">
            <span className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <img
                src="/logo.svg"
                alt="MyCPO"
                className="h-8 sm:h-12 lg:h-14"
              />

              <span className="heading-color text-lg sm:text-2xl lg:text-3xl">for</span>
              <span className="flex items-center gap-1 sm:gap-2">
                <img
                  src="https://woocommerce.com/wp-content/themes/woo/images/woo-logo.svg"
                  alt="WooCommerce"
                  className="h-7 sm:h-10 lg:h-11"
                />

              </span>
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-md text-color max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
            The most advanced payment gateway for WooCommerce. Fast payouts, fraud prevention, and seamless checkout in minutes.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 lg:mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-md font-semibold text-sm sm:text-base hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            Get Started
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#book-call"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border border-black bg-[#fafafa] text-black rounded-md font-semibold text-sm sm:text-base hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
          >
            Book a Call
          </a>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=600&fit=crop"
            alt="Plugin Dashboard Preview"
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
