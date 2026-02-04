'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, CreditCard } from 'phosphor-react';

const complianceBadges = [
    { icon: ShieldCheck, label: 'PCI DSS Level 1' },
    { icon: Lock, label: 'GDPR Compliant' },
    { icon: FileText, label: 'GPL v3.0' },
    { icon: CreditCard, label: '3D Secure' }
];

export default function LegalDisclosureSection() {
    return (
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center mb-16"
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

            {/* Compliance Badges - Centered */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-wrap justify-center gap-6 mb-16"
            >
                {complianceBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-zinc-700">
                        <badge.icon className="w-5 h-5 text-[#2ca3c9]" weight="bold" />
                        <span className="font-medium">{badge.label}</span>
                    </div>
                ))}
            </motion.div>

            {/* Disclosures Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto"
            >
                <div className="space-y-1">
                    <div className="flex items-start gap-2">
                        <sup className="text-[#2ca3c9] font-bold text-sm mt-1">1</sup>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Transaction processing times may vary based on your merchant agreement. Standard payout schedule is 2-3 business days. Account approval required.
                        </p>
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex items-start gap-2">
                        <sup className="text-[#2ca3c9] font-bold text-sm mt-1">2</sup>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Processing rates vary by card type, transaction volume, and business category. Contact our sales team for custom pricing.
                        </p>
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex items-start gap-2">
                        <sup className="text-[#2ca3c9] font-bold text-sm mt-1">3</sup>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Merchants are responsible for chargebacks and disputes in accordance with card network rules. We provide tools to help manage and prevent chargebacks.
                        </p>
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="flex items-start gap-2">
                        <sup className="text-[#2ca3c9] font-bold text-sm mt-1">4</sup>
                        <p className="text-sm text-zinc-600 leading-relaxed">
                            Service availability: While we strive for 99.9% uptime, myCPO is provided "as is" without warranty. We are not liable for lost revenue due to service interruptions.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-4xl mx-auto text-center"
            >
                <p className="text-xs text-zinc-500 leading-relaxed">
                    myCPO is a payment gateway service provider. We facilitate payment processing but are not a bank or financial institution. All payment processing is subject to approval and compliance with applicable laws. For complete terms, please review our{' '}
                    <a href="#" className="text-[#2ca3c9] hover:underline font-medium">Terms of Service</a>,{' '}
                    <a href="#" className="text-[#2ca3c9] hover:underline font-medium">Privacy Policy</a>, and{' '}
                    <a href="#" className="text-[#2ca3c9] hover:underline font-medium">Merchant Agreement</a>.
                </p>
            </motion.div>
        </section>
    );
}
