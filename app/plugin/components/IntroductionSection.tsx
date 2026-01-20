export default function IntroductionSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold heading-color mb-4 sm:mb-6 text-left">
            Easily and securely accept <span className="accent-color">credit cards</span>, debit cards, and ACH payments using MyCPO
          </h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-color max-w-4xl mb-6 sm:mb-8 text-left">
            <p>
              The MyCPO extension provides one of the most <strong>advanced</strong> payment integrations for WooCommerce
              while providing the <strong>security</strong> and <strong>reliability</strong> that comes with using MyCPO for payment processing.
              Let your customers save their payment methods for <strong>fast and easy</strong> checkout. Includes <strong>full support for WooCommerce Subscriptions</strong> and <strong>WooCommerce Pre-Orders</strong>. Start using the most advanced WooCommerce payment gateway today!
            </p>
            <p>
              <strong>MyCPO</strong> is one of the most <strong>popular</strong> payment processors around for a reason:
              they offer <strong>easy, safe, and affordable</strong> credit card and ACH processing. This MyCPO payment gateway integration lets
              you take advantage of several features offered by MyCPO, such as <strong>customer profiles</strong>, <strong>card tokenization</strong>, and <strong>ACH processing</strong>.
            </p>
            <p>
              The MyCPO Payment Gateway extension allows you to keep the customer on your site for the checkout process,
              allowing you <strong>maximum control</strong> over checkout so that you can test and implement the most <strong>effective experience</strong> for your store.
              An <strong>SSL is required</strong> for <strong>PCI compliance</strong> due to the direct checkout to ensure
              that your customers' credit card information is <strong>secure</strong>.
            </p>
          </div>
        </div>

        <div className="relative w-full bg-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10 items-center">
            {/* Left Section - Text Content */}
            <div className="text-white">
              <h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3"
                style={{ color: '#ffffff' }}
              >
                <span style={{ color: '#ffffff' }}>Why</span>
                <img
                  src="/logo.svg"
                  alt="MyCPO"
                  className="h-6 sm:h-7 lg:h-8 brightness-0 invert"
                />
              </h3>
              <p className="text-zinc-200 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed" style={{ color: '#e4e4e7' }}>
                We're more than just a payment provider. We're your <strong>strategic partner</strong> in optimizing your payments stack for <strong>maximum growth</strong>.
                Unlike many providers who focus solely on saving you money, we take a <strong>holistic approach</strong>.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold accent-color shrink-0">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Streamline Operations:</strong> Process refunds, capture transactions, and manage payments directly from WooCommerce
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold accent-color shrink-0">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Maximize Revenue:</strong> Enhance your payment stack to increase sales, boost AOV, and reduce failed payments
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold accent-color shrink-0">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Protect Profits:</strong> Implement robust fraud prevention and chargeback management to safeguard your revenue
                  </span>
                </div>
              </div>

              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-6 py-2 bg-white text-black rounded-md font-semibold text-sm hover:bg-zinc-100 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Right Section - Image */}
            <div className="relative w-full flex items-center justify-center">
              <div className="w-full max-w-[250px] sm:max-w-[300px] h-[200px] sm:h-[250px] lg:h-[360px] rounded-xl overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/66e98cd6e999927f01c3e4e3/66edf5d5f17b92c762ce593b_123312.avif"
                  alt="MyCPO Feature"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
