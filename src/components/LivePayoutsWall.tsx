import React from 'react';
import { ShieldCheck, ExternalLink, Clock, DollarSign, Award, CheckCircle } from 'lucide-react';
import { RECENT_PAYOUTS } from '../data/mockData';

export const LivePayoutsWall: React.FC = () => {
  return (
    <section id="payouts" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>PROOF OF WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            LIVE VERIFIED TRADER PAYOUTS
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Real traders around the globe receiving automated crypto, Rise, and bank payouts continuously.
          </p>
        </div>

        {/* Payouts Grid / Table */}
        <div className="bg-[#0A0A0A] rounded-sm border border-[#222] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#222] bg-[#080808] text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold font-mono">
                  <th className="py-4 px-6">Trader</th>
                  <th className="py-4 px-6">Country</th>
                  <th className="py-4 px-6">Account Tier</th>
                  <th className="py-4 px-6">Payout Amount</th>
                  <th className="py-4 px-6">Payment Method</th>
                  <th className="py-4 px-6">Time Processed</th>
                  <th className="py-4 px-6 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222] text-xs">
                {RECENT_PAYOUTS.map((payout) => (
                  <tr key={payout.id} className="hover:bg-[#111]/60 transition-colors">
                    
                    {/* Trader Name */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-sm bg-[#111] border border-[#333] flex items-center justify-center font-black text-cyan-400 text-xs">
                          {payout.traderName.charAt(0)}
                        </div>
                        <span className="font-bold text-[#F0F0F0] text-sm">{payout.traderName}</span>
                      </div>
                    </td>

                    {/* Country */}
                    <td className="py-4 px-6 text-gray-400">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <span className="font-mono text-gray-500">[{payout.countryCode}]</span>
                        <span>{payout.country}</span>
                      </span>
                    </td>

                    {/* Account Tier */}
                    <td className="py-4 px-6 text-gray-300 font-mono">
                      <span className="px-2 py-0.5 rounded-sm bg-[#111] border border-[#222]">
                        {payout.accountSize}
                      </span>
                    </td>

                    {/* Payout Amount */}
                    <td className="py-4 px-6 font-mono font-black text-emerald-400 text-base">
                      ${payout.amount.toLocaleString()}
                    </td>

                    {/* Method */}
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-sm bg-[#111] border border-[#222] text-cyan-400 font-bold text-[10px] tracking-wider uppercase">
                        {payout.method}
                      </span>
                    </td>

                    {/* Time */}
                    <td className="py-4 px-6 text-gray-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      <span>{payout.timeAgo}</span>
                    </td>

                    {/* TxHash / Status */}
                    <td className="py-4 px-6 text-right font-mono">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-bold bg-[#111] border border-emerald-500/30 px-2 py-0.5 rounded-sm text-[10px] tracking-wider uppercase">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        <span>Verified {payout.txHash}</span>
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Bar Guarantee */}
          <div className="p-4 bg-[#080808] border-t border-[#222] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              100% On-Time Payout Guarantee: Executed in under 2 hours or we credit an additional $500 bonus.
            </span>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-wider">Synced via Hangnor Settlement Engine</span>
          </div>
        </div>

      </div>
    </section>
  );
};
