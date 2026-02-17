'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, CaretDown } from 'phosphor-react';

const faqCategories = [
    {
        category: 'Pricing & Fees',
        faqs: [
            {
                question: 'What does MyCPO cost?',
                answer: 'MyCPO\'s standard pricing for low-risk merchants includes a $50/month account fee and a card transaction rate of 2.75% + $0.25 per transaction. There are no setup fees, no separate gateway fees, and no hidden charges. The WooCommerce plugin itself is free to install. High-risk or specialized industry merchants may have adjusted rates based on business type and risk profile — your specific pricing will always be confirmed before your account goes live, so there are no surprises.'
            },
            {
                question: 'How does MyCPO compare to Stripe and Square?',
                answer: 'Our standard card transaction rate of 2.75% + $0.25 is lower than both Stripe (2.9% + $0.30) and Square (2.9%–3.3% + $0.30 depending on plan). MyCPO also charges no additional fee for manually entered cards, while Stripe adds 0.50% and Square charges 3.5% + $0.15. We include a dedicated account manager, $100,000 in data breach protection, and high-risk industry support — none of which are available on Stripe or Square\'s standard plans. MyCPO does have a $50/month account fee, so for merchants processing over $25,000/month, our lower per-transaction rate more than offsets the monthly fee. For merchants in the $10,000–$25,000 range, the monthly fee is an investment in dedicated support, security, and account stability that Stripe and Square simply don\'t offer.'
            },
            {
                question: 'Do you offer interchange-plus pricing or volume discounts?',
                answer: 'Yes. In addition to our standard flat-rate pricing, we offer interchange-plus (cost-plus) pricing for businesses that want maximum transparency into their processing costs. We also offer volume-based discounts for growing businesses. Contact our team or mention it in your application and we\'ll put together a custom pricing proposal.'
            },
            {
                question: 'Will you audit my current processing statements?',
                answer: 'Absolutely. Pricing in the payments industry is notoriously inconsistent, and it can be hard to compare processors apples-to-apples. Email your most recent processing statement to lowerfees@getmycpo.com and we\'ll provide a free, no-obligation analysis showing exactly how MyCPO compares to what you\'re paying today. If our standard pricing isn\'t better, we\'ll work with you on custom rates to meet or beat your current fees.'
            },
            {
                question: 'Are there any hidden fees?',
                answer: 'No. All fees are disclosed in your Merchant Agreement before you sign. Standard fees include your monthly account fee, per-transaction rates, and a $20 chargeback fee if disputes arise. Card network pass-through fees (such as Visa/Mastercard assessments) apply as they do with all processors. There are no application fees, no setup fees, and no gateway fees. If your pricing ever changes, you\'ll receive advance written notice and have the option to cancel without penalty.'
            }
        ]
    },
    {
        category: 'Account & Contract Terms',
        faqs: [
            {
                question: 'Is there a contract? What\'s the commitment?',
                answer: 'Yes, MyCPO merchant accounts include a 3-year initial agreement that auto-renews for 2-year periods. We know this is different from Stripe or Square\'s no-contract model — here\'s why we do it this way: We invest significant resources in underwriting, onboarding, and setting up each merchant account with our banking partners. The agreement reflects a long-term partnership, not a lock-in. And importantly, if MyCPO ever increases its own fees, you\'ll receive advance notice and always have the right to cancel without an early termination fee. You can review the full Merchant Agreement before you e-sign during the application process — nothing is hidden.'
            },
            {
                question: 'Is there an early termination fee?',
                answer: 'If the agreement is terminated early, an early termination fee may apply. The specifics are detailed in the Merchant Agreement which you\'ll review and e-sign during the application process. We encourage merchants to review these terms carefully, and our team is happy to walk you through them before you commit. If MyCPO raises its own fees during your term, you can terminate without penalty — that\'s a protection built into the agreement.'
            },
            {
                question: 'What is a reserve account? Will my funds be held?',
                answer: 'A reserve account is a standard industry practice where a portion of your processing funds may be held as security against potential chargebacks or other liabilities. Whether a reserve is required — and how much — depends on your business type, risk profile, and processing history. Here\'s what makes MyCPO different: because we complete full underwriting before you go live, reserve requirements (if any) are discussed and agreed upon upfront during onboarding. You\'ll know exactly what to expect before you process your first transaction. This is a major advantage over aggregators like Stripe, which can freeze funds without warning weeks or months after you start processing.'
            },
            {
                question: 'What happens to my reserve after I close my account?',
                answer: 'If a reserve was established, it\'s typically maintained for a minimum of nine months after account closure to cover any outstanding chargebacks or liabilities from transactions processed during your active period. After that window, any remaining funds are released to you. The exact timeline depends on your business type and processing history.'
            }
        ]
    },
    {
        category: 'Approvals & Onboarding',
        faqs: [
            {
                question: 'How long does approval take?',
                answer: 'Most applications are reviewed within 1–3 business days, though some businesses may require additional documentation or review. Unlike Stripe and Square which approve instantly and review later, MyCPO completes underwriting and due diligence before your account goes live. This means once you\'re approved and processing, your account is fully verified — you won\'t face surprise holds, freezes, or account shutdowns that are common with aggregator processors.'
            },
            {
                question: 'Why don\'t you offer instant approval like Stripe or Square?',
                answer: 'Stripe and Square are payment aggregators — they process your transactions under their own master merchant accounts, which allows instant setup. But this also means they can freeze, hold, or terminate your account at any time if their automated systems flag something, often with little explanation or recourse. MyCPO sets you up with your own dedicated merchant account backed by our banking partners. We do the hard work of underwriting upfront so you can operate with confidence, not anxiety. It takes a little longer to get started, but you get real account stability and a team that already knows your business from day one.'
            },
            {
                question: 'Do you support high-risk businesses?',
                answer: 'Yes — this is one of our key differentiators. MyCPO supports a wide range of industries and verticals that mainstream processors like Stripe and Square either decline outright or shut down after boarding. We maintain high approval rates because we work with multiple banking partners across various risk categories. That said, we cannot guarantee approval for every business — each application is reviewed individually based on business type, processing history, and risk profile. If your business is in a high-risk vertical, we encourage you to apply and our underwriting team will work with you directly. Final pricing, including any high-risk adjustments, will always be confirmed before your account goes live.'
            },
            {
                question: 'What do I need to apply?',
                answer: 'The online application takes about 10 minutes and collects your basic business information, owner details, and banking information for deposits. Depending on your business type, you may also need to provide a government-issued ID, a voided check or bank letter, and your business website URL. High-risk or higher-volume merchants may be asked for additional documentation such as processing statements from a prior processor, financial statements, or business licenses. Our team will guide you through anything additional that\'s needed.'
            },
            {
                question: 'What kind of support do you offer?',
                answer: 'Every MyCPO merchant gets a dedicated account manager who knows your business. You\'re not calling a generic 1-800 number and explaining your situation from scratch every time. Whether you need help with a chargeback dispute, a technical question about the plugin, or want to discuss pricing as your business grows, you have a direct point of contact. We also offer 24/7 priority support for urgent issues.'
            }
        ]
    },
    {
        category: 'PCI Compliance & Security',
        faqs: [
            {
                question: 'What is PCI compliance and do I need it?',
                answer: 'PCI DSS (Payment Card Industry Data Security Standard) is a set of security requirements that apply to all businesses that accept credit cards. Yes, you are required to be PCI compliant — this is a universal requirement across all processors, not unique to MyCPO. After your account is approved, you have 90 days to complete your PCI compliance validation (typically a Self-Assessment Questionnaire). MyCPO provides resources and support to help you through the process — for most WooCommerce merchants, it\'s straightforward and takes about 15–20 minutes. Maintaining PCI compliance also qualifies you for the $100,000 in data breach protection included with your account at no extra cost. If compliance lapses, a $25/month non-compliance fee applies until it\'s resolved.'
            },
            {
                question: 'What is the $100K data breach protection?',
                answer: 'MyCPO includes $100,000 in data breach protection at no additional cost with every merchant account. This helps cover costs associated with a data security incident, such as forensic investigation, notification expenses, and credit monitoring for affected cardholders. To maintain eligibility, your business must stay current on PCI DSS compliance. Our team helps you achieve and maintain compliance so you\'re always covered.'
            }
        ]
    },
    {
        category: 'Technical',
        faqs: [
            {
                question: 'How do I install the MyCPO WooCommerce plugin?',
                answer: 'The MyCPO plugin installs directly from your WordPress admin panel — no developer required. Once installed, you simply enter your API credentials (provided after your merchant account is approved), configure your settings, and you\'re ready to accept payments. The entire technical setup can be completed in minutes.'
            },
            {
                question: 'Is the plugin compatible with my WordPress theme?',
                answer: 'The MyCPO plugin is built to work with any standard WooCommerce-compatible WordPress theme. It integrates at the WooCommerce payment gateway level, so it works seamlessly with your existing checkout flow regardless of your theme or design customizations.'
            },
            {
                question: 'What payment methods are supported?',
                answer: 'MyCPO supports Visa, Mastercard, American Express, and Discover. Additional payment methods may be added over time — check back or ask our team about upcoming integrations.'
            },
            {
                question: 'Do you support subscriptions and recurring billing?',
                answer: 'Yes. The MyCPO gateway supports WooCommerce Subscriptions, allowing you to process recurring payments, manage subscription lifecycles, and handle renewals directly within WooCommerce.'
            }
        ]
    },
    {
        category: 'Operations & Support',
        faqs: [
            {
                question: 'How quickly will I receive payouts?',
                answer: 'Standard payout schedule is 2–3 business days. Payout timing may vary based on your merchant agreement, business type, and processing history. Details on your specific payout schedule are confirmed during onboarding.'
            },
            {
                question: 'How do chargebacks work?',
                answer: 'If a cardholder disputes a transaction, you\'ll receive a chargeback notification with details and a deadline to respond. MyCPO provides tools and guidance to help you respond to disputes and submit evidence. There is a $20 fee per chargeback. If your chargeback rate stays within normal thresholds, that\'s the only cost. If chargeback ratios become excessive, additional monitoring fees may apply per card network requirements — but our chargeback prevention tools are designed to help you avoid reaching that point. We proactively work with merchants to keep dispute rates low.'
            },
            {
                question: 'Do I get a personal guarantee or can just my business be on the account?',
                answer: 'The MyCPO Merchant Agreement includes a personal guarantee from the business principal(s). This is standard practice in the merchant services industry and is required by our banking partners. It means the business owner(s) are personally responsible for obligations under the agreement, including any outstanding chargebacks or fees. This is one of the reasons we conduct thorough underwriting — we want to make sure the account is set up for success from the start so that the personal guarantee remains a formality, not a concern.'
            },
            {
                question: 'Can I manage refunds from within WooCommerce?',
                answer: 'Yes. You can process full or partial refunds directly from your WooCommerce dashboard without needing to log into a separate portal. Refunds are submitted through the MyCPO gateway and processed back to the original payment method.'
            }
        ]
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

function FAQItem({ question, answer, index, isOpen, onToggle }: {
    question: string;
    answer: string;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.div
            variants={faqItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-24px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white rounded-xl border border-zinc-200 overflow-hidden hover:border-brand/50 transition-colors duration-300 min-w-0"
        >
            <button
                onClick={onToggle}
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
                    <CaretDown className="w-5 h-5 text-brand" weight="bold" />
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
    const [expandedAll, setExpandedAll] = useState(false);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
    const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0].category);

    // Get all category names for tabs (no 'All' option)
    const categoryNames = faqCategories.map(cat => cat.category);

    // Filter FAQs based on active category only
    const filteredCategories = faqCategories
        .filter(category => category.category === activeCategory);

    // Handle expand/collapse all
    const handleExpandAll = () => {
        if (expandedAll) {
            setExpandedItems(new Set());
        } else {
            const allIds = new Set<string>();
            filteredCategories.forEach((category, catIndex) => {
                category.faqs.forEach((_, faqIndex) => {
                    allIds.add(`${catIndex}-${faqIndex}`);
                });
            });
            setExpandedItems(allIds);
        }
        setExpandedAll(!expandedAll);
    };

    return (
        <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14 sm:py-16 lg:py-20 xl:py-28 bg-zinc-50">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4 sm:mb-6"
                    >
                        <Question className="w-4 h-4 shrink-0" />
                        <span>Got Questions?</span>
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 sm:mb-6 px-1">
                        Frequently Asked <span className="text-brand">Questions</span>
                    </h2>
                    <p className="text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto px-1">
                        Everything you need to know about pricing, contracts, approvals, and more.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="max-w-4xl mx-auto mb-8"
                >
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {categoryNames.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setExpandedItems(new Set());
                                    setExpandedAll(false);
                                }}
                                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl cursor-pointer font-semibold text-sm sm:text-base transition-all duration-200 ${activeCategory === category
                                    ? 'bg-black text-white shadow-md'
                                    : 'border border-zinc-300 text-zinc-700 hover:bg-brand hover:text-white hover:border-brand'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Expand All Button - Centered Below Tabs */}
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleExpandAll}
                            className="text-brand cursor-pointer font-semibold hover:underline transition-all duration-200 text-sm sm:text-base"
                        >
                            {expandedAll ? 'Collapse All' : 'Expand All'}
                        </button>
                    </div>
                </motion.div>

                {/* FAQ List */}
                <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto min-h-[400px]">
                    {filteredCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            variants={faqListVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            className="space-y-3 sm:space-y-4"
                        >
                            {category.faqs.map((faq, index) => {
                                const itemId = `${categoryIndex}-${index}`;
                                return (
                                    <FAQItem
                                        key={itemId}
                                        question={faq.question}
                                        answer={faq.answer}
                                        index={index}
                                        isOpen={expandedItems.has(itemId)}
                                        onToggle={() => {
                                            const newExpanded = new Set(expandedItems);
                                            if (newExpanded.has(itemId)) {
                                                newExpanded.delete(itemId);
                                            } else {
                                                newExpanded.add(itemId);
                                            }
                                            setExpandedItems(newExpanded);
                                            setExpandedAll(false);
                                        }}
                                    />
                                );
                            })}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
