import React from 'react';
import { Target, Shield, Terminal, Network, Activity, Lightbulb, Users, Rocket } from 'lucide-react';

export default function FutureScaleObjectives() {
  const sessionFormats = [
    {
      icon: Target,
      title: 'STRATEGIC ALIGNMENT',
      description: 'Identify and prioritize critical technology objectives for your organization'
    },
    {
      icon: Lightbulb,
      title: 'INNOVATION LABS',
      description: 'Explore emerging technologies and their practical applications'
    },
    {
      icon: Users,
      title: 'PEER COUNCILS',
      description: 'Facilitate roundtable discussions on shared challenges and solutions'
    },
    {
      icon: Network,
      title: 'LEADERSHIP NETWORK',
      description: 'Build connections with 35-40 senior technology executives'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4B0BE8] text-xs font-bold tracking-wider mb-6">
            <Activity className="w-3 h-3" />
            SESSION FORMAT
            <Activity className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            PROGRAM <span className="text-[#4B0BE8]">OBJECTIVES</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Each FutureScale Session combines strategic discussion with hands-on experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessionFormats.map((format, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="w-20 h-20 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-[#4B0BE8]/20 transition-all duration-300">
                <format.icon className="w-10 h-10 text-[#4B0BE8]" />
              </div>
              <h3 className="text-sm font-bold text-[#4B0BE8] mb-3 uppercase tracking-wider">{format.title}</h3>
              <p className="text-gray-600 leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-[#4B0BE8]" />
              <span>Experiential Format</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#4B0BE8]" />
              <span>Confidential Environment</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-[#4B0BE8]" />
              <span>Action-Oriented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}