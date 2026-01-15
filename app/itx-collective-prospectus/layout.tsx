import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITx Collective Partnership Prospectus - Sponsorship Opportunities',
  description: 'Explore partnership tiers and sponsorship opportunities to connect with CIOs and CTOs. View detailed metrics, engagement models, and ROI data.',
  openGraph: {
    title: 'ITx Collective Partnership Prospectus',
    description: 'Explore partnership tiers and sponsorship opportunities to connect with CIOs and CTOs.',
    url: 'https://itxcollective.com/itx-collective-prospectus',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective Partnership Prospectus',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITx Collective Partnership Prospectus',
    description: 'Explore partnership tiers to connect with CIOs and CTOs.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function ProspectusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
