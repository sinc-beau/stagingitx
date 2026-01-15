import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Template - For Internal Preview Use Only | ITx Collective',
  description: 'This is an internal event template for previewing event page layouts. Not for public use.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Event Template - For Internal Preview Use Only',
    description: 'This is an internal event template for previewing event page layouts. Not for public use.',
    images: [
      {
        url: '/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective Event',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Template - For Internal Preview Use Only',
    description: 'This is an internal event template for previewing event page layouts. Not for public use.',
    images: ['/ITxCollectiveMainOG.png'],
  },
};

export default function EventTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
