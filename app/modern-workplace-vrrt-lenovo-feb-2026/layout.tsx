import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reinforcing the Modern Workplace | ITx Collective',
  description: '<p>Businesses need to strengthen efforts to spot evolving AI threats and use AI to secure their key assets. Discover how to boost your defenses and integrate AI into cybersecurity to drive transformation in today’s AI-driven workplace.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/modern-workplace-vrrt-lenovo-feb-2026',
  },
  openGraph: {
    title: 'Reinforcing the Modern Workplace',
    description: '<p>Businesses need to strengthen efforts to spot evolving AI threats and use AI to secure their key assets. Discover how to boost your defenses and integrate AI into cybersecurity to drive transfor... Virtual, February 25, 2026.',
    url: '/modern-workplace-vrrt-lenovo-feb-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Reinforcing the Modern Workplace - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinforcing the Modern Workplace',
    description: '<p>Businesses need to strengthen efforts to spot evolving AI threats and use AI to secure their key assets. Discover how to boost your defenses and... Virtual, February 25, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
