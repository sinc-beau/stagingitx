import React from 'react';
import FutureScaleHero from './components/FutureScaleHero';
import FutureScaleObjectives from './components/FutureScaleObjectives';
import FutureScaleCities from './components/FutureScaleCities';
import { Footer } from '@/components/Footer';

export default function FutureScalePage() {
  return (
    <>
      <FutureScaleHero />
      <FutureScaleObjectives />
      <FutureScaleCities />
      <Footer />
    </>
  );
}