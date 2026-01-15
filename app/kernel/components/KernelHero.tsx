'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Users, Brain, Rocket, Heart, Award, ArrowRight, Lock, Crown, Target, Sparkles, Star, Zap, Network, Eye, Terminal, Activity, ChevronRight, Globe, Calendar, MessageSquare, BookOpen, PenTool, Handshake, TrendingUp, Gem, Flame, Compass, Layers, MousePointer, Cpu, Signal, Command } from 'lucide-react';

interface KernelHeroProps {
  onApplyClick: () => void;
}

export default function KernelHero({ onApplyClick }: KernelHeroProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { icon: PenTool, label: 'THOUGHT LEADERSHIP', color: 'purple' },
    { icon: Handshake, label: 'PEER NETWORK', color: 'indigo' },
    { icon: TrendingUp, label: 'CAREER GROWTH', color: 'purple' },
    { icon: Users, label: 'MENTORSHIP', color: 'indigo' },
    { icon: Crown, label: 'LEGACY', color: 'purple' },
  ];

  return (
    <section className="flex items-center justify-center px-8 pt-32 pb-16 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Very subtle purple orbs */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#4B0BE8]/[0.02] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[150px]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Title */}
        <div className="mb-10">
          <h1 className="text-6xl lg:text-8xl font-bold">
            <span className="block text-gray-900 mb-2">ITx</span>
            <span className="block text-[#4B0BE8]">KERNEL</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 font-light mt-6">
            Executive Council of the ITx Collective
          </p>
          <p className="text-lg text-gray-600 mt-3">
            Guiding the community, shaping the future of technology leadership
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onApplyClick}
          className="group relative px-12 py-5 overflow-hidden font-bold text-lg transition-all duration-300 transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-[#4B0BE8] rounded-lg" />
          <span className="relative z-10 flex items-center justify-center gap-3 text-white">
            Apply to Join
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </span>
        </button>
      </div>
    </section>
  );
}