import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Igniting Real Workplace Transformation | ITx Collective',
  description: '<p>Bust through transformation barriers to create an AI-powered workplace that boosts productivity and enhances employee experience. Learn how to create a clear vision, set priorities that are aligned with strategic objectives, address change management, and make your transformation successful.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/workplace-transformation-vrt-lenovo-feb-2026',
  },
  openGraph: {
    title: 'Igniting Real Workplace Transformation',
    description: '<p>Bust through transformation barriers to create an AI-powered workplace that boosts productivity and enhances employee experience. Learn how to create a clear vision, set priorities that are alig... Virtual, February 19, 2026.',
    url: '/workplace-transformation-vrt-lenovo-feb-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Igniting Real Workplace Transformation - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Igniting Real Workplace Transformation',
    description: '<p>Bust through transformation barriers to create an AI-powered workplace that boosts productivity and enhances employee experience. Learn how to c... Virtual, February 19, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
