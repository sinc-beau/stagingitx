'use client';

import React, { useState, useEffect } from 'react';
import { Handshake, ArrowRight, Lock, Building, Users, Target } from 'lucide-react';

interface SolutionProvidersHeroProps {
  onOpenModal: () => void;
  onScrollToTiers: () => void;
}

export default function SolutionProvidersHero({ onOpenModal, onScrollToTiers }: SolutionProvidersHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(75, 11, 232, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(75, 11, 232, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
            style={{ background: 'rgba(75, 11, 232, 0.3)' }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full filter blur-3xl opacity-10"
            style={{ background: 'rgba(75, 11, 232, 0.2)' }}
          />
        </div>

        {mounted && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              background: 'rgba(75, 11, 232, 0.4)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center bg-white/5 border border-white/10 text-white/70 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <Handshake className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-2 sm:mr-3" />
              STRATEGIC PARTNERSHIPS
              <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-2 sm:ml-3" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight">
              <span className="block">PARTNER WITH</span>
              <span className="block mt-1 sm:mt-2">
                IT<span style={{ color: '#4B0BE8' }}>x</span>
                <span className="inline-block ml-1 sm:ml-2" style={{
                  background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  COLLECTIVE
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Engage directly with CIOs, CTOs, and IT leaders through solution-oriented digital transformation conversations.
              Build your 2026 enterprise pipeline with a unified strategic partnership approach that accelerates your market reach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto my-8 sm:my-12 px-4 sm:px-0">
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 hover:border-white/20 transition-all">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">2,500+</div>
                <div className="text-[10px] sm:text-xs text-white/50 font-semibold uppercase tracking-wider">IT Leaders</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 hover:border-white/20 transition-all">
                <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: '#4B0BE8' }}>4</div>
                <div className="text-[10px] sm:text-xs text-white/50 font-semibold uppercase tracking-wider">Partnership Tiers</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 hover:border-white/20 transition-all">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
                <div className="text-[10px] sm:text-xs text-white/50 font-semibold uppercase tracking-wider">Solution Focus</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <button
                onClick={onOpenModal}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-xs sm:text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wider uppercase"
                style={{
                  background: '#4B0BE8',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#3A0BB8';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#4B0BE8';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.5)';
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  REQUEST INFO
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={onScrollToTiers}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-white/5 hover:border-white/30 transition-all uppercase tracking-wider"
              >
                <span className="hidden sm:inline">EXPLORE PARTNERSHIP OPPORTUNITIES</span>
                <span className="sm:hidden">EXPLORE PARTNERSHIPS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}