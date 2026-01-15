import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backbone Forums - CIO/CTO Peer Roundtables & Discussion Groups',
  description: 'Intimate peer forums for CIOs and CTOs. Join 12-15 technology leaders from non-competing companies for strategic discussions and shared insights.',
  openGraph: {
    title: 'Backbone Forums - CIO/CTO Peer Roundtables',
    description: 'Intimate peer forums for CIOs and CTOs. Join 12-15 technology leaders for strategic discussions.',
    url: 'https://itxcollective.com/forums/backbone',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveBackboneOG.png',
        width: 1200,
        height: 630,
        alt: 'Backbone Forums',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backbone Forums - CIO/CTO Peer Roundtables',
    description: 'Intimate peer forums for CIOs and CTOs.',
    images: ['https://itxcollective.org/ITxCollectiveBackboneOG.png'],
  },
};

export default function BackboneForumsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
