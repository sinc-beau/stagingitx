import React from 'react';
import { Crown, Users, Target, Sparkles, Shield, Award } from 'lucide-react';

interface GuildMembershipSectionProps {
  onOpenGuild: () => void;
}

export default function GuildMembershipSection({ onOpenGuild }: GuildMembershipSectionProps) {
  return (
    <section className="py-24 px-6 itx-subtle-grid">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4B0BE8] text-xs font-bold tracking-wider mb-6 bg-[#4B0BE8]/10 px-4 py-2 rounded border border-[#4B0BE8]/30">
            <Crown className="w-4 h-4" />
            EXECUTIVE CIRCLE
            <Crown className="w-4 h-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
            <span className="text-white">IT</span><span className="text-[#4B0BE8] normal-case">x</span> <span className="text-[#4B0BE8]">KERNEL</span>
          </h2>
          <div className="text-lg text-gray-300 italic">
            The Core Leadership Collective
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* First Paragraph */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded bg-[#4B0BE8]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#4B0BE8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    Invitation-Only Circle
                  </h3>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  An invitation-only collective of senior technology executives steering the future of ITx. Kernel members shape agenda topics, contribute to industry research, and define technology leadership standards. This is where strategic vision transforms into industry direction.
                </p>
              </div>
            </div>

            {/* Second Paragraph */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded bg-[#4B0BE8]/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#4B0BE8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    Direct Access & Influence
                  </h3>
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  Through exclusive roundtables, advisory councils, and strategic sessions, members connect with peers who drive transformation: CIOs, CTOs, and technology innovators. Together, the Kernel builds partnerships, mentors emerging leaders, and shapes the global technology landscape.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button onClick={onOpenGuild} className="px-8 py-4 bg-[#4B0BE8] text-white font-bold text-lg rounded hover:bg-[#4B0BE8]/90 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
                REQUEST KERNEL ACCESS
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg aspect-square border-2 border-[#4B0BE8]/20">
                <img
                  src="/ITxGuild.png"
                  alt="Executive leadership meeting"
                  className="w-full h-full object-contain"
                />

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded p-4">
                  <div className="text-xs font-semibold text-[#4B0BE8] uppercase tracking-wider">INVITATION ONLY</div>
                </div>
              </div>
            </div>

            {/* Subtle Geometric Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#4B0BE8]/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-[#4B0BE8]/10 rounded-full" />
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="group text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
            <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Crown className="w-7 h-7 text-[#4B0BE8]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 uppercase">
              Thought Leadership
            </h4>
            <p className="text-gray-300">
              Shape technology direction through strategic insights and industry guidance
            </p>
          </div>

          <div className="group text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
            <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-[#4B0BE8]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 uppercase">
              Executive Network
            </h4>
            <p className="text-gray-300">
              Connect with CIOs, CTOs, and technology leaders who drive innovation
            </p>
          </div>

          <div className="group text-center bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
            <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Award className="w-7 h-7 text-[#4B0BE8]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-3 uppercase">
              Industry Impact
            </h4>
            <p className="text-gray-300">
              Influence the global technology ecosystem through strategic initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}