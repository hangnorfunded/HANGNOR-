import React from 'react';
import { Check, X, Shield, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Profit Split Ratio',
      hangnor: 'Up to 90% (scales to 95%)',
      others: '75% - 80% standard',
      highlight: true,
    },
    {
      feature: 'Evaluation Time Limits',
      hangnor: 'Zero Time Limits (Trade at your pace)',
      others: 'Strict 30 / 60 day countdowns',
      highlight: true,
    },
    {
      feature: 'News Event Trading (CPI / NFP)',
      hangnor: '100% Allowed (No bans or pauses)',
      others: 'Restricted (auto-breach risk)',
      highlight: true,
    },
    {
      feature: 'Weekend & Overnight Holding',
      hangnor: 'Fully Permitted across all assets',
      others: 'Mandatory Friday close or paid addon',
      highlight: true,
    },
    {
      feature: 'Average Payout Processing Time',
      hangnor: 'Under 2 Hours (Automated Crypto & Rise)',
      others: '3 - 7 business days',
      highlight: true,
    },
    {
      feature: 'Fee Refund Policy',
      hangnor: '100% Full Refund with 1st Payout',
      others: 'No refund or partial credits',
      highlight: false,
    },
    {
      feature: 'Max Scaling Capital',
      hangnor: 'Up to $2,000,000.00',
      others: 'Capped at $400,000 - $600,000',
      highlight: false,
    },
    {
      feature: 'Platforms Supported',
      hangnor: 'MT5, cTrader & TradingView (DXTrade)',
      others: 'MT4 only or obscure web apps',
      highlight: false,
    },
  ];

  return (
    <section id="comparison" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
      {/* Background Micro Dot Matrix */}
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
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>UNCOMPROMISING TRANSPARENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            HANGNOR FUNDED VS. OTHER FIRMS
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Compare our rules side by side. We built Hangnor Funded to eliminate the arbitrary constraints that hold traders back.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="max-w-4xl mx-auto bg-[#0A0A0A] rounded-sm border border-[#222] shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#222] bg-[#080808] text-[10px] uppercase tracking-[0.2em] font-bold">
                  <th className="py-4 px-6 text-gray-400 w-2/5 font-mono">PARAMETER</th>
                  <th className="py-4 px-6 text-cyan-400 bg-[#111] border-x border-[#333] w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span className="font-bold text-[#F0F0F0] text-xs font-mono tracking-wider">HANGNOR FUNDED</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-gray-500 w-1/3 font-mono">INDUSTRY STANDARD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222] text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#111]/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#F0F0F0]">
                      {row.feature}
                    </td>

                    {/* Hangnor Funded Column */}
                    <td className="py-4 px-6 font-bold text-cyan-300 bg-[#111]/30 border-x border-[#222]">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.hangnor}</span>
                      </div>
                    </td>

                    {/* Others Column */}
                    <td className="py-4 px-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
