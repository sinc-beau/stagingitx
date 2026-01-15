import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Command Briefings - Strategic Intel Sessions for IT Leaders',
  description: 'Exclusive 90-minute deep dives with CIOs and CTOs. Get actionable intelligence on emerging tech, vendor solutions, and strategic best practices.',
  openGraph: {
    title: 'Command Briefings - Strategic Intel Sessions for IT Leaders',
    description: 'Exclusive 90-minute deep dives with CIOs and CTOs. Get actionable intelligence on emerging tech, vendor solutions, and strategic best practices.',
    url: 'https://itxcollective.com/command-briefings',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCommandOG.png',
        width: 1200,
        height: 630,
        alt: 'Command Briefings',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Command Briefings - Strategic Intel Sessions for IT Leaders',
    description: 'Exclusive 90-minute deep dives with CIOs and CTOs.',
    images: ['https://itxcollective.org/ITxCommandOG.png'],
  },
};

export default function CommandBriefingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
