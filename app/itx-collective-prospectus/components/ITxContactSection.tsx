'use client';

import React from 'react';
import { Lock, Mail } from 'lucide-react';

export function ITxContactSection() {
  return (
    <section className="py-16 px-6 border-t border-white/5 relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-20"
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 font-bold text-xs tracking-wider mb-6 uppercase" style={{ color: '#4B0BE8' }}>
          <Lock className="w-3 h-3" />
          Secure Channel
          <Lock className="w-3 h-3" />
        </div>

        <h2 className="text-5xl font-black text-white mb-8">
          INITIATE <span style={{ color: '#4B0BE8' }}>CONTACT</span>
        </h2>

        <div className="bg-white/5 backdrop-blur-sm border-2 rounded-2xl p-12 shadow-2xl"
          style={{ borderColor: 'rgba(75, 11, 232, 0.3)' }}>

          <div className="text-center mb-8">
            <div className="text-3xl font-black text-white mb-2">Ross Abbott</div>
            <div className="text-lg font-bold uppercase tracking-wider mb-4" style={{ color: '#4B0BE8' }}>CEO</div>
          </div>

          <a
            href="mailto:ross.abbott@sincusa.com"
            className="inline-flex items-center gap-3 text-xl text-white hover:text-white/80 transition-colors font-bold group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" style={{ color: '#4B0BE8' }} />
            ross.abbott@sincusa.com
          </a>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-sm text-white/50 font-bold uppercase">
              Driven By: SINC
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-black text-white mb-2">
            IT<span style={{ color: '#4B0BE8' }}>x</span> COLLECTIVE
          </h3>
          <p className="text-sm text-white/40 font-bold uppercase tracking-wider">
            A peer-to-peer ecosystem of CIOs, CTOs, and IT leaders
          </p>
        </div>
      </div>
    </section>
  );
}