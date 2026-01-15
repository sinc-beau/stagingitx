import React from 'react';
import { Shield, Target, Zap, Users, Lock, Eye } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

interface WhatWeCoverSectionProps {
  onOpenNewsletter: () => void;
}

export default function WhatWeCoverSection({ onOpenNewsletter }: WhatWeCoverSectionProps) {
  const topics = [
    { icon: Zap, text: 'AI adoption & governance' },
    { icon: Target, text: 'Legacy modernization' },
    { icon: Users, text: 'Talent retention strategies' },
    { icon: Shield, text: 'Cloud cost optimization' },
    { icon: Eye, text: 'Data platform architecture' },
    { icon: Lock, text: 'Tech debt prioritization' }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 uppercase">
              THE PROBLEMS ON THE <span className="text-[#4B0BE8]">TABLE</span>
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              Rotating, member-driven topics. Examples:
            </p>

            {/* Topic Grid - Minimalist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-[#4B0BE8]/50 transition-all duration-300 group"
                >
                  <topic.icon className="w-5 h-5 text-[#4B0BE8]/60 group-hover:text-[#4B0BE8] group-hover:scale-110 transition-all" />
                  <span className="text-gray-700 group-hover:text-black transition-colors text-sm font-medium">
                    {topic.text}
                  </span>
                </div>
              ))}
            </div>

            <CTAButton onClick={onOpenNewsletter} size="lg">
              JOIN ITx COLLECTIVE
            </CTAButton>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img
                  src="/ITbug.png"
                  alt="IT problems and bugs"
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>

              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded p-4">
                <div className="text-xs font-semibold text-[#4B0BE8] mb-1 uppercase tracking-wider">MEMBER DRIVEN</div>
                <div className="text-2xl font-bold text-white">100%</div>
              </div>
            </div>

            {/* Subtle Geometric Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#4B0BE8]/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[#4B0BE8]/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}