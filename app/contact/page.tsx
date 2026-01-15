import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactPageContent } from './components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us - ITx Collective',
  description: 'Get in touch with the ITx Collective team. We\'re here to help with questions about our IT leadership community and events.',
  keywords: 'contact itx collective, IT community contact, CIO CTO network support, technology leadership',
  openGraph: {
    title: 'Contact Us - ITx Collective',
    description: 'Get in touch with the ITx Collective team. We\'re here to help with questions about our IT leadership community and events.',
    url: 'https://itxcollective.com/contact',
    siteName: 'ITx Collective',
    images: [
      {
        url: '/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Contact Us - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - ITx Collective',
    description: 'Get in touch with the ITx Collective team.',
    images: ['/ITxCollectiveMainOG.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactPageContent />
      <Footer />
    </>
  );
}
