'use client';

import { motion } from 'framer-motion';
import { Download, Key, Settings, CheckCircle } from 'lucide-react';

export default function GettingStartedSection() {
  const steps = [
    {
      icon: Download,
      title: "Install the Plugin",
      description: "Install from WordPress admin panel.",
      time: "2 mins"
    },
    {
      icon: Key,
      title: "Get API Credentials",
      description: "Get your API keys from dashboard.",
      time: "1 min"
    },
    {
      icon: Settings,
      title: "Configure Settings",
      description: "Enter keys in Woo settings.",
      time: "1 min"
    },
    {
      icon: CheckCircle,
      title: "Accept Payments",
      description: "Test and go live instantly.",
      time: "Instant"
    }
  ];

  return (
    <section id="get-started" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="relative w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Get Started in <span className="text-[#2ca3c9]">5 Minutes</span>
          </h2>
          <p className="text-zinc-700 text-lg">
            No complex setup. No developer needed.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Horizontal Line for desktop */}
          <motion.div
            className="hidden md:block absolute left-10 right-10 top-[30px] h-0.5 bg-zinc-200"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: 0.1
                }}
                whileHover={{ y: -8 }}
                className="relative flex-1 flex flex-col items-center text-center group"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="mb-4 flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    delay: 0.15
                  }}
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full bg-white border-4 border-[#2ca3c9] flex items-center justify-center shadow-lg"
                    whileHover={{ borderColor: '#1a8ba8', boxShadow: '0 0 20px rgba(44, 163, 201, 0.4)' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <step.icon className="w-6 h-6 text-[#2ca3c9]" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="bg-white px-6 py-5 rounded-2xl shadow-sm border border-zinc-100 h-full flex flex-col items-center text-center"
                  whileHover={{
                    borderColor: '#2ca3c9'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.span
                    className="bg-zinc-900 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#2ca3c9' }}
                  >
                    {step.time}
                  </motion.span>
                  <motion.h3
                    className="text-lg font-bold text-zinc-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    whileHover={{ color: '#2ca3c9' }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-zinc-700 text-sm leading-snug text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
