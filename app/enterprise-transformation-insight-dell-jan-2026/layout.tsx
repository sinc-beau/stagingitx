import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accelerating AI Adoption: Strategies for Optimized Infrastructure | ITx Collective',
  description: '<p>Join&nbsp;<strong>Insight</strong>&nbsp;and&nbsp;<strong>Dell Technologies</strong>&nbsp;for an exclusive dinner focused on mastering the foundational elements required for successful AI integration. We will guide you through the strategic decisions needed to transform your IT environment, discussing how to&nbsp;<strong>maximize the value of your current technology footprint</strong>&nbsp;while implementing new architectures that drive tangible business results. The conversation will focus on overcoming the major organizational and technical hurdles that prevent AI projects from reaching production, and how to utilize modern tools and methodologies to&nbsp;<strong>accelerate adoption and secure your path to AI maturity</strong>. Leave with a clear strategic playbook for aligning your infrastructure investments with your highest business priorities.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/enterprise-transformation-insight-dell-jan-2026',
  },
  openGraph: {
    title: 'Accelerating AI Adoption: Strategies for Optimized Infrastructure',
    description: '<p>Join&nbsp;<strong>Insight</strong>&nbsp;and&nbsp;<strong>Dell Technologies</strong>&nbsp;for an exclusive dinner focused on mastering the foundational elements required for successful AI integra... Orlando, January 21, 2026.',
    url: '/enterprise-transformation-insight-dell-jan-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Accelerating AI Adoption: Strategies for Optimized Infrastructure - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accelerating AI Adoption: Strategies for Optimized Infrastructure',
    description: '<p>Join&nbsp;<strong>Insight</strong>&nbsp;and&nbsp;<strong>Dell Technologies</strong>&nbsp;for an exclusive dinner focused on mastering the founda... Orlando, January 21, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
