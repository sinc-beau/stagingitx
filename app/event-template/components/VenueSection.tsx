import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

interface EventData {
  venue: string;
  venue_address: string;
  venue_link: string;
}

interface VenueSectionProps {
  eventData: EventData;
}

export default function VenueSection({ eventData }: VenueSectionProps) {
  if (!eventData.venue && !eventData.venue_address && !eventData.venue_link) {
    return null;
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Venue Information
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Easy to find, convenient to access
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              {eventData.venue && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#4B0BE8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{eventData.venue}</h3>
                  </div>
                </div>
              )}

              {eventData.venue_address && (
                <div className="flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-[#4B0BE8] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-white/70">{eventData.venue_address}</p>
                  </div>
                </div>
              )}

              {eventData.venue_link && (
                <div className="pt-4">
                  <a
                    href={eventData.venue_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#4B0BE8] hover:bg-[#3A0BB8] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <span>View on Map</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
