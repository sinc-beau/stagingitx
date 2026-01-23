'use client';

import React, { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import HeroSection from '@/app/event-template/components/HeroSection';
import SponsorsHeroSection from '@/app/event-template/components/SponsorsHeroSection';
import CombinedAboutAgendaSection from '@/app/event-template/components/CombinedAboutAgendaSection';
import RegistrationSection from '@/app/event-template/components/RegistrationSection';
import SpeakerSection from '@/app/event-template/components/SpeakerSection';
import SponsorsSection from '@/app/event-template/components/SponsorsSection';
import VenueSection from '@/app/event-template/components/VenueSection';
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

export default function EventPage() {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [agendaItems, setAgendaItems] = useState<AgendaItem[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchEventData() {
      try {
        const { data: event, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('slug', 'empowering-it-copilot-dinner-insight-microsoft-mar-2026')
          .eq('islive', true)
          .maybeSingle();

        if (eventError) throw eventError;
        if (!event) {
          setError('Event not found or not currently available.');
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
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Failed to load event data.');
      }
    }

    fetchEventData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <div className="text-white text-xl mb-4">{error}</div>
          <p className="text-white/60">
            This event is not currently available. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  if (!eventData) {
    return null;
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
        {(eventData.venue || eventData.venue_address) && <VenueSection eventData={eventData} />}
      </main>
      <Footer />
    </div>
  );
}
