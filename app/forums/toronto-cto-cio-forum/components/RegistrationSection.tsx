import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function RegistrationSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
        <div className="mb-8">
          <div className="inline-block bg-[#4B0BE8]/10 border border-[#4B0BE8]/30 px-6 py-2 rounded-full mb-6">
            <span className="text-sm font-bold text-[#4B0BE8] tracking-wider">TBD AUGUST 2026</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Your Journey Begins Here
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Join the most exclusive IT leadership forum of 2026. Limited seats available for qualified leaders only.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToRegistration}
            className="bg-gradient-to-r from-[#4B0BE8] to-purple-600 hover:from-[#3A0BB8] hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0BE8]/50 flex items-center justify-center gap-2"
          >
            SECURE YOUR ACCESS
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-slate-600">
          Registration is invitation-only and subject to approval
        </p>
      </div>
    </section>
  );
}
