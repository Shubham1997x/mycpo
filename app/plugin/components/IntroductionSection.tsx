export default function IntroductionSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold heading-color mb-4 sm:mb-6 text-left">
            The <span className="accent-color">All-in-One</span> Payment Solution for WooCommerce
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-color max-w-4xl mb-6 sm:mb-8 text-left leading-relaxed">
            <p>
              Stop juggling separate processors and gateways. <strong>MyCPO combines both</strong> into a single, powerful platform. That means <strong>one login</strong>, <strong>one support team</strong>, and <strong>zero gateway fees</strong>.
            </p>
            <p>
              Designed for reliability, MyCPO offers <strong>enterprise-grade security</strong> and seamless integration. Whether you run a standard store or a <strong>high-risk business</strong>, we provide the stable processing you need.
            </p>
            <p>
              Unlock a superior checkout experience with <strong>secure card storage</strong>, <strong>subscription support</strong>, and <strong>lightning-fast transactions</strong>—all managed directly from your WooCommerce dashboard.
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
              <p className="text-zinc-200 mb-6 sm:mb-8 text-xs sm:text-sm leading-relaxed" style={{ color: '#e4e4e7' }}>
                Most merchants pay double fees for separate processors and gateways. We fixed that with a <strong>unified solution</strong> that saves you money on every transaction.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold accent-color shrink-0 mt-0.5">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Unified Power:</strong> Processor and gateway in one. No more complexity.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold accent-color shrink-0 mt-0.5">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Keep Your Profit:</strong> Zero gateway fees. Stop paying extra just to process payments.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold accent-color shrink-0 mt-0.5">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Approval Guarantee:</strong> We support high-risk industries where others fail.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl font-bold accent-color shrink-0 mt-0.5">✓</span>
                  <span className="text-white text-sm" style={{ color: '#ffffff' }}>
                    <strong>Total Control:</strong> Handle refunds, captures, and subscriptions without leaving WooCommerce.
                  </span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-black rounded-md font-bold text-sm hover:bg-zinc-100 transition-all hover:scale-105"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="hidden lg:flex relative w-full items-center justify-center">
              <div className="w-full max-w-[280px] h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 bg-white">
                <img
                  src="/unified.jpg"
                  alt="MyCPO Dashboard Interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
