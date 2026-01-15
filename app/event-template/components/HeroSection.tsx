import React from 'react';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';

interface EventData {
  title: string;
  date: string;
  timezone: string;
  city: string;
  type: string;
  venue: string;
  venue_address: string;
}

interface HeroSectionProps {
  eventData: EventData;
}

export default function HeroSection({ eventData }: HeroSectionProps) {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    const displayMinutes = minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : '';
    return `${displayHours}${displayMinutes} ${period}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  };

  return (
    <section className="relative min-h-[60vh] flex items-center pt-16 px-4 sm:px-8 pb-16 sm:pb-24 itx-grid-background">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4B0BE8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4B0BE8]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B0BE8] border border-[#4B0BE8]">
                <Tag className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white uppercase tracking-wide">ITx {eventData.type}</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-white">
                {eventData.title}
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#4B0BE8]" />
                  <span className="text-lg font-semibold">{formatDate(eventData.date)}</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#4B0BE8]" />
                  <span className="text-lg font-semibold">{formatTime(eventData.date)} {eventData.timezone}</span>
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#4B0BE8]" />
                  <span className="text-lg font-semibold">{eventData.city}</span>
                </div>
              </div>

              {(eventData.venue || eventData.venue_address) && (
                <div className="flex flex-col items-center justify-center gap-2 text-white/80 pt-2">
                  {eventData.venue && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#4B0BE8]" />
                      <span className="text-base font-medium">{eventData.venue}</span>
                    </div>
                  )}
                  {eventData.venue_address && (
                    <div className="text-sm text-white/60">
                      {eventData.venue_address}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={scrollToRegistration}
                className="bg-[#4B0BE8] hover:bg-[#3A0BB8] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#4B0BE8]/50 text-lg uppercase tracking-wider"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
