import React, { useState } from 'react';
import {
  AccountSize,
  ChallengeModelType,
  TradingPlatform,
  AccountCurrency,
  AddOnOption,
} from '../types';
import { PRICING_TIERS, MODEL_SPECS } from '../data/mockData';
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldAlert,
  HelpCircle,
  Tag,
  ArrowRight,
  Clock,
  Layers,
  Award,
  DollarSign,
} from 'lucide-react';

interface ChallengeConfiguratorProps {
  onStartCheckout: (config: {
    model: ChallengeModelType;
    size: AccountSize;
    platform: TradingPlatform;
    currency: AccountCurrency;
    addOns: string[];
    finalPrice: number;
    discountAmount: number;
  }) => void;
}

export const ChallengeConfigurator: React.FC<ChallengeConfiguratorProps> = ({
  onStartCheckout,
}) => {
  const [selectedModel, setSelectedModel] = useState<ChallengeModelType>('two_step');
  const [selectedSize, setSelectedSize] = useState<AccountSize>(100000);
  const [selectedPlatform, setSelectedPlatform] = useState<TradingPlatform>('mt5');
  const [selectedCurrency, setSelectedCurrency] = useState<AccountCurrency>('USD');

  // Coupon state
  const [couponCode, setCouponCode] = useState('HANGNOR20');
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discountPercent: number;
  } | null>({ code: 'HANGNOR20', discountPercent: 20 });
  const [couponMsg, setCouponMsg] = useState('20% Launch Discount Applied!');

  // Add-ons
  const [addOns, setAddOns] = useState<AddOnOption[]>([
    {
      id: 'split90',
      name: '90% Lifetime Profit Split',
      description: 'Keep 90% of all payouts from day one (Base is 80%)',
      percentageAdd: 15,
      selected: true,
    },
    {
      id: 'fastPayout',
      name: 'Fast 7-Day First Payout',
      description: 'Request first profit withdrawal after only 7 trading days',
      percentageAdd: 10,
      selected: false,
    },
    {
      id: 'doubleLeverage',
      name: 'Double Leverage (1:200 Forex)',
      description: 'Trade with increased purchasing power on currency pairs',
      percentageAdd: 10,
      selected: false,
    },
  ]);

  const toggleAddOn = (id: string) => {
    setAddOns((prev) =>
      prev.map((addon) =>
        addon.id === id ? { ...addon, selected: !addon.selected } : addon
      )
    );
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = couponCode.trim().toUpperCase();
    if (cleanCode === 'HANGNOR20' || cleanCode === 'HANGNOR' || cleanCode === 'LAUNCH20') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 20 });
      setCouponMsg('20% discount coupon applied successfully!');
    } else if (cleanCode === 'VIP30') {
      setAppliedCoupon({ code: cleanCode, discountPercent: 30 });
      setCouponMsg('Special VIP 30% discount applied!');
    } else if (cleanCode === '') {
      setAppliedCoupon(null);
      setCouponMsg('');
    } else {
      setCouponMsg('Invalid promo code. Use HANGNOR20 for 20% off.');
    }
  };

  // Find pricing for chosen tier
  const tier = PRICING_TIERS.find((t) => t.size === selectedSize) || PRICING_TIERS[4];
  
  let basePrice = tier.twoStepPrice;
  if (selectedModel === 'one_step') basePrice = tier.oneStepPrice;
  if (selectedModel === 'instant') basePrice = tier.instantPrice;

  const originalPrice = Math.round(basePrice * tier.originalPriceMultiplier);

  // Calculate add-on sum
  const activeAddOns = addOns.filter((a) => a.selected);
  const addOnsCost = activeAddOns.reduce(
    (acc, item) => acc + Math.round((basePrice * item.percentageAdd) / 100),
    0
  );

  const subtotal = basePrice + addOnsCost;
  const discountPercent = appliedCoupon ? appliedCoupon.discountPercent : 0;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalPrice = subtotal - discountAmount;

  const currentSpec = MODEL_SPECS[selectedModel];

  const handleCheckoutClick = () => {
    onStartCheckout({
      model: selectedModel,
      size: selectedSize,
      platform: selectedPlatform,
      currency: selectedCurrency,
      addOns: activeAddOns.map((a) => a.name),
      finalPrice,
      discountAmount,
    });
  };

  return (
    <section id="challenges" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
      {/* Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>CHALLENGE SELECTOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            CHOOSE YOUR FUNDING MODEL
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Fair trading rules, raw 0.0 pip spreads, unlimited time to pass, and a 100% refundable fee on your first payout.
          </p>
        </div>

        {/* Step 1: Model Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          
          {/* 2-Step Standard */}
          <button
            id="tab-model-two-step"
            onClick={() => setSelectedModel('two_step')}
            className={`relative p-6 rounded-sm border text-left transition-all cursor-pointer ${
              selectedModel === 'two_step'
                ? 'bg-[#0E0E0E] border-cyan-500 shadow-xl shadow-cyan-500/10'
                : 'bg-[#0A0A0A] border-[#222] hover:border-[#333] text-gray-400'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                2-STEP EVALUATION
              </span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase bg-[#080808] border border-[#222] px-2 py-0.5 rounded-sm">
                POPULAR
              </span>
            </div>
            <div className="text-lg font-black text-[#F0F0F0] font-display">Hangnor Standard</div>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              8% &amp; 5% targets, 5% daily limit, 10% max drawdown. Best balance of risk and reward.
            </p>
          </button>

          {/* 1-Step Express */}
          <button
            id="tab-model-one-step"
            onClick={() => setSelectedModel('one_step')}
            className={`relative p-6 rounded-sm border text-left transition-all cursor-pointer ${
              selectedModel === 'one_step'
                ? 'bg-[#0E0E0E] border-cyan-500 shadow-xl shadow-cyan-500/10'
                : 'bg-[#0A0A0A] border-[#222] hover:border-[#333] text-gray-400'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm bg-purple-500/15 text-purple-300 border border-purple-500/30">
                1-STEP EVALUATION
              </span>
              <span className="text-[10px] font-bold text-amber-400 uppercase bg-[#080808] border border-[#222] px-2 py-0.5 rounded-sm">
                FAST TRACK
              </span>
            </div>
            <div className="text-lg font-black text-[#F0F0F0] font-display">Hangnor Express</div>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Only 1 phase needed (10% target). Direct path to a funded account for confident traders.
            </p>
          </button>

          {/* Instant Funding */}
          <button
            id="tab-model-instant"
            onClick={() => setSelectedModel('instant')}
            className={`relative p-6 rounded-sm border text-left transition-all cursor-pointer ${
              selectedModel === 'instant'
                ? 'bg-[#0E0E0E] border-cyan-500 shadow-xl shadow-cyan-500/10'
                : 'bg-[#0A0A0A] border-[#222] hover:border-[#333] text-gray-400'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                INSTANT FUNDING
              </span>
              <span className="text-[10px] font-bold text-cyan-400 uppercase bg-[#080808] border border-[#222] px-2 py-0.5 rounded-sm">
                NO EVALUATION
              </span>
            </div>
            <div className="text-lg font-black text-[#F0F0F0] font-display">Hangnor Direct</div>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Skip tests completely. Start earning from trade one with immediate profit withdrawals.
            </p>
          </button>
        </div>

        {/* Step 2: Capital Size Selector */}
        <div className="mb-10 text-center">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-3">
            SELECT ACCOUNT CAPITAL
          </div>
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-[#0A0A0A] rounded-sm border border-[#222]">
            {PRICING_TIERS.map((tierItem) => (
              <button
                key={tierItem.size}
                id={`btn-size-${tierItem.size}`}
                onClick={() => setSelectedSize(tierItem.size)}
                className={`px-5 py-2.5 rounded-sm font-mono text-xs font-bold transition-all cursor-pointer ${
                  selectedSize === tierItem.size
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20 font-black'
                    : 'text-gray-400 hover:text-white hover:bg-[#151515]'
                }`}
              >
                {tierItem.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Detailed Specifications Table & Checkout Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 7 Columns: Challenge Rules & Specifications */}
          <div className="lg:col-span-7 bg-[#0A0A0A] rounded-sm border border-[#222] p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#222] gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#F0F0F0] font-display flex items-center gap-2">
                  <span>{currentSpec.name} Specifications</span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-sm bg-cyan-500/20 text-cyan-300">
                    {tier.label} Capital
                  </span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">{currentSpec.tagline}</p>
              </div>

              {/* Platform Chips */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Platform:</span>
                {(['mt5', 'ctrader', 'tradingview'] as TradingPlatform[]).map((plt) => (
                  <button
                    key={plt}
                    onClick={() => setSelectedPlatform(plt)}
                    className={`px-3 py-1 rounded-sm text-xs font-bold uppercase transition-all cursor-pointer ${
                      selectedPlatform === plt
                        ? 'bg-cyan-500 text-black font-black'
                        : 'bg-[#151515] border border-[#222] text-gray-400 hover:text-white'
                    }`}
                  >
                    {plt === 'tradingview' ? 'TradingView' : plt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Spec Matrix List */}
            <div className="divide-y divide-[#1A1A1A] text-sm">
              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Phase 1 Profit Target</span>
                <span className="text-[#F0F0F0] font-mono font-bold">{currentSpec.phase1Target}</span>
              </div>

              {selectedModel === 'two_step' && (
                <div className="py-3.5 flex items-center justify-between">
                  <span className="text-gray-400 font-medium">Phase 2 Profit Target</span>
                  <span className="text-[#F0F0F0] font-mono font-bold">{currentSpec.phase2Target}</span>
                </div>
              )}

              <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Daily Drawdown Limit</span>
                  <span className="text-[10px] bg-[#151515] border border-[#222] text-gray-400 px-2 py-0.5 rounded-sm">Resets 00:00 UTC</span>
                </div>
                <span className="text-amber-400 font-mono font-bold">{currentSpec.dailyDrawdown}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Max Overall Drawdown</span>
                <span className="text-rose-400 font-mono font-bold">{currentSpec.maxDrawdown}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Minimum Trading Days</span>
                <span className="text-emerald-400 font-mono font-bold">{currentSpec.minTradingDays}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Trading Period Duration</span>
                <span className="text-emerald-400 font-mono font-bold">{currentSpec.tradingPeriod}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Maximum Leverage</span>
                <span className="text-[#F0F0F0] font-mono font-bold">{currentSpec.leverage}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Base Profit Split</span>
                <span className="text-cyan-300 font-mono font-bold">{currentSpec.profitSplit}</span>
              </div>

              <div className="py-3.5 flex items-center justify-between">
                <span className="text-gray-400 font-medium">Fee Refund Policy</span>
                <span className="text-emerald-400 font-mono font-bold">{currentSpec.refundable}</span>
              </div>
            </div>

            {/* Interactive Add-on Upgrades */}
            <div className="mt-6 pt-6 border-t border-[#222]">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-sm"></span>
                <span>OPTIONAL ACCOUNT UPGRADES</span>
              </div>

              <div className="space-y-2.5">
                {addOns.map((addon) => (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddOn(addon.id)}
                    className={`p-3.5 rounded-sm border flex items-center justify-between transition-all cursor-pointer ${
                      addon.selected
                        ? 'bg-[#111] border-cyan-500 text-white'
                        : 'bg-[#080808] border-[#222] text-gray-400 hover:border-[#333]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-none flex items-center justify-center border transition-all ${
                          addon.selected
                            ? 'bg-cyan-500 border-cyan-400 text-black'
                            : 'border-[#333] bg-[#080808]'
                        }`}
                      >
                        {addon.selected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#F0F0F0]">{addon.name}</div>
                        <div className="text-[11px] text-gray-400">{addon.description}</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono font-bold text-cyan-300 shrink-0">
                      +{addon.percentageAdd}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 5 Columns: Price Summary & Checkout Order Box */}
          <div className="lg:col-span-5 bg-[#0A0A0A] rounded-sm border border-[#222] p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-sm bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest shadow-md">
              100% Refundable
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
              Order Overview
            </div>
            <div className="text-2xl font-black text-[#F0F0F0] font-display">
              {tier.label} {currentSpec.name}
            </div>
            <div className="text-xs text-gray-400 mt-1.5 flex items-center gap-2">
              <span>Platform: <strong className="text-white uppercase">{selectedPlatform}</strong></span>
              <span>•</span>
              <span>Currency: <strong className="text-white">{selectedCurrency}</strong></span>
            </div>

            {/* Price Calculations */}
            <div className="my-6 p-4 rounded-sm bg-[#080808] border border-[#222] space-y-3">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Standard Price</span>
                <span className="line-through font-mono text-gray-600">${originalPrice}</span>
              </div>

              <div className="flex justify-between text-xs text-gray-300">
                <span>Base Challenge Fee</span>
                <span className="font-mono font-semibold">${basePrice}</span>
              </div>

              {addOnsCost > 0 && (
                <div className="flex justify-between text-xs text-gray-300">
                  <span>Selected Upgrades ({activeAddOns.length})</span>
                  <span className="font-mono font-semibold text-cyan-300">+${addOnsCost}</span>
                </div>
              )}

              {discountAmount > 0 && (
                <div className="flex justify-between text-xs text-emerald-400 font-semibold pt-2 border-t border-[#222]">
                  <span>Promo Code Discount ({appliedCoupon?.code} -{discountPercent}%)</span>
                  <span className="font-mono">-${discountAmount}</span>
                </div>
              )}

              <div className="pt-3 border-t border-[#222] flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">Total To Pay</div>
                  <div className="text-[10px] text-emerald-400">Refunded upon 1st payout</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-[#F0F0F0] font-mono">
                    ${finalPrice}
                  </div>
                  <div className="text-[10px] text-gray-500">One-time payment • No recurring fees</div>
                </div>
              </div>
            </div>

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="mb-6">
              <label htmlFor="coupon-input" className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                Have a Promo Code?
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="coupon-input"
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon (e.g. HANGNOR20)"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#080808] border border-[#222] rounded-sm text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#151515] hover:bg-[#222] text-xs font-bold text-white rounded-sm border border-[#333] cursor-pointer uppercase tracking-wider"
                >
                  Apply
                </button>
              </div>
              {couponMsg && (
                <div className={`text-[11px] mt-1.5 font-medium ${appliedCoupon ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {couponMsg}
                </div>
              )}
            </form>

            {/* Primary Buy Button */}
            <button
              id="btn-buy-challenge"
              onClick={handleCheckoutClick}
              className="w-full py-4 rounded-sm font-bold text-xs text-black bg-cyan-500 hover:bg-cyan-400 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest"
            >
              <span>Enroll In Challenge (${finalPrice})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Safe Badges */}
            <div className="mt-4 pt-4 border-t border-[#222] flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Instant Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Crypto &amp; Card
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
