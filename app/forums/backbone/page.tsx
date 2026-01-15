'use client';

import { useState } from 'react';
import ForumsHero from './components/ForumsHero';
import EventSelector from './components/EventSelector';
import ForumsContent from './components/ForumsContent';
import { Footer } from '@/components/Footer';

export default function BackboneForumsPage() {
  const [selectedEvent, setSelectedEvent] = useState('current');

  const handleRegisterClick = () => {
    // Handle registration logic
    console.log('Register clicked');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <ForumsHero onRegisterClick={handleRegisterClick} />

      {/* Event Selector */}
      <EventSelector
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />

      {/* Forums Content */}
      <ForumsContent selectedEvent={selectedEvent} />

      <Footer />
    </div>
  );
}