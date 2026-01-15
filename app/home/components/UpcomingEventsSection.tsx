'use client';

import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

interface Event {
  slug: string;
  title: string;
  date: string;
  city: string;
  venue: string;
  type: string;
  event_sponsors: Array<{
    logo_url: string;
    name: string;
  }>;
}

export default function UpcomingEventsSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLiveEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select(`
            slug,
            title,
            date,
            city,
            venue,
            type,
            event_sponsors(
              logo_url,
              name
            )
          `)
          .eq('islive', true)
          .neq('type', 'Forum')
          .order('date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching live events:', error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLiveEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
  };

  return (
    <section className="relative py-16 md:py-20 px-6 bg-white">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-[#4B0BE8]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Upcoming Events
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Join us at our exclusive events
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-pulse">
              <div className="w-8 h-8 border-4 border-[#4B0BE8] border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Events Currently Scheduled
              </h3>
              <p className="text-gray-600">
                Check back soon for upcoming events and opportunities to connect with IT leaders.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 6).map((event) => (
                <Link
                  key={event.slug}
                  href={`/${event.slug}`}
                  className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B0BE8] hover:shadow-xl transition-all duration-300 block"
                >
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-[#4B0BE8] rounded-full"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#4B0BE8]/10 rounded-lg flex items-center justify-center group-hover:bg-[#4B0BE8] transition-colors duration-300">
                        <Calendar className="w-5 h-5 text-[#4B0BE8] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#4B0BE8] mb-1">
                          {formatDate(event.date)}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#4B0BE8] transition-colors duration-300">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm truncate">{event.city}</span>
                      </div>
                      {event.venue && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm truncate">{event.venue}</span>
                        </div>
                      )}
                      {event.type && (
                        <div className="flex items-center gap-2">
                          <div className="px-2 py-1 bg-[#4B0BE8]/10 rounded text-xs font-semibold text-[#4B0BE8]">
                            {event.type}
                          </div>
                        </div>
                      )}
                    </div>

                    {event.event_sponsors && event.event_sponsors.length > 0 && (
                      <div className="flex justify-center mt-4 pt-4 border-t border-gray-100 flex-wrap gap-3">
                        {event.event_sponsors.map((sponsor, idx) => (
                          <div key={idx} className="relative w-16 h-10">
                            <Image
                              src={sponsor.logo_url}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <div className="inline-flex items-center text-sm font-semibold text-[#4B0BE8] group-hover:gap-2 transition-all duration-300">
                        <span>View Details</span>
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {events.length > 6 && (
              <div className="mt-12 text-center">
                <Link
                  href="/command-briefings#events"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#4B0BE8] text-white font-semibold rounded-lg hover:bg-[#3D09B8] transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>See More Events</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
