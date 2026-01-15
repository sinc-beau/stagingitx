import React from 'react';
import { Shield, Target, Zap, Users, Award, TrendingUp, Sparkles, CircleCheck as CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface VendorParticipationSectionProps {
  onOpenSponsor: () => void;
}

export default function VendorParticipationSection({ onOpenSponsor }: VendorParticipationSectionProps) {
  return (
    <section className="py-24 px-6 itx-subtle-grid">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4B0BE8] text-xs font-bold tracking-wider mb-4 bg-[#4B0BE8]/10 px-4 py-2 rounded border border-[#4B0BE8]/30">
            <Sparkles className="w-4 h-4" />
            STRATEGIC PARTNERSHIPS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vendors, Without the <span className="text-[#4B0BE8]">Circus</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            We work with solution providers who solve real problems and can prove it
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Principles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Limited Sponsor Slots */}
              <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
                <div className="relative">
                  <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-[#4B0BE8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Limited Sponsor Slots
                  </h3>
                  <p className="text-white/70">
                    Carefully curated partnerships so leaders can speak freely without vendor overload
                  </p>
                </div>
              </div>

              {/* Clear Purpose */}
              <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
                <div className="relative">
                  <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-[#4B0BE8]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Clear Purpose
                  </h3>
                  <p className="text-white/70">
                    Every vendor presence is aligned to the discussion and adds genuine value
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy Statement */}
            <div className="relative bg-white/10 backdrop-blur-sm p-10 rounded-lg border border-[#4B0BE8]/40 overflow-hidden">
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 text-[#4B0BE8] mb-6">
                  <Zap className="w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white">Our Philosophy</h3>
                  <Zap className="w-6 h-6" />
                </div>
                <p className="text-xl text-white/90 mb-6 font-medium">
                  If you solve real problems and can prove it, you belong.
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-[#4B0BE8]/50 to-transparent mb-6" />
                <p className="text-lg text-white/60 italic">
                  If you need a booth and a bullhorn, you don't.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div className="space-y-6">
            {/* Professional Image */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/ITxVendorBot.png"
                alt="Professional meeting"
                className="w-full h-64 object-contain bg-gray-900/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
              <div className="absolute bottom-6 left-6 text-white z-30">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4B0BE8] mb-2 tracking-wider">
                  <Award className="w-4 h-4" />
                  QUALITY PARTNERSHIPS
                </div>
                <div className="text-lg font-bold">Solution-Focused Vendors</div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
                <div className="text-3xl font-bold text-[#4B0BE8] mb-2">Select</div>
                <div className="text-white/70 text-sm">Partners</div>
              </div>

              <div className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center hover:bg-white/10 hover:border-[#4B0BE8]/50 transition-all duration-300">
                <div className="text-3xl font-bold text-[#4B0BE8] mb-2">Vetted</div>
                <div className="text-white/70 text-sm">Solutions</div>
              </div>
            </div>

            {/* Additional Stat */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#4B0BE8]/30 text-center">
              <TrendingUp className="w-8 h-8 text-[#4B0BE8] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Zero Noise</div>
              <div className="text-[#4B0BE8] text-sm">Maximum Impact</div>
            </div>
          </div>
        </div>

        {/* Vendor Benefits Section */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-10 border border-white/10 mb-12 overflow-hidden">
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-[#4B0BE8]" />
              What Our Partners Get
              <Sparkles className="w-8 h-8 text-[#4B0BE8]" />
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-[#4B0BE8]" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Direct Access</h4>
                <p className="text-white/70">Meaningful conversations with CIOs and CTOs who need solutions</p>
              </div>

              <div className="group text-center">
                <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-[#4B0BE8]" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Targeted Engagement</h4>
                <p className="text-white/70">Aligned to specific technology challenges that matter</p>
              </div>

              <div className="group text-center">
                <div className="w-14 h-14 rounded bg-[#4B0BE8]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-7 h-7 text-[#4B0BE8]" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Trusted Environment</h4>
                <p className="text-white/70">Build relationships, not just transactions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button onClick={onOpenSponsor} className="px-8 py-4 bg-[#4B0BE8] text-white font-bold text-lg rounded hover:bg-[#4B0BE8]/90 transition-all duration-300 transform hover:scale-105">
              PARTNERSHIP INQUIRY
            </button>
            <Link href="/it-event-providers">
              <button className="px-8 py-4 bg-transparent border-2 border-[#4B0BE8] text-[#4B0BE8] font-bold text-lg rounded hover:bg-[#4B0BE8] hover:text-white transition-all duration-300 transform hover:scale-105">
                VIEW PARTNER BENEFITS
              </button>
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6 max-w-2xl mx-auto">
            Interested in becoming a strategic partner? Let's discuss how we can create value together.
          </p>
        </div>
      </div>
    </section>
  );
}