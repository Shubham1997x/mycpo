'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Dispute fee breakdown data
const disputeFees = [
    { fee: 'Retrieval Fee', amount: '$10.00', description: 'A cardholder\'s bank requests transaction information before filing a formal chargeback. This is an early opportunity to resolve the dispute before it escalates.' },
    { fee: 'Chargeback Fee', amount: '$20.00', description: 'A formal chargeback is filed against a transaction.' },
    { fee: 'Chargeback Reversal Fee', amount: '$15.00', description: 'A chargeback case is reversed in the merchant\'s favor, covering the cost of case preparation and representment.' },
    { fee: 'Pre-Arbitration Fee', amount: '$25.00', description: 'A dispute escalates to arbitration with the card network, covering filing and case preparation costs.' }
];

export default function PricingFootnotes() {
    const [disputeFeesExpanded, setDisputeFeesExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16 space-y-4 text-xs sm:text-sm text-zinc-600"
        >
            <p><sup className="text-[#2ca3c9] font-bold text-sm">¹</sup> Low-risk standard pricing shown. MyCPO determines the risk level of each merchant during underwriting based on business type, industry vertical, and related risk factors. High-risk merchants may be subject to adjusted transaction fees, additional monthly fees for enhanced risk monitoring, and/or modified terms. Final pricing — including any high-risk adjustments — will be confirmed prior to account activation, giving merchants the opportunity to review and accept terms or cancel before going live. MyCPO reserves the right to reclassify a merchant's risk level and/or pricing category based on processing performance, periodic risk reviews, and ongoing due diligence findings.</p>

            <p><sup className="text-zinc-500 font-bold text-sm">²</sup> Square's online transaction fee is 3.3% + $0.30 on their Free plan ($0/mo). The lower rate of 2.9% + $0.30 requires their Plus plan at $49/mo or Premium plan at $149/mo.</p>

            <p><sup className="text-zinc-500 font-bold text-sm">³</sup> Stripe and Square offer base plans with no monthly fee, but additional tools, services, premium plans, and add-ons carry monthly fees. Stripe offers tiered plans (e.g., Billing starting at $620/mo) and Square's Plus ($49/mo) and Premium ($149/mo) plans include lower processing rates and additional features.</p>

            <div>
                <p>
                    <sup className="text-[#2ca3c9] font-bold text-sm">⁴</sup> Disputes involve multiple parties — the cardholder's issuing bank, the acquiring bank, card networks, and chargeback management teams — and fees apply at each stage:{' '}
                    <button
                        onClick={() => setDisputeFeesExpanded(!disputeFeesExpanded)}
                        className="text-[#2ca3c9] hover:underline font-semibold"
                    >
                        {disputeFeesExpanded ? 'Hide details' : 'View breakdown'}
                    </button>
                </p>

                {/* Collapsible Dispute Fees Table */}
                <motion.div
                    initial={false}
                    animate={{ height: disputeFeesExpanded ? 'auto' : 0, opacity: disputeFeesExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="mt-3 ml-4 border-l-2 border-zinc-200 pl-4">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="border-b border-zinc-200">
                                    <th className="text-left py-2 font-semibold text-zinc-700">Fee</th>
                                    <th className="text-left py-2 font-semibold text-zinc-700">Amount</th>
                                    <th className="text-left py-2 font-semibold text-zinc-700">When It Applies</th>
                                </tr>
                            </thead>
                            <tbody>
                                {disputeFees.map((fee, index) => (
                                    <tr key={index} className="border-b border-zinc-100 last:border-b-0">
                                        <td className="py-2 text-zinc-900">{fee.fee}</td>
                                        <td className="py-2 text-zinc-900 font-semibold">{fee.amount}</td>
                                        <td className="py-2 text-zinc-600">{fee.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="mt-3 text-zinc-600">
                            Stripe charges a flat $15 per chargeback with no tiered dispute fees. Square charges $0 per chargeback but offers limited dispute support. MyCPO's fee structure reflects the hands-on work involved at every stage — real people reviewing cases, preparing evidence, and representing your business. MyCPO also provides comprehensive chargeback prevention tools and dedicated dispute management support to help minimize these fees. Unlike processors that may terminate accounts at the first sign of elevated chargebacks, MyCPO works with merchants through periods of higher dispute activity to bring ratios back to acceptable levels.
                        </p>
                    </div>
                </motion.div>
            </div>

            <p><sup className="text-[#2ca3c9] font-bold text-sm">⁵</sup> $100,000 in data breach protection included at no additional cost for PCI-compliant merchants. Merchant must maintain PCI DSS compliance to qualify for coverage. MyCPO provides resources and support to help merchants achieve and maintain PCI compliance.</p>
        </motion.div>
    );
}
