"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendUp, Headset } from "phosphor-react";

export default function IdealMerchantProfiles() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-6xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white shadow-lg">


        <div className="relative z-10 p-6 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center mb-4">
            Is MyCPO Right for You?
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            MyCPO is built for merchants who need more than a basic payment
            processor. While platforms like Stripe and Square work well for very
            small or brand-new businesses, MyCPO delivers the most value for
            merchants who:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Profile 1: High Volume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <TrendUp className="w-6 h-6 text-brand" weight="bold" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 mb-3">
                Process $25,000+ per month
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                At this volume, our lower transaction rate (2.75% + $0.25 vs. 2.9% +
                $0.30) more than offsets our $50 monthly fee — and the savings grow
                as your volume increases. The more you process, the more you keep
                <a
                  href="#savings-footnote"
                  className="ml-0.5 text-brand hover:underline font-semibold"
                  aria-label="Read savings estimate footnote"
                >
                  *
                </a>
              </p>
            </motion.div>

            {/* Profile 2: High-Risk */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-brand" weight="bold" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 mb-3">
                Operate in high-risk industries
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                If you&apos;ve been declined by Stripe, Square, or other processors — or
                you&apos;re worried about sudden account freezes — MyCPO is purpose built
                for you. We underwrite upfront so you can operate with confidence,
                not anxiety. We support a wide range of verticals that mainstream
                processors won&apos;t touch.
              </p>
            </motion.div>

            {/* Profile 3: White-Glove Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="group bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-4">
                <Headset className="w-6 h-6 text-brand" weight="bold" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 mb-3">
                Want dedicated support
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                No chatbots, no waiting days for a response. MyCPO provides
                white-glove service with a dedicated account manager who knows your
                business. When something goes wrong, we’re ready to help whether
                that be jumping on a Zoom call or texting our team.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm sm:text-base text-zinc-600 mb-4">
              Not sure where you fall?{' '}
              <a
                href="/signup"
                className="text-brand hover:underline font-semibold"
              >
                Apply now
              </a>{' '}
              and we'll help you figure out if MyCPO is the right fit — or email
              your latest processing statement to{' '}
              <a
                href="mailto:lowerfees@getmycpo.com?subject=Statement%20Audit%20Request"
                className="text-brand hover:underline font-semibold"
              >
                lowerfees@getmycpo.com
              </a>{' '}
              for a free pricing comparison.
            </p>
          </div>
        </div>
      </div>

      <p id="savings-footnote" className="mt-6 text-center text-xs text-zinc-500 max-w-3xl mx-auto">
        * Estimated savings based on standard low-risk rates compared to
        Stripe&apos;s published 2.9% + $0.30 pricing. Actual savings depend on
        transaction size, card mix, and volume. High-risk merchants may have
        different rate structures.
      </p>
    </motion.div>
  );
}
