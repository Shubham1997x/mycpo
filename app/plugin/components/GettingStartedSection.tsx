'use client';

import { motion } from 'framer-motion';
import { Download, Key, Settings, CheckCircle } from 'lucide-react';

export default function GettingStartedSection() {
  const steps = [
    {
      icon: Download,
      title: "Install the Plugin",
      description: "Download and install the MyCPO extension from your WordPress admin panel.",
      time: "2 mins"
    },
    {
      icon: Key,
      title: "Get API Credentials",
      description: "Login to your MyCPO dashboard and grab your secure API keys.",
      time: "1 min"
    },
    {
      icon: Settings,
      title: "Configure Settings",
      description: "Enter your keys in WooCommerce → Settings → Payments → MyCPO.",
      time: "1 min"
    },
    {
      icon: CheckCircle,
      title: "Start Accepting Payments",
      description: "Test a transaction and go live instantly. You're ready to grow!",
      time: "Instant"
    }
  ];

  return (
    <section id="get-started" className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="relative w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
            Get Started in <span className="text-[#2ca3c9]">5 Minutes</span>
          </h2>
          <p className="text-zinc-700 text-lg">
            No complex setup. No developer needed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-zinc-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className="flex-1 pl-16 md:pl-0 md:text-right w-full">
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 relative ${index % 2 === 0 ? 'md:mr-12 md:text-left' : 'md:ml-12 md:text-right'}`}>
                    {/* Mobile Time Badge */}
                    <span className="md:hidden absolute -top-3 right-4 bg-zinc-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {step.time}
                    </span>

                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                    <p className="text-zinc-700">{step.description}</p>

                    {/* Desktop Time Badge */}
                    <span className={`hidden md:inline-flex text-white! absolute -top-3 ${index % 2 === 0 ? 'right-4' : 'left-4'} bg-zinc-900 text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {step.time}
                    </span>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-white border-4 border-[#2ca3c9] flex items-center justify-center z-10 shadow-lg">
                  <step.icon className="w-6 h-6 text-[#2ca3c9]" />
                </div>

                {/* Empty Space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
