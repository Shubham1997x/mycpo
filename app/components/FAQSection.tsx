'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, CaretDown } from 'phosphor-react';

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

const faqListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.05 }
    }
};

const faqItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
};

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            variants={faqItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-[#2ca3c9]/50 transition-colors duration-300 min-w-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 text-left hover:bg-zinc-50 transition-colors duration-200 min-w-0"
            >
                <span className="text-base sm:text-lg font-semibold text-zinc-900 flex-1 min-w-0 wrap-break-word pr-2">
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
                        <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 sm:pt-2">
                            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed wrap-break-word">
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
        <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14 sm:py-16 lg:py-20 xl:py-28" style={{ backgroundColor: '#FAFAFA' }}>
            <div className="relative w-full min-w-0">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ca3c9]/10 text-[#2ca3c9] text-sm font-semibold mb-4 sm:mb-6"
                    >
                        <Question className="w-4 h-4 shrink-0" />
                        <span>Got Questions?</span>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 sm:mb-6 px-1">
                        Frequently Asked <span className="text-[#2ca3c9]">Questions</span>
                    </h2>
                    <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto px-1">
                        Quick answers to common questions.
                    </p>
                </motion.div>

                {/* FAQ List */}
                <motion.div
                    variants={faqListVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="space-y-3 sm:space-y-4 max-w-3xl mx-auto"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
