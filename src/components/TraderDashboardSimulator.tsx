import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  DollarSign,
  Zap,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  ExternalLink,
  Award,
} from 'lucide-react';
import { SimulatedTrade } from '../types';

export const TraderDashboardSimulator: React.FC = () => {
  const initialCapital = 100000;
  const targetProfit = 8000; // 8% target

  const [balance, setBalance] = useState(108650);
  const [equity, setEquity] = useState(109450);
  const [dailyLoss, setDailyLoss] = useState(420); // $420 loss today (0.42%)
  const [maxLossFromPeak, setMaxLossFromPeak] = useState(1400); // 1.4%
  const [payoutClaimed, setPayoutClaimed] = useState(false);
  const [payoutReceipt, setPayoutReceipt] = useState<{
    amount: number;
    traderShare: number;
    txHash: string;
    time: string;
  } | null>(null);

  const [trades, setTrades] = useState<SimulatedTrade[]>([
    {
      id: 't-1',
      pair: 'EUR/USD',
      type: 'BUY',
      lots: 5.0,
      pnl: 1850,
      time: '10:42 UTC',
      status: 'CLOSED',
    },
    {
      id: 't-2',
      pair: 'XAU/USD (Gold)',
      type: 'BUY',
      lots: 3.5,
      pnl: 3420,
      time: '13:15 UTC',
      status: 'CLOSED',
    },
    {
      id: 't-3',
      pair: 'NAS100',
      type: 'SELL',
      lots: 4.0,
      pnl: 2100,
      time: '15:20 UTC',
      status: 'CLOSED',
    },
    {
      id: 't-4',
      pair: 'GBP/JPY',
      type: 'BUY',
      lots: 3.0,
      pnl: -420,
      time: '16:05 UTC',
      status: 'CLOSED',
    },
  ]);

  const totalProfit = balance - initialCapital;
  const progressPercent = Math.min(100, Math.max(0, (totalProfit / targetProfit) * 100));
  const isTargetPassed = totalProfit >= targetProfit;

  const dailyDrawdownPercent = ((dailyLoss / initialCapital) * 100).toFixed(2);
  const maxDrawdownPercent = ((maxLossFromPeak / initialCapital) * 100).toFixed(2);
  const traderProfitShare = Math.round(totalProfit * 0.9); // 90% split

  const handleSimulateWin = () => {
    const winAmount = 1450;
    const newBal = balance + winAmount;
    setBalance(newBal);
    setEquity(newBal + 300);
    const newTrade: SimulatedTrade = {
      id: `t-${Date.now()}`,
      pair: 'XAU/USD',
      type: 'BUY',
      lots: 4.0,
      pnl: winAmount,
      time: 'Just Now',
      status: 'CLOSED',
    };
    setTrades([newTrade, ...trades]);

    if (newBal - initialCapital >= targetProfit) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#10b981', '#f59e0b'],
      });
    }
  };

  const handleSimulateLoss = () => {
    const lossAmount = 650;
    const newBal = Math.max(90000, balance - lossAmount);
    setBalance(newBal);
    setEquity(newBal - 100);
    setDailyLoss((prev) => prev + lossAmount);
    setMaxLossFromPeak((prev) => prev + lossAmount);

    const newTrade: SimulatedTrade = {
      id: `t-${Date.now()}`,
      pair: 'EUR/USD',
      type: 'SELL',
      lots: 3.0,
      pnl: -lossAmount,
      time: 'Just Now',
      status: 'CLOSED',
    };
    setTrades([newTrade, ...trades]);
  };

  const handleReset = () => {
    setBalance(100000);
    setEquity(100000);
    setDailyLoss(0);
    setMaxLossFromPeak(0);
    setPayoutClaimed(false);
    setPayoutReceipt(null);
    setTrades([
      {
        id: 't-init',
        pair: 'EUR/USD',
        type: 'BUY',
        lots: 2.0,
        pnl: 0,
        time: 'Initial State',
        status: 'CLOSED',
      },
    ]);
  };

  const handleRequestPayout = () => {
    if (totalProfit <= 0) return;
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#10b981', '#06b6d4', '#fbbf24', '#ffffff'],
    });

    const tx = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setPayoutClaimed(true);
    setPayoutReceipt({
      amount: totalProfit,
      traderShare: traderProfitShare,
      txHash: `${tx.substring(0, 8)}...${tx.substring(34)}`,
      time: new Date().toLocaleTimeString(),
    });
  };

  return (
    <section id="simulator" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>PROPRIETARY TRADER PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            INTERACTIVE TRADER SIMULATOR
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Experience real-time drawdown tracking, automated profit calculations, and instant simulated payout execution.
          </p>
        </div>

        {/* Dashboard Canvas Container */}
        <div className="bg-[#0A0A0A] rounded-sm border border-[#222] shadow-2xl overflow-hidden relative">
          
          {/* Top Bar / Header */}
          <div className="bg-[#0A0A0A] px-6 py-4 border-b border-[#222] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-cyan-500 text-black flex items-center justify-center font-black text-xs">
                  HF
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F0F0F0] uppercase tracking-wider flex items-center gap-2">
                    <span>HANGNOR SIMULATOR PORTAL</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      LIVE ENGINE
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    Account: #HF-882941 • Model: 2-Step Standard ($100,000)
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Simulation Controls */}
            <div className="flex items-center gap-2">
              <button
                id="sim-btn-win"
                onClick={handleSimulateWin}
                className="px-4 py-2 rounded-sm bg-[#111] hover:bg-emerald-950/40 border border-[#333] hover:border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Simulate Win (+ $1,450)</span>
              </button>

              <button
                id="sim-btn-loss"
                onClick={handleSimulateLoss}
                className="px-4 py-2 rounded-sm bg-[#111] hover:bg-rose-950/40 border border-[#333] hover:border-rose-500/40 text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <TrendingDown className="w-3.5 h-3.5" />
                <span>Simulate Loss (- $650)</span>
              </button>

              <button
                id="sim-btn-reset"
                onClick={handleReset}
                title="Reset simulation to $100k baseline"
                className="p-2 rounded-sm bg-[#111] hover:bg-[#222] text-gray-400 border border-[#333] cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Primary Stats Grid */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#0A0A0A] border-b border-[#222]">
            
            {/* Account Balance */}
            <div className="bg-[#080808] p-4 rounded-sm border border-[#222]">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Account Balance</div>
              <div className="text-2xl font-black text-[#F0F0F0] font-mono mt-1">${balance.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-1">Starting: $100,000.00</div>
            </div>

            {/* Current Equity */}
            <div className="bg-[#080808] p-4 rounded-sm border border-[#222]">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Current Equity</div>
              <div className="text-2xl font-black text-cyan-400 font-mono mt-1">${equity.toLocaleString()}</div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">
                Margin Level: 1,420% (Safe)
              </div>
            </div>

            {/* Net Profit & Target */}
            <div className="bg-[#080808] p-4 rounded-sm border border-[#222]">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Total Profit / Target</div>
              <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                {totalProfit >= 0 ? `+$${totalProfit.toLocaleString()}` : `-$${Math.abs(totalProfit).toLocaleString()}`}
              </div>
              <div className="text-xs text-gray-400 mt-1 font-mono">
                Target: $8,000 ({progressPercent.toFixed(1)}% reached)
              </div>
            </div>

            {/* Trader 90% Share */}
            <div className="bg-[#080808] p-4 rounded-sm border border-[#222] relative">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 flex items-center justify-between">
                <span>Your Payout (90%)</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-[#111] border border-[#333] px-1.5 py-0.5 rounded-sm">READY</span>
              </div>
              <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                ${traderProfitShare > 0 ? traderProfitShare.toLocaleString() : '0.00'}
              </div>
              <button
                id="btn-claim-sim-payout"
                onClick={handleRequestPayout}
                disabled={traderProfitShare <= 0}
                className={`mt-2 w-full py-2 px-3 rounded-sm text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  traderProfitShare > 0
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-md shadow-cyan-500/20'
                    : 'bg-[#151515] text-gray-600 border border-[#222] cursor-not-allowed'
                }`}
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Simulate 2-Hour Payout</span>
              </button>
            </div>

          </div>

          {/* Drawdown Meters & Progress */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0A0A0A]">
            
            {/* Left 7 Cols: Drawdown Rules Tracking */}
            <div className="lg:col-span-7 space-y-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center justify-between">
                <span>REAL-TIME RISK &amp; DRAWDOWN COMPLIANCE</span>
                <span className="text-cyan-400 font-mono text-[11px]">Server: UTC 14:02:18</span>
              </div>

              {/* Daily Drawdown Meter */}
              <div className="bg-[#080808] p-4 rounded-sm border border-[#222]">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-xs font-bold text-[#F0F0F0]">Daily Drawdown Meter</span>
                    <span className="text-[11px] text-gray-500 ml-2">(Max 5.00% = $5,000.00)</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {dailyDrawdownPercent}% used / 5.00%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#222] rounded-none overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 transition-all duration-300"
                    style={{ width: `${Math.min(100, (dailyLoss / 5000) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-1.5 font-mono">
                  <span>Current Loss Today: ${dailyLoss}</span>
                  <span>Daily Permitted Remaining: ${(5000 - dailyLoss).toLocaleString()}</span>
                </div>
              </div>

              {/* Overall Max Drawdown Meter */}
              <div className="bg-[#080808] p-4 rounded-sm border border-[#222]">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-xs font-bold text-[#F0F0F0]">Max Overall Drawdown</span>
                    <span className="text-[11px] text-gray-500 ml-2">(Max 10.00% = $10,000.00)</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {maxDrawdownPercent}% used / 10.00%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#222] rounded-none overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 transition-all duration-300"
                    style={{ width: `${Math.min(100, (maxLossFromPeak / 10000) * 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 mt-1.5 font-mono">
                  <span>Max Peak Drawdown: ${maxLossFromPeak}</span>
                  <span>Safe Buffer Remaining: ${(10000 - maxLossFromPeak).toLocaleString()}</span>
                </div>
              </div>

              {/* Target Pass Notification */}
              {isTargetPassed ? (
                <div className="p-4 rounded-sm bg-[#111] border border-emerald-500/50 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Phase 1 Target Reached! 🎉</div>
                    <div className="text-xs text-gray-300">
                      You generated +${totalProfit.toLocaleString()} (over 8%). In real evaluations, your Phase 2 credentials are generated automatically within 60 seconds!
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-sm bg-[#080808] border border-[#222] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#F0F0F0] uppercase tracking-wider">Evaluation in Progress</div>
                    <div className="text-xs text-gray-400">
                      Need ${(targetProfit - totalProfit).toLocaleString()} more to pass Phase 1. No minimum days required—pass whenever you hit the target!
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right 5 Cols: Payout Certificate or Recent Trade History */}
            <div className="lg:col-span-5 bg-[#080808] rounded-sm border border-[#222] p-5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center justify-between">
                  <span>SIMULATED TRADE LOG</span>
                  <span className="text-[10px] text-cyan-400 font-mono">MT5 ECN Execution</span>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {trades.map((t) => (
                    <div
                      key={t.id}
                      className="p-2.5 rounded-sm bg-[#0A0A0A] border border-[#222] flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                            t.type === 'BUY'
                              ? 'bg-emerald-500/15 text-emerald-400'
                              : 'bg-rose-500/15 text-rose-400'
                          }`}
                        >
                          {t.type}
                        </span>
                        <div>
                          <span className="font-bold text-[#F0F0F0]">{t.pair}</span>
                          <span className="text-[10px] text-gray-500 ml-1.5">{t.lots} Lots</span>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <div
                          className={`font-bold ${
                            t.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {t.pnl >= 0 ? `+$${t.pnl}` : `-$${Math.abs(t.pnl)}`}
                        </div>
                        <div className="text-[10px] text-gray-500">{t.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payout Receipt Banner if claimed */}
              {payoutReceipt && (
                <div className="mt-4 p-3.5 rounded-sm bg-[#111] border border-cyan-500/50 text-xs">
                  <div className="flex items-center justify-between font-bold text-cyan-300 mb-1">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Payout Confirmed &amp; Broadcasted!
                    </span>
                    <span className="text-[#F0F0F0] font-mono font-bold">${payoutReceipt.traderShare} USDT</span>
                  </div>
                  <div className="text-[10px] text-gray-400 font-mono">
                    TxHash: <span className="text-cyan-400">{payoutReceipt.txHash}</span>
                  </div>
                  <div className="text-[10px] text-gray-500 mt-1">
                    Processed by Hangnor Automated Liquidity Engine in 4 minutes.
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
