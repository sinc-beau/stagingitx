import React from 'react';
import { Users, Network, Shield } from 'lucide-react';

export default function NetworkingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B0BE8]/20 to-purple-500/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#4B0BE8]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Curated</div>
                    <div className="text-slate-400">Attendee Selection</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center">
                    <Network className="w-8 h-8 text-[#4B0BE8]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Structured</div>
                    <div className="text-slate-400">Networking Sessions</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#4B0BE8]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">Confidential</div>
                    <div className="text-slate-400">Discussion Environment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4">NETWORKING OPPORTUNITIES</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              Connect with Your Peers
            </h2>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Build lasting relationships with fellow IT leaders who understand your challenges.
              Every attendee is vetted to ensure productive, high-level conversations.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              From structured roundtables to informal networking sessions, you'll have multiple
              opportunities to connect, share insights, and develop partnerships that extend beyond the forum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
