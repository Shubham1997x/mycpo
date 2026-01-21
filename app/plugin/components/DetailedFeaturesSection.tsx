'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function DetailedFeaturesSection() {
  const features = [
    {
      title: "Simple, Seamless Checkout",
      highlight: "Seamless",
      description: "Using the MyCPO extension allows you to decide what your checkout process will look like, while keeping the customer on your site for the entire process. This gives you maximum control over this experience, providing a simple checkout process for the user and maximum customizability for the business owner.",
      points: [
        "Customers never leave your site during checkout",
        "Mobile-friendly checkout with optimized input fields",
        "Show detailed error messages for better user experience"
      ],
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
      imageAlt: "Checkout Screen"
    },
    {
      title: "Support for Automatic Refunds and Voids",
      highlight: "Automatic",
      description: "Shop employees can now process refunds for an order paid for with MyCPO directly from within WooCommerce — no more logging into your merchant account to process refunds! Speed up your store management by creating full or partial refunds from the 'Edit Order' screen.",
      points: [
        "Process refunds directly from WooCommerce",
        "Automatic transaction voids for uncaptured orders",
        "Full or partial refunds supported"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      imageAlt: "Mobile Checkout",
      reverse: true
    },
    {
      title: "Securely Save Payment Methods",
      highlight: "Payment Methods",
      description: "Customers can easily and securely save multiple payment methods to their account for faster checkout, which are displayed in a unified 'My Payments' section of their account. Payment data is stored securely, so your responsibility for PCI compliance is significantly reduced.",
      points: [
        "No limit to the number of payment methods stored",
        "Add payment methods without going through checkout",
        "Customers can add nicknames for saved payment methods"
      ],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
      imageAlt: "Payment Methods"
    }
  ];

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="relative w-full">
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              {feature.reverse ? (
                <>
                  <div className="order-2 lg:order-1 relative group">
                    <div className="absolute inset-0 bg-blue-600/5 translate-x-4 translate-y-4 rounded-2xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                    <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-white">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">
                      {feature.title.split(feature.highlight)[0]}
                      <span className="text-[#2ca3c9]">{feature.highlight}</span>
                      {feature.title.split(feature.highlight)[1]}
                    </h3>
                    <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <CheckCircle2 className="mt-1 w-6 h-6 text-[#2ca3c9] shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-zinc-800 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">
                      {feature.title.split(feature.highlight)[0]}
                      <span className="text-[#2ca3c9]">{feature.highlight}</span>
                      {feature.title.split(feature.highlight)[1]}
                    </h3>
                    <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <CheckCircle2 className="mt-1 w-6 h-6 text-[#2ca3c9] shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-zinc-800 font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-600/5 -translate-x-4 translate-y-4 rounded-2xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2" />
                    <div className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-white">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
