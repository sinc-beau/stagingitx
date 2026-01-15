import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Infrastructure for the Hybrid AI Era – New York, NY | ITx Collective',
  description: '<p>Hybrid AI, leveraging on-premises, cloud, and edge resources, demands a robust and secure infrastructure to deliver performance at scale. This event will explore how organizations can design and optimize hybrid architectures that support AI workloads seamlessly across diverse environments. We’ll cover strategies for orchestrating GPU clusters, managing distributed compute, and ensuring secure connectivity between platforms. Attendees will gain insights into building high-performance environments that balance scalability, resilience, and cost efficiency. From workload orchestration to zero-trust networking and edge integration, this session provides practical guidance for creating infrastructure that accelerates AI innovation while maintaining operational integrity. Join us to learn how to future-proof your hybrid AI environment for the demands of next-generation applications.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/secure-infrastructure-nyc-dinner-insight-cisco-jan-2026',
  },
  openGraph: {
    title: 'Secure Infrastructure for the Hybrid AI Era – New York, NY',
    description: '<p>Hybrid AI, leveraging on-premises, cloud, and edge resources, demands a robust and secure infrastructure to deliver performance at scale. This event will explore how organizations can design and... New York City, January 21, 2026.',
    url: '/secure-infrastructure-nyc-dinner-insight-cisco-jan-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Secure Infrastructure for the Hybrid AI Era – New York, NY - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Infrastructure for the Hybrid AI Era – New York, NY',
    description: '<p>Hybrid AI, leveraging on-premises, cloud, and edge resources, demands a robust and secure infrastructure to deliver performance at scale. This e... New York City, January 21, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
