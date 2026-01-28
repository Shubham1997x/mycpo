'use client';

import { motion } from 'framer-motion';
import { Globe, RefreshCw, CreditCard, Clock, TrendingUp, ShieldCheck, Zap, Server } from 'lucide-react';

const benefits = [
  { icon: Server, text: 'All-in-one processor + gateway - one portal, one support team' },
  { icon: TrendingUp, text: 'Zero gateway fees' },
  { icon: ShieldCheck, text: 'High-risk merchant friendly' },
  { icon: Globe, text: 'Accept international transactions from customers worldwide' },
  { icon: RefreshCw, text: 'Process refunds automatically from within WooCommerce' },
  { icon: Clock, text: 'Capture prior authorized transactions' },
  { icon: CreditCard, text: 'Save customer payment methods securely' },
  { icon: Zap, text: 'Streamline transactions with automated processing' },
  { icon: TrendingUp, text: 'Accelerate cash flow with fast payouts' },
  { icon: RefreshCw, text: 'Easy refunds processed directly in WooCommerce' }
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
            Everything You Need for <span className="text-[#2ca3c9]">Growth</span>
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Powerful features designed to help you sell more and manage less.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
                delay: 0.05
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)'
              }}
              className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm group cursor-pointer"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-[#2ca3c9]/10 flex items-center justify-center mb-4"
                whileHover={{
                  backgroundColor: '#2ca3c9',
                  scale: 1.1,

                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <benefit.icon className="w-6 h-6 text-[#2ca3c9] group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </motion.div>
              <motion.p
                className="text-zinc-800 font-medium leading-relaxed"
                whileHover={{ color: '#1a1a1a' }}
              >
                {benefit.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
