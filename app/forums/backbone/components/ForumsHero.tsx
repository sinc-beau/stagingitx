import React from 'react';
import { Shield, Users, Lock, Target, ArrowRight, Network } from 'lucide-react';

interface ForumsHeroProps {
  onRegisterClick: () => void;
}

export default function ForumsHero({ onRegisterClick }: ForumsHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-black">
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-[#4B0BE8]/10 border border-[#4B0BE8]/30 text-[#4B0BE8] px-4 py-2 rounded text-xs font-bold tracking-wider">
                <Lock className="w-3 h-3" />
                EXECUTIVE ACCESS
              </div>

              {/* Main Title */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-white">ITx</span>
                  <span className="block text-[#4B0BE8]">BACKBONE</span>
                  <span className="block text-white text-3xl lg:text-4xl mt-4">FORUMS</span>
                </h1>

                <p className="text-xl text-white/70">
                  Where technology leaders unite to shape the digital future.
                </p>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-4 text-white/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#4B0BE8]" />
                  <span>Strategic Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4B0BE8]" />
                  <span>CIO/CTO Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#4B0BE8]" />
                  <span>Confidential Discussions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#4B0BE8]" />
                  <span>Zero Sales Pitches</span>
                </div>
              </div>

              {/* CTA */}
              <div>
                <button
                  onClick={onRegisterClick}
                  className="group px-8 py-4 bg-[#4B0BE8] text-white font-bold text-lg rounded hover:bg-[#4B0BE8]/90 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    SECURE YOUR SEAT
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="relative">
              <div className="relative bg-white/5 border border-white/10 rounded-lg h-[500px] overflow-hidden">
                <img
                  src="/watchtowerforum.png"
                  alt="ITx Backbone Forums"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm border border-[#4B0BE8]/30 rounded px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-[#4B0BE8]">2025 PROGRAM ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}