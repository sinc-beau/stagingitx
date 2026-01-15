import React from 'react';

interface Sponsor {
  name: string;
  logo_url: string;
}

interface SponsorsHeroSectionProps {
  sponsors: Sponsor[];
}

export default function SponsorsHeroSection({ sponsors }: SponsorsHeroSectionProps) {
  if (sponsors.length === 0) return null;

  return (
    <section className="bg-white py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-6">
            Presented By
          </h2>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-105"
              >
                <img
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
