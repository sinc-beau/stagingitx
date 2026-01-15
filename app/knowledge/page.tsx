import React from 'react';
import Navigation from '@/components/Navigation';
import KnowledgeUploadSection from './components/KnowledgeUploadSection';
import { Footer } from '@/components/Footer';

export default function KnowledgePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <KnowledgeUploadSection />
      <Footer />
    </main>
  );
}