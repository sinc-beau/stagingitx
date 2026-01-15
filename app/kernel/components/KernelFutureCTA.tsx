import React from 'react';
import { Users, Crown, ArrowRight } from 'lucide-react';

interface KernelFutureCTAProps {
  onApplyClick: () => void;
}

export default function KernelFutureCTA({ onApplyClick }: KernelFutureCTAProps) {
  return (
    <div className="bg-black text-white">
      {/* Shape the Future */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Shape the Future
            </h2>
            <p className="text-xl text-white/60">
              Champion the next generation and leave your legacy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Champion Next Gen */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#4B0BE8]/20 rounded-lg p-10 hover:border-[#4B0BE8]/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-[#4B0BE8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Champion the Next Generation</h3>
                  <p className="text-white/70 mb-6">
                    Compound your impact by accelerating capable talent and setting the standard for technology leadership.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Support mentorship programs',
                      'Foster inclusive culture',
                      'Shape the environment you wished for'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/60">
                        <div className="w-1.5 h-1.5 bg-[#4B0BE8] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Leave Legacy */}
            <div className="bg-white/5 backdrop-blur-sm border border-[#4B0BE8]/20 rounded-lg p-10 hover:border-[#4B0BE8]/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Crown className="w-8 h-8 text-[#4B0BE8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Leave Your Legacy</h3>
                  <p className="text-white/70 mb-6">
                    Convert service into a lasting impact across research, programs, and community standards.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4 border border-[#4B0BE8]/20">
                    <p className="text-sm text-[#4B0BE8]">
                      Kernel members are foundational voices in a movement to elevate technology leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Shape<br />
            <span className="text-[#4B0BE8]">Technology Leadership?</span>
          </h2>

          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            The Kernel is where vision meets execution. Your expertise and leadership will define the next chapter of enterprise technology.
          </p>

          <p className="text-2xl font-bold text-[#4B0BE8] mb-12">
            Join the leaders building tomorrow.
          </p>

          <button
            onClick={onApplyClick}
            className="group relative px-16 py-6 overflow-hidden rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-[#4B0BE8]" />
            <span className="relative z-10 flex items-center justify-center gap-4 text-white">
              Begin Your Application
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}