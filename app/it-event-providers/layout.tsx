import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner With ITx Collective - Reach 1,000+ CIOs & CTOs',
  description: 'Connect your solutions directly with decision-making CIOs and CTOs. Sponsor exclusive forums, briefings, and events that drive real enterprise deals.',
  openGraph: {
    title: 'Partner With ITx Collective - Reach 1,000+ CIOs & CTOs',
    description: 'Connect your solutions directly with decision-making CIOs and CTOs. Sponsor exclusive forums, briefings, and events that drive enterprise deals.',
    url: 'https://itxcollective.com/it-event-providers',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveSponsorOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective Partnership Opportunities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner With ITx Collective - Reach 1,000+ CIOs & CTOs',
    description: 'Connect your solutions directly with decision-making technology leaders.',
    images: ['https://itxcollective.org/ITxCollectiveSponsorOG.png'],
  },
};

export default function ITEventProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
