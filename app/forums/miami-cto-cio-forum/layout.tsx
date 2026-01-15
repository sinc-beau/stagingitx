import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backbone Forum East - March 2026 | Trump National Doral Miami',
  description: 'Join IT leaders at Backbone Forum East, March 24-26, 2026 at Trump National Doral Miami. Strategic briefings, leadership councils, hands-on workshops, and peer-to-peer networking for CIOs and CTOs.',
  openGraph: {
    title: 'Backbone Forum East - March 2026',
    description: 'Join IT leaders at Backbone Forum East, March 24-26, 2026 at Trump National Doral Miami. Strategic briefings, leadership councils, hands-on workshops, and peer-to-peer networking for CIOs and CTOs.',
    images: [
      {
        url: 'https://itxcollective.org/ITxEastForum2026.png',
        width: 1200,
        height: 630,
        alt: 'Backbone Forum East',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backbone Forum East - March 2026',
    description: 'Join IT leaders at Backbone Forum East, March 24-26, 2026 at Trump National Doral Miami.',
    images: ['https://itxcollective.org/ITxEastForum2026.png'],
  },
};

export default function ITxForumEastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
