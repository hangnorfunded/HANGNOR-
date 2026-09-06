import React from 'react';
import { MessageSquare, Users, Sparkles, ArrowRight, ShieldCheck, Trophy, Bell } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#080808] border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm bg-[#0A0A0A] border border-[#222] p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Micro Dot Matrix */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Col: Info */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>OFFICIAL TRADER COMMUNITY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F0F0F0] tracking-tight font-display uppercase">
                Join 28,000+ Funded Traders on Discord
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed">
                Connect directly with the Hangnor Funded core team, share daily institutional trade setups, get 24/7 priority support, and celebrate verified payout proofs in real-time.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
                <a
                  href="#discord"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://discord.com', '_blank');
                  }}
                  className="px-6 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest text-black bg-cyan-500 hover:bg-cyan-400 shadow-md shadow-cyan-500/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Join Hangnor Discord</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider">4,120 Traders Online</span>
                </div>
              </div>
            </div>

            {/* Right Col: Community Channel Feed Preview */}
            <div className="lg:col-span-5 bg-[#080808] rounded-sm border border-[#222] p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#222] text-gray-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">#</span>
                  <span className="font-bold text-[#F0F0F0]">payout-proofs</span>
                </div>
                <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider">● Live Feed</span>
              </div>

              {/* Chat Message 1 */}
              <div className="flex items-start gap-2.5 bg-[#0A0A0A] p-2.5 rounded-sm border border-[#222]">
                <div className="w-7 h-7 rounded-sm bg-[#111] border border-[#333] text-cyan-400 flex items-center justify-center font-black text-[10px] shrink-0">
                  AR
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F0F0F0] text-[11px]">Alex_FX</span>
                    <span className="text-[9px] text-gray-500">Today at 12:41</span>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-0.5 font-sans">
                    Just received my 2nd payout with Hangnor! $14,250 hit my USDT wallet in 38 mins. 🚀
                  </p>
                </div>
              </div>

              {/* Chat Message 2 */}
              <div className="flex items-start gap-2.5 bg-[#0A0A0A] p-2.5 rounded-sm border border-[#222]">
                <div className="w-7 h-7 rounded-sm bg-[#111] border border-cyan-500/40 text-cyan-300 flex items-center justify-center font-black text-[10px] shrink-0">
                  HF
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-cyan-400 text-[11px]">HangnorBot</span>
                    <span className="text-[9px] bg-[#111] text-cyan-400 border border-cyan-500/30 px-1 py-0.2 rounded-sm font-bold">BOT</span>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-0.5 font-sans">
                    🎉 New certificate generated: Trader David S. passed 2-Step Phase 2 ($100k Account).
                  </p>
                </div>
              </div>

              {/* Chat Message 3 */}
              <div className="flex items-start gap-2.5 bg-[#0A0A0A] p-2.5 rounded-sm border border-[#222]">
                <div className="w-7 h-7 rounded-sm bg-[#111] border border-[#333] text-amber-400 flex items-center justify-center font-black text-[10px] shrink-0">
                  KP
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F0F0F0] text-[11px]">Kavish_Trade</span>
                    <span className="text-[9px] text-gray-500">Today at 13:05</span>
                  </div>
                  <p className="text-[11px] text-gray-300 mt-0.5 font-sans">
                    Gold longs hit TP3! Spreads on Hangnor cTrader were basically 0 pips during NY session.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
