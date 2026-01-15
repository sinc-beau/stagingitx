import React from 'react';
import { Handshake, TrendingUp, ChevronRight, Target, Eye, Award, Rocket } from 'lucide-react';

export default function KernelCoreBenefits() {
  return (
    <div className="bg-white text-gray-900">
      {/* Build Powerful Relationships */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Element First */}
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full h-[400px] bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Handshake className="w-20 h-20 text-[#4B0BE8]/30" />
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">

              <h2 className="text-5xl lg:text-6xl font-bold">
                <span className="text-gray-900">Build Powerful</span>
                <br />
                <span className="text-[#4B0BE8]">Relationships</span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Direct access to leaders who can act, turning conversations into partnerships, opportunities, and faster outcomes.
              </p>

              <div className="space-y-4">
                {[
                  'Collaborate with CIOs, CTOs and innovators',
                  'Access private roundtables and forums',
                  'Form strategic partnerships',
                  'Judge the ITx Excellence Awards'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-[#4B0BE8]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#4B0BE8]/20 transition-colors">
                      <ChevronRight className="w-4 h-4 text-[#4B0BE8]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grow Professionally */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">

              <h2 className="text-5xl lg:text-6xl font-bold">
                <span className="text-gray-900">Grow</span>
                <br />
                <span className="text-[#4B0BE8]">Professionally</span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Build board-ready leadership credentials and a portfolio of work without adding committee complexity.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Target, label: 'Shape Strategy', desc: 'Guide community direction' },
                  { icon: Eye, label: 'Increase Visibility', desc: 'Expand your influence' },
                  { icon: Award, label: 'Board Credentials', desc: 'Build executive portfolio' },
                  { icon: Rocket, label: 'Advisory Roles', desc: 'Drive innovation' }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#4B0BE8]/50 hover:shadow-md transition-all">
                    <item.icon className="w-6 h-6 text-[#4B0BE8] mb-3" />
                    <h4 className="text-gray-900 font-semibold mb-1">{item.label}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative w-full h-[400px] bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-20 h-20 text-[#4B0BE8]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}