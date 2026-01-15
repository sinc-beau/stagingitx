'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Shield, Award, Database, Target, CheckCircle, DollarSign, TrendingDown, Activity, Sparkles, Users, Crown } from 'lucide-react';

const tierData = {
  vanguard: {
    name: 'VANGUARD',
    subtitle: 'Diamond Partnership',
    price: '$1,129,000',
    minEngagements: 721,
    avgEngagements: 971,
    features: {
      forums: {
        title: 'Diamond Keynote Sponsor',
        desc: 'All 5 ITx Collective Forums',
        icon: Award
      },
      dinners: {
        count: 16,
        quarterly: 4,
        title: 'Custom Executive Dinners (Tier 1)'
      },
      digital: {
        count: 16,
        quarterly: 4,
        title: 'Digital Roundtables (vRT)'
      },
      leadersCircle: {
        title: 'Lead Sponsor',
        desc: 'Exclusive ownership',
        icon: Crown
      },
      council: {
        title: 'ITx Collective Council Seat',
        desc: 'Ongoing strategic interactions',
        icon: Users
      },
      survey: {
        title: 'Exclusive CIO Spotlight',
        desc: '100 CIO proprietary dataset'
      },
      extras: [
        'Exclusive Experience Choice at Forums',
        'Year-Round Vanguard Branding',
        'ITx Collective Council Seat',
        'Concierge Support (12 months)',
        'Proprietary CIO Survey Rights',
        'Long-Form Storytelling Opportunities'
      ]
    },
    pricing: {
      forums: { name: 'Diamond Keynote @ Forums', unitPrice: 59950, quantity: 5, total: 299750 },
      forumExperience: { name: 'Forum Exclusive Experience', unitPrice: 25000, quantity: 5, total: 125000 },
      dinners: { name: 'Custom Executive Dinners (Tier 1)', unitPrice: 32945, quantity: 16, total: 527120 },
      digital: { name: 'Digital Roundtables (vRT)', unitPrice: 22500, quantity: 16, total: 360000 },
      leadersCircle: { name: 'FutureScale Session (Lead)', price: 30000 },
      council: { name: 'ITx Collective Council Seat', price: 50000 },
      survey: { name: 'Exclusive CIO Spotlight (100 CIOs)', price: 30000 },
      concierge: { name: 'Concierge Support (12 months)', price: 25000 },
      rateCard: 1411870,
      discount: 20,
      savings: 282870,
      finalPrice: 1129000
    }
  },
  innovator: {
    name: 'INNOVATOR',
    subtitle: 'Platinum Partnership',
    price: '$604,000',
    minEngagements: 493,
    avgEngagements: 641,
    features: {
      forums: {
        title: 'Platinum Session Sponsor',
        desc: 'All 5 ITx Collective Forums',
        icon: Award
      },
      dinners: {
        count: 8,
        quarterly: 2,
        title: 'Custom Executive Dinners'
      },
      digital: {
        count: 8,
        quarterly: 2,
        title: 'Digital Roundtables (vRT)'
      },
      leadersCircle: {
        title: 'Shared Participation',
        desc: 'FutureScale Session',
        icon: Target
      },
      council: {
        title: 'N/A',
        desc: '',
        icon: null
      },
      survey: {
        title: 'Topline Findings',
        desc: 'From 100 CIO dataset'
      },
      extras: [
        'Digital Visibility Year-Round',
        'Bi-Annual ROI Reporting',
        'Thought Leadership Distribution',
        'Innovator Partner Recognition',
        'Benchmarking Reports Access'
      ]
    },
    pricing: {
      forums: { name: 'Platinum Sessions @ Forums', unitPrice: 44950, quantity: 5, total: 224750 },
      dinners: { name: 'Custom Executive Dinners', unitPrice: 32945, quantity: 8, total: 263560 },
      digital: { name: 'Digital Roundtables (vRT)', unitPrice: 22500, quantity: 8, total: 180000 },
      futurescale: { name: 'ITx FutureScale Session (Shared)', price: 22500 },
      survey: { name: 'Survey Access (Topline)', price: 20000 },
      rateCard: 710810,
      discount: 15,
      savings: 106810,
      finalPrice: 604000
    }
  },
  connector: {
    name: 'CONNECTOR',
    subtitle: 'Gold Partnership',
    price: '$395,000',
    minEngagements: 429,
    avgEngagements: 525,
    features: {
      forums: {
        title: 'Gold Shared Sponsor',
        desc: 'All 5 ITx Collective Forums',
        icon: Target
      },
      dinners: {
        count: 4,
        quarterly: 1,
        title: 'Custom Executive Dinners'
      },
      digital: {
        count: 4,
        quarterly: 1,
        title: 'Digital Roundtables (vRT)'
      },
      leadersCircle: {
        title: 'Shared Participation',
        desc: 'ITx Leaders Circle',
        icon: Target
      },
      council: {
        title: 'N/A',
        desc: '',
        icon: null
      },
      survey: {
        title: 'Executive Summary',
        desc: 'Key highlights only'
      },
      extras: [
        'Digital Content Distribution',
        'Connector Partner Recognition',
        'Newsletter Presence',
        'Community Channel Access'
      ]
    },
    pricing: {
      forums: { name: 'Gold Shared Slots @ Forums', unitPrice: 34950, quantity: 5, total: 174750 },
      dinners: { name: 'Custom Executive Dinners', unitPrice: 32945, quantity: 4, total: 131780 },
      digital: { name: 'Digital Roundtables (vRT)', unitPrice: 22500, quantity: 4, total: 90000 },
      leadersCircle: { name: 'FutureScale Session (Shared)', price: 22500 },
      survey: { name: 'Survey Access (Summary)', price: 20000 },
      rateCard: 439030,
      discount: 10,
      savings: 44030,
      finalPrice: 395000
    }
  }
};

type TierKey = keyof typeof tierData;

interface ITxCombinedHeroMetricsProps {
  selectedTier: TierKey;
  onTierChange: (tier: TierKey) => void;
  onOpenModal: () => void;
}

export function ITxCombinedHeroMetrics({ selectedTier, onTierChange, onOpenModal }: ITxCombinedHeroMetricsProps) {
  const [glitchText, setGlitchText] = useState('ITx Collective');
  const [activeTab, setActiveTab] = useState<'benefits' | 'events' | 'pricing' | 'extras'>('benefits');

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
      const originalText = 'ITx Collective';

      setGlitchText(originalText.split('').map((char) =>
        Math.random() > 0.95 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
      ).join(''));

      setTimeout(() => setGlitchText(originalText), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const currentTier = tierData[selectedTier];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 11, 232, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 11, 232, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-purple-500/30 px-6 py-2 rounded-full text-xs font-bold tracking-wider mb-8 uppercase" style={{ color: '#4B0BE8' }}>
            <Lock className="w-3 h-3" />
            Partnership Prospectus
            <Shield className="w-3 h-3" />
          </div>

          <h1 className="text-7xl lg:text-9xl font-black mb-8">
            <span className="text-white relative inline-block">
              <span className="relative z-10">{glitchText}</span>
              <span className="absolute inset-0 opacity-50" style={{ color: '#4B0BE8', transform: 'translateX(2px) translateY(-2px)' }}>
                ITx Collective
              </span>
            </span>
            <span className="block mt-2 text-6xl lg:text-7xl" style={{ color: '#4B0BE8' }}>
              PARTNERSHIPS
            </span>
          </h1>

          <p className="text-xl text-white/40 mb-12 max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-wider">
            The Premier IT Leadership Community // Exclusive Access // Strategic Partnerships
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(Object.keys(tierData) as TierKey[]).map((key) => (
              <button
                key={key}
                onClick={() => onTierChange(key)}
                className="relative px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all duration-300 overflow-hidden group"
                style={{
                  background: selectedTier === key ? '#4B0BE8' : 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  border: selectedTier === key ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  transform: selectedTier === key ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: selectedTier === key ? '0 10px 30px -5px rgba(75, 11, 232, 0.5)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (selectedTier !== key) {
                    e.currentTarget.style.borderColor = 'rgba(75, 11, 232, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTier !== key) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
              >
                <span className="relative z-10">{tierData[key].name}</span>
                {selectedTier === key && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border-2 rounded-2xl p-12 shadow-2xl relative overflow-hidden"
            style={{ borderColor: 'rgba(75, 11, 232, 0.3)' }}
          >
            <div className="absolute inset-0 opacity-5" style={{ background: '#4B0BE8' }} />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-5xl font-black mb-2" style={{ color: '#4B0BE8' }}>
                  {currentTier.name}
                </h2>
                <p className="text-lg text-white/40 font-bold uppercase tracking-wider mb-4">
                  {currentTier.subtitle}
                </p>
                <div className="text-6xl font-black text-white">
                  {currentTier.price}
                  <span className="text-lg text-white/50 font-normal ml-2">USD</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-black mb-2" style={{ color: '#4B0BE8' }}>
                    {currentTier.minEngagements}
                  </div>
                  <div className="text-xs text-white/40 font-bold uppercase">
                    Min Leads Generated
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-black mb-2" style={{ color: '#4B0BE8' }}>
                    {currentTier.avgEngagements}
                  </div>
                  <div className="text-xs text-white/40 font-bold uppercase">
                    Avg Leads Generated
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {(['benefits', 'events', 'pricing', 'extras'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300"
                    style={{
                      background: activeTab === tab ? '#4B0BE8' : 'rgba(255, 255, 255, 0.05)',
                      color: activeTab === tab ? 'white' : 'rgba(255, 255, 255, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      if (activeTab !== tab) {
                        e.currentTarget.style.color = 'white';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeTab !== tab) {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
                      }
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'benefits' && (
                    <motion.div
                      key="benefits"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-6"
                    >
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <Award className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                          <h3 className="font-bold text-sm uppercase" style={{ color: '#4B0BE8' }}>
                            Forum Sponsorship
                          </h3>
                        </div>
                        <div className="text-xl font-bold text-white mb-2">
                          {currentTier.features.forums.title}
                        </div>
                        <div className="text-sm text-white/60">
                          {currentTier.features.forums.desc}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          {currentTier.features.leadersCircle.icon && (
                            <currentTier.features.leadersCircle.icon className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                          )}
                          <h3 className="font-bold text-sm uppercase" style={{ color: '#4B0BE8' }}>
                            FutureScale Session
                          </h3>
                        </div>
                        <div className="text-xl font-bold text-white mb-2">
                          {currentTier.features.leadersCircle.title}
                        </div>
                        <div className="text-sm text-white/60">
                          {currentTier.features.leadersCircle.desc}
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <Database className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                          <h3 className="font-bold text-sm uppercase" style={{ color: '#4B0BE8' }}>
                            CIO Survey Access
                          </h3>
                        </div>
                        <div className="text-xl font-bold text-white mb-2">
                          {currentTier.features.survey.title}
                        </div>
                        <div className="text-sm text-white/60">
                          {currentTier.features.survey.desc}
                        </div>
                      </div>

                      {selectedTier === 'vanguard' && (
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                          <div className="flex items-center gap-3 mb-4">
                            <Users className="w-5 h-5" style={{ color: '#4B0BE8' }} />
                            <h3 className="font-bold text-sm uppercase" style={{ color: '#4B0BE8' }}>
                              Council Seat
                            </h3>
                          </div>
                          <div className="text-xl font-bold text-white mb-2">
                            {currentTier.features.council.title}
                          </div>
                          <div className="text-sm text-white/60">
                            {currentTier.features.council.desc}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'events' && (
                    <motion.div
                      key="events"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {currentTier.features.dinners.title}
                            </h3>
                            <p className="text-white/60">
                              Intimate gatherings of 10-20 senior executives
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-black" style={{ color: '#4B0BE8' }}>
                              {currentTier.features.dinners.count}
                            </div>
                            <div className="text-xs text-white/50 font-bold uppercase">
                              Per Year
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60 font-bold">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {currentTier.features.dinners.quarterly} per quarter
                        </div>
                      </div>

                      <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {currentTier.features.digital.title}
                            </h3>
                            <p className="text-white/60">
                              60-minute virtual roundtables with 15-25 executives
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-black" style={{ color: '#4B0BE8' }}>
                              {currentTier.features.digital.count}
                            </div>
                            <div className="text-xs text-white/50 font-bold uppercase">
                              Per Year
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/60 font-bold">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {currentTier.features.digital.quarterly} per quarter
                        </div>
                      </div>

                      {/* Forums */}
                      <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          ITx Collective Forums
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-xs font-bold text-white/50 mb-1">EAST</div>
                            <div className="text-white font-bold">March 15-17</div>
                            <div className="text-xs text-white/40">75+ Attendees</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-xs font-bold text-white/50 mb-1">CENTRAL</div>
                            <div className="text-white font-bold">June 7-9</div>
                            <div className="text-xs text-white/40">75+ Attendees</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-xs font-bold text-white/50 mb-1">CANADA</div>
                            <div className="text-white font-bold">TBD August</div>
                            <div className="text-xs text-white/40">75+ Attendees</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-xs font-bold text-white/50 mb-1">WEST</div>
                            <div className="text-white font-bold">Oct 11-13</div>
                            <div className="text-xs text-white/40">75+ Attendees</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-xs font-bold text-white/50 mb-1">NATIONAL</div>
                            <div className="text-white font-bold">Nov 7-9</div>
                            <div className="text-xs text-white/40">75+ Attendees</div>
                          </div>
                        </div>
                      </div>

                      {/* FutureScale Session */}
                      <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">
                          FutureScale Session
                        </h3>
                        <p className="text-white/60 mb-4">
                          Exclusive activation event with 40 senior IT executives
                        </p>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                          <div className="text-xs font-bold text-white/50 mb-1">EXCLUSIVE EVENT</div>
                          <div className="text-white font-bold">40 Senior Executives</div>
                          <div className="text-xs text-white/40">
                            {selectedTier === 'vanguard' ? 'Lead Sponsor' : 'Shared Participation'}
                          </div>
                        </div>
                      </div>

                      {selectedTier === 'vanguard' && (
                        <div className="bg-white/5 rounded-xl p-8 border border-purple-500/20">
                          <h3 className="text-2xl font-bold text-white mb-4">
                            ITx Collective Council
                          </h3>
                          <p className="text-white/60 mb-4">
                            Strategic advisory position with ongoing executive interactions
                          </p>
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="text-xs font-bold text-white/50 mb-1">YEAR-ROUND</div>
                            <div className="text-white font-bold">Council Seat</div>
                            <div className="text-xs text-white/40">Ongoing strategic interactions</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'pricing' && (
                    <motion.div
                      key="pricing"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-400" />
                          Investment Breakdown
                        </h3>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <div className="text-white/70">
                              {currentTier.pricing.forums.name}
                              <span className="text-xs text-white/50 ml-2">
                                ({currentTier.pricing.forums.quantity} × {formatCurrency(currentTier.pricing.forums.unitPrice)})
                              </span>
                            </div>
                            <div className="text-white font-bold">
                              {formatCurrency(currentTier.pricing.forums.total)}
                            </div>
                          </div>

                          {'forumExperience' in currentTier.pricing && currentTier.pricing.forumExperience && (
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                              <div className="text-white/70">
                                {currentTier.pricing.forumExperience.name}
                                <span className="text-xs text-white/50 ml-2">
                                  ({currentTier.pricing.forumExperience.quantity} × {formatCurrency(currentTier.pricing.forumExperience.unitPrice)})
                                </span>
                              </div>
                              <div className="text-white font-bold">
                                {formatCurrency(currentTier.pricing.forumExperience.total)}
                              </div>
                            </div>
                          )}

                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <div className="text-white/70">
                              {currentTier.pricing.dinners.name}
                              <span className="text-xs text-white/50 ml-2">
                                ({currentTier.pricing.dinners.quantity} × {formatCurrency(currentTier.pricing.dinners.unitPrice)})
                              </span>
                            </div>
                            <div className="text-white font-bold">
                              {formatCurrency(currentTier.pricing.dinners.total)}
                            </div>
                          </div>

                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <div className="text-white/70">
                              {currentTier.pricing.digital.name}
                              <span className="text-xs text-white/50 ml-2">
                                ({currentTier.pricing.digital.quantity} × {formatCurrency(currentTier.pricing.digital.unitPrice)})
                              </span>
                            </div>
                            <div className="text-white font-bold">
                              {formatCurrency(currentTier.pricing.digital.total)}
                            </div>
                          </div>

                          {'leadersCircle' in currentTier.pricing && currentTier.pricing.leadersCircle && (
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                              <div className="text-white/70">{currentTier.pricing.leadersCircle.name}</div>
                              <div className="text-white font-bold">
                                {formatCurrency(currentTier.pricing.leadersCircle.price)}
                              </div>
                            </div>
                          )}

                          {'futurescale' in currentTier.pricing && currentTier.pricing.futurescale && (
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                              <div className="text-white/70">{currentTier.pricing.futurescale.name}</div>
                              <div className="text-white font-bold">
                                {formatCurrency(currentTier.pricing.futurescale.price)}
                              </div>
                            </div>
                          )}

                          {'council' in currentTier.pricing && currentTier.pricing.council && (
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                              <div className="text-white/70">{currentTier.pricing.council.name}</div>
                              <div className="text-white font-bold">
                                {formatCurrency(currentTier.pricing.council.price)}
                              </div>
                            </div>
                          )}

                          <div className="flex justify-between items-center py-2 border-b border-white/10">
                            <div className="text-white/70">{currentTier.pricing.survey.name}</div>
                            <div className="text-white font-bold">
                              {formatCurrency(currentTier.pricing.survey.price)}
                            </div>
                          </div>

                          {'concierge' in currentTier.pricing && currentTier.pricing.concierge && (
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                              <div className="text-white/70">{currentTier.pricing.concierge.name}</div>
                              <div className="text-white font-bold">
                                {formatCurrency(currentTier.pricing.concierge.price)}
                              </div>
                            </div>
                          )}

                          {/* Total Value */}
                          <div className="flex justify-between items-center py-4 mt-2">
                            <div className="text-2xl text-white font-black">Total Value</div>
                            <div className="text-3xl text-white font-black">
                              {formatCurrency(currentTier.pricing.rateCard)}
                            </div>
                          </div>

                          {/* Partner Discount */}
                          <div className="flex justify-between items-center py-3 border-t border-white/20">
                            <div className="text-lg font-bold flex items-center gap-2" style={{ color: '#4B0BE8' }}>
                              <TrendingDown className="w-5 h-5" />
                              Partner Discount ({currentTier.pricing.discount}%)
                            </div>
                            <div className="text-xl font-black" style={{ color: '#4B0BE8' }}>
                              -{formatCurrency(currentTier.pricing.savings)}
                            </div>
                          </div>

                          {/* Partner Savings Highlight */}
                          <div className="rounded-lg p-4 border" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-green-400" />
                                <span className="text-lg font-bold text-green-400">Partner Realized Savings</span>
                              </div>
                              <div className="text-2xl font-black text-green-400">
                                {formatCurrency(currentTier.pricing.savings)}
                              </div>
                            </div>
                          </div>

                          {/* Final Package Price */}
                          <div className="flex justify-between items-center py-5 rounded-lg px-4 border-2" style={{ backgroundColor: 'rgba(75, 11, 232, 0.1)', borderColor: 'rgba(75, 11, 232, 0.3)' }}>
                            <div className="text-xl font-black text-white">Package Investment</div>
                            <div className="text-4xl font-black text-white">
                              {formatCurrency(currentTier.pricing.finalPrice)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'extras' && (
                    <motion.div
                      key="extras"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {currentTier.features.extras.map((extra, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-white">{extra}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={onOpenModal}
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-black text-lg uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-2xl"
                  style={{ background: '#4B0BE8', color: 'white' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#3A0BB8')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#4B0BE8')}
                >
                  <Shield className="w-6 h-6" />
                  Secure {currentTier.name} Partnership
                  <Activity className="w-6 h-6" />
                </button>
                <p className="mt-4 text-sm text-white/50 font-bold">
                  LIMITED AVAILABILITY • EXCLUSIVE ACCESS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}