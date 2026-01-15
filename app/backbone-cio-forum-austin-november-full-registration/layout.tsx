import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backbone Forum Austin - November 2026 | IT Leadership Forum',
  description: 'Join IT leaders at ITx Collective Backbone Forum in Austin, TX, November 8-10, 2026. Strategic briefings, leadership councils, and peer-to-peer networking for CIOs and CTOs.',
  openGraph: {
    title: 'Backbone Forum Austin - November 2026',
    description: 'Join IT leaders at ITx Collective Backbone Forum in Austin, TX, November 8-10, 2026. Strategic briefings, leadership councils, and peer-to-peer networking for CIOs and CTOs.',
    images: [
      {
        url: 'https://itxcollective.org/ITxNationalForum2026.png',
        width: 1200,
        height: 630,
        alt: 'Backbone Forum Austin November 2026',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backbone Forum Austin - November 2026',
    description: 'Join IT leaders at ITx Collective Backbone Forum in Austin, TX, November 8-10, 2026.',
    images: ['https://itxcollective.org/ITxNationalForum2026.png'],
  },
};

export default function BackboneAustinNovember2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
