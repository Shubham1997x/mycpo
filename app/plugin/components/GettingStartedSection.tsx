export default function GettingStartedSection() {
  return (
    <section id="get-started" className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-0 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold heading-color mb-3 sm:mb-4 text-center px-4">
          How to <span className="accent-color">Get Started</span> (in 5 Minutes or Less)
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-color mb-8 sm:mb-12 text-center max-w-2xl mx-auto px-4">
          Setting up MyCPO for WooCommerce is quick and easy. Follow these simple steps to start accepting payments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto px-4">
          {/* Step 1 */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold accent-color mb-1.5 sm:mb-2">
                  Install the Plugin
                </h3>
                <p className="text-color text-xs sm:text-sm leading-relaxed">
                  Download and install the MyCPO extension into your WooCommerce store from the WordPress admin panel.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold accent-color mb-2">
                  Get Your API Credentials
                </h3>
                <p className="text-color text-sm leading-relaxed">
                  Login to your MyCPO account (sign up if you don't already have one) and grab your API credentials from the dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold accent-color mb-2">
                  Configure Settings
                </h3>
                <p className="text-color text-sm leading-relaxed">
                  Navigate to WooCommerce → Settings → Payments → MyCPO and enter your API credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold accent-color mb-2">
                  Start Accepting Payments
                </h3>
                <p className="text-color text-sm leading-relaxed">
                  That's it! Your store is now ready to accept payments through MyCPO. Test with a transaction to ensure everything is working correctly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
