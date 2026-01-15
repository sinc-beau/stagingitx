'use client';

import React, { useEffect, useState } from 'react';
import { Shield, MapPin, Users, Calendar, ArrowRight, Sparkles, Target, Network, Bell, Globe, Zap, ChevronRight, Clock, Star, Lightbulb, Rocket, Lock, Eye, Activity, Terminal, Crosshair } from 'lucide-react';

export default function FutureScaleHero() {
  const [glitchText, setGlitchText] = useState('FUTURESCALE');

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const originalText = 'FUTURESCALE';
      const glitchChars = '01';

      setGlitchText(originalText.split('').map((char, i) =>
        Math.random() > 0.98 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
      ).join(''));

      setTimeout(() => setGlitchText(originalText), 50);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(75,11,232,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(75,11,232,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4B0BE8]/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-[#4B0BE8]/10 border border-[#4B0BE8]/30 text-[#4B0BE8] px-6 py-2 rounded-full text-xs font-bold tracking-wider mb-8">
              <Lock className="w-3 h-3" />
              EXECUTIVE ACCESS
              <Shield className="w-3 h-3" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-8">
              <span className="text-white relative inline-block">
                {glitchText}
              </span>
              <span className="block text-[#4B0BE8] mt-2">
                SESSIONS
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Strategic gatherings for 35-40 technology leaders in major cities.
              Shape the future agenda of ITx Forums through peer-driven discussions and experiential evenings.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-6 max-w-md mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 sm:p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">35-40</div>
                <div className="text-xs text-white/60 font-bold uppercase tracking-wider">Leaders Per Session</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}