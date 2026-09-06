import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Menu,
  X,
  Sparkles,
  User,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface NavbarProps {
  onOpenPortal: () => void;
  onSelectChallengeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPortal,
  onSelectChallengeClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222] shadow-2xl py-3'
          : 'bg-[#080808]/70 backdrop-blur-sm border-b border-[#1c1c1c] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Geometric Balance rhombus emblem */}
        <div
          id="brand-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-cyan-500 rounded-sm rotate-45 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:rotate-90 transition-transform duration-300 shrink-0">
            <div className="-rotate-45 font-black text-black text-xs font-display">H</div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tighter text-[#F0F0F0] font-display">
                HANGNOR <span className="text-cyan-500">FUNDED</span>
              </span>
            </div>
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-gray-400 -mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
              Proprietary Trading Firm
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Geometric Balance uppercase tracking */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-widest text-gray-400">
          <button
            id="nav-challenges"
            onClick={() => scrollToSection('challenges')}
            className="hover:text-cyan-400 transition-colors cursor-pointer py-1"
          >
            Funding Models
          </button>
          <button
            id="nav-simulator"
            onClick={() => scrollToSection('simulator')}
            className="hover:text-cyan-400 transition-colors cursor-pointer py-1 flex items-center gap-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live Simulator
          </button>
          <button
            id="nav-rules"
            onClick={() => scrollToSection('rules')}
            className="hover:text-cyan-400 transition-colors cursor-pointer py-1"
          >
            Trading Rules
          </button>
          <button
            id="nav-calculator"
            onClick={() => scrollToSection('calculator')}
            className="hover:text-cyan-400 transition-colors cursor-pointer py-1"
          >
            Payouts
          </button>
          <button
            id="nav-payouts"
            onClick={() => scrollToSection('payouts')}
            className="hover:text-cyan-400 transition-colors cursor-pointer py-1"
          >
            Proof Wall
          </button>
          <button
            id="nav-faq"
            onClick={() => scrollToSection('faq')}
            className="hover:text-cyan-400 transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="btn-client-portal"
            onClick={onOpenPortal}
            className="px-5 py-2 rounded-sm border border-cyan-500/80 text-cyan-400 hover:text-black hover:bg-cyan-500 text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
          >
            <User className="w-3.5 h-3.5" />
            <span>Client Portal</span>
          </button>

          <button
            id="btn-nav-get-funded"
            onClick={onSelectChallengeClick}
            className="px-6 py-2 rounded-sm bg-cyan-500 text-black text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Funded</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="btn-mobile-portal"
            onClick={onOpenPortal}
            className="p-2 text-cyan-400 hover:text-white bg-[#111] rounded-sm border border-[#333]"
          >
            <User className="w-4 h-4" />
          </button>
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white bg-[#111] rounded-sm border border-[#333]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#0A0A0A] border-b border-[#222] px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-bold text-gray-300">
            <button
              onClick={() => scrollToSection('challenges')}
              className="text-left py-2.5 hover:text-cyan-400 border-b border-[#222] flex items-center justify-between"
            >
              <span>Funding Models</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => scrollToSection('simulator')}
              className="text-left py-2.5 hover:text-cyan-400 border-b border-[#222] flex items-center justify-between text-cyan-400 font-bold"
            >
              <span>Interactive Trader Simulator</span>
              <span className="text-[10px] uppercase px-2 py-0.5 rounded-sm bg-emerald-500/20 text-emerald-400 font-bold">
                Live
              </span>
            </button>
            <button
              onClick={() => scrollToSection('rules')}
              className="text-left py-2.5 hover:text-cyan-400 border-b border-[#222] flex items-center justify-between"
            >
              <span>Trading Rules & Scaling</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-left py-2.5 hover:text-cyan-400 border-b border-[#222] flex items-center justify-between"
            >
              <span>Payouts & Calculator</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => scrollToSection('payouts')}
              className="text-left py-2.5 hover:text-cyan-400 border-b border-[#222] flex items-center justify-between"
            >
              <span>Recent Payout Proofs</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2.5 hover:text-cyan-400 flex items-center justify-between"
            >
              <span>FAQ</span>
              <ArrowRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectChallengeClick();
              }}
              className="w-full py-3 rounded-sm font-bold uppercase text-xs tracking-widest text-center text-black bg-cyan-500"
            >
              Get Funded Now
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-3 rounded-sm font-bold uppercase text-xs tracking-widest text-center text-cyan-400 bg-[#111] border border-[#333]"
            >
              Client Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
