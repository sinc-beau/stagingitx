'use client';

import React from 'react';
import { Building } from 'lucide-react';

export default function PartnerLogosSection() {
  const partnerLogos = [
    'hpelogo.png',
    'Microsoftlogo.webp',
    'Nutanixlogo.png',
    'purestoragelogo.png',
    'google-logo-transparent.png',
    'AMD_BIG.D-7dc90896.png',
    'Lenovo Tranparent.png',
    'NVIDIA_Horizontal_lockup_white_digital.png',
    'intellogotrans.png',
    'awslogo.png',
    'DellLogo.png',
    'Cisco-Logo.png',
    'ibmlogo.png'
  ];

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest mb-6 uppercase" style={{ color: '#4B0BE8' }}>
            <Building className="w-3 h-3" />
            TRUSTED PARTNERS
            <Building className="w-3 h-3" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            PARTNERING WITH{' '}
            <span style={{
              background: 'linear-gradient(to right, #4B0BE8, #3A0BB8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              INDUSTRY LEADERS
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Join these trusted organizations in shaping the future of IT leadership and digital transformation
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex space-x-12 items-center"
            style={{
              animation: 'scroll 30s linear infinite'
            }}
          >
            {partnerLogos.map((logo, index) => (
              <img
                key={`first-${index}`}
                src={`/${logo}`}
                alt="Partner Logo"
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}

            {partnerLogos.map((logo, index) => (
              <img
                key={`second-${index}`}
                src={`/${logo}`}
                alt="Partner Logo"
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 flex-shrink-0"
              />
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </div>

        <div className="text-center mt-8">
          <p className="text-white/40 text-sm italic">and many more trusted technology partners</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}