'use client';

import React from 'react';
import { Shield, Star, ArrowRight, Handshake } from 'lucide-react';

interface CTASectionProps {
  onOpenModal: () => void;
}

export default function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden" id="contact">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, rgba(75, 11, 232, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at top left, rgba(75, 11, 232, 0.05) 0%, transparent 40%),
              radial-gradient(ellipse at bottom right, rgba(75, 11, 232, 0.05) 0%, transparent 40%)
            `
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className="bg-white/5 border rounded-lg p-12"
          style={{ borderColor: 'rgba(75, 11, 232, 0.3)' }}
        >
          <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">
            READY TO GET{' '}
            <span style={{ color: '#4B0BE8' }}>INVOLVED</span>?
          </h3>

          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with us to explore partnership opportunities and start shaping the conversations
            that matter most to CIOs, CTOs, and IT leaders driving digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/itx-collective-prospectus"
              className="group px-10 py-5 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl tracking-wider uppercase inline-flex items-center justify-center gap-3"
              style={{
                background: 'linear-gradient(135deg, #4B0BE8, #3A0BB8)',
                boxShadow: '0 20px 40px -10px rgba(75, 11, 232, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 30px 60px -10px rgba(75, 11, 232, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(75, 11, 232, 0.5)';
              }}
            >
              VIEW PROSPECTUS
              <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

            <button
              onClick={onOpenModal}
              className="group px-10 py-5 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl tracking-wider uppercase border-2"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: '#4B0BE8'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(75, 11, 232, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <span className="flex items-center gap-3">
                SUBMIT INQUIRY
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          <p className="text-white/40 text-xs mt-6 uppercase tracking-wider">
            Partnership opportunities reviewed within 48 hours • Custom solutions available
          </p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">2,500+</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">IT Leaders Reached</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">4</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Annual Forums</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">100%</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">Solution Focused</div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs text-white/40 uppercase tracking-wider">Part of the</span>
              <span className="font-bold text-white">
                IT<span style={{ color: '#4B0BE8' }}>x</span> COLLECTIVE
              </span>
              <span className="text-xs text-white/40 uppercase tracking-wider">Ecosystem</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <span className="text-xs text-white/40 uppercase tracking-wider">Powered By</span>
              <img
                src="https://sincusa.com/wp-content/uploads/2025/04/Component-1.svg"
                alt="SINC"
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}