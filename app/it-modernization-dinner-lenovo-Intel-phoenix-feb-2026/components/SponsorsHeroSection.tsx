import React from 'react';

interface Sponsor {
  name: string;
  logo_url: string;
  sponsor_short_description?: string;
}

interface SponsorsHeroSectionProps {
  sponsors: Sponsor[];
}

export default function SponsorsHeroSection({ sponsors }: SponsorsHeroSectionProps) {
  if (sponsors.length === 0) return null;

  const hasAnyDescription = sponsors.some(s => s.sponsor_short_description);

  return (
    <section className="bg-white py-12 px-4 sm:px-8">
      <div className="max-w-[1600px] mx-auto lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-6">
            Presented By
          </h2>
          <div className="flex items-center justify-center gap-12 flex-wrap min-h-[111px]">
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
          {hasAnyDescription && (
            <div className="mt-8 max-w-3xl mx-auto">
              {sponsors.map((sponsor, index) =>
                sponsor.sponsor_short_description ? (
                  <p key={index} className="text-gray-600 text-sm mt-2">
                    {sponsor.sponsor_short_description}
                  </p>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
