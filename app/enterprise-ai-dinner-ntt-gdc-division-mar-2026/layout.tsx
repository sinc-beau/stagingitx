import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Real Infrastructure Shift: What AI Demands From Your Data Center | ITx Collective',
  description: '<p>AI has become a structural shift in digital infrastructure. Power density, cooling, site selection, funding models, ecosystem partnerships, and regulatory relationships all being tested at once.</p><p>The market needs a clear point of view grounded in real-world constraints and long-term thinking.</p><p>This event looks ahead with a realistic perspective on both the opportunities and challenges AI brings to data center evolution. Drawing on extensive industry experience, we\'ll explore how to define what AI-powered infrastructure should look like over the next 5–10 years, grounded in proven expertise and practical insights that set a credible standard.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/enterprise-ai-dinner-ntt-gdc-division-mar-2026',
  },
  openGraph: {
    title: 'The Real Infrastructure Shift: What AI Demands From Your Data Center',
    description: '<p>AI has become a structural shift in digital infrastructure. Power density, cooling, site selection, funding models, ecosystem partnerships, and regulatory relationships all being tested at once.... London, March 4, 2026.',
    url: '/enterprise-ai-dinner-ntt-gdc-division-mar-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'The Real Infrastructure Shift: What AI Demands From Your Data Center - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Real Infrastructure Shift: What AI Demands From Your Data Center',
    description: '<p>AI has become a structural shift in digital infrastructure. Power density, cooling, site selection, funding models, ecosystem partnerships, and ... London, March 4, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
