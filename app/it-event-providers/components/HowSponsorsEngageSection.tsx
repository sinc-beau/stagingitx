'use client';

import React from 'react';
import { Activity, Star, Zap, MessageSquare, Network, CircleCheck as CheckCircle, Lightbulb } from 'lucide-react';

export default function HowSponsorsEngageSection() {
  const engagementLevels = [
    {
      icon: Star,
      title: 'STRATEGIC PARTNERSHIP',
      description: 'Full partnership with year-round engagement',
      features: [
        'Annual thought leadership',
        'Executive advisory board',
        'Custom research',
        'Premium positioning'
      ],
      iconColor: '#4B0BE8'
    },
    {
      icon: Zap,
      title: 'PROGRAM SPONSORSHIP',
      description: 'Sponsor specific events and content series',
      features: [
        'Event sponsorship',
        'Speaking opportunities',
        'Content distribution',
        'Lead generation'
      ],
      iconColor: '#4B0BE8'
    },
    {
      icon: MessageSquare,
      title: 'CONTENT COLLABORATION',
      description: 'Co-create thought leadership pieces',
      features: [
        'Research reports',
        'Webinar hosting',
        'Panel participation',
        'Case studies'
      ],
      iconColor: '#4B0BE8'
    },
    {
      icon: Network,
      title: 'EVENT PARTICIPATION',
      description: 'Join specific briefings or forums',
      features: [
        'Solution showcases',
        'Roundtables',
        'Demo presentations',
        'Networking'
      ],
      iconColor: '#4B0BE8'
    }
  ];

  return (
    <section className="py-32 px-6 bg-black" id="engagement">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase" style={{ color: '#4B0BE8' }}>
            <Activity className="w-3 h-3" />
            ENGAGEMENT MODEL
            <Activity className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            HOW SPONSORS{' '}
            <span style={{
              background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ENGAGE
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Sponsorship focuses on solving IT challenges—not pushing products
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {engagementLevels.map((level, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-lg p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ background: 'rgba(75, 11, 232, 0.2)' }}
                >
                  <level.icon className="w-7 h-7" style={{ color: level.iconColor }} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
                  {level.title}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {level.description}
                </p>

                <div className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4B0BE8' }} />
                      <span className="text-xs text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-white/5 border rounded-lg p-10"
          style={{ borderColor: 'rgba(75, 11, 232, 0.3)' }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6" style={{ color: '#4B0BE8' }} />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Solution-Oriented Approach</h3>
              <Lightbulb className="w-6 h-6" style={{ color: '#4B0BE8' }} />
            </div>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
              Every touchpoint is built around useful, solution-oriented content that positions your team as trusted IT advisors and digital transformation experts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xl font-bold mb-2" style={{ color: '#4B0BE8' }}>PROBLEM-FOCUSED</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">Address IT challenges</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-2">CURATED AUDIENCE</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">Targeted CIO/CTO invitations</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mb-2" style={{ color: '#4B0BE8' }}>THOUGHT LEADERSHIP</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">Digital transformation expertise</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}