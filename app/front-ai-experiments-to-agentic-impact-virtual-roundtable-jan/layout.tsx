import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The 2026 Pivot: From AI Experiments to Agentic Impact | ITx Collective',
  description: '<p>If 2025 was the year of AI experimentation, 2026 is the year it truly clicks. We’ve moved past the "adoption" phase, yet many organizations are realizing that using AI and benefiting from it are two very different things. The prediction for 2026 is clear: The advantage will shift to those who can move beyond isolated bots toward a unified architecture of Agentic AI.</p><p><br></p><p>At RingCentral, we’re seeing a renaissance of voice and data. We’re no longer just talking about productivity; we’re talking about digital employees–autonomous agents that carry context, take action, and unlock the "dark data" trapped in your daily conversations.</p><p><br></p><p>Join RingCentral to explore the findings from our soon-to-be released 2026 Report on Agentic Voice AI Trends. We’ll share a candid look at how the most innovative companies are orchestrating AI to work as a cohesive system across CX, IT, and Operations.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/front-ai-experiments-to-agentic-impact-virtual-roundtable-jan',
  },
  openGraph: {
    title: 'The 2026 Pivot: From AI Experiments to Agentic Impact',
    description: '<p>If 2025 was the year of AI experimentation, 2026 is the year it truly clicks. We’ve moved past the "adoption" phase, yet many organizations are realizing that using AI and benefiting from it are... Virtual, January 22, 2026.',
    url: '/front-ai-experiments-to-agentic-impact-virtual-roundtable-jan',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'The 2026 Pivot: From AI Experiments to Agentic Impact - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 2026 Pivot: From AI Experiments to Agentic Impact',
    description: '<p>If 2025 was the year of AI experimentation, 2026 is the year it truly clicks. We’ve moved past the "adoption" phase, yet many organizations are ... Virtual, January 22, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
