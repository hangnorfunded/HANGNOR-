import React, { useState } from 'react';
import { DollarSign, Calculator, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { AccountSize } from '../types';

export const PayoutCalculator: React.FC = () => {
  const [calcSize, setCalcSize] = useState<number>(100000);
  const [returnPercent, setReturnPercent] = useState<number>(6.5);
  const [splitPercent, setSplitPercent] = useState<number>(90);

  const accountSizes = [10000, 25000, 50000, 100000, 200000];

  const monthlyGross = Math.round(calcSize * (returnPercent / 100));
  const traderMonthlyTakeHome = Math.round(monthlyGross * (splitPercent / 100));
  const annualTraderIncome = traderMonthlyTakeHome * 12;

  return (
    <section id="calculator" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
      {/* Micro Dot Matrix */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            <span>EARNINGS ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            CALCULATE YOUR PAYOUT POTENTIAL
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            See how much you take home with Hangnor Funded&apos;s generous profit split and zero hidden charges.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="max-w-4xl mx-auto bg-[#0A0A0A] rounded-sm border border-[#222] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Account Size Selector */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2.5">
                  <span>1. Account Capital</span>
                  <span className="font-mono text-cyan-400 text-sm font-bold">
                    ${calcSize.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {accountSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setCalcSize(size)}
                      className={`px-4 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        calcSize === size
                          ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                          : 'bg-[#080808] border border-[#222] text-gray-400 hover:text-[#F0F0F0] hover:border-[#333]'
                      }`}
                    >
                      ${(size / 1000).toFixed(0)}K
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Return Slider */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2.5">
                  <span>2. Realistic Monthly Gain (%)</span>
                  <span className="font-mono text-emerald-400 text-sm font-bold">
                    {returnPercent.toFixed(1)}% ({`+$${monthlyGross.toLocaleString()}`})
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="0.5"
                  value={returnPercent}
                  onChange={(e) => setReturnPercent(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-[#151515] rounded-none appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1.5 font-mono">
                  <span>Conservative: 2%</span>
                  <span>Average: 6% - 8%</span>
                  <span>Aggressive: 15%</span>
                </div>
              </div>

              {/* Profit Split Tier */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2.5">
                  <span>3. Profit Split Ratio</span>
                  <span className="font-mono text-cyan-400 text-sm font-bold">
                    {splitPercent}% Trader / {100 - splitPercent}% Firm
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: '80% BASE', val: 80 },
                    { label: '90% UPGRADED', val: 90 },
                    { label: '95% SCALE-UP', val: 95 },
                  ].map((tier) => (
                    <button
                      key={tier.val}
                      onClick={() => setSplitPercent(tier.val)}
                      className={`py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        splitPercent === tier.val
                          ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                          : 'bg-[#080808] border border-[#222] text-gray-400 hover:text-[#F0F0F0]'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Calculations Highlight */}
            <div className="lg:col-span-5 bg-[#080808] rounded-sm border border-[#222] p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Estimated Monthly Payout
                </div>
                <div className="text-4xl font-black text-emerald-400 font-mono mt-1">
                  ${traderMonthlyTakeHome.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Sent directly to your Crypto / Rise wallet every 14 days.
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#222] text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Total Account Profit:</span>
                  <span className="font-mono font-bold text-[#F0F0F0]">${monthlyGross.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Your Profit Share ({splitPercent}%):</span>
                  <span className="font-mono font-bold text-emerald-400">
                    ${traderMonthlyTakeHome.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Annualized Potential:</span>
                  <span className="font-mono font-bold text-cyan-400">
                    ${annualTraderIncome.toLocaleString()} / year
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-sm bg-[#111] border border-cyan-500/40 text-xs text-gray-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Plus, <strong className="text-[#F0F0F0]">100% of your initial fee</strong> is refunded in cash on your very first payout!
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
