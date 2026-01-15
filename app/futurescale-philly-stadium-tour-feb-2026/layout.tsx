import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FutureScale Stadium Tour | Philadelphia | ITx Collective',
  description: 'Join ITx Collective for an exclusive FutureScale Stadium Tour at Lincoln Financial Field in Philadelphia. Network with senior IT leaders while experiencing this iconic venue.',
  openGraph: {
    title: 'FutureScale Stadium Tour | Philadelphia | ITx Collective',
    description: 'Join ITx Collective for an exclusive FutureScale Stadium Tour at Lincoln Financial Field in Philadelphia. Network with senior IT leaders while experiencing this iconic venue.',
    images: [
      {
        url: '/ITxFutureScaleOG.png',
        width: 1200,
        height: 630,
        alt: 'FutureScale Stadium Tour Philadelphia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureScale Stadium Tour | Philadelphia | ITx Collective',
    description: 'Join ITx Collective for an exclusive FutureScale Stadium Tour at Lincoln Financial Field in Philadelphia.',
    images: ['/ITxFutureScaleOG.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
