import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beyond Boundaries: Secure Connectivity for the Next Era of Business | ITx Collective',
  description: 'In today’s rapidly evolving digital landscape, enterprises are redefining how they connect, protect, and power modern workloads. From the data center to the cloud to the edge, secure connectivity is no longer optional; it’s the foundation for agility, resilience, and innovation. Join Cisco, Insight, and industry peers for a unique explore how advanced enterprise networking, integrated security, and next-generation data center solutions are enabling organizations to break through traditional boundaries. Our subject matter expert will share insights on building a secure, scalable architecture that supports diverse endpoints, hybrid workforces, and mission-critical applications—without sacrificing performance. Discover practical strategies to safeguard your business while unlocking new opportunities in a hyperconnected world. This is your chance to engage in high-value conversations, gain actionable perspectives, and envision the secure enterprise of tomorrow, and still enjoy dinner with those you care about.',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/beyond-boundaries-dallas-lg-insight-cisco-jan-2026',
  },
  openGraph: {
    title: 'Beyond Boundaries: Secure Connectivity for the Next Era of Business',
    description: 'In today’s rapidly evolving digital landscape, enterprises are redefining how they connect, protect, and power modern workloads. From the data center to the cloud to the edge, secure connectivity i... Dallas, January 20, 2026.',
    url: '/beyond-boundaries-dallas-lg-insight-cisco-jan-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Beyond Boundaries: Secure Connectivity for the Next Era of Business - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Boundaries: Secure Connectivity for the Next Era of Business',
    description: 'In today’s rapidly evolving digital landscape, enterprises are redefining how they connect, protect, and power modern workloads. From the data cent... Dallas, January 20, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
