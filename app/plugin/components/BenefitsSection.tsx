'use client';

import { motion } from 'framer-motion';
import { Globe, RefreshCw, CreditCard, Clock, TrendingUp, Shield, Zap, Server } from 'lucide-react';

const featuredBenefits = [
  {
    icon: Server,
    title: 'All-in-One Solution',
    description: 'Unified processor + gateway. One portal, one support team, zero complexity.',
    iconColor: 'text-[#2ca3c9]',
    featured: true
  },
  {
    icon: TrendingUp,
    title: 'Zero Gateway Fees',
    description: 'Keep 100% of your profits. No hidden charges, no gateway markup.',
    iconColor: 'text-[#2ca3c9]',
    featured: true
  },
  {
    icon: Shield,
    title: 'High-Risk Friendly',
    description: 'Approval guaranteed for industries others reject. All risk levels welcome.',
    iconColor: 'text-[#2ca3c9]',
    featured: true
  },
];

const benefits = [
  { icon: Globe, text: 'Accept international transactions from customers worldwide', iconColor: 'text-[#2ca3c9]' },
  { icon: RefreshCw, text: 'Process refunds automatically from within WooCommerce', iconColor: 'text-[#2ca3c9]' },
  { icon: Clock, text: 'Capture prior authorized transactions', iconColor: 'text-[#2ca3c9]' },
  { icon: CreditCard, text: 'Save customer payment methods securely', iconColor: 'text-[#2ca3c9]' },
  { icon: Zap, text: 'Streamline transactions with automated processing', iconColor: 'text-[#2ca3c9]' },
  { icon: TrendingUp, text: 'Accelerate cash flow with fast payouts', iconColor: 'text-[#2ca3c9]' },
  { icon: RefreshCw, text: 'Easy refunds processed directly in WooCommerce', iconColor: 'text-[#2ca3c9]' },
  { icon: Server, text: 'One portal, one support team for everything', iconColor: 'text-[#2ca3c9]' },
  { icon: Globe, text: 'Multi-currency support for global sales', iconColor: 'text-[#2ca3c9]' },
];

export default function BenefitsSection() {
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
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Everything You Need for <span className="text-[#2ca3c9]">Growth</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            A complete payment ecosystem designed to maximize revenue and minimize friction.
          </p>
        </motion.div>

        {/* Featured Benefits - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {featuredBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
              className="group relative bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`w-10 h-10 ${benefit.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#2ca3c9] transition-colors text-center">
                  {benefit.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed mb-4 text-center">
                  {benefit.description}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-[#2ca3c9] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >

                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Secondary Benefits - Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.03
              }}
              whileHover={{
                y: -4,
                borderColor: '#2ca3c9',
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group bg-white rounded-xl p-6 border border-zinc-100 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <benefit.icon className={`w-5 h-5 ${benefit.iconColor} group-hover:scale-110 transition-transform`} />
                </motion.div>

                <p className="text-zinc-700 font-medium leading-relaxed group-hover:text-zinc-900 transition-colors">
                  {benefit.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >

        </motion.div>
      </div>
    </section>
  );
}
