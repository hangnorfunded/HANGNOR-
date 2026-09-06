import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { RECENT_PAYOUTS, LIVE_TICKER_MARKETS } from '../data/mockData';

export const TopAnnouncement: React.FC = () => {
  const [currentPayoutIndex, setCurrentPayoutIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPayoutIndex((prev) => (prev + 1) % RECENT_PAYOUTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const activePayout = RECENT_PAYOUTS[currentPayoutIndex];

  return (
    <div id="top-announcement-bar" className="w-full bg-[#080808] border-b border-[#222] text-xs py-2 px-4 z-40 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Market Live Ticker */}
        <div className="hidden xl:flex items-center gap-3 text-[11px] text-gray-400 overflow-x-auto scrollbar-none">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-widest text-cyan-400 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            LIVE FEEDS:
          </span>
          {LIVE_TICKER_MARKETS.slice(0, 4).map((m) => (
            <div key={m.symbol} className="flex items-center gap-1.5 bg-[#111] px-2 py-0.5 rounded-sm border border-[#222]">
              <span className="text-gray-300 font-mono">{m.symbol}</span>
              <span className="text-[#F0F0F0] font-mono">{m.price}</span>
              <span className={`font-mono text-[10px] ${m.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                {m.change}
              </span>
            </div>
          ))}
        </div>

        {/* Live Payout Ticker Highlight */}
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-gray-500 uppercase text-[10px] tracking-widest hidden sm:inline">Recent Payout:</span>
          <div className="flex items-center gap-2 bg-[#111] border border-[#333] px-2.5 py-0.5 rounded-sm text-gray-300 font-medium text-[11px] animate-fade">
            <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>
              <strong className="text-white">{activePayout.traderName}</strong> ({activePayout.country}) received{' '}
              <strong className="text-emerald-400 font-mono">${activePayout.amount.toLocaleString()}</strong> via{' '}
              {activePayout.method}
            </span>
            <span className="text-gray-500 font-mono text-[10px]">• {activePayout.timeAgo}</span>
          </div>
        </div>

        {/* Coupon Code Pill */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-[#111] border border-[#333] px-3 py-0.5 rounded-sm text-[11px]">
            <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400 shrink-0" />
            <span className="text-gray-400 uppercase tracking-wider text-[10px]">Launch Promo:</span>
            <span className="font-mono font-bold text-cyan-400 bg-[#080808] px-1.5 py-0.2 rounded-sm border border-[#222]">
              HANGNOR20
            </span>
            <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider">(20% OFF)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
