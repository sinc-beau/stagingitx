'use client';

import React from 'react';
import { Award, Eye, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface WhyItMattersSectionProps {
  onOpenModal: () => void;
}

export default function WhyItMattersSection({ onOpenModal }: WhyItMattersSectionProps) {
  const valueProps = [
    {
      icon: Eye,
      title: 'VISIBILITY',
      description: 'Connect with CIOs and CTOs shaping digital strategy.'
    },
    {
      icon: Lightbulb,
      title: 'LEADERSHIP',
      description: 'Position your team as trusted IT transformation advisors.'
    },
    {
      icon: Target,
      title: 'ENGAGEMENT',
      description: 'Reach the right IT executives with curated messaging.'
    },
    {
      icon: TrendingUp,
      title: 'IMPACT',
      description: 'Build relationships that drive enterprise technology outcomes.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase" style={{ color: '#4B0BE8' }}>
            <Award className="w-3 h-3" />
            VALUE PROPOSITION
            <Award className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            WHY IT{' '}
            <span style={{
              background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              MATTERS
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            When you partner with ITx Collective, you're helping steer the digital transformation conversation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(75, 11, 232, 0.2)' }}
              >
                <prop.icon className="w-7 h-7" style={{ color: '#4B0BE8' }} />
              </div>
              <h3 className="text-base font-bold text-white mb-3 uppercase tracking-wider">
                {prop.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div
            className="inline-block bg-white/5 border rounded-lg px-8 py-6"
            style={{ borderColor: 'rgba(75, 11, 232, 0.3)' }}
          >
            <p className="text-lg text-white/70 max-w-3xl">
              Join the exclusive ecosystem where <span className="text-white font-bold">enterprise technology providers</span> connect
              with <span className="text-white font-bold">IT decision-makers</span> to shape the future of
              <span style={{ color: '#4B0BE8' }} className="font-bold"> digital transformation</span>.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            style={{
              background: '#4B0BE8',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3A0BB8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4B0BE8';
            }}
          >
            <span>Build Your Enterprise Pipeline</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}