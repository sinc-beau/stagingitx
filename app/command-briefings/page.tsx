import React from 'react';
import HeroSection from './components/HeroSection';
import MissionTypesSection from './components/MissionTypesSection';
import WhoAttendsSection from './components/WhoAttendsSection';
import EventsByCategorySection from './components/EventsByCategorySection';
import GetNotifiedSection from './components/GetNotifiedSection';
import { Footer } from '@/components/Footer';

export default function CommandBriefingsPage() {
  return (
    <>
      <HeroSection />
      <MissionTypesSection />
      <div id="events">
        <EventsByCategorySection category="Dinner" />
        <EventsByCategorySection category="Learn & Go" />
        <EventsByCategorySection category="Virtual Roundtable" />
      </div>
      <WhoAttendsSection />
      <GetNotifiedSection />
      <Footer />
    </>
  );
}