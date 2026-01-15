'use client';

import React from 'react';
import { Shield, Globe, Handshake, ArrowRight, Lock, Users, Building } from 'lucide-react';

interface GetInvolvedSectionProps {
  onOpenGuild: () => void;
  onOpenNewsletter: () => void;
  onOpenSponsor: () => void;
}

export default function GetInvolvedSection({ onOpenGuild, onOpenNewsletter, onOpenSponsor }: GetInvolvedSectionProps) {

  const operations = [
    {
      icon: Shield,
      badge: 'EXECUTIVE',
      title: 'Join ITx Kernel',
      classification: 'Senior Leadership Only',
      description: 'Invitation-only access to our core network of technology executives.',
      clearance: 'C-level verification required',
      cta: 'REQUEST ACCESS',
      formKey: 'kernel'
    },
    {
      icon: Globe,
      badge: 'MEMBER',
      title: 'Join ITx Network',
      classification: 'Technology Leadership Community',
      description: 'Connect with the broader IT leadership community and access strategic forums.',
      clearance: 'Leadership role required',
      cta: 'APPLY NOW',
      formKey: 'network'
    },
    {
      icon: Building,
      badge: 'PARTNER',
      title: 'Partnership Program',
      classification: 'Solution Provider Integration',
      description: 'Strategic alliances for organizations solving critical technology challenges.',
      clearance: 'Executive sponsorship required',
      cta: 'SUBMIT INQUIRY',
      formKey: 'partnership'
    }
  ];

  return (
    <section className="relative py-20 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4B0BE8]/10 border border-[#4B0BE8]/30 rounded mb-6">
            <Lock className="w-4 h-4 text-[#4B0BE8]" />
            <span className="text-xs font-bold text-[#4B0BE8] uppercase tracking-wider">ACCESS TIERS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            ENGAGEMENT <span className="text-[#4B0BE8]">LEVELS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your engagement tier based on organizational requirements
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {operations.map((op, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card Content */}
              <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-8 h-full hover:bg-gray-100 hover:border-[#4B0BE8]/50 transition-all duration-300">
                {/* Security Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold text-[#4B0BE8] tracking-wider">
                    ● {op.badge}
                  </span>
                  <div className="w-2 h-2 bg-[#4B0BE8] rounded-full animate-pulse" />
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <op.icon className="w-7 h-7 text-[#4B0BE8]" />
                </div>

                {/* Title & Classification */}
                <h3 className="text-2xl font-bold text-black mb-2">
                  {op.title}
                </h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  {op.classification}
                </p>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {op.description}
                </p>

                {/* Clearance Requirement */}
                <div className="text-xs text-gray-500 italic mb-8 pb-8 border-b border-gray-200">
                  <Lock className="w-3 h-3 inline mr-1" />
                  {op.clearance}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    if (op.formKey === 'kernel') onOpenGuild();
                    else if (op.formKey === 'network') onOpenNewsletter();
                    else if (op.formKey === 'partnership') onOpenSponsor();
                  }}
                  className="w-full px-6 py-3 bg-transparent border border-gray-300 text-gray-700 font-bold rounded hover:border-[#4B0BE8] hover:text-[#4B0BE8] hover:bg-[#4B0BE8]/10 transition-all duration-300 group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    {op.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All access requests subject to verification and approval by ITx Leadership
          </p>
        </div>
      </div>
    </section>
  );
}