import React, { useState } from 'react';
import { X, Lock, User, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSimulator: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({
  isOpen,
  onClose,
  onJumpToSimulator,
}) => {
  const [loginId, setLoginId] = useState('HF-882941');
  const [password, setPassword] = useState('••••••••••••');
  const [remember, setRemember] = useState(true);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    onJumpToSimulator();
  };

  return (
    <div
      id="portal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade"
    >
      <div
        id="portal-modal-container"
        className="relative w-full max-w-md bg-[#0A0A0A] rounded-sm border border-[#222] shadow-2xl p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-sm bg-[#111] hover:bg-[#1a1a1a] text-gray-400 hover:text-white border border-[#222] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center pb-6 border-b border-[#222]">
          <div className="w-6 h-6 bg-cyan-500 rotate-45 flex items-center justify-center mx-auto mb-4 shadow-md shadow-cyan-500/20">
            <div className="w-2.5 h-2.5 bg-[#0A0A0A] -rotate-45" />
          </div>
          <h3 className="text-xl font-black text-[#F0F0F0] uppercase tracking-wider font-display">
            HANGNOR TRADER PORTAL
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Access your evaluation metrics, certificates &amp; payout requests
          </p>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4 my-6">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Account Login / ID
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="e.g. HF-882941"
                className="w-full pl-9 pr-3 py-2 bg-[#080808] border border-[#222] rounded-sm text-xs font-mono text-[#F0F0F0] focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full pl-9 pr-3 py-2 bg-[#080808] border border-[#222] rounded-sm text-xs text-[#F0F0F0] focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded-sm bg-[#111] border-[#333] text-cyan-500 focus:ring-0"
              />
              <span>Remember me</span>
            </label>
            <a href="#reset" onClick={(e) => e.preventDefault()} className="text-cyan-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest text-black bg-cyan-500 hover:bg-cyan-400 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Sign In to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-[#222] text-center">
          <p className="text-xs text-gray-500 mb-2">Want to try without credentials?</p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onJumpToSimulator();
            }}
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-1 mx-auto cursor-pointer uppercase tracking-wider"
          >
            <span>Launch Live Interactive Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
