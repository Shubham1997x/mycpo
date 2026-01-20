const benefits = [
  'Accept international transactions from customers worldwide',
  'Process refunds automatically from within WooCommerce',
  'Capture prior authorized transactions',
  'Save customer payment methods securely',
  'Minimize costs with competitive rates',
  'Streamline transactions with automated processing',
  'Accelerate cash flow with fast payouts',
  'Easy refunds processed directly in WooCommerce',
  'Enhance security with tokenized payments',
  'Scale your business with enterprise-grade infrastructure'
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-0 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold heading-color mb-8 sm:mb-12 text-center">
          Key <span className="accent-color">Features</span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-2 sm:gap-3"
            >
              <span className="text-2xl sm:text-3xl font-bold mt-0.5 sm:mt-1 accent-color shrink-0">✓</span>
              <span className="heading-color text-sm sm:text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
