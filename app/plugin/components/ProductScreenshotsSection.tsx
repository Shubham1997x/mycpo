export default function ProductScreenshotsSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-0 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold heading-color mb-6 sm:mb-8 lg:mb-12 text-center px-4">
          See MyCPO in <span className="accent-color">Action</span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-color mb-8 sm:mb-10 lg:mb-12 text-center max-w-3xl mx-auto px-4">
          Explore the key features and screens of the MyCPO WooCommerce extension
        </p>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Payment Methods Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Choose Your <span className="accent-color">Payment</span> Method
              </h3>
              <p className="text-color mb-3 sm:mb-4 text-sm sm:text-base">
                Customers can select from multiple payment options including credit cards, debit cards, and digital wallets.
                The checkout form displays all accepted payment methods with clear visual indicators, making it easy for
                customers to choose their preferred payment option.
              </p>
              <p className="text-color text-sm sm:text-base">
                <span className="heading-color">What's next:</span> After selecting a payment method, customers proceed
                to enter their payment details securely on your site.
              </p>
            </div>
            <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-zinc-300 group">
              <div className="absolute inset-0 bg-linear-to-br from-accent-color/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop"
                alt="Payment Methods Selection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Checkout Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-zinc-300 group">
                <div className="absolute inset-0 bg-linear-to-br from-accent-color/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
                  alt="Checkout Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="accent-color">Seamless</span> Checkout Experience
              </h3>
              <p className="text-color mb-3 sm:mb-4 text-sm sm:text-base">
                The checkout process keeps customers on your site throughout the entire payment flow. Customers can see
                their order details, shipping information, and enter payment details all in one place. The form is optimized
                  for both desktop and mobile devices with smart input formatting.
              </p>
              <p className="text-color text-sm sm:text-base">
                <span className="heading-color">What's next:</span> After entering payment details, customers can choose
                to save their payment method for faster future checkouts.
              </p>
            </div>
          </div>

          {/* Order Items & Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Manage Orders & Process <span className="accent-color">Refunds</span>
              </h3>
              <p className="text-color mb-3 sm:mb-4 text-sm sm:text-base">
                Store administrators can view order items, process refunds, and capture authorized transactions directly from
                the WooCommerce order management screen. No need to log into a separate merchant account - everything is
                handled within your WooCommerce dashboard.
              </p>
              <p className="text-color text-sm sm:text-base">
                <span className="heading-color">What's next:</span> Process full or partial refunds with a single click,
                or capture previously authorized transactions when ready.
              </p>
            </div>
            <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-zinc-300 group">
              <div className="absolute inset-0 bg-linear-to-br from-accent-color/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop"
                alt="Order Management"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Payment Methods Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-zinc-300 group">
                <div className="absolute inset-0 bg-linear-to-br from-accent-color/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                  alt="Payment Methods List"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                View Saved <span className="accent-color">Payment</span> Methods
              </h3>
              <p className="text-color mb-3 sm:mb-4 text-sm sm:text-base">
                Customers can view all their saved payment methods in a unified "My Payments" section of their account.
                Each saved method shows the card type, last four digits, expiration date, and can be set as the default
                  payment method for future purchases.
              </p>
              <p className="text-color text-sm sm:text-base">
                <span className="heading-color">What's next:</span> Customers can edit, delete, or add new payment
                  methods from this page.
              </p>
            </div>
          </div>

          {/* Add Payment Method */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New <span className="accent-color">Payment</span> Methods
              </h3>
              <p className="text-color mb-3 sm:mb-4 text-sm sm:text-base">
                Customers can add new payment methods directly from their account page without going through checkout.
                The process is seamless and secure - payment information is tokenized and stored safely for future use.
                Customers can even add nicknames to their saved payment methods for easier identification.
              </p>
              <p className="text-color text-sm sm:text-base">
                <span className="heading-color">What's next:</span> Once added, the payment method is immediately
                  available for use during checkout, making future purchases faster and more convenient.
              </p>
            </div>
            <div className="relative w-full h-48 sm:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-zinc-300 group">
              <div className="absolute inset-0 bg-linear-to-br from-accent-color/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=500&fit=crop"
                alt="Add Payment Method"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
