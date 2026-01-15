import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FutureScale - AI & Innovation Summits for Technology Leaders',
  description: 'Premier AI and emerging tech summits for CIOs and CTOs. Hands-on workshops, executive insights, and strategic partnerships across major cities.',
  openGraph: {
    title: 'FutureScale - AI & Innovation Summits for Technology Leaders',
    description: 'Premier AI and emerging tech summits for CIOs and CTOs. Hands-on workshops, executive insights, and strategic partnerships.',
    url: 'https://itxcollective.com/futurescale',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxFutureScaleOG.png',
        width: 1200,
        height: 630,
        alt: 'FutureScale Summit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureScale - AI & Innovation Summits',
    description: 'Premier AI and emerging tech summits for CIOs and CTOs.',
    images: ['https://itxcollective.org/ITxFutureScaleOG.png'],
  },
};

export default function FutureScaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
