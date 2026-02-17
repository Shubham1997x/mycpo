'use client';

import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'phosphor-react';

// Pricing comparison data
export const pricingRows = [
    { feature: 'Card Transaction Fee', mycpo: '2.75% + $0.25', mycpoNote: '¹', stripe: '2.9% + $0.30', square: '2.9%–3.3% + $0.30', squareNote: '²' },
    { feature: 'Manually Entered Cards', mycpo: 'No additional fee', mycpoNote: '¹', stripe: '+0.50% surcharge', square: '3.5% + $0.15' },
    { feature: 'International Cards / Cross Border', mycpo: '+1.50%', stripe: '+1.50%', square: '+1.50%' },
    { feature: 'Gateway Fee', mycpo: '$0', stripe: '$0', square: '$0' },
    { feature: 'Monthly Fee', mycpo: '$50.00/mo', mycpoNote: '¹', stripe: 'Varies', stripeNote: '³', square: 'Varies', squareNote: '³' },
    { feature: 'Setup Fee', mycpo: '$0', stripe: '$0', square: '$0' },
    { feature: 'Dispute & Chargeback Fees', mycpo: 'From $10–$25', mycpoNote: '⁴', stripe: '$15', square: '$0' },
    { feature: 'High-Risk Support', mycpo: true, stripe: false, stripeNote: '(Enterprise only)', square: false },
    { feature: 'Dedicated Account Manager', mycpo: true, stripe: false, square: false },
    { feature: 'Data Breach Protection', mycpo: '$100K included', mycpoNote: '⁵', stripe: 'Not included', square: 'Not included' }
];

export default function PricingComparisonTable() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 overflow-x-auto"
        >
            <div className="min-w-[640px] bg-white rounded-xl border border-zinc-200 shadow-xl shadow-zinc-200/40 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-4 bg-zinc-50 border-b border-zinc-200">
                    <div className="p-4 font-bold text-zinc-900"></div>
                    <div className="p-4 text-center bg-brand/5 border-x border-brand/20">
                        <div className="font-bold text-lg text-brand">MyCPO</div>
                    </div>
                    <div className="p-4 text-center font-semibold text-zinc-700">Stripe</div>
                    <div className="p-4 text-center font-semibold text-zinc-700">Square</div>
                </div>

                {/* Table Rows */}
                {pricingRows.map((row, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-4 border-b border-zinc-100 last:border-b-0 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'}`}
                    >
                        <div className="p-4 font-normal text-zinc-900 text-sm sm:text-base">{row.feature}</div>

                        {/* MyCPO Column */}
                        <div className="p-4 text-center bg-brand/5 border-x border-brand/20">
                            {typeof row.mycpo === 'boolean' ? (
                                row.mycpo ? (
                                    <Check className="w-5 h-5 text-brand mx-auto" weight="bold" />
                                ) : (
                                    <X className="w-5 h-5 text-zinc-400 mx-auto" weight="bold" />
                                )
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    {/* Shield icon for Data Breach Protection */}
                                    {row.feature === 'Data Breach Protection' && (
                                        <ShieldCheck className="w-4 h-4 text-brand" weight="bold" />
                                    )}
                                    <span className="text-base sm:text-lg font-bold text-zinc-900">
                                        {row.mycpo}
                                        {row.mycpoNote && <sup className="text-brand ml-0.5 text-xs">{row.mycpoNote}</sup>}
                                    </span>
                                    {/* Badge for "No additional fee" */}
                                    {row.feature === 'Manually Entered Cards' && row.mycpo === 'No additional fee' && (
                                        <span className="ml-2 px-2 py-0.5 bg-brand text-white text-[10px] font-bold rounded-full">
                                            FREE
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Stripe Column */}
                        <div className="p-4 text-center">
                            {typeof row.stripe === 'boolean' ? (
                                row.stripe ? (
                                    <Check className="w-5 h-5 text-zinc-600 mx-auto" weight="bold" />
                                ) : (
                                    <div className="flex flex-col items-center gap-1">
                                        <X className="w-5 h-5 text-zinc-400 mx-auto" weight="bold" />
                                        {row.stripeNote && <span className="text-xs text-zinc-500">{row.stripeNote}</span>}
                                    </div>
                                )
                            ) : (
                                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                                    {row.stripe}
                                    {row.stripeNote && <sup className="text-zinc-500 ml-0.5 text-xs">{row.stripeNote}</sup>}
                                </span>
                            )}
                        </div>

                        {/* Square Column */}
                        <div className="p-4 text-center">
                            {typeof row.square === 'boolean' ? (
                                row.square ? (
                                    <Check className="w-5 h-5 text-zinc-600 mx-auto" weight="bold" />
                                ) : (
                                    <X className="w-5 h-5 text-zinc-400 mx-auto" weight="bold" />
                                )
                            ) : (
                                <span className="text-sm sm:text-base text-zinc-700 font-medium">
                                    {row.square}
                                    {row.squareNote && <sup className="text-zinc-500 ml-0.5 text-xs">{row.squareNote}</sup>}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
