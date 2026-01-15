import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unlock the Hybrid AI Advantage: Executive Playbook for Business Transformation | ITx Collective',
  description: '<p>CIOs have a unique vantage point across the enterprise, making them critical drivers of business transformation. AI presents an unprecedented opportunity to create competitive advantages and enhance customer experiences—but how do you effectively navigate the complex landscape of Hybrid AI adoption?</p><p>Join Lenovo and NVIDIA experts for an interactive dinner discussion as we break down key insights from IDC’s latest AI research. This session will help CIOs and IT leaders explore the evolving AI landscape, gain practical insights, and determine the next steps in their AI adoption journey.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/hybrid-ai-advantage-dinner-lenovo-nvidia-detroit-feb-2026',
  },
  openGraph: {
    title: 'Unlock the Hybrid AI Advantage: Executive Playbook for Business Transformation',
    description: '<p>CIOs have a unique vantage point across the enterprise, making them critical drivers of business transformation. AI presents an unprecedented opportunity to create competitive advantages and enh... Metro Detroit, February 24, 2026.',
    url: '/hybrid-ai-advantage-dinner-lenovo-nvidia-detroit-feb-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Unlock the Hybrid AI Advantage: Executive Playbook for Business Transformation - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unlock the Hybrid AI Advantage: Executive Playbook for Business Transformation',
    description: '<p>CIOs have a unique vantage point across the enterprise, making them critical drivers of business transformation. AI presents an unprecedented op... Metro Detroit, February 24, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
