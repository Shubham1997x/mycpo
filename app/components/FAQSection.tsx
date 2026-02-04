'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, CaretDown, CaretUp } from 'phosphor-react';

const faqs = [
    {
        question: 'How do I get started with myCPO?',
        answer: 'Simply install the plugin from WordPress, activate it, and sign up for a merchant account. Our setup wizard will guide you through the process in minutes.'
    },
    {
        question: 'What payment methods are supported?',
        answer: 'We support all major credit/debit cards (Visa, Mastercard, Amex, Discover), digital wallets (Apple Pay, Google Pay), and ACH transfers.'
    },
    {
        question: 'How quickly will I receive payouts?',
        answer: 'Standard payouts take 2-3 business days. Professional plan users get faster payouts (1-2 days), and Enterprise customers can access same-day payouts.'
    },
    {
        question: 'Is myCPO secure and compliant?',
        answer: 'Yes! We are PCI DSS Level 1 certified and fully GDPR compliant. All payment data is encrypted and tokenized for maximum security.'
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-[#2ca3c9]/50 transition-colors duration-300"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-zinc-50 transition-colors duration-200"
            >
                <span className="text-lg font-semibold text-zinc-900 flex-1">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                >
                    <CaretDown className="w-5 h-5 text-[#2ca3c9]" weight="bold" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 pt-2">
                            <p className="text-zinc-600 leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQSection() {
    return (
        <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#FAFAFA' }}>

            <div className="relative w-full">
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
                        <Question className="w-4 h-4" />
                        <span>Got Questions?</span>
                    </motion.div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
                        Frequently Asked <span className="text-[#2ca3c9]">Questions</span>
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
                        Quick answers to common questions.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
