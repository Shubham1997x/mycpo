export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-0 pb-16 sm:pb-20 lg:pb-28" style={{ backgroundColor: '#FAFAFA' }}>
      <div
        className="absolute inset-0 opacity-90 bg_img_dotted pointer-events-none"
      />
      <div className="relative text-center px-4" style={{ maxWidth: '100%' }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 heading-color">
          Ready to <span className="accent-color">Get Started</span>?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 text-color">
          Start accepting payments with MyCPO today. Get <strong>fast payouts</strong>, <strong>advanced security</strong>, and <strong>seamless WooCommerce integration</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-md font-semibold text-sm sm:text-base hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            Install Plugin
          </a>
          <a
            href="https://www.getmycpo.com"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border border-black text-black rounded-md font-semibold text-sm sm:text-base hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
