import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Empowering IT: Copilot+ PCs and the Future of Intelligent Work | ITx Collective',
  description: '<p>As AI reshapes the enterprise landscape, Copilot+ PCs are emerging as a strategic enabler for IT leaders. With 60% of PCs expected to ship with on-device AI by 2027, organizations are prioritizing AI investments to unlock over 10% productivity gains per employee. This session explores how features like Recall revolutionize workflows, while NPU-powered performance and built-in security—Microsoft Pluton and Secured-core PC—ensure resilience. We’ll address lifecycle pain points with Hot Patch and Autopilot, and highlight how Copilot+ PCs integrate seamlessly with ISVs across marketing, HR, sales, and engineering. Learn how these devices support Zero Trust frameworks, contribute to ESG goals through energy efficiency, and fit into broader digital transformation roadmaps. Whether you’re planning AI adoption or optimizing endpoint strategy, this session offers actionable insights to align stakeholders and future-proof your infrastructure.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/empowering-it-copilot-dinner-insight-microsoft-mar-2026',
  },
  openGraph: {
    title: 'Empowering IT: Copilot+ PCs and the Future of Intelligent Work',
    description: '<p>As AI reshapes the enterprise landscape, Copilot+ PCs are emerging as a strategic enabler for IT leaders. With 60% of PCs expected to ship with on-device AI by 2027, organizations are prioritizi... Tampa, March 12, 2026.',
    url: '/empowering-it-copilot-dinner-insight-microsoft-mar-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Empowering IT: Copilot+ PCs and the Future of Intelligent Work - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empowering IT: Copilot+ PCs and the Future of Intelligent Work',
    description: '<p>As AI reshapes the enterprise landscape, Copilot+ PCs are emerging as a strategic enabler for IT leaders. With 60% of PCs expected to ship with ... Tampa, March 12, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
