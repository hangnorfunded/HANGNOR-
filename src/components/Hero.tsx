import React from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Award,
  Globe,
  DollarSign,
  ChevronRight,
} from 'lucide-react';

interface HeroProps {
  onSelectChallenge: () => void;
  onTrySimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectChallenge,
  onTrySimulator,
}) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#080808] border-b border-[#222]"
    >
      {/* Geometric background dot matrix */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Architectural Watermark Typography in Background */}
      <div className="absolute top-12 right-6 hidden xl:flex flex-col items-end pointer-events-none select-none opacity-25">
        <span className="text-[72px] font-black text-[#141414] leading-none tracking-tighter">
          STABILITY
        </span>
        <span className="text-[72px] font-black text-[#141414] leading-none tracking-tighter">
          PRECISION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Geometric Balance Value Proposition */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            
            {/* Operational Status Badge */}
            <div className="mb-5 inline-flex items-center gap-2 bg-[#111] px-4 py-1.5 rounded-full border border-[#333] self-center lg:self-start shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
                System Status: Operational
              </span>
              <span className="text-[#333]">|</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                Instant Scaling
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tighter mb-6 text-[#F0F0F0] font-display">
              TRADE WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                RESERVE CAPITAL.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-normal mx-auto lg:mx-0">
              Hangnor Funded provides professional traders with simulated capital up to <strong className="text-white font-medium">$200,000</strong>. No time limits. <strong className="text-white font-medium">90% profit split</strong>. Reliable bi-weekly payouts in under 2 hours.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                id="hero-cta-get-funded"
                onClick={onSelectChallenge}
                className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black font-bold uppercase text-xs tracking-widest hover:bg-cyan-400 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <span>Get Funded Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-simulator"
                onClick={onTrySimulator}
                className="w-full sm:w-auto px-10 py-4 bg-[#111] border border-[#333] text-white font-bold uppercase text-xs tracking-widest hover:border-cyan-500 hover:text-cyan-400 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Simulator</span>
              </button>
            </div>

            {/* Feature Bullets in Geometric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl mx-auto lg:mx-0 text-left pb-8 border-b border-[#222]">
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Zero Time Limits</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>100% Fee Refund</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>News Trading Permitted</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Crypto & Rise Payouts</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>EAs & Bots Allowed</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-medium text-gray-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Scale to $2,000,000</span>
              </div>
            </div>

            {/* Geometric Stat Counters */}
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F0F0F0] font-mono">90%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-0.5">Profit Split</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">$18.4M+</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-0.5">Total Payouts</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">1:100</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-0.5">Leverage</div>
              </div>
            </div>

          </div>

          {/* Right Column: Geometric Balance Live Evaluation Terminal */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-[#0A0A0A] border border-[#222] p-6 sm:p-8 rounded-sm shadow-2xl">
              
              {/* Micro Dot Matrix in card */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none rounded-sm"
                style={{
                  backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Card Header */}
              <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b border-[#222]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-cyan-500 rounded-sm rotate-45 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black -rotate-45" />
                  </div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    Evaluation Phase 01
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">ID: HN-948210</span>
              </div>

              {/* Account Balance & Drawdown Limit */}
              <div className="relative z-10 space-y-4 mb-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Account Balance</span>
                  <span className="text-2xl font-bold font-mono text-[#F0F0F0]">$100,000.00</span>
                </div>

                {/* Geometric Precision Progress Line */}
                <div className="h-1 w-full bg-[#222] rounded-none overflow-hidden">
                  <div className="h-full bg-cyan-500 w-[65%]" />
                </div>

                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500 uppercase tracking-wider">Drawdown Limit (10%)</span>
                  <span className="text-red-400 font-mono font-bold">-$10,000.00 (Safe: 1.40%)</span>
                </div>
              </div>

              {/* Boxed Stat Panels */}
              <div className="relative z-10 grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 bg-[#080808] border border-[#222] rounded-sm">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Equity</div>
                  <div className="text-base font-mono font-bold text-[#F0F0F0]">$109,420.50</div>
                </div>
                <div className="p-3.5 bg-[#080808] border border-[#222] rounded-sm">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Trader Profit (90%)</div>
                  <div className="text-base font-mono font-bold text-emerald-400">+$8,478.45</div>
                </div>
              </div>

              {/* Performance Curve SVG */}
              <div className="relative z-10 bg-[#080808] border border-[#222] p-3 rounded-sm mb-5">
                <div className="flex justify-between items-center text-[10px] text-gray-400 mb-2">
                  <span className="uppercase tracking-wider">Simulated Performance Curve</span>
                  <span className="text-cyan-400 font-mono font-semibold">Win Rate: 74.2%</span>
                </div>
                <div className="h-16 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="geoChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 55 Q 30 50, 60 42 T 120 38 T 180 22 T 240 18 T 300 8 L 300 70 L 0 70 Z"
                      fill="url(#geoChartGrad)"
                    />
                    <path
                      d="M 0 55 Q 30 50, 60 42 T 120 38 T 180 22 T 240 18 T 300 8"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="2"
                    />
                    <circle cx="300" cy="8" r="3.5" fill="#22D3EE" stroke="#080808" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Upgrade / Test Action Button */}
              <button
                onClick={onTrySimulator}
                className="relative z-10 w-full py-3 bg-[#F0F0F0] hover:bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Launch Interactive Trader Simulator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
