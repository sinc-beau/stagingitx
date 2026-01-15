'use client';

import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import SolutionProvidersHero from './components/SolutionProvidersHero';
import PartnerLogosSection from './components/PartnerLogosSection';
import WhoYoullReachSection from './components/WhoYoullReachSection';
import HowSponsorsEngageSection from './components/HowSponsorsEngageSection';
import PartnershipTiersSection from './components/PartnershipTiersSection';
import WhyItMattersSection from './components/WhyItMattersSection';
import CTASection from './components/CTASection';
import { ITxSponsorHubspotForm } from '@/components/forms/ITxSponsorHubspotForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Footer } from '@/components/Footer';

export default function ITEventProvidersPage() {
  const [showSponsorModal, setShowSponsorModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <SolutionProvidersHero onOpenModal={() => setShowSponsorModal(true)} onScrollToTiers={() => scrollToSection('partnership')} />
      <PartnerLogosSection />
      <WhoYoullReachSection onOpenModal={() => setShowSponsorModal(true)} />
      <HowSponsorsEngageSection />
      <PartnershipTiersSection onOpenModal={() => setShowSponsorModal(true)} />
      <WhyItMattersSection onOpenModal={() => setShowSponsorModal(true)} />
      <CTASection onOpenModal={() => setShowSponsorModal(true)} />

      <Dialog open={showSponsorModal} onOpenChange={setShowSponsorModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          <ITxSponsorHubspotForm />
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}