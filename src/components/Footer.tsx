import React from 'react';
import { ShieldCheck, ArrowUpRight, MessageSquare, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#222] text-gray-500 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#222]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-cyan-500 rotate-45 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <div className="w-2 h-2 bg-[#080808] -rotate-45" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black tracking-widest text-[#F0F0F0] uppercase">
                    HANGNOR
                  </span>
                  <span className="text-base font-black tracking-widest text-cyan-400 uppercase">
                    FUNDED
                  </span>
                </div>
                <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-gray-500">
                  Proprietary Trading Infrastructure
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-md">
              Hangnor Funded evaluates and funds disciplined retail traders across Forex, Crypto, Indices, and Commodities. We provide institutional liquidity, zero time limits, and fast reliable payouts.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="#discord"
                aria-label="Hangnor Funded Discord"
                className="w-8 h-8 rounded-sm bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="#telegram"
                aria-label="Hangnor Funded Telegram"
                className="w-8 h-8 rounded-sm bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Hangnor Funded X Twitter"
                className="w-8 h-8 rounded-sm bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="Hangnor Funded YouTube"
                className="w-8 h-8 rounded-sm bg-[#111] border border-[#222] flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[#F0F0F0] font-bold text-[10px] uppercase tracking-[0.2em]">
              CHALLENGES
            </div>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>
                <button onClick={() => scrollTo('challenges')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Hangnor Standard (2-Step)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('challenges')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Hangnor Express (1-Step)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('challenges')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Hangnor Direct (Instant)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Payout Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Rules & Resources (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[#F0F0F0] font-bold text-[10px] uppercase tracking-[0.2em]">
              TRADING RULES
            </div>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>
                <button onClick={() => scrollTo('rules')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Drawdown Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('rules')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  $2,000,000 Scaling Plan
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('rules')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  News &amp; Weekend Rules
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('simulator')} className="hover:text-cyan-400 transition-colors cursor-pointer">
                  Simulator Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[#F0F0F0] font-bold text-[10px] uppercase tracking-[0.2em]">
              TRADER SUPPORT
            </div>
            <p className="text-gray-400 text-xs">
              24/7 Live Chat &amp; Ticket Support available directly inside the Client Portal and Discord.
            </p>
            <div className="pt-2 text-gray-300">
              <span className="text-gray-500 text-[11px]">Official Inquiries:</span>
              <div className="font-mono text-cyan-400 mt-0.5 text-xs">support@hangnorfunded.com</div>
            </div>
          </div>

        </div>

        {/* Legal Regulatory & Risk Disclaimer */}
        <div className="py-8 border-b border-[#222] space-y-3 text-[11px] text-gray-500 leading-relaxed">
          <p>
            <strong className="text-gray-400">Risk Disclosure &amp; Regulatory Notice:</strong> All accounts provided by HANGNOR FUNDED are simulated evaluation accounts with hypothetical liquidity. Information presented on this website is for educational and evaluation purposes only and should not be construed as investment or financial advice. Trading foreign exchange, CFDs, and cryptocurrencies on margin carries a high level of risk and may not be suitable for all investors.
          </p>
          <p>
            HANGNOR FUNDED does not act as a broker-dealer, custodian, or financial services repository. Past performance on a simulated or evaluation account is not indicative of future results. All fees paid are solely for evaluation assessments and software technology infrastructure access.
          </p>
        </div>

        {/* Copyright & Accepted Methods */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-gray-300">HANGNOR FUNDED</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-500 font-mono text-[10px]">
            <span>Accepted: USDT (TRC20/ERC20)</span>
            <span>•</span>
            <span>BTC</span>
            <span>•</span>
            <span>VISA / Mastercard</span>
            <span>•</span>
            <span>Rise</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
