const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

function loadEnvFile(filePath) {
  try {
    const envContent = fs.readFileSync(filePath, 'utf8');
    envContent.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value;
        }
      }
    });
  } catch (error) {
    // Env file doesn't exist, skip
  }
}

loadEnvFile(path.join(process.cwd(), '.env'));

// ALWAYS clean up old incorrectly-named directories first (regardless of Supabase config)
const appDir = path.join(process.cwd(), 'app');
const oldDirs = [
  'beyond-boundaries-boston-lg-insight-cisco-jan-2026',
  'secure-Infrastructure-nyc-dinner-insight-cisco-jan-2026'
];

console.log('Checking for old event directories...');
let removedCount = 0;
for (const oldDir of oldDirs) {
  const oldPath = path.join(appDir, oldDir);
  if (fs.existsSync(oldPath)) {
    console.log(`  ✓ Removing old directory: ${oldDir}`);
    fs.rmSync(oldPath, { recursive: true, force: true });
    removedCount++;
  }
}
if (removedCount === 0) {
  console.log('  ✓ No old directories found');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.log('Skipping event page generation - Supabase env variables not configured');
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function writeFileIfChanged(filePath, newContent) {
  let existingContent = '';
  let fileExists = false;

  try {
    existingContent = fs.readFileSync(filePath, 'utf8');
    fileExists = true;
  } catch (error) {
    // File doesn't exist, we'll create it
  }

  if (!fileExists || existingContent !== newContent) {
    fs.writeFileSync(filePath, newContent);
    return true; // File was written
  }

  return false; // File was skipped (no changes)
}

async function generateEventPages() {
  try {
    const { data: events, error } = await supabase
      .from('events')
      .select('slug, title, blurb, city, date, type')
      .eq('islive', true);

    if (error) {
      console.error('Error fetching live events:', error);
      return;
    }

    if (!events || events.length === 0) {
      console.log('No live events found. Skipping static page generation.');
      return;
    }

    console.log(`\nGenerating pages for ${events.length} live event(s):`);

    let regeneratedCount = 0;
    let skippedCount = 0;

    for (const event of events) {
      const eventDir = path.join(process.cwd(), 'app', event.slug);

      if (!fs.existsSync(eventDir)) {
        fs.mkdirSync(eventDir, { recursive: true });
      }

      const isVirtualEvent = event.type === 'Virtual Roundtable';
      const templatePath = isVirtualEvent ? 'event-template-virtual' : 'event-template';
      const venueImport = isVirtualEvent ? '' : "import VenueSection from '@/app/event-template/components/VenueSection';";

      // Check for local component overrides
      const localSponsorsHeroExists = fs.existsSync(path.join(eventDir, 'components', 'SponsorsHeroSection.tsx'));
      const sponsorsHeroImport = localSponsorsHeroExists
        ? "import SponsorsHeroSection from './components/SponsorsHeroSection';"
        : `import SponsorsHeroSection from '@/app/${templatePath}/components/SponsorsHeroSection';`;

      const pageContent = `'use client';

import React, { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import HeroSection from '@/app/${templatePath}/components/HeroSection';
${sponsorsHeroImport}
import CombinedAboutAgendaSection from '@/app/${templatePath}/components/CombinedAboutAgendaSection';
import RegistrationSection from '@/app/${templatePath}/components/RegistrationSection';
import SpeakerSection from '@/app/${templatePath}/components/SpeakerSection';
import SponsorsSection from '@/app/${templatePath}/components/SponsorsSection';
${venueImport}
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
          .eq('slug', '${event.slug}')
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
        ${isVirtualEvent ? '' : '{(eventData.venue || eventData.venue_address) && <VenueSection eventData={eventData} />}'}
      </main>
      <Footer />
    </div>
  );
}
`;

      const eventDate = new Date(event.date);
      const formattedDate = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const shortBlurb = event.blurb.length > 200
        ? event.blurb.substring(0, 197) + '...'
        : event.blurb;

      const twitterBlurb = event.blurb.length > 150
        ? event.blurb.substring(0, 147) + '...'
        : event.blurb;

      const ogDescription = `${shortBlurb} ${event.city}, ${formattedDate}.`;
      const twitterDescription = `${twitterBlurb} ${event.city}, ${formattedDate}.`;

      const layoutContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${event.title.replace(/'/g, "\\'")} | ITx Collective',
  description: '${event.blurb.replace(/'/g, "\\'")}',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/${event.slug}',
  },
  openGraph: {
    title: '${event.title.replace(/'/g, "\\'")}',
    description: '${ogDescription.replace(/'/g, "\\'")}',
    url: '/${event.slug}',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: '${event.title.replace(/'/g, "\\'")} - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${event.title.replace(/'/g, "\\'")}',
    description: '${twitterDescription.replace(/'/g, "\\'")}',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

      const pageWasWritten = writeFileIfChanged(path.join(eventDir, 'page.tsx'), pageContent);
      const layoutWasWritten = writeFileIfChanged(path.join(eventDir, 'layout.tsx'), layoutContent);

      const wasRegenerated = pageWasWritten || layoutWasWritten;

      if (wasRegenerated) {
        regeneratedCount++;
        const eventTypeLabel = isVirtualEvent ? '(Virtual)' : '(In-Person)';
        const filesChanged = [];
        if (pageWasWritten) filesChanged.push('page.tsx');
        if (layoutWasWritten) filesChanged.push('layout.tsx');
        console.log(`  ✓ Updated /${event.slug}/ ${eventTypeLabel} [${filesChanged.join(', ')}]`);
      } else {
        skippedCount++;
        console.log(`  ⊘ Skipped /${event.slug}/ (no changes)`);
      }
    }

    console.log(`\n✅ Event pages processed successfully!`);
    console.log(`   ${regeneratedCount} page(s) regenerated`);
    console.log(`   ${skippedCount} page(s) skipped (unchanged)\n`);
  } catch (error) {
    console.error('Error generating event pages:', error);
    process.exit(1);
  }
}

generateEventPages();
