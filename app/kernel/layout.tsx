import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITx Kernel - Elite CIO & CTO Council for Strategic Leaders',
  description: 'Join the most exclusive CIO and CTO council. Strategic retreats, executive roundtables, and unparalleled networking with top technology leaders.',
  openGraph: {
    title: 'ITx Kernel - Elite CIO & CTO Council for Strategic Leaders',
    description: 'Join the most exclusive CIO and CTO council. Strategic retreats, executive roundtables, and unparalleled networking with top technology leaders.',
    url: 'https://itxcollective.com/kernel',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/KernelOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Kernel - CIO CTO Council',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITx Kernel - Elite CIO & CTO Council',
    description: 'Join the most exclusive CIO and CTO council for strategic leaders.',
    images: ['https://itxcollective.org/KernelOG.png'],
  },
};

export default function KernelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
