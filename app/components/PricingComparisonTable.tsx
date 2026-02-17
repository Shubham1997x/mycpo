'use client';

import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Star, Sparkle } from 'phosphor-react';

// Pricing comparison data
export const pricingRows = [
    { feature: 'Card Transaction Fee', mycpo: '2.75% + $0.25', mycpoNote: '¹', stripe: '2.9% + $0.30', square: '2.9%–3.3% + $0.30', squareNote: '²' },
    { feature: 'Manually Entered Cards', mycpo: 'No additional fee', mycpoNote: '¹', stripe: '+0.50% surcharge', square: '3.5% + $0.15', highlight: true },
    { feature: 'International Cards / Cross Border', mycpo: '+1.50%', stripe: '+1.50%', square: '+1.50%' },
    { feature: 'Gateway Fee', mycpo: '$0', stripe: '$0', square: '$0' },
    { feature: 'Monthly Fee', mycpo: '$50.00/mo', mycpoNote: '¹', stripe: 'Varies', stripeNote: '³', square: 'Varies', squareNote: '³' },
    { feature: 'Setup Fee', mycpo: '$0', stripe: '$0', square: '$0' },
    { feature: 'Dispute & Chargeback Fees', mycpo: 'From $10–$25', mycpoNote: '⁴', stripe: '$15', square: '$0' },
    { feature: 'High-Risk Support', mycpo: true, stripe: false, stripeNote: '(Enterprise only)', square: false },
    { feature: 'Dedicated Account Manager', mycpo: true, stripe: false, square: false },
    { feature: 'Data Breach Protection', mycpo: '$100K included', mycpoNote: '⁵', stripe: 'Not included', square: 'Not included', security: true }
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
            <div className="min-w-[640px]">
                {/* Modern Card Container */}
                <div className="bg-linear-to-br from-white to-zinc-50 rounded-2xl shadow-2xl shadow-zinc-900/10 border border-zinc-200/50 overflow-hidden backdrop-blur-sm">

                    {/* Premium Header with Gradient */}
                    <div className="grid grid-cols-4 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-b border-zinc-700">
                        <div className="p-5 flex items-center">
                            <span className="text-xs uppercase tracking-wider text-zinc-400 font-bold">Features</span>
                        </div>

                        {/* MyCPO Header - Premium Highlight */}
                        <div className="p-5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-linear-to-br from-brand via-cyan-400 to-brand opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]"></div>
                            <div className="relative flex flex-col items-center justify-center gap-1">
                                <div className="flex items-center gap-1.5">

                                    <span className="font-black text-lg text-white tracking-tight">MyCPO</span>

                                </div>

                            </div>
                        </div>

                        {/* Competitor Headers */}
                        <div className="p-5 flex items-center justify-center border-l border-zinc-700">
                            <span className="font-bold text-base text-zinc-300">Stripe</span>
                        </div>
                        <div className="p-5 flex items-center justify-center border-l border-zinc-700">
                            <span className="font-bold text-base text-zinc-300">Square</span>
                        </div>
                    </div>

                    {/* Table Rows with Enhanced Styling */}
                    {pricingRows.map((row, index) => {
                        const isEven = index % 2 === 0;
                        const isHighlight = row.highlight;
                        const isSecurity = row.security;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                className={`grid grid-cols-4 border-b border-zinc-100 last:border-b-0 transition-all duration-200  hover:scale-[1.01] hover:z-10 relative group
                                    ${isEven ? 'bg-white' : 'bg-zinc-50/80'}
                                    ${isHighlight ? 'ring-2 ring-brand/20 bg-brand/5' : ''}
                                    ${isSecurity ? 'ring-2 ring-emerald-500/20 bg-emerald-50/30' : ''}
                                `}
                            >
                                {/* Feature Name Column */}
                                <div className="p-5 flex items-center">
                                    <span className={`font-medium text-sm sm:text-base ${isSecurity ? 'text-emerald-900 font-semibold' : 'text-zinc-900'}`}>
                                        {row.feature}
                                    </span>
                                </div>

                                {/* MyCPO Column - Premium Styling */}
                                <div className="p-5 relative overflow-hidden">
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-linear-to-br from-brand/10 via-cyan-50/50 to-brand/5 group-hover:from-brand/15 group-hover:to-brand/10 transition-all duration-300"></div>

                                    <div className="relative flex items-center justify-center min-h-[40px]">
                                        {typeof row.mycpo === 'boolean' ? (
                                            row.mycpo ? (
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand/20">
                                                    <Check className="w-6 h-6 text-brand" weight="bold" />
                                                </div>
                                            ) : (
                                                <X className="w-5 h-5 text-zinc-400" weight="bold" />
                                            )
                                        ) : (
                                            <div className="flex items-center justify-center gap-2 flex-wrap">
                                                {isSecurity && (
                                                    <div className="shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                                        <ShieldCheck className="w-5 h-5 text-emerald-600" weight="bold" />
                                                    </div>
                                                )}
                                                <span className="text-base sm:text-lg font-black text-zinc-900 tracking-tight">
                                                    {row.mycpo}
                                                    {row.mycpoNote && <sup className="text-brand ml-1 text-xs font-bold">{row.mycpoNote}</sup>}
                                                </span>

                                                {/* Special Badge for "No additional fee" */}
                                                {row.feature === 'Manually Entered Cards' && row.mycpo === 'No additional fee' && (
                                                    <motion.span
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.5, type: "spring" }}
                                                        className="px-3 py-1 bg-linear-to-r from-brand to-cyan-500 text-white text-[10px] font-black rounded-full shadow-lg shadow-brand/30 uppercase tracking-wider flex items-center gap-1"
                                                    >
                                                        <Sparkle className="w-3 h-3" weight="fill" />
                                                        FREE
                                                    </motion.span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Stripe Column */}
                                <div className="p-5 flex items-center justify-center border-l border-zinc-200/50">
                                    {typeof row.stripe === 'boolean' ? (
                                        row.stripe ? (
                                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100">
                                                <Check className="w-5 h-5 text-zinc-600" weight="bold" />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center gap-1">
                                                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100">
                                                    <X className="w-5 h-5 text-zinc-400" weight="bold" />
                                                </div>
                                                {row.stripeNote && <span className="text-[10px] text-zinc-500 italic">{row.stripeNote}</span>}
                                            </div>
                                        )
                                    ) : (
                                        <span className="text-sm sm:text-base text-zinc-700 font-medium">
                                            {row.stripe}
                                            {row.stripeNote && <sup className="text-zinc-500 ml-1 text-xs">{row.stripeNote}</sup>}
                                        </span>
                                    )}
                                </div>

                                {/* Square Column */}
                                <div className="p-5 flex items-center justify-center border-l border-zinc-200/50">
                                    {typeof row.square === 'boolean' ? (
                                        row.square ? (
                                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100">
                                                <Check className="w-5 h-5 text-zinc-600" weight="bold" />
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100">
                                                <X className="w-5 h-5 text-zinc-400" weight="bold" />
                                            </div>
                                        )
                                    ) : (
                                        <span className="text-sm sm:text-base text-zinc-700 font-medium">
                                            {row.square}
                                            {row.squareNote && <sup className="text-zinc-500 ml-1 text-xs">{row.squareNote}</sup>}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </motion.div>
    );
}
