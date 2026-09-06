export type ChallengeModelType = 'two_step' | 'one_step' | 'instant';

export type AccountSize = 5000 | 10000 | 25000 | 50000 | 100000 | 200000;

export type TradingPlatform = 'mt5' | 'ctrader' | 'tradingview';

export type AccountCurrency = 'USD' | 'EUR' | 'GBP' | 'USDT';

export interface ChallengePricingTier {
  size: AccountSize;
  label: string;
  twoStepPrice: number;
  oneStepPrice: number;
  instantPrice: number;
  originalPriceMultiplier: number;
}

export interface ModelSpecification {
  model: ChallengeModelType;
  name: string;
  badge: string;
  tagline: string;
  phase1Target: string;
  phase2Target: string;
  dailyDrawdown: string;
  maxDrawdown: string;
  minTradingDays: string;
  tradingPeriod: string;
  leverage: string;
  profitSplit: string;
  refundable: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  percentageAdd: number;
  selected: boolean;
}

export interface PayoutRecord {
  id: string;
  traderName: string;
  country: string;
  countryCode: string;
  amount: number;
  method: 'USDT (TRC20)' | 'Bitcoin' | 'Rise' | 'Bank Wire' | 'Wise';
  timeAgo: string;
  accountSize: string;
  verified: boolean;
  txHash?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'evaluation' | 'rules' | 'payouts' | 'platforms';
}

export interface SimulatedTrade {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  lots: number;
  pnl: number;
  time: string;
  status: 'CLOSED' | 'OPEN';
}

export interface CheckoutData {
  model: ChallengeModelType;
  size: AccountSize;
  platform: TradingPlatform;
  currency: AccountCurrency;
  addOns: string[];
  finalPrice: number;
  discountApplied: number;
  traderName: string;
  email: string;
  country: string;
}
