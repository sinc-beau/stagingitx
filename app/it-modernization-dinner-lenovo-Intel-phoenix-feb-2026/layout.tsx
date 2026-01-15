import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Modernization is more than an Investment: Learn how to optimize your data center for efficiency | ITx Collective',
  description: '<p>A smarter way to modernize your server infrastructure. IT modernization is more than an investment in updated infrastructure.</p><p>It’s an opportunity to optimize your data center for long-term TCO gains, greater operational efficiency, and improved security. Infrastructure modernization is a critical long-term IT investment, one whose impact is felt for years. Lenovo and Intel® have partnered to deliver a smarter way to modernize – within an ecosystem you already know and trust.</p><p>Discussion topics at this event will include:</p><ul><li>Building your foundation</li><li>Energy consumption</li><li>Infrastructure refresh</li><li>Total cost of ownership</li><li>Strategic partner insights</li></ul><p>Modernize your IT infrastructure with proven partners. Trusted, modern, AI-ready infrastructure can help grow your business today, and keep it prepared for tomorrow. Intel® Xeon® 6 processors: That’s the power of Intel Inside®.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/it-modernization-dinner-lenovo-Intel-phoenix-feb-2026',
  },
  openGraph: {
    title: 'IT Modernization is more than an Investment: Learn how to optimize your data center for efficiency',
    description: '<p>A smarter way to modernize your server infrastructure. IT modernization is more than an investment in updated infrastructure.</p><p>It’s an opportunity to optimize your data center for long-term... Phoenix, February 17, 2026.',
    url: '/it-modernization-dinner-lenovo-Intel-phoenix-feb-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'IT Modernization is more than an Investment: Learn how to optimize your data center for efficiency - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Modernization is more than an Investment: Learn how to optimize your data center for efficiency',
    description: '<p>A smarter way to modernize your server infrastructure. IT modernization is more than an investment in updated infrastructure.</p><p>It’s an oppo... Phoenix, February 17, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
