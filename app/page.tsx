'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import BenefitsSection from './components/BenefitsSection';
import GettingStartedSection from './components/GettingStartedSection';
import FinalCTASection from './components/FinalCTASection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import LegalDisclosureSection from './components/LegalDisclosureSection';

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FAFAFA' }}>
      <Navbar />
      <HeroSection />
      <GettingStartedSection />
      <IntroductionSection />
      <BenefitsSection />
      <PricingSection />
      <LegalDisclosureSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
