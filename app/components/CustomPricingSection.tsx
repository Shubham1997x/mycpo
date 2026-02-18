'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeSimple, Calculator, FileText, ArrowRight } from 'phosphor-react';

const AUDIT_EMAIL = 'lowerfees@getmycpo.com';
const AUDIT_MAILTO = 'mailto:lowerfees@getmycpo.com?subject=Statement%20Audit%20Request';

export default function CustomPricingSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-5xl mx-auto mb-20 sm:mb-28"
        >
            <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10  text-sm font-semibold ring-1 ring-brand/20">
                    <Calculator className="w-4 h-4 " weight="bold" />
                    Interchange-Plus & Volume Discounts
                </span>
            </div>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start">
                        {/* Left: Copy + email highlight */}
                        <div className="flex-1 min-w-0 lg:pr-10">
                            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-5">
                                Need <span className="text-brand">custom pricing</span>?
                            </h3>
                            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-5">
                                We offer <strong className="text-zinc-900">interchange-plus (cost-plus) pricing</strong> and volume discounts for established and growing businesses. Interchange-plus pricing passes through the actual card network costs with a small fixed markup — giving you maximum transparency and often the lowest possible rates.
                            </p>
                            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                                Not sure how we compare? Pricing in the payments industry is notoriously inconsistent — there are dozens of pricing models and rate structures out there. If you&apos;re not sure whether our standard pricing beats what you&apos;re paying now, send your most recent processing statement and we&apos;ll provide a free, no-obligation audit showing exactly how MyCPO stacks up. We will meet or beat any competitor&apos;s fees.
                            </p>

                            <div className="">
                                <p className="text-sm font-semibold text-zinc-600 uppercase tracking-wide mb-2">Email your statement for a free audit</p>
                                <a
                                    href={AUDIT_MAILTO}
                                    className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-brand hover:text-brand-dark hover:underline break-all transition-colors"
                                >
                                    <EnvelopeSimple className="w-5 h-5 shrink-0" weight="bold" />
                                    {AUDIT_EMAIL}
                                </a>
                            </div>
                        </div>

                        {/* Right: Form + CTA */}
                        <div className="lg:w-[320px] shrink-0 flex flex-col gap-4 border-t border-zinc-200/70 pt-8 mt-8 lg:mt-0 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-10">
                            <div className="p-5 sm:p-6 rounded-xl border border-zinc-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <FileText className="w-5 h-5 text-brand" weight="bold" />
                                    <span className="text-sm font-bold text-zinc-900">Upload statement</span>
                                </div>
                                <p className="text-xs sm:text-sm text-zinc-600 mb-4">
                                    Or drag your PDF here — we&apos;ll compare your current fees to MyCPO.
                                </p>

                                <AnimatePresence mode="wait">
                                    {submitted ? (
                                        <motion.p
                                            key="thanks"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-sm font-medium text-brand py-4"
                                        >
                                            Thanks — we&apos;ll review your statement and be in touch shortly.
                                        </motion.p>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleSubmit}
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-3"
                                        >
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your name"
                                                required
                                                className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email address"
                                                required
                                                className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                                            />
                                            <div>
                                                <input
                                                    type="file"
                                                    name="statement"
                                                    accept=".pdf,application/pdf"
                                                    required
                                                    className="w-full text-sm text-zinc-600 file:mr-2 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-brand/10 file:text-brand file:font-semibold file:text-sm file:cursor-pointer hover:file:bg-brand/20"
                                                />

                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full py-2.5 border border-zinc-300 text-zinc-600 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors"
                                            >
                                                Submit for free audit
                                            </button>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                            <motion.a
                                href="/signup"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white rounded-xl text-sm font-bold hover:bg-zinc-800 transition-colors"
                            >
                                Apply Now
                                <ArrowRight className="w-4 h-4" weight="bold" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
