import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backbone Forum National - November 2026 | IT Leadership Forum',
  description: 'Join IT leaders at Backbone Forum National, November 7-9, 2026. Strategic briefings, leadership councils, hands-on workshops, and peer-to-peer networking for CIOs and CTOs.',
  openGraph: {
    title: 'Backbone Forum National - November 2026',
    description: 'Join IT leaders at Backbone Forum National, November 7-9, 2026. Strategic briefings, leadership councils, hands-on workshops, and peer-to-peer networking for CIOs and CTOs.',
    images: [
      {
        url: 'https://itxcollective.org/ITxNationalForum2026.png',
        width: 1200,
        height: 630,
        alt: 'Backbone Forum National',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backbone Forum National - November 2026',
    description: 'Join IT leaders at Backbone Forum National, November 7-9, 2026.',
    images: ['https://itxcollective.org/ITxNationalForum2026.png'],
  },
};

export default function ITxForumNationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
