'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import CommunitySection from './components/CommunitySection';
import HowItWorksSection from './components/HowItWorksSection';
import EventsCalendar from './components/EventsCalendar';
import UpcomingEventsSection from './components/UpcomingEventsSection';
import ExecutiveCouncil from '@/components/ExecutiveCouncil';
import WhatWeCoverSection from './components/WhatWeCoverSection';
import VendorParticipationSection from './components/VendorParticipationSection';
import DigitalContentSection from './components/DigitalContentSection';
import GuildMembershipSection from './components/GuildMembershipSection';
import GetInvolvedSection from './components/GetInvolvedSection';
import { ITxNewsletterHubspotForm } from '@/components/forms/ITxNewsletterHubspotForm';
import { ITxSponsorHubspotForm } from '@/components/forms/ITxSponsorHubspotForm';
import { ITxGuildHubspotForm } from '@/components/forms/ITxGuildHubspotForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [sponsorOpen, setSponsorOpen] = useState(false);
  const [guildOpen, setGuildOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <div id="home">
          <HeroSection onOpenNewsletter={() => setNewsletterOpen(true)} />
        </div>
        <div id="community">
          <CommunitySection onOpenNewsletter={() => setNewsletterOpen(true)} />
        </div>
        <div id="protocol">
          <HowItWorksSection onOpenNewsletter={() => setNewsletterOpen(true)} />
        </div>
        <EventsCalendar />
        <UpcomingEventsSection />
        <ExecutiveCouncil />
        <WhatWeCoverSection onOpenNewsletter={() => setNewsletterOpen(true)} />
        <div id="vendors">
          <VendorParticipationSection
            onOpenSponsor={() => setSponsorOpen(true)}
          />
        </div>
        <div id="knowledge-stream">
          <DigitalContentSection />
        </div>
        <div id="kernel">
          <GuildMembershipSection onOpenGuild={() => setGuildOpen(true)} />
        </div>
        <GetInvolvedSection
          onOpenGuild={() => setGuildOpen(true)}
          onOpenNewsletter={() => setNewsletterOpen(true)}
          onOpenSponsor={() => setSponsorOpen(true)}
        />
      </div>

      <ITxNewsletterHubspotForm isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />

      <Dialog open={sponsorOpen} onOpenChange={setSponsorOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          <ITxSponsorHubspotForm />
        </DialogContent>
      </Dialog>

      <ITxGuildHubspotForm isOpen={guildOpen} onClose={() => setGuildOpen(false)} />

      <Footer />
    </div>
  );
}