import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Knowledge Stream - Premium Research & Insights for IT Executives',
  description: 'Access exclusive CIO and CTO research, case studies, and strategic insights. Stay ahead with data-driven intelligence on enterprise technology.',
  openGraph: {
    title: 'Knowledge Stream - Premium Research & Insights for IT Executives',
    description: 'Access exclusive CIO and CTO research, case studies, and strategic insights. Stay ahead with data-driven intelligence on enterprise technology.',
    url: 'https://itxcollective.com/knowledge',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxKnowledgeOG.png',
        width: 1200,
        height: 630,
        alt: 'Knowledge Stream',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knowledge Stream - Premium Research for IT Executives',
    description: 'Access exclusive CIO and CTO research and strategic insights.',
    images: ['https://itxcollective.org/ITxKnowledgeOG.png'],
  },
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
