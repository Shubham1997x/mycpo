'use client';

import Navbar from './plugin/components/Navbar';
import HeroSection from './plugin/components/HeroSection';
import IntroductionSection from './plugin/components/IntroductionSection';
import BenefitsSection from './plugin/components/BenefitsSection';
import GettingStartedSection from './plugin/components/GettingStartedSection';
import FinalCTASection from './plugin/components/FinalCTASection';

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FAFAFA' }}>
      <Navbar />
      <HeroSection />
      <GettingStartedSection />
      <IntroductionSection />
      <BenefitsSection />
      <FinalCTASection />
    </div>
  );
}
