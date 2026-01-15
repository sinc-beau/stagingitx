import React from 'react';
import { CTAButton } from '@/components/ui/cta-button';

interface HowItWorksSectionProps {
  onOpenNewsletter: () => void;
}

export default function HowItWorksSection({ onOpenNewsletter }: HowItWorksSectionProps) {
  return (
    <section className="relative py-20 md:py-24 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/itxbgsection.jpg)',
          backgroundSize: 'cover'
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/90" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header - More Compact */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">
            THE <span className="text-[#4B0BE8]">PROTOCOL</span>
          </h2>
        </div>

        {/* Three Steps - Clean Grid Layout */}
        <div className="space-y-8 md:space-y-10">

          {/* Step 01 - Command Briefings */}
          <div className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 md:p-10 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/[0.15] transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-extrabold text-[#4B0BE8]/80">01</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span className="uppercase">IT</span>x <span className="text-[#4B0BE8] uppercase">Command Briefings</span>
                </h3>
                <p className="text-lg text-white/80 mb-4">
                  Virtual and in-person CIO/CTO meetups with focused, guided discussion.
                </p>
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#4B0BE8]">12-15</span>
                  <span className="text-sm text-white/60">Leaders Per Session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 - FutureScale Sessions */}
          <div className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 md:p-10 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/[0.15] transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-extrabold text-[#4B0BE8]/80">02</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span className="uppercase">IT</span>x <span className="text-[#4B0BE8] uppercase">FutureScale</span> <span className="uppercase">Sessions</span>
                </h3>
                <p className="text-lg text-white/80 mb-4">
                  Choose the future agendas of ITx Backbone Forums, interact with ITx Kernel members.
                </p>
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#4B0BE8]">35-40</span>
                  <span className="text-sm text-white/60">Regional Attendees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 - Backbone Forums */}
          <div className="group">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12 p-8 md:p-10 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/[0.15] transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="text-5xl md:text-6xl font-extrabold text-[#4B0BE8]/80">03</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  <span className="uppercase">IT</span>x <span className="uppercase">Backbone</span> <span className="text-[#4B0BE8] uppercase">Forums</span>
                </h3>
                <p className="text-lg text-white/80 mb-4">
                  The definitive forum format. Two days that will transform your technology leadership.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#4B0BE8]">75+</span>
                    <span className="text-sm text-white/60">CIO/CTO Attendees</span>
                  </div>
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#4B0BE8]">48</span>
                    <span className="text-sm text-white/60">Hours of Content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Cleaner */}
        <div className="mt-16 md:mt-20 text-center">
          <CTAButton onClick={onOpenNewsletter} size="lg">
            JOIN ITx COLLECTIVE
          </CTAButton>
        </div>
      </div>
    </section>
  );
}