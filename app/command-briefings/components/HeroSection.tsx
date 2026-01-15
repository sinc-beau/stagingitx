'use client';

import React, { useEffect, useState } from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { ITxNewsletterHubspotForm } from '@/components/forms/ITxNewsletterHubspotForm';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden pt-20">
      {/* ITx Brand Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />
        {/* ITx Grid Pattern */}
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

        {/* Floating particles with ITx purple */}
        {mounted && [...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              background: 'rgba(75, 11, 232, 0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 px-6 py-3 rounded-full text-xs font-bold tracking-widest mb-8 uppercase">
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ background: '#4B0BE8' }} />
              CIO / CTO DIGITAL AND IN-PERSON EVENTS
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight">
              <span className="text-white">
                ITx
              </span>
              <br />
              <span style={{
                background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                COMMAND
              </span>
              <br />
              <span className="text-white">
                BRIEFINGS
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl">
              Exclusive, small-format gatherings designed for CIOs, CTOs, and IT leaders
              to share operational intelligence and deploy proven digital transformation strategies.
            </p>

            {/* Value Props */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="font-semibold text-white">Executive Only</span>
                <span className="text-xs text-white/50 ml-2">CIO/CTO Level</span>
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="font-semibold text-white">Actionable</span>
                <span className="text-xs text-white/50 ml-2">Deploy Today</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="group px-8 py-4 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-bold text-sm tracking-wider uppercase"
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
                <div className="flex items-center space-x-3">
                  <span>Get Notified</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            <ITxNewsletterHubspotForm
              isOpen={isNewsletterOpen}
              onClose={() => setIsNewsletterOpen(false)}
            />
          </div>

          {/* Right Side - What to Expect Card */}
          <div className="relative">
            <div className="space-y-8">
              {/* Briefing Image */}
              <div className="relative group">
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/commandbriefings.png"
                    alt="Command Briefings"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Status indicator */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border text-white/70 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                     style={{ borderColor: 'rgba(75, 11, 232, 0.3)' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#4B0BE8' }} />
                    <span>SECURE CHANNEL</span>
                  </div>
                </div>
              </div>

              {/* What to Expect Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6" style={{ color: '#4B0BE8' }} />
                  <h3 className="text-xl font-bold text-white">What to Expect</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                    <div>
                      <span className="text-white font-semibold text-sm">Digital Transformation Intel:</span>
                      <span className="text-white/70 ml-2 text-sm">Small rooms, strategic insights</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                    <div>
                      <span className="text-white font-semibold text-sm">Solution-Oriented:</span>
                      <span className="text-white/70 ml-2 text-sm">Vetted vendors with real solutions not just sales theater</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#4B0BE8' }}></div>
                    <div>
                      <span className="text-white font-semibold text-sm">Actionable Frameworks:</span>
                      <span className="text-white/70 ml-2 text-sm">IT strategies to implement today</span>
                    </div>
                  </div>
                </div>

                {/* CIO/CTO Only Badge */}
                <div className="mt-6 flex justify-end">
                  <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs font-bold uppercase tracking-wider">
                    CIO/CTO Only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}