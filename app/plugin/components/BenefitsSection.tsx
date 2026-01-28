'use client';

import { motion } from 'framer-motion';
import { Globe, RefreshCw, CreditCard, Clock, TrendingUp, ShieldCheck, Zap, Server, ArrowRight } from 'lucide-react';

const featuredBenefits = [
  {
    icon: Server,
    title: 'All-in-One Solution',
    description: 'Unified processor + gateway. One portal, one support team, zero complexity.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-600',
    featured: true
  },
  {
    icon: TrendingUp,
    title: 'Zero Gateway Fees',
    description: 'Keep 100% of your profits. No hidden charges, no gateway markup.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-emerald-600',
    featured: true
  },
  {
    icon: ShieldCheck,
    title: 'High-Risk Friendly',
    description: 'Approval guaranteed for industries others reject. All risk levels welcome.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-violet-600',
    featured: true
  },
];

const benefits = [
  { icon: Globe, text: 'Accept international transactions from customers worldwide', iconColor: 'text-blue-500' },
  { icon: RefreshCw, text: 'Process refunds automatically from within WooCommerce', iconColor: 'text-cyan-500' },
  { icon: Clock, text: 'Capture prior authorized transactions', iconColor: 'text-indigo-500' },
  { icon: CreditCard, text: 'Save customer payment methods securely', iconColor: 'text-purple-500' },
  { icon: Zap, text: 'Streamline transactions with automated processing', iconColor: 'text-amber-500' },
  { icon: TrendingUp, text: 'Accelerate cash flow with fast payouts', iconColor: 'text-emerald-500' },
  { icon: RefreshCw, text: 'Easy refunds processed directly in WooCommerce', iconColor: 'text-teal-500' },
  { icon: Server, text: 'One portal, one support team for everything', iconColor: 'text-slate-500' },
  { icon: Globe, text: 'Multi-currency support for global sales', iconColor: 'text-sky-500' },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#FAFAFA' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#2ca3c9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.1
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <benefit.icon className={`w-7 h-7 ${benefit.iconColor}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-[#2ca3c9] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-[#2ca3c9] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >

                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2ca3c9]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Secondary Benefits - Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                delay: index * 0.05
              }}
              whileHover={{
                y: -4,
                borderColor: '#2ca3c9',
                boxShadow: '0 10px 30px rgba(44, 163, 201, 0.15)'
              }}
              className="group bg-white rounded-xl p-6 border border-zinc-100 hover:border-[#2ca3c9]/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-[#2ca3c9]/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
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
