import React from 'react';
import {
  Clock,
  Zap,
  TrendingUp,
  Shield,
  Calendar,
  Layers,
  Award,
  DollarSign,
  Cpu,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';

export const TradingRules: React.FC = () => {
  const rules = [
    {
      icon: Clock,
      title: 'Zero Time Limits',
      tag: 'NO RUSH',
      description:
        'Take all the time you need to complete your evaluation. No arbitrary 30-day timers or countdown stress. Trade only when optimal market setups align with your edge.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
    },
    {
      icon: Zap,
      title: 'Unrestricted News Trading',
      tag: 'ALL HIGH-IMPACT',
      description:
        'Capitalize on volatility without restriction. We do not enforce 2-minute news blackouts before or after CPI, NFP, or Central Bank rate announcements on standard challenges.',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
    },
    {
      icon: Calendar,
      title: 'Weekend & Overnight Holding',
      tag: 'SWING FRIENDLY',
      description:
        'Hold swing positions overnight and through the weekend freely across all Forex pairs, commodities, indices, and crypto without mandatory auto-close triggers.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
    {
      icon: Cpu,
      title: 'EAs & Automated Bots Permitted',
      tag: 'ALGO READY',
      description:
        'Use custom Expert Advisors (EAs), algorithmic strategies, trading indicators, and trade copiers to execute your positions on MT5 or cTrader.',
      color: 'text-purple-400',
      border: 'border-purple-500/30',
    },
    {
      icon: DollarSign,
      title: '2-Hour Lightning Payouts',
      tag: 'FASTEST IN INDUSTRY',
      description:
        'Once approved, your payout is automatically processed via USDT (TRC20/ERC20), Bitcoin, or Rise in under 2 hours with zero withdrawal processing fees.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
    },
    {
      icon: Award,
      title: '$2M Scale-Up Roadmap',
      tag: 'SCALE 25%',
      description:
        'Generate an aggregate 10% profit over 3 months, and Hangnor Funded increases your account capital by 25%, scaling your balance all the way up to $2,000,000.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30',
    },
  ];

  return (
    <section id="rules" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
      {/* Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>TRADER-CENTRIC CONDITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            BUILT TO HELP YOU SUCCEED
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Traditional prop firms burden traders with hidden traps and countdown stress. Hangnor Funded strips away the friction.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="bg-[#0A0A0A] rounded-sm border border-[#222] p-6 hover:border-[#333] transition-all shadow-lg group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-sm bg-[#080808] border border-[#222] flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm bg-[#111] border border-[#222] text-gray-400">
                    {rule.tag}
                  </span>
                </div>

                <h3 className="text-base font-black text-[#F0F0F0] font-display mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Scale-up Milestone Visual */}
        <div className="mt-14 bg-[#0A0A0A] rounded-sm border border-[#222] p-6 sm:p-8 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 font-mono">
                HANGNOR SCALE-UP BLUEPRINT
              </span>
              <h3 className="text-2xl font-black text-[#F0F0F0] font-display mt-1">
                Grow From $100K to $2,000,000 in Capital
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">
                We reward consistency. Every 3 months where your combined net gain reaches 10% or more, we automatically scale your account balance by +25% and elevate your profit split up to 95%.
              </p>
            </div>

            {/* Stepper visual */}
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full lg:w-auto justify-center">
              <div className="bg-[#080808] p-3 rounded-sm border border-[#222] text-center min-w-[100px]">
                <div className="text-[10px] uppercase font-bold text-gray-500">Base</div>
                <div className="text-sm font-bold text-[#F0F0F0] font-mono mt-0.5">$100,000</div>
                <div className="text-[10px] text-cyan-400 font-semibold mt-0.5">80% Split</div>
              </div>
              <div className="text-gray-600 font-bold">→</div>
              <div className="bg-[#080808] p-3 rounded-sm border border-[#222] text-center min-w-[100px]">
                <div className="text-[10px] uppercase font-bold text-gray-500">Level 1</div>
                <div className="text-sm font-bold text-[#F0F0F0] font-mono mt-0.5">$125,000</div>
                <div className="text-[10px] text-cyan-400 font-semibold mt-0.5">85% Split</div>
              </div>
              <div className="text-gray-600 font-bold">→</div>
              <div className="bg-[#080808] p-3 rounded-sm border border-[#222] text-center min-w-[100px]">
                <div className="text-[10px] uppercase font-bold text-gray-500">Level 2</div>
                <div className="text-sm font-bold text-[#F0F0F0] font-mono mt-0.5">$156,250</div>
                <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">90% Split</div>
              </div>
              <div className="text-gray-600 font-bold">→</div>
              <div className="bg-[#111] p-3 rounded-sm border border-cyan-500/40 text-center min-w-[110px]">
                <div className="text-[10px] uppercase font-black text-emerald-400 tracking-wider">Max Scale</div>
                <div className="text-sm font-black text-cyan-300 font-mono mt-0.5">$2,000,000</div>
                <div className="text-[10px] text-amber-400 font-bold mt-0.5">95% Split</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
