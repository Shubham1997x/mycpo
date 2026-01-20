export default function DetailedFeaturesSection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-0 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="relative w-full">
        <div className="space-y-8 sm:space-y-12">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4">
                Simple, <span className="accent-color">Seamless</span> Checkout
              </h3>
              <p className="text-color mb-4">
                Using the MyCPO extension allows you to decide what your checkout process will look like,
                while keeping the customer on your site for the entire process. This gives you maximum control
                over this experience, providing a simple checkout process for the user and maximum customizability
                for the business owner.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Customers never leave your site during checkout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Mobile-friendly checkout with optimized input fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Show detailed error messages for better user experience</span>
                </li>
              </ul>
            </div>
            <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border-2 border-zinc-300">
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=400&fit=crop"
                alt="Checkout Screen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border-2 border-zinc-300">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
                  alt="Mobile Checkout"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl sm:text-2xl font-bold heading-color mb-3 sm:mb-4">
                Support for <span className="accent-color">Automatic</span> Refunds and Voids
              </h3>
              <p className="text-color mb-3 sm:mb-4 text-sm sm:text-base">
                Shop employees can now process refunds for an order paid for with MyCPO directly from
                  within WooCommerce — no more logging into your merchant account to process refunds!
                Speed up your store management by creating full or partial refunds from the "Edit Order" screen.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Process refunds directly from WooCommerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Automatic transaction voids for uncaptured orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Full or partial refunds supported</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold heading-color mb-4">
                Securely Save <span className="accent-color">Payment Methods</span>
              </h3>
              <p className="text-color mb-4">
                Customers can easily and securely save multiple payment methods to their account for faster checkout,
                which are displayed in a unified "My Payments" section of their account. Payment data is stored
                securely, so your responsibility for PCI compliance is significantly reduced.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">No limit to the number of payment methods stored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Add payment methods without going through checkout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-xl font-bold accent-color">✓</span>
                  <span className="heading-color">Customers can add nicknames for saved payment methods</span>
                </li>
              </ul>
            </div>
            <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border-2 border-zinc-300">
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop"
                alt="Payment Methods"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
