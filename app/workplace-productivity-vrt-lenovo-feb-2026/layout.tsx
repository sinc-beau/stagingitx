import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reinventing Workplace Productivity | ITx Collective',
  description: '<p>AI-enabled automation enables workplaces to be more productive, but it can’t automate the real value employees offer — knowledge, creativity, and innovation. Find out how organizations are shifting their focus on Gen AI, and get three key recommendations for using it to underpin a digital workplace that ignites innovation.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/workplace-productivity-vrt-lenovo-feb-2026',
  },
  openGraph: {
    title: 'Reinventing Workplace Productivity',
    description: '<p>AI-enabled automation enables workplaces to be more productive, but it can’t automate the real value employees offer — knowledge, creativity, and innovation. Find out how organizations are shift... Virtual, February 18, 2026.',
    url: '/workplace-productivity-vrt-lenovo-feb-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Reinventing Workplace Productivity - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinventing Workplace Productivity',
    description: '<p>AI-enabled automation enables workplaces to be more productive, but it can’t automate the real value employees offer — knowledge, creativity, an... Virtual, February 18, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
