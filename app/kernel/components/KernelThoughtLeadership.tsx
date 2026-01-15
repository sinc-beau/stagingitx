import React from 'react';
import { PenTool, ChevronRight } from 'lucide-react';

export default function KernelThoughtLeadership() {
  return (
    <section className="py-24 px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">

            <h2 className="text-5xl lg:text-6xl font-bold">
              <span className="text-white">Amplify Your</span>
              <br />
              <span className="text-[#4B0BE8]">Thought Leadership</span>
            </h2>

            <p className="text-xl text-white/80 leading-relaxed">
              Publish with authority, set the agenda, and expand your influence across programs technology leaders actually use.
            </p>

            <div className="space-y-4">
              {[
                'Influence executive dialogue on strategy and innovation',
                'Contribute to white papers and research',
                'Shape ITx Forum topics',
                'Establish yourself as a respected voice'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-[#4B0BE8]/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#4B0BE8]/20 transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#4B0BE8]" />
                  </div>
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full h-[400px] bg-white/5 rounded-lg border border-[#4B0BE8]/20 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <PenTool className="w-20 h-20 text-[#4B0BE8]/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}