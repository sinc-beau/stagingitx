import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achieving Invisible IT | ITx Collective',
  description: '<p>Enterprises manage an average of 897 applications across multiple clouds, but only 28% are integrated. Discover ways to empower IT teams to work quietly in the background, anticipating and resolving issues before they interrupt your employees.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/invisible-it-vrt-lenovo-feb-2026',
  },
  openGraph: {
    title: 'Achieving Invisible IT',
    description: '<p>Enterprises manage an average of 897 applications across multiple clouds, but only 28% are integrated. Discover ways to empower IT teams to work quietly in the background, anticipating and resol... Virtual, February 26, 2026.',
    url: '/invisible-it-vrt-lenovo-feb-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Achieving Invisible IT - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achieving Invisible IT',
    description: '<p>Enterprises manage an average of 897 applications across multiple clouds, but only 28% are integrated. Discover ways to empower IT teams to work... Virtual, February 26, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
