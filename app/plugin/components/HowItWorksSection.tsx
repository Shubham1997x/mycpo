'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        title: '1. STEP ONE',
    },
    {
        title: '2. STEP TWO',
    },
    {
        title: '3. STEP THREE',
    },
    {
        title: '4. STEP FOUR',
    },
];

export default function HowItWorksSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-[#2ca3c9]/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-zinc-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 mb-6">
                        Easy to <span className="text-[#2ca3c9]">Use</span>
                    </h2>
                    <p className="text-lg text-zinc-600">
                        Get up and running in minutes. No complex configuration or coding required.
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
                        {steps.map((step, index) => {
                            const directions = [
                                { x: -100, y: 0 },  // from left
                                { x: 0, y: -100 },  // from top
                                { x: 100, y: 0 },   // from right
                                { x: 0, y: 100 },   // from bottom
                            ];
                            const direction = directions[index % directions.length];

                            return (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center relative"
                                    initial={{ opacity: 0, x: direction.x, y: direction.y, scale: 0.8 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 100,
                                        damping: 15,
                                        delay: index * 0.2,
                                    }}
                                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                >
                                    {/* Placeholder visual block instead of real image */}
                                    <motion.div
                                        className="relative w-full aspect-4/3 mb-8 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 bg-zinc-50 flex items-center justify-center"
                                        whileHover={{ borderColor: '#2ca3c9', backgroundColor: '#f9fafb' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute inset-0 bg-linear-to-br from-zinc-100 to-zinc-200 opacity-80" />
                                        <div className="relative z-10 px-4 py-2 rounded-md border border-zinc-300 bg-white/80 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                                            Step preview
                                        </div>
                                    </motion.div>

                                    <motion.h3
                                        className="text-xl font-bold text-zinc-900 text-center"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.3 }}
                                        whileHover={{ color: '#2ca3c9', scale: 1.05, transition: { duration: 0.2 } }}
                                    >
                                        {step.title}
                                    </motion.h3>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
