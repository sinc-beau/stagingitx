import React from 'react';
import { CTAButton } from '@/components/ui/cta-button';

interface CommunitySectionProps {
  onOpenNewsletter: () => void;
}

export default function CommunitySection({ onOpenNewsletter }: CommunitySectionProps) {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            MEMBER BENEFITS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
            INTELLIGENCE THAT <span className="text-[#4B0BE8]">MATTERS</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Exclusive research and analysis delivered to members each quarter — transforming
            collective IT leadership experience into strategic advantage.
          </p>
        </div>

        {/* Content Type Label */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            CONTENT DESIGNED FOR CIOS, CTOS, AND IT EXECUTIVES
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white uppercase">
            STRATEGIC INSIGHTS
          </h3>
        </div>

        {/* Reports Grid - Simplified */}
        <div className="space-y-8 mb-20">
          {/* Quarterly Reports */}
          <div className="border-l-4 border-[#4B0BE8] pl-8 py-4">
            <h4 className="text-xl font-bold text-white mb-3 uppercase">
              Quarterly Technology Briefings
            </h4>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              Strategic analysis, IT investment benchmarks, and technology adoption patterns
              sourced directly from peer experiences.
            </p>
          </div>

          {/* Annual Report */}
          <div className="border-l-4 border-[#4B0BE8] pl-8 py-4">
            <h4 className="text-xl font-bold text-white mb-3 uppercase">
              Annual IT Leadership Report
            </h4>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              Comprehensive analysis featuring technology priorities, budget allocations,
              and strategic roadmaps from leading IT organizations.
            </p>
          </div>
        </div>

        {/* What You Gain - Flat Design */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-12 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase">
            Your Strategic Edge
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[#4B0BE8] font-semibold mb-2 uppercase text-sm">
                Technology Foresight
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Navigate emerging tech trends with confidence
              </p>
            </div>
            <div>
              <p className="text-[#4B0BE8] font-semibold mb-2 uppercase text-sm">
                Decision Validation
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Compare your initiatives against peer benchmarks
              </p>
            </div>
            <div>
              <p className="text-[#4B0BE8] font-semibold mb-2 uppercase text-sm">
                Executive Perspectives
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn from IT leaders navigating similar transformations
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton onClick={onOpenNewsletter} size="lg">
            JOIN ITx COLLECTIVE
          </CTAButton>
        </div>
      </div>
    </section>
  );
}