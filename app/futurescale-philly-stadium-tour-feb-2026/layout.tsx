import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philadelphia IT Leaders Lincoln Financial Field Tour | ITx Collective',
  description: 'Join ITx Collective for the Philadelphia IT Leaders Lincoln Financial Field Tour. Network with senior IT leaders while experiencing this iconic venue.',
  openGraph: {
    title: 'Philadelphia IT Leaders Lincoln Financial Field Tour | ITx Collective',
    description: 'Join ITx Collective for the Philadelphia IT Leaders Lincoln Financial Field Tour. Network with senior IT leaders while experiencing this iconic venue.',
    images: [
      {
        url: '/ITxFutureScaleOG.png',
        width: 1200,
        height: 630,
        alt: 'Philadelphia IT Leaders Lincoln Financial Field Tour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Philadelphia IT Leaders Lincoln Financial Field Tour | ITx Collective',
    description: 'Join ITx Collective for the Philadelphia IT Leaders Lincoln Financial Field Tour.',
    images: ['/ITxFutureScaleOG.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
