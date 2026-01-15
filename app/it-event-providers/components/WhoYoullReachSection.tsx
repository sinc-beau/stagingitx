'use client';

import React, { useState } from 'react';
import { Eye, Briefcase, Building, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface WhoYoullReachSectionProps {
  onOpenModal: () => void;
}

interface CouncilMember {
  name: string;
  title: string;
  organization: string;
  image: string;
  bio: string;
}

const councilMembers: CouncilMember[] = [
  {
    name: 'Daniel Naylor',
    title: 'Chief Information Officer',
    organization: 'Precision Aviation Group',
    image: '/Daniel-Naylor-CIO_Headshot-980x1469.jpg',
    bio: 'Daniel Naylor is the Chief Information Officer at Precision Aviation Group, a leading provider of maintenance, repair and overhaul (MRO) and value-added services to the aerospace and defense industries. He brings over 20 years of leadership experience in technology and operations, including executive roles at Advance Auto Parts, Delta Dental and Optical Cable Corporation. Daniel leads enterprise technology strategy, cybersecurity, and digital transformation across PAG\'s worldwide operations, driving modernization through data visibility, automation, and secure infrastructure.'
  },
  {
    name: 'Amit Basu',
    title: 'Chief Information Officer & Chief Information Security Officer',
    organization: 'International Seaways',
    image: '/Amit Basu CIO_CISO Headshot.png',
    bio: 'Amit Basu is the Chief Information Officer and Chief Information Security Officer at International Seaways (NYSE: INSW), one of the world\'s largest tanker companies. A pioneer of maritime digital transformation, he has led INSW\'s transition to cloud-only operations and built a multi-layered cybersecurity framework safeguarding global fleet systems. Amit is recognized for advancing AI-enabled automation and cyber resilience across IT and OT environments. He is also an active thought leader and advisor in global cybersecurity and critical infrastructure forums.'
  },
  {
    name: 'Altaf Uddin',
    title: 'Chief Information Officer & Chief Information Security Officer',
    organization: 'Kansas Secretary of State',
    image: '/Altaf Uddin CIO_CISO Headshot.jpg',
    bio: 'Altaf Uddin is the CIO and CISO for the Kansas Secretary of State, where he provides strategic leadership across all facets of information technology and cybersecurity. He oversees enterprise systems of record, mission-critical workflows, and statewide licensing platforms, ensuring operational integrity and compliance with federal and state mandates. With a career grounded in information security and digital transformation, Altaf holds the CISSP (Certified Information Systems Security Professional) and MCTIA (Mandiant Cyber Threat Intelligence Analysis) certifications, along with an MBA. He is deeply committed to aligning technology strategy with organizational priorities - driving innovation, resilience, and secure electronic service delivery for the public sector.'
  }
];

export default function WhoYoullReachSection({ onOpenModal }: WhoYoullReachSectionProps) {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };
  return (
    <section className="py-32 px-6 bg-white" id="audience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase text-black">
            <Eye className="w-3 h-3" />
            TARGET AUDIENCE
            <Eye className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-6">
            WHO YOU'LL{' '}
            <span style={{
              background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              REACH
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with decision-makers actively shaping digital transformation and IT strategy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300 group">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
              style={{ background: 'rgba(75, 11, 232, 0.1)' }}
            >
              <Briefcase className="w-6 h-6" style={{ color: '#4B0BE8' }} />
            </div>
            <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">CIO/CTO Executives</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              C-suite IT leaders with decision-making authority and strategic influence over enterprise technology initiatives.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300 group">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
              style={{ background: 'rgba(75, 11, 232, 0.1)' }}
            >
              <Building className="w-6 h-6" style={{ color: '#4B0BE8' }} />
            </div>
            <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">Global IT Leaders</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              VP+ technology executives driving cloud adoption, infrastructure modernization, and digital innovation.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all duration-300 group">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
              style={{ background: 'rgba(75, 11, 232, 0.1)' }}
            >
              <Target className="w-6 h-6" style={{ color: '#4B0BE8' }} />
            </div>
            <h3 className="text-lg font-bold text-black mb-3 uppercase tracking-wider">Enterprise Architects</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Technology strategists and architects designing next-generation IT solutions and platforms.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-black mb-3">
              Executive Council
            </h3>
            <p className="text-xl font-semibold mb-4" style={{ color: '#4B0BE8' }}>
              The ITx Kernel
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Executive Council members are the voice of the community and serve as trusted advisors who vet and endorse solution providers. When you partner with ITx Collective, you gain credibility through association with these influential leaders who guide our platform and validate the value you bring to their peers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-black mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#4B0BE8' }}>
                    {member.title}
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    {member.organization}
                  </p>

                  <div className="text-gray-700 text-sm leading-relaxed">
                    <p className={expandedMember === index ? '' : 'line-clamp-3'}>
                      {member.bio}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleExpanded(index)}
                    className="mt-4 flex items-center gap-2 font-semibold text-xs transition-colors duration-300 hover:opacity-80"
                    style={{ color: '#4B0BE8' }}
                  >
                    {expandedMember === index ? (
                      <>
                        Read Less
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="group px-8 py-4 text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            style={{
              background: '#4B0BE8',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3A0BB8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4B0BE8';
            }}
          >
            <span>Connect With Decision Makers</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}