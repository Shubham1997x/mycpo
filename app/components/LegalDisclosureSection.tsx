'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, CreditCard } from 'phosphor-react';

const complianceBadges = [
    { icon: ShieldCheck, label: 'PCI DSS Level 1' },
    { icon: Lock, label: 'GDPR Compliant' },
    { icon: FileText, label: 'GPL v3.0' },
    { icon: CreditCard, label: '3D Secure' }
];

const disclosures = [
    'Transaction processing times may vary based on your merchant agreement. Standard payout schedule is 2-3 business days. Account approval required.',
    'Processing rates vary by card type, transaction volume, and business category. Contact our sales team for custom pricing.',
    'Merchants are responsible for chargebacks and disputes in accordance with card network rules. We provide tools to help manage and prevent chargebacks.',
    'Service availability: While we strive for 99.9% uptime, myCPO is provided "as is" without warranty. We are not liable for lost revenue due to service interruptions.'
];

export default function LegalDisclosureSection() {
    return (
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center mb-12"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ca3c9]/10 text-[#2ca3c9] text-sm font-semibold mb-6"
                >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Trusted & Secure</span>
                </motion.div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
                    Legal <span className="text-[#2ca3c9]">Disclosure</span>
                </h2>
                <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                    Transparent. Secure. Compliant.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3 sm:space-y-4 mb-8 sm:mb-10"
            >
                {disclosures.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-20px' }}
                        transition={{ duration: 0.35, delay: 0.05 * index, ease: 'easeOut' }}
                        className="flex items-start gap-3 p-3 sm:p-4 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-zinc-300 transition-colors min-w-0"
                    >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2ca3c9]/10 text-[#2ca3c9] text-sm font-bold">
                            {index + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-0.5 break-words">{text}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12"
            >
                {complianceBadges.map((badge, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 shrink-0"
                    >
                        <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ca3c9] shrink-0" weight="bold" />
                        <span className="font-medium whitespace-nowrap">{badge.label}</span>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-4xl mx-auto text-center px-0 sm:px-2"
            >
                <p className="text-[10px] sm:text-xs text-zinc-500 leading-relaxed break-words">
                    myCPO is a payment gateway service provider. We facilitate payment processing but are not a bank or financial institution. All payment processing is subject to approval and compliance with applicable laws. For complete terms, please review our{' '}
                    <a href="#" className="text-[#2ca3c9] hover:underline font-medium">Terms of Service</a>,{' '}
                    <a href="#" className="text-[#2ca3c9] hover:underline font-medium">Privacy Policy</a>, and{' '}
                    <a href="#" className="text-[#2ca3c9] hover:underline font-medium">Merchant Agreement</a>.
                </p>
            </motion.div>
        </section>
    );
}
