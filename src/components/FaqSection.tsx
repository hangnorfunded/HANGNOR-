import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { FAQ_LIST } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'evaluation', label: 'Evaluation & Challenges' },
    { id: 'rules', label: 'Trading Rules & Risk' },
    { id: 'payouts', label: 'Payouts & Fee Refund' },
    { id: 'platforms', label: 'Platforms & Spreads' },
  ];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesCat = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#080808] border-b border-[#222]">
      {/* Micro Dot Matrix */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#22D3EE 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight font-display">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Everything you need to know about trading accounts, rules, and payouts with Hangnor Funded.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0A0A0A] rounded-sm border border-[#222] w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-black'
                    : 'text-gray-400 hover:text-[#F0F0F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rules, payouts..."
              className="w-full pl-9 pr-3 py-2 bg-[#0A0A0A] border border-[#222] rounded-sm text-xs text-[#F0F0F0] placeholder-gray-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0A0A0A] rounded-sm border border-[#222] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#111]/50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#F0F0F0]">
                      {item.question}
                    </span>
                    <span className="p-1 rounded-sm bg-[#111] border border-[#222] text-cyan-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-[#222]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-gray-500 text-sm">
              No matching questions found. Try another search keyword.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
