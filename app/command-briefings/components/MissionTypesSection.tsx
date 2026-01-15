'use client';

import React, { useState } from 'react';
import { Utensils, Zap, Monitor, Clock, Users, Code, Cloud, Shield } from 'lucide-react';
import { ITxNewsletterHubspotForm } from '@/components/forms/ITxNewsletterHubspotForm';

export default function MissionTypesSection() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const missionTypes = [
    {
      icon: Utensils,
      title: 'Executive IT Dinners',
      advantage: 'Confidential discussions for CIOs and CTOs',
      benefit: 'Share digital transformation wins in intimate settings',
      duration: 'Evening',
      color: '#4B0BE8'
    },
    {
      icon: Code,
      title: 'Learn & Gos',
      advantage: 'In-depth discussion sessions with to-go lunch for 4',
      benefit: 'Take strategic insights and a meal back to your team',
      duration: '90 mins',
      color: '#4B0BE8'
    },
    {
      icon: Monitor,
      title: 'Virtual CIO/CTO Roundtables',
      advantage: 'Focused 45-minute sessions with IT leaders',
      benefit: 'Learn from peers who have scaled digital operations',
      duration: '45 mins',
      color: '#4B0BE8'
    }
  ];

  return (
    <section className="py-32 bg-black relative">
      {/* ITx Grid Pattern Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(75, 11, 232, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(75, 11, 232, 0.03) 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest mb-4 uppercase" style={{ color: 'rgba(75, 11, 232, 1)' }}>
            OPERATIONAL FORMATS
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Mission Types
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Strategic formats designed for CIO and CTO digital transformation initiatives and IT leadership development
          </p>
        </div>

        {/* Mission Type Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {missionTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-300 group hover:shadow-2xl"
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(75, 11, 232, 0.5)';
                e.currentTarget.style.background = 'rgba(75, 11, 232, 0.1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center border transition-all duration-300"
                style={{
                  background: `rgba(75, 11, 232, 0.1)`,
                  borderColor: `rgba(75, 11, 232, 0.3)`
                }}
              >
                <type.icon className="w-8 h-8" style={{ color: type.color }} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 text-center">
                {type.title}
              </h3>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-sm mb-2 uppercase tracking-wider" style={{ color: '#4B0BE8' }}>
                    The Advantage:
                  </div>
                  <p className="text-white/70 text-sm">
                    {type.advantage}
                  </p>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                    Your Benefit:
                  </div>
                  <p className="text-white/60 text-sm">
                    {type.benefit}
                  </p>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="mt-6 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <Clock className="w-3 h-3 text-white/50" />
                  <span className="text-xs text-white/50 font-medium">
                    {type.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="font-bold mb-2" style={{ color: '#4B0BE8' }}>
              CIO/CTO Only
            </div>
            <div className="text-white/40 text-sm">
              Executive IT Leadership
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold mb-2" style={{ color: '#4B0BE8' }}>
              Digital Strategy
            </div>
            <div className="text-white/40 text-sm">
              Cloud & Infrastructure
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold mb-2" style={{ color: '#4B0BE8' }}>
              Peer Intelligence
            </div>
            <div className="text-white/40 text-sm">
              IT Leader Insights
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => setIsNewsletterOpen(true)}
            className="px-8 py-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl tracking-wider uppercase"
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
            Request Command Briefing Access
          </button>
        </div>
      </div>

      <ITxNewsletterHubspotForm
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </section>
  );
}