'use client';

import React from 'react';
import { Footer } from '@/components/Footer';
import HeroSection from './components/HeroSection';
import SponsorsSection from './components/SponsorsSection';
import ITxDifferenceSection from './components/ITxDifferenceSection';
import ForumRegistrationSection from './components/ForumRegistrationSection';
import ExperienceTypesSection from './components/ExperienceTypesSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhyAttendSection from './components/WhyAttendSection';
import AgendaHighlightsSection from './components/AgendaHighlightsSection';
import NetworkingSection from './components/NetworkingSection';
import RegistrationSection from './components/RegistrationSection';

export default function ITxForumNationalPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <HeroSection />
        <SponsorsSection />
        <ITxDifferenceSection />
        <AgendaHighlightsSection />
        <ForumRegistrationSection />
        <TestimonialsSection />
        <ExperienceTypesSection />
        <WhyAttendSection />
        <NetworkingSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
