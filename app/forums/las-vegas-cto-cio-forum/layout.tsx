import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backbone Forum West - October 2026 | M Resort Las Vegas',
  description: 'Join IT leaders at Backbone Forum West, October 11-13, 2026 at M Resort Spa Casino in Las Vegas. Strategic briefings, leadership councils, hands-on workshops, and peer-to-peer networking for CIOs and CTOs.',
  openGraph: {
    title: 'Backbone Forum West - October 2026',
    description: 'Join IT leaders at Backbone Forum West, October 11-13, 2026 at M Resort Spa Casino in Las Vegas. Strategic briefings, leadership councils, hands-on workshops, and peer-to-peer networking for CIOs and CTOs.',
    images: [
      {
        url: 'https://itxcollective.org/ITxWestForum2026.png',
        width: 1200,
        height: 630,
        alt: 'Backbone Forum West',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backbone Forum West - October 2026',
    description: 'Join IT leaders at Backbone Forum West, October 11-13, 2026 at M Resort Spa Casino in Las Vegas.',
    images: ['https://itxcollective.org/ITxWestForum2026.png'],
  },
};

export default function ITxForumWestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
