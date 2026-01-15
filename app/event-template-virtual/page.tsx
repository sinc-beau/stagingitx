'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Footer } from '@/components/Footer';
import HeroSection from './components/HeroSection';
import SponsorsHeroSection from './components/SponsorsHeroSection';
import CombinedAboutAgendaSection from './components/CombinedAboutAgendaSection';
import RegistrationSection from './components/RegistrationSection';
import SpeakerSection from './components/SpeakerSection';
import SponsorsSection from './components/SponsorsSection';
import { supabase } from '@/lib/supabase';

interface EventData {
  id: string;
  title: string;
  blurb: string;
  date: string;
  timezone: string;
  city: string;
  location: string;
  type: string;
  venue: string;
  venue_address: string;
  venue_link: string;
  hubspot_form_id: string;
}

interface AgendaItem {
  id: string;
  time_slot: string;
  title: string;
  description: string;
  order_index: number;
}

interface Speaker {
  id: string;
  name: string;
  about: string;
  headshot_url: string;
  order_index: number;
}

interface Sponsor {
  id: string;
  name: string;
  about: string;
  logo_url: string;
  order_index: number;
}

function EventTemplateVirtualContent() {
  const searchParams = useSearchParams();
  const identifier = searchParams.get('id');

  const [eventData, setEventData] = useState<EventData | null>(null);
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEventData() {
      try {
        if (!identifier) {
          setError('No event identifier provided. Add ?id=your-event-slug to the URL.');
          setLoading(false);
          return;
        }

        const { data: event, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('slug', identifier)
          .maybeSingle();

        if (eventError) throw eventError;
        if (!event) {
          setError(`Event with identifier "${identifier}" not found.`);
          setLoading(false);
          return;
        }

        setEventData(event);

        const { data: agenda, error: agendaError } = await supabase
          .from('agenda_items')
          .select('*')
          .eq('event_id', event.id)
          .order('order_index');

        if (agendaError) throw agendaError;
        setAgendaItems(agenda || []);

        const { data: speakersData, error: speakersError } = await supabase
          .from('event_speakers')
          .select('*')
          .eq('event_id', event.id)
          .order('order_index');

        if (speakersError) throw speakersError;
        setSpeakers(speakersData || []);

        const { data: sponsorsData, error: sponsorsError } = await supabase
          .from('event_sponsors')
          .select('*')
          .eq('event_id', event.id)
          .order('order_index');

        if (sponsorsError) throw sponsorsError;
        setSponsors(sponsorsData || []);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Failed to load event data. Please try again later.');
        setLoading(false);
      }
    }

    fetchEventData();
  }, [identifier]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading event...</div>
      </div>
    );
  }

  if (error || !eventData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <div className="text-white text-xl mb-4">{error || 'Event not found'}</div>
          <p className="text-white/60">
            To use this template, add an event identifier to the URL:
            <br />
            <code className="text-purple-400 mt-2 inline-block">/event-template-virtual?id=your-event-slug</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <HeroSection eventData={eventData} />
        <SponsorsHeroSection sponsors={sponsors} />
        <CombinedAboutAgendaSection eventData={eventData} agendaItems={agendaItems} />
        {speakers.length > 0 && <SpeakerSection speakers={speakers} />}
        <RegistrationSection eventData={eventData} />
        {sponsors.length > 0 && <SponsorsSection sponsors={sponsors} />}
      </main>
      <Footer />
    </div>
  );
}

export default function EventTemplateVirtualPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading event...</div>
      </div>
    }>
      <EventTemplateVirtualContent />
    </Suspense>
  );
}
