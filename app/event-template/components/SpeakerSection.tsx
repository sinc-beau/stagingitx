import React from 'react';
import { Award } from 'lucide-react';

interface Speaker {
  name: string;
  about: string;
  headshot_url: string;
}

interface SpeakerSectionProps {
  speakers: Speaker[];
}

export default function SpeakerSection({ speakers }: SpeakerSectionProps) {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            {speakers.length === 1 ? 'Featured Speaker' : 'Featured Speakers'}
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Learn from industry experts driving innovation in enterprise technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#4B0BE8]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#4B0BE8]/10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {speaker.headshot_url && (
                  <div className="flex-shrink-0 w-40 md:w-48">
                    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-[3/4] relative overflow-hidden bg-gray-200">
                        <img
                          src={speaker.headshot_url}
                          alt={speaker.name}
                          className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Award className="w-6 h-6 text-[#4B0BE8]" />
                    <span className="text-sm font-semibold text-[#4B0BE8] uppercase tracking-wider">
                      Subject Matter Expert
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                    {speaker.name}
                  </h3>

                  {speaker.about && (
                    <p className="text-lg text-white/70 leading-relaxed">
                      {speaker.about}
                    </p>
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
