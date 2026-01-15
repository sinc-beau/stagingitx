'use client';

import React, { useState } from 'react';
import { ITxAuthScreen } from './components/ITxAuthScreen';
import { ITxCombinedHeroMetrics } from './components/ITxCombinedHeroMetrics';
import { ITxComparisonMatrix } from './components/ITxComparisonMatrix';
import { ITxContactSection } from './components/ITxContactSection';
import { ITxSponsorHubspotForm } from '@/components/forms/ITxSponsorHubspotForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Footer } from '@/components/Footer';

export default function ProspectusPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTier, setSelectedTier] = useState<'vanguard' | 'innovator' | 'connector'>('vanguard');
  const [showPartnershipModal, setShowPartnershipModal] = useState(false);

  if (!isAuthenticated) {
    return <ITxAuthScreen onAuthenticate={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-black">
      <ITxCombinedHeroMetrics
        selectedTier={selectedTier}
        onTierChange={setSelectedTier}
        onOpenModal={() => setShowPartnershipModal(true)}
      />

      <ITxComparisonMatrix />

      <ITxContactSection />

      <Dialog open={showPartnershipModal} onOpenChange={setShowPartnershipModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          <ITxSponsorHubspotForm />
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}