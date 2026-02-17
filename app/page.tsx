'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import BenefitsSection from './components/BenefitsSection';
import GettingStartedSection from './components/GettingStartedSection';
import FinalCTASection from './components/FinalCTASection';
import WhyUsSection from './components/WhyUsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import LegalDisclosureSection from './components/LegalDisclosureSection';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-zinc-50">
      <Navbar />
      <HeroSection />
      <GettingStartedSection />
      <IntroductionSection />
      <BenefitsSection />
      <PricingSection />
      <WhyUsSection />
      <FAQSection />
      <LegalDisclosureSection />
      <FinalCTASection />
    </div>
  );
}
