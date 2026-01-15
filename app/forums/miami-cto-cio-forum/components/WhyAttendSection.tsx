import React from 'react';
import { Brain, Network, Award, Users, ChevronRight } from 'lucide-react';

export default function WhyAttendSection() {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reasons = [
    {
      title: 'Strategic Intelligence',
      description: 'Access cutting-edge insights on digital transformation, cloud architecture, and emerging technologies from industry experts and analysts.',
      icon: Brain,
    },
    {
      title: 'Executive Networking',
      description: 'Build relationships with vetted peers who understand your challenges. Share strategies and solutions in a confidential, trust-based environment.',
      icon: Network,
    },
    {
      title: 'Actionable Insights',
      description: 'Walk away with practical frameworks, tools, and strategies you can implement immediately to drive innovation and operational excellence.',
      icon: Award,
    },
    {
      title: 'Peer Learning',
      description: 'Participate in roundtable discussions and problem-solving sessions focused on real-world challenges facing IT leaders today.',
      icon: Users,
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4">WHY ATTEND</div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              Elevate Your IT Strategy
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The ITx Collective Forum isn't just another conference. It's where IT leaders
              come to think critically, share openly, and leave with solutions that matter.
            </p>
            <button
              onClick={scrollToRegistration}
              className="bg-gradient-to-r from-[#4B0BE8] to-purple-600 hover:from-[#3A0BB8] hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0BE8]/50 flex items-center gap-2"
            >
              REQUEST INVITATION
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-black/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-[#4B0BE8]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-[#4B0BE8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-slate-300">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
