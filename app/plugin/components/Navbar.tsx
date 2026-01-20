'use client';

export default function Navbar() {
    return (
        <nav className="relative w-full bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/logo.svg"
                            alt="MyCPO"
                            className="h-5 sm:h-6"
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        <a href="#services" className="text-sm lg:text-base font-medium text-color hover:text-accent-color transition-colors">
                            Services
                        </a>
                        <a href="#about" className="text-sm lg:text-base font-medium text-color hover:text-accent-color transition-colors">
                            About
                        </a>
                        <a href="#partners" className="text-sm lg:text-base font-medium text-color hover:text-accent-color transition-colors">
                            Partners
                        </a>
                        <a href="#contact" className="text-sm lg:text-base font-medium text-color hover:text-accent-color transition-colors">
                            Contact
                        </a>
                        <a href="#blog" className="text-sm lg:text-base font-medium text-color hover:text-accent-color transition-colors">
                            Blog
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <a
                            href="#login"
                            className="inline-flex items-center justify-center px-3 sm:px-6 py-1.5 sm:py-2 border border-black bg-[#fafafa] text-black rounded-md font-semibold text-xs sm:text-sm hover:bg-black hover:text-white transition-colors"
                        >
                            Log In
                        </a>
                        <a
                            href="#signup"
                            className="inline-flex items-center justify-center px-3 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-md font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-colors"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
