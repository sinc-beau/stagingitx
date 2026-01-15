import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backbone CTO/CIO Forums - Exclusive Peer Roundtables for Tech Leaders',
  description: 'Join intimate CIO and CTO forums with 12-15 peers from non-competing companies. Strategic discussions on AI, cloud, security, and digital transformation.',
  openGraph: {
    title: 'Backbone CTO/CIO Forums - Exclusive Peer Roundtables for Tech Leaders',
    description: 'Join intimate CIO and CTO forums with 12-15 peers from non-competing companies. Strategic discussions on the topics that matter most.',
    url: 'https://itxcollective.com/backbone-cto-cio-forums',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveBackboneOG.png',
        width: 1200,
        height: 630,
        alt: 'Backbone CTO/CIO Forums',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backbone CTO/CIO Forums - Exclusive Peer Roundtables',
    description: 'Join intimate CIO and CTO forums with 12-15 peers from non-competing companies.',
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
