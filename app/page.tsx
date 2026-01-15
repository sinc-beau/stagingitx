import HomePage from './home/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ITx Collective - Where CIOs & CTOs Connect, Learn, and Lead',
  description: 'Join CIOs and CTOs in the most exclusive IT leadership community. Access peer forums, strategic insights, and enterprise solutions tailored for technology leaders.',
  openGraph: {
    title: 'ITx Collective - Where CIOs & CTOs Connect, Learn, and Lead',
    description: 'Join CIOs and CTOs in the most exclusive IT leadership community. Access peer forums, strategic insights, and enterprise solutions.',
    url: 'https://itxcollective.com',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective - CIO CTO Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITx Collective - Where CIOs & CTOs Connect, Learn, and Lead',
    description: 'Join CIOs and CTOs in the most exclusive IT leadership community.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function Home() {
  return <HomePage />;
}
