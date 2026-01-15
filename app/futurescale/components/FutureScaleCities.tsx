'use client';

import React from 'react';
import { MapPin, Bell, Calendar, Globe, Clock } from 'lucide-react';
import { ITxNewsletterInlineForm } from '@/components/forms/ITxNewsletterInlineForm';
import Link from 'next/link';

export default function FutureScaleCities() {
  const cities = [
    {
      name: 'PHILADELPHIA',
      code: 'PHL',
      date: 'Wednesday, February 19, 2026',
      time: '4:00 PM - 7:00 PM',
      venue: 'Lincoln Financial Field',
      status: 'OPEN',
      link: '/futurescale-philly-stadium-tour-feb-2026'
    },
    {
      name: 'DENVER',
      code: 'DEN',
      date: 'Tuesday, February 24, 2026',
      time: '2:15 PM - 5:30 PM',
      venue: 'Rock Creek Curling',
      status: 'OPEN',
      link: '/denver-it-leaders-curling-events'
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4B0BE8] text-xs font-bold tracking-wider mb-6">
            <MapPin className="w-3 h-3" />
            UPCOMING SESSIONS
            <MapPin className="w-3 h-3" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            CITIES <span className="text-[#4B0BE8]">ONLINE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for intimate, high-impact gatherings of technology leaders
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative bg-white/5 border-2 border-white/10 rounded-lg p-8 hover:border-[#4B0BE8] transition-colors"
            >
              {/* Status indicator */}
              <div className="absolute top-4 right-4">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                  city.status === 'OPEN'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-amber-500/20 text-amber-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    city.status === 'OPEN'
                      ? 'bg-green-400 animate-pulse'
                      : 'bg-amber-400'
                  }`} />
                  {city.status}
                </div>
              </div>

              <div className="text-xs text-gray-400 font-bold mb-2">{city.code}</div>
              <h3 className="text-3xl font-bold text-white mb-6">
                {city.name}
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Date</div>
                    <div className="text-sm">{city.date}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Time</div>
                    <div className="text-sm">{city.time}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#4B0BE8] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Venue</div>
                    <div className="text-sm">{city.venue}</div>
                  </div>
                </div>
              </div>

              {city.link ? (
                <Link
                  href={city.link}
                  className="inline-block w-full text-center bg-[#4B0BE8] hover:bg-[#3a0ab8] text-white font-bold py-4 px-8 rounded-lg transition-colors uppercase tracking-wider"
                >
                  Register Now
                </Link>
              ) : (
                <div className="w-full text-center bg-gray-600 text-gray-300 font-bold py-4 px-8 rounded-lg uppercase tracking-wider cursor-not-allowed">
                  Coming Soon
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More Cities Coming */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-8 py-4">
            <Globe className="w-5 h-5 text-[#4B0BE8]" />
            <div className="text-left">
              <p className="text-white font-bold">More Cities Coming Online</p>
              <p className="text-gray-400 text-sm">Additional locations to be announced</p>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border-2 border-white/10 rounded-lg overflow-hidden">
            <div className="bg-[#4B0BE8] p-4 border-b border-[#4B0BE8]">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-white animate-pulse" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Get Notified
                </h3>
              </div>
            </div>

            <div className="p-8 bg-white">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-2">
                  Be the first to know about FutureScale Sessions
                </p>
                <p className="text-[#4B0BE8] text-2xl font-bold">
                  STAY INFORMED
                </p>
              </div>

              <ITxNewsletterInlineForm />

              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-400 uppercase tracking-wider">
                  Exclusive Access • Limited Seats • Invitation Priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}