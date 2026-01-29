'use client';

import React from 'react';
import { Calendar, MapPin, Building2, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

const elevatedEvents = [
  {
    slug: 'futurescale-philly-stadium-tour-feb-2026',
    title: 'Philadelphia IT Leaders Lincoln Financial Field Tour',
    date: 'February 19, 2026',
    time: '4:00 PM - 7:00 PM',
    city: 'Philadelphia, PA',
    venue: 'Lincoln Financial Field',
  },
  {
    slug: 'denver-it-leaders-curling-events',
    title: 'Denver IT Leaders Curling Experience',
    date: 'February 24, 2026',
    time: '2:15 PM - 5:30 PM',
    city: 'Denver, CO',
    venue: 'Rock Creek Curling',
  },
];

export default function ElevatedExperiencesSection() {
  return (
    <section className="relative py-16 md:py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-violet-50">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#4B0BE8]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Elevated Experiences
            </h2>
            <Sparkles className="w-8 h-8 text-[#4B0BE8]" />
          </div>
          <p className="text-lg text-gray-600">
            Unique venues, unforgettable connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {elevatedEvents.map((event) => (
            <Link
              key={event.slug}
              href={`/${event.slug}`}
              className="group relative bg-white border-2 border-[#4B0BE8]/20 rounded-xl p-8 hover:border-[#4B0BE8] hover:shadow-2xl transition-all duration-300 block"
            >
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-[#4B0BE8] rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#4B0BE8] mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#4B0BE8] transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#4B0BE8]" />
                    </div>
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#4B0BE8]" />
                    </div>
                    <span className="text-sm font-medium">{event.city}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-[#4B0BE8]" />
                    </div>
                    <span className="text-sm font-medium">{event.venue}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="inline-flex items-center text-sm font-semibold text-[#4B0BE8] group-hover:gap-2 transition-all duration-300">
                    <span>Learn More</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
