'use client';

import { useState } from 'react';
import ForumsHero from './components/ForumsHero';
import EventSelector from './components/EventSelector';
import ForumsContent from './components/ForumsContent';
import { Footer } from '@/components/Footer';

export default function BackboneCTOCIOForumsPage() {
  const [selectedEvent, setSelectedEvent] = useState('current');

  const handleRegisterClick = () => {
    console.log('Register clicked');
  };

  return (
    <div className="min-h-screen bg-black backbone-network-bg">
      <ForumsHero onRegisterClick={handleRegisterClick} />
      <EventSelector />
      <ForumsContent selectedEvent={selectedEvent} />
      <Footer />
    </div>
  );
}