import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Lock,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react';
import { AccountSize, ChallengeModelType, TradingPlatform, AccountCurrency } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    model: ChallengeModelType;
    size: AccountSize;
    platform: TradingPlatform;
    currency: AccountCurrency;
    addOns: string[];
    finalPrice: number;
    discountAmount: number;
  } | null;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  orderData,
}) => {
  const [traderName, setTraderName] = useState('Alex Morgan');
  const [email, setEmail] = useState('trader@hangnorfunded.com');
  const [country, setCountry] = useState('United States');
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'card' | 'applepay'>('crypto');
  const [cryptoAsset, setCryptoAsset] = useState<'USDT_TRC20' | 'BTC' | 'ETH'>('USDT_TRC20');
  const [agreedTerms, setAgreedTerms] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Generated credentials after order
  const [credentials, setCredentials] = useState<{
    accountId: string;
    server: string;
    platform: string;
    login: string;
    investorPass: string;
  } | null>(null);

  if (!isOpen || !orderData) return null;

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setOrderCompleted(true);

      const randomAcc = Math.floor(100000 + Math.random() * 900000);
      setCredentials({
        accountId: `HF-${randomAcc}`,
        server: `HangnorFunded-${orderData.platform.toUpperCase()}-Live01`,
        platform: orderData.platform.toUpperCase(),
        login: `${randomAcc}`,
        investorPass: `HnF!${Math.random().toString(36).slice(-6)}`,
      });

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#06b6d4', '#10b981', '#ffffff', '#fbbf24'],
      });
    }, 1500);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getModelName = (model: ChallengeModelType) => {
    if (model === 'two_step') return 'Hangnor Standard (2-Step)';
    if (model === 'one_step') return 'Hangnor Express (1-Step)';
    return 'Hangnor Direct (Instant Funding)';
  };

  return (
    <div
      id="checkout-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade"
    >
      <div
        id="checkout-modal-container"
        className="relative w-full max-w-2xl bg-[#0A0A0A] rounded-sm border border-[#222] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-sm bg-[#111] hover:bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#222] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!orderCompleted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 pb-5 border-b border-[#222]">
              <div className="w-5 h-5 bg-cyan-500 rotate-45 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <div className="w-2 h-2 bg-[#0A0A0A] -rotate-45" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#F0F0F0] uppercase tracking-wider font-display">
                  SECURE CHALLENGE CHECKOUT
                </h3>
                <p className="text-xs text-gray-400">
                  Instant account credential delivery upon confirmation
                </p>
              </div>
            </div>

            {/* Order Review Box */}
            <div className="my-5 p-4 rounded-sm bg-[#080808] border border-[#222] text-xs space-y-2">
              <div className="flex justify-between font-bold text-[#F0F0F0] text-sm">
                <span>{getModelName(orderData.model)}</span>
                <span className="font-mono text-cyan-400">${orderData.size.toLocaleString()} Capital</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Platform &amp; Currency:</span>
                <span className="text-gray-300 uppercase font-mono">
                  {orderData.platform} • {orderData.currency}
                </span>
              </div>
              {orderData.addOns.length > 0 && (
                <div className="flex justify-between text-gray-400">
                  <span>Included Add-ons:</span>
                  <span className="text-cyan-300">{orderData.addOns.join(', ')}</span>
                </div>
              )}
              {orderData.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Promotional Discount:</span>
                  <span>-${orderData.discountAmount}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#222] flex justify-between font-bold text-sm">
                <span className="text-[#F0F0F0]">Amount Due:</span>
                <span className="text-xl font-mono text-cyan-400">${orderData.finalPrice}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleCompleteOrder} className="space-y-4">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Trader Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={traderName}
                    onChange={(e) => setTraderName(e.target.value)}
                    className="w-full px-3 py-2 bg-[#080808] border border-[#222] rounded-sm text-xs text-[#F0F0F0] focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-[#080808] border border-[#222] rounded-sm text-xs text-[#F0F0F0] focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Country of Residence
                </label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 bg-[#080808] border border-[#222] rounded-sm text-xs text-[#F0F0F0] focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`py-2.5 px-3 rounded-sm border text-[10px] font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === 'crypto'
                        ? 'bg-[#111] border-cyan-400 text-cyan-400'
                        : 'bg-[#080808] border-[#222] text-gray-400 hover:text-[#F0F0F0]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Crypto (0% Fee)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-3 rounded-sm border text-[10px] font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#111] border-cyan-400 text-cyan-400'
                        : 'bg-[#080808] border-[#222] text-gray-400 hover:text-[#F0F0F0]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-gray-300" />
                    <span>Card / Debit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`py-2.5 px-3 rounded-sm border text-[10px] font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      paymentMethod === 'applepay'
                        ? 'bg-[#111] border-cyan-400 text-cyan-400'
                        : 'bg-[#080808] border-[#222] text-gray-400 hover:text-[#F0F0F0]'
                    }`}
                  >
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>Apple / Google Pay</span>
                  </button>
                </div>
              </div>

              {/* Crypto selector details */}
              {paymentMethod === 'crypto' && (
                <div className="p-3 bg-[#080808] rounded-sm border border-[#222] text-xs">
                  <div className="text-gray-400 mb-1 font-bold text-[10px] uppercase tracking-wider">Select Network Currency:</div>
                  <div className="flex gap-2">
                    {(['USDT_TRC20', 'BTC', 'ETH'] as const).map((coin) => (
                      <button
                        type="button"
                        key={coin}
                        onClick={() => setCryptoAsset(coin)}
                        className={`px-3 py-1 rounded-sm text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                          cryptoAsset === coin
                            ? 'bg-cyan-500 text-black'
                            : 'bg-[#111] text-gray-400 border border-[#222] hover:text-[#F0F0F0]'
                        }`}
                      >
                        {coin.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Agreement checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-gray-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => setAgreedTerms(e.target.checked)}
                    className="mt-0.5 rounded-sm bg-[#111] border-[#333] text-cyan-500 focus:ring-0"
                  />
                  <span>
                    I agree to the Hangnor Funded evaluation rules, risk disclosure, and confirm my fee is 100% refundable with my first payout.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing || !agreedTerms}
                className="w-full py-4 rounded-sm font-bold text-xs uppercase tracking-widest text-black bg-cyan-500 hover:bg-cyan-400 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                    <span>Processing Order &amp; Generating MT5 Account...</span>
                  </span>
                ) : (
                  <span>Complete Enrollment &bull; Pay ${orderData.finalPrice}</span>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-wider">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>256-bit SSL Encryption • Instant Auto-Provisioning</span>
              </div>
            </form>
          </div>
        ) : (
          /* Order Confirmed View with Credentials */
          <div className="text-center py-4 space-y-5 animate-fade">
            <div className="w-14 h-14 rounded-sm bg-[#111] border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#F0F0F0] font-display uppercase tracking-wider">
                Welcome To Hangnor Funded!
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Your evaluation account has been successfully provisioned on {credentials?.platform}.
              </p>
            </div>

            {/* Credentials Card */}
            <div className="bg-[#080808] rounded-sm border border-[#222] p-5 text-left font-mono text-xs space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                <span className="text-gray-400">Account ID:</span>
                <span className="text-cyan-400 font-bold">{credentials?.accountId}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                <span className="text-gray-400">Server:</span>
                <span className="text-[#F0F0F0]">{credentials?.server}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                <span className="text-gray-400">Login ID:</span>
                <span className="text-emerald-400 font-bold">{credentials?.login}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#222]">
                <span className="text-gray-400">Investor Password:</span>
                <span className="text-amber-400 font-bold">{credentials?.investorPass}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Starting Balance:</span>
                <span className="text-[#F0F0F0] font-bold">${orderData.size.toLocaleString()}.00</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => copyToClipboard(
                  `Hangnor Funded Credentials:\nAccount ID: ${credentials?.accountId}\nServer: ${credentials?.server}\nLogin: ${credentials?.login}\nPassword: ${credentials?.investorPass}`,
                  'all'
                )}
                className="flex-1 py-3 rounded-sm bg-[#111] hover:bg-[#1a1a1a] text-gray-300 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[#222] cursor-pointer"
              >
                {copiedField === 'all' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedField === 'all' ? 'Copied to Clipboard!' : 'Copy Credentials'}</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-sm bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20"
              >
                <span>Launch Trader Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
