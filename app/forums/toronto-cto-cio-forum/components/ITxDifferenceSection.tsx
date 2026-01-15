import React from 'react';
import { Calendar, Users, Target, Shield, ChevronRight, Network } from 'lucide-react';

export default function ITxDifferenceSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4">THE ITx DIFFERENCE</div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            What You Can Expect
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three days that will transform how you approach IT leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-[#4B0BE8]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#4B0BE8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">3 Days of Intensive Learning</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Packed with insights from industry leaders who deliver real-world experience, not theory. Every session is designed to give you actionable takeaways you can implement immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-[#4B0BE8]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#4B0BE8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Learn from Those Who've Been There</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We know IT leaders learn best from experience. Connect with peers who live and breathe what you do, so you can learn from their victories and challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-[#4B0BE8]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#4B0BE8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Community-Driven Agenda</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We respect your time and develop the agenda from the ground up based on community feedback and what you're experiencing. Every topic is chosen because our network said it matters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-[#4B0BE8]/30 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#4B0BE8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#4B0BE8]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Vetted Solution Providers</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Every vendor presentation is carefully curated to ensure relevance to the challenges our community faces. We select speakers based on their ability to provide real value, not their budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-8">
            <div className="bg-gradient-to-br from-[#4B0BE8]/10 to-purple-500/10 border border-[#4B0BE8]/30 rounded-3xl p-12">
              <div className="text-center space-y-8">
                <Network className="w-20 h-20 text-[#4B0BE8] mx-auto" />
                <h3 className="text-3xl font-black text-slate-900">
                  The ITx Promise
                </h3>
                <p className="text-lg text-slate-600">
                  Every forum delivers real solutions to real problems from real leaders who've been in your shoes.
                </p>

                <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-200">
                  <div>
                    <div className="text-3xl font-black text-[#4B0BE8] mb-2">48</div>
                    <div className="text-sm text-slate-600">Hours of Content</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-purple-600 mb-2">70+</div>
                    <div className="text-sm text-slate-600">IT Leaders</div>
                  </div>
                </div>

                <button
                  onClick={scrollToRegistration}
                  className="w-full bg-gradient-to-r from-[#4B0BE8] to-purple-600 hover:from-[#3A0BB8] hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0BE8]/50"
                >
                  Reserve Your Seat
                </button>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Why Leaders Trust ITx Collective</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-[#4B0BE8] flex-shrink-0" />
                  <span className="text-slate-600">Chatham House Rules ensure confidentiality</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-[#4B0BE8] flex-shrink-0" />
                  <span className="text-slate-600">Every attendee is vetted and verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-[#4B0BE8] flex-shrink-0" />
                  <span className="text-slate-600">Limited to CIOs, CTOs, and IT Leaders only</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-[#4B0BE8] flex-shrink-0" />
                  <span className="text-slate-600">No recording, no press, no public sharing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
