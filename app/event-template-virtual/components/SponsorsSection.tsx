import React from 'react';
import { Building2 } from 'lucide-react';

interface Sponsor {
  name: string;
  about: string;
  logo_url: string;
}

interface SponsorsSectionProps {
  sponsors: Sponsor[];
}

export default function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-[#4B0BE8]" />
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">
              Event Sponsors
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Partnering with industry leaders to bring you cutting-edge insights and solutions
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-[#4B0BE8]/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {sponsor.logo_url && (
                  <div className="bg-white rounded-xl p-6 flex items-center justify-center w-full md:w-80 flex-shrink-0 min-h-[120px]">
                    <img
                      src={sponsor.logo_url}
                      alt={sponsor.name}
                      className="max-w-full h-auto max-h-[80px] object-contain"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{sponsor.name}</h3>
                  {sponsor.about && (
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      {sponsor.about.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph.trim()}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
