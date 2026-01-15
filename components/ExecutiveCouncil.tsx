'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    image: '/amitbasucio.png',
    bio: 'Amit Basu is the Chief Information Officer and Chief Information Security Officer at International Seaways (NYSE: INSW), one of the world\'s largest tanker companies. A pioneer of maritime digital transformation, he has led INSW\'s transition to cloud-only operations and built a multi-layered cybersecurity framework safeguarding global fleet systems. Amit is recognized for advancing AI-enabled automation and cyber resilience across IT and OT environments. He is also an active thought leader and advisor in global cybersecurity and critical infrastructure forums.'
  },
  {
    name: 'Altaf Uddin',
    title: 'Chief Information Officer & Chief Information Security Officer',
    organization: 'Kansas Secretary of State',
    image: '/Altaf Uddin CIO_CISO Headshot.jpg',
    bio: 'Altaf Uddin is the CIO and CISO for the Kansas Secretary of State, where he provides strategic leadership across all facets of information technology and cybersecurity. He oversees enterprise systems of record, mission-critical workflows, and statewide licensing platforms, ensuring operational integrity and compliance with federal and state mandates. With a career grounded in information security and digital transformation, Altaf holds the CISSP (Certified Information Systems Security Professional) and MCTIA (Mandiant Cyber Threat Intelligence Analysis) certifications, along with an MBA. He is deeply committed to aligning technology strategy with organizational priorities - driving innovation, resilience, and secure electronic service delivery for the public sector.'
  },
  {
    name: 'Jalen Byford',
    title: 'Chief Information Officer',
    organization: 'Humana Healthy Horizons in Oklahoma',
    image: '/jalen_byford_cio_council_headshot.jpg',
    bio: 'Jalen Byford is a senior technology executive and Chief Information Officer for Humana Healthy Horizons in Oklahoma, where he leads large-scale digital transformation and healthcare technology strategy to improve outcomes for Medicaid members. A highly engaged community and industry leader, Jalen is actively involved in advancing the regional and national technology ecosystem through nonprofit board service, executive mentoring, and thought leadership. He is passionate about fostering innovation, developing future IT leaders, and strengthening collaboration across public, private, and nonprofit sectors.'
  },
  {
    name: 'Irvinder Singh',
    title: 'Chief Technology Officer',
    organization: 'World Bank',
    image: '/irvinder_singh_cio_headshot.png',
    bio: 'Irvinder Singh is a visionary technology executive currently serving as Chief Technology Officer at the World Bank, where he leads global strategy, enterprise architecture, and the delivery of secure, cloud-first platforms. With a background including executive roles at AgFirst Farm Credit Bank and Wells Fargo, Irvinder has a proven track record of driving large-scale digital transformations, managing budgets exceeding $100 million, and leading teams of up to 600 staff. He specializes in aligning technology roadmaps with business missions, modernizing legacy infrastructure, and engineering resilient systems that enhance operational efficiency and user experience.'
  },
  {
    name: 'Heidi Anderson',
    title: 'Chief Information Officer',
    organization: 'Prestige Financial Services',
    image: '/heidi_anderson_cio_headshot.jpg',
    bio: 'Heidi is a transformational CIO and strategic innovator with a proven track record of modernizing financial services and government systems. She has led high-stakes digital transformations—from launching the nation\'s first online dispute resolution platform to executing complex $500M global mergers—delivering over $380M in savings and positioning organizations for 10X growth. Recognized for building elite technical teams and pioneering cloud-native solutions, Heidi consistently bridges the gap between complex technology and accessible, scalable user experiences.'
  },
  {
    name: 'Nathan Kimpel',
    title: 'Chief Information Officer / Chief Technology Officer',
    organization: 'Technology Executive',
    image: '/nathankimpelciocto.jpg',
    bio: 'Nathan Kimpel is a transformational CIO/CTO with 28+ years of experience leading global technology organizations and delivering measurable enterprise value across real estate, private equity, manufacturing, and data-center operations. He has driven large-scale digital transformation efforts—ranging from cloud migrations and ERP consolidation to AI-enabled portfolio optimization—resulting in billions in enterprise impact and sustained operational excellence. Known for his people-first leadership style and ability to align complex technology ecosystems to business strategy, Nathan consistently accelerates growth, scales organizations, and modernizes platforms for the world\'s most demanding environments.'
  },
  {
    name: 'Brian Singer',
    title: 'Chief Technology Officer / Chief Information Officer',
    organization: 'Technology Executive',
    image: '/brian_singer_cio.png',
    bio: 'Brian Singer is a seasoned technology executive and product evangelist with a proven track record of guiding organizations through rapid scale and digital transformation. Specializing in Private Equity and VC environments, he has served as CTO/CIO for companies like Propio, RSi, and Angels of Care, where he drove accelerated recapitalizations and EBITDA growth through lean, data-driven strategies. With a foundation at major enterprises including Amazon and UnitedHealth, Brian combines deep technical expertise with operational discipline, rebuilding technology organizations to align innovation with business value and measurable financial impact.'
  },
  {
    name: 'Ian Catolico',
    title: 'Chief Information Officer',
    organization: 'Qualfon',
    image: '/ian_catolico_cio.jpg',
    bio: 'Ian Catolico is the Chief Information Officer at Qualfon, where he leads global technology strategy, AI enablement, and cybersecurity for a 16,000-person workforce across North America, Latin America, and Asia. He has successfully transformed IT into a strategic growth engine by consolidating financial platforms into SAP S/4HANA and launching a Decision Intelligence Platform that integrates over 250 data sources using Microsoft Fabric. Ian also elevated the company\'s security posture through a Zero-Trust architecture and unified governance across PCI, SOC2, and HIPAA standards. Based in South Carolina, he is a dedicated family man who balances his high-paced professional life with raising three young children.'
  },
  {
    name: 'Derek Stephens',
    title: 'Chief Information Officer, Chief Information Security Officer',
    organization: 'LHC Group',
    image: '/derek_stephens.png',
    bio: 'Derek Stephens serves in CIO, CISO, and Integration leadership roles at LHC Group, where he has spent the last six years guiding the $3B provider through its acquisition by United Healthcare. Previously, he managed Watermark Digital and spent over 20 years at IBM leading global strategy and transformation for Fortune 500 clients. Derek holds degrees from Texas A&M and SMU, is certified in Design Thinking by MIT, served 14 years as Mayor of Lowry Crossing, Texas, and owns Dallas Equestrian.'
  },
  {
    name: 'Vince Fattore',
    title: 'Chief Information Officer',
    organization: 'RoadSafe',
    image: '/vince_fattore.png',
    bio: 'Vince Fattore is a seasoned technology executive with over 25 years of experience in various industries, including healthcare, construction, and manufacturing. He currently serves as the Chief Information Officer (CIO) at RoadSafe, where he drives technology strategy and innovation for the company. Prior to this role, he held CIO positions at multiple organizations, including Watsco/Temperature Equipment Corporation and Brookdale Senior Living, where he focused on technology enablement and business transformation. Vince holds an MBA and a bachelor\'s degree from Loyola University, and he is known for his leadership in integrating technology systems and driving growth through innovation.'
  }
];

export default function ExecutiveCouncil() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
            Executive Council
          </h2>
          <p className="text-xl text-[#4B0BE8] font-semibold">
            The ITx Kernel
          </p>
          <p className="text-lg text-slate-300 mt-4 max-w-3xl mx-auto">
            Meet the technology leaders shaping the future of enterprise IT and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {councilMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#4B0BE8] mb-0.5">
                  {member.title}
                </p>
                <p className="text-xs text-gray-600 mb-3">
                  {member.organization}
                </p>

                <div className="text-gray-700 text-xs leading-relaxed">
                  <p className={expandedMember === index ? '' : 'line-clamp-3'}>
                    {member.bio}
                  </p>
                </div>

                <button
                  onClick={() => toggleExpanded(index)}
                  className="mt-3 flex items-center gap-1.5 text-[#4B0BE8] hover:text-purple-600 font-semibold text-xs transition-colors duration-300"
                >
                  {expandedMember === index ? (
                    <>
                      Read Less
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      Read More
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
