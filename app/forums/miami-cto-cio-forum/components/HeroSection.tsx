import React from 'react';
import { Calendar, MapPin, Users, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 px-4 sm:px-8 pb-16 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4B0BE8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#4B0BE8]" />
                <span className="text-xs font-mono text-[#4B0BE8] tracking-wider uppercase">
                  Backbone Forum East
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                  <span className="block text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
                    East CIO / CTO
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text">
                    Forum
                  </span>
                </h1>

                <div className="flex flex-col gap-3 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#4B0BE8]" />
                    <span className="text-base font-semibold">March 15-17, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#4B0BE8]" />
                    <span className="text-base font-semibold">Doral Creek, Miami FL</span>
                  </div>
                </div>

                <p className="text-lg text-slate-300 leading-relaxed">
                  Join 70+ CIOs, CTOs, and IT Leaders for three days of strategic insights,
                  executive networking, and hands-on learning at the premier IT leadership forum.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToRegistration}
                  className="bg-gradient-to-r from-[#4B0BE8] to-purple-600 hover:from-[#3A0BB8] hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0BE8]/50 flex items-center justify-center gap-2"
                >
                  SECURE YOUR SPOT
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 relative mt-8 lg:mt-0">
              <div className="relative">
                <img
                  src="/itxforum.jpg"
                  alt="ITx Collective Forum"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover object-center rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm font-mono text-[#4B0BE8]">REGISTRATION OPEN</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 grid grid-cols-2 gap-3">
                  <div className="bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-[#4B0BE8] mb-1">70+</div>
                      <div className="text-[10px] sm:text-xs text-slate-300">IT Leaders</div>
                    </div>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-black text-purple-400 mb-1">48</div>
                      <div className="text-[10px] sm:text-xs text-slate-300">Hours of Networking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
