'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import BenefitsSection from './components/BenefitsSection';
import GettingStartedSection from './components/GettingStartedSection';
import FinalCTASection from './components/FinalCTASection';

export default function PluginPage() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#FAFAFA' }}>
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <BenefitsSection />
      <GettingStartedSection />
      <FinalCTASection />
    </div>
  );
}
