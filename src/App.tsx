import React, { useState } from 'react';
import { TopAnnouncement } from './components/TopAnnouncement';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChallengeConfigurator } from './components/ChallengeConfigurator';
import { TraderDashboardSimulator } from './components/TraderDashboardSimulator';
import { TradingRules } from './components/TradingRules';
import { PayoutCalculator } from './components/PayoutCalculator';
import { LivePayoutsWall } from './components/LivePayoutsWall';
import { ComparisonTable } from './components/ComparisonTable';
import { FaqSection } from './components/FaqSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { PortalModal } from './components/PortalModal';
import { AccountSize, ChallengeModelType, TradingPlatform, AccountCurrency } from './types';

export default function App() {
  const [isPortalModalOpen, setIsPortalModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [activeCheckoutOrder, setActiveCheckoutOrder] = useState<{
    model: ChallengeModelType;
    size: AccountSize;
    platform: TradingPlatform;
    currency: AccountCurrency;
    addOns: string[];
    finalPrice: number;
    discountAmount: number;
  } | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartCheckout = (config: {
    model: ChallengeModelType;
    size: AccountSize;
    platform: TradingPlatform;
    currency: AccountCurrency;
    addOns: string[];
    finalPrice: number;
    discountAmount: number;
  }) => {
    setActiveCheckoutOrder(config);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F0F0F0] selection:bg-cyan-500 selection:text-black font-sans">
      {/* Top Announcements & Market Rates */}
      <TopAnnouncement />

      {/* Main Navbar */}
      <Navbar
        onOpenPortal={() => setIsPortalModalOpen(true)}
        onSelectChallengeClick={() => handleScrollToSection('challenges')}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onSelectChallenge={() => handleScrollToSection('challenges')}
          onTrySimulator={() => handleScrollToSection('simulator')}
        />

        {/* Challenge Configurator Section */}
        <ChallengeConfigurator onStartCheckout={handleStartCheckout} />

        {/* Live Interactive Trader Simulator */}
        <TraderDashboardSimulator />

        {/* Trading Rules & Scaling Roadmap */}
        <TradingRules />

        {/* Payout Estimator Calculator */}
        <PayoutCalculator />

        {/* Verified Payouts Wall */}
        <LivePayoutsWall />

        {/* Comparison Table vs Other Prop Firms */}
        <ComparisonTable />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Discord & Community Section */}
        <CommunitySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        orderData={activeCheckoutOrder}
      />

      <PortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        onJumpToSimulator={() => handleScrollToSection('simulator')}
      />
    </div>
  );
}
