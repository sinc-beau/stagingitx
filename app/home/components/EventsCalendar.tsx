'use client';

import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Event {
  date: string;
  title: string;
  location: string;
  type: 'futurescale' | 'backbone';
  link?: string;
  comingSoon?: boolean;
}

const events: Event[] = [
  {
    date: 'Feb 24',
    title: 'FutureScale Sessions',
    location: 'New York City',
    type: 'futurescale',
    link: '/futurescale'
  },
  {
    date: 'Mar 15-17',
    title: 'Backbone Forum East',
    location: 'Miami',
    type: 'backbone',
    link: '/forums/miami-cto-cio-forum'
  },
  {
    date: 'May 12',
    title: 'FutureScale Session',
    location: 'San Francisco',
    type: 'futurescale',
    link: '/futurescale'
  },
  {
    date: 'Jun 7-9',
    title: 'Backbone Forum Central',
    location: 'Austin',
    type: 'backbone',
    link: '/forums/austin-cto-cio-forum'
  },
  {
    date: 'Aug',
    title: 'Backbone Forum Canada',
    location: 'Toronto',
    type: 'backbone',
    link: '/forums/toronto-cto-cio-forum'
  },
  {
    date: 'Oct 11-13',
    title: 'Backbone Forum West',
    location: 'Las Vegas',
    type: 'backbone',
    link: '/forums/las-vegas-cto-cio-forum'
  },
  {
    date: 'Nov 8-10',
    title: 'Backbone Forum National',
    location: 'Austin',
    type: 'backbone',
    link: '/forums/national-cto-cio-forum'
  },
  {
    date: 'Nov 9',
    title: 'FutureScale Session',
    location: 'Dallas',
    type: 'futurescale',
    link: '/futurescale'
  }
];

export default function EventsCalendar() {
  const router = useRouter();

  return (
    <section className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-[#4B0BE8]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              2026 Events
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Mark your calendar for upcoming FutureScale Sessions and Backbone Forums
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4B0BE8]/20 via-[#4B0BE8]/40 to-[#4B0BE8]/20" />

          {/* Events List */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
              >
                {/* Date */}
                <div className="md:w-24 flex-shrink-0">
                  <div className={`inline-block md:block px-4 py-2 md:px-0 md:py-0 rounded-lg md:rounded-none ${
                    event.type === 'futurescale'
                      ? 'bg-[#4B0BE8]/10 md:bg-transparent'
                      : 'bg-blue-50 md:bg-transparent'
                  }`}>
                    <p className="text-base md:text-lg font-bold text-gray-900">
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Dot indicator - Hidden on mobile */}
                <div className="hidden md:flex items-center justify-center absolute left-[112px] top-1/2 -translate-y-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    event.type === 'futurescale'
                      ? 'bg-[#4B0BE8]'
                      : 'bg-blue-600'
                  }`} />
                </div>

                {/* Event Card */}
                <div className={`flex-1 p-5 md:p-6 rounded-xl border-2 transition-all duration-300 ${
                  event.comingSoon
                    ? 'border-gray-300 bg-gray-50 opacity-60'
                    : event.type === 'futurescale'
                    ? 'border-[#4B0BE8]/20 bg-white hover:border-[#4B0BE8]/40 hover:shadow-lg hover:shadow-[#4B0BE8]/10'
                    : 'border-blue-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-lg md:text-xl font-bold ${
                          event.comingSoon
                            ? 'text-gray-600'
                            : event.type === 'futurescale'
                            ? 'text-[#4B0BE8]'
                            : 'text-blue-600'
                        }`}>
                          {event.title}
                        </h3>
                        {event.comingSoon && (
                          <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <div className={`flex items-center gap-2 mb-3 ${
                        event.comingSoon ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm md:text-base">{event.location}</span>
                      </div>
                      {event.link && !event.comingSoon && (
                        <button
                          onClick={() => router.push(event.link!)}
                          className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                            event.type === 'futurescale'
                              ? 'bg-[#4B0BE8] text-white hover:bg-[#3A0BB8]'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {event.type === 'futurescale' ? 'Learn More' : 'Register Now'}
                        </button>
                      )}
                    </div>

                    {/* Mobile type badge */}
                    <div className="md:hidden">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === 'futurescale'
                          ? 'bg-[#4B0BE8]/10 text-[#4B0BE8]'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {event.type === 'futurescale' ? 'FS' : 'BF'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4B0BE8]" />
            <span className="text-gray-600">FutureScale Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span className="text-gray-600">Backbone Forums</span>
          </div>
        </div>
      </div>
    </section>
  );
}
