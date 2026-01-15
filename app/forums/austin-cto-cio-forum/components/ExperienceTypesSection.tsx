import React from 'react';
import { Users, Zap, Target, Activity, Database } from 'lucide-react';

export default function ExperienceTypesSection() {
  const experiences = [
    {
      number: '01',
      icon: Target,
      title: 'Strategic Briefings',
      description: 'Insights on digital transformation, emerging tech, and industry trends.',
      highlights: ['Cloud Architecture', 'AI & Automation', 'Data Modernization']
    },
    {
      number: '02',
      icon: Users,
      title: 'Leadership Councils',
      description: 'Closed-door peer discussions with Fortune 500 CIOs and CTOs.',
      highlights: ['Confidential', 'Peer-to-Peer']
    },
    {
      number: '03',
      icon: Zap,
      title: 'Hands-On Workshops',
      description: 'Interactive sessions with frameworks for immediate implementation.',
      highlights: ['Practical Tools', 'Action Plans']
    },
    {
      number: '04',
      icon: Database,
      title: 'Strategic Planning',
      description: 'Executive sessions on roadmaps and organizational transformation.',
      highlights: ['Board Communication', 'ROI Frameworks']
    },
    {
      number: '05',
      icon: Activity,
      title: 'Live Simulations',
      description: 'Real-world scenarios with crisis management exercises.',
      highlights: ['System Outages', 'Team Leadership']
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50" />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#4B0BE8]/5 to-transparent rounded-3xl" />
            <img
              src="/backboneforum.png"
              alt="ITx Forum Experience"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <div className="text-xs font-mono text-[#4B0BE8] tracking-wider mb-4 uppercase">IMMERSIVE EXPERIENCES</div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              Five Ways to Level Up
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Each forum combines multiple formats to deliver maximum value and actionable intelligence.
            </p>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-[#4B0BE8]/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4B0BE8] transition-colors duration-300">
                        <exp.icon className="w-6 h-6 text-[#4B0BE8] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[#4B0BE8] uppercase tracking-wider">
                          {exp.number}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{exp.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {exp.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
