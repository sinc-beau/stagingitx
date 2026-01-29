import React from 'react';

export default function SponsorsSection() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-black via-slate-900/50 to-black">
      <div className="max-w-[1600px] mx-auto lg:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Forum Partners
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Thank you to our partners who make this forum possible
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-[#FFD700] uppercase tracking-wider mb-6">
                Gold Sponsors
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="bg-white/5 backdrop-blur-sm border border-[#FFD700]/20 rounded-2xl p-8 hover:border-[#FFD700]/40 transition-all duration-300">
                  <img
                    src="/insight.png"
                    alt="Insight"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-[#FFD700]/20 rounded-2xl p-8 hover:border-[#FFD700]/40 transition-all duration-300">
                  <img
                    src="/unframe.png"
                    alt="Unframe"
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
