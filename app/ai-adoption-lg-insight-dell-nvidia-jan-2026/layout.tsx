import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accelerate AI Adoption with the Dell AI Factory with NVIDIA | ITx Collective',
  description: '<p>AI is moving from experimentation to enterprise-scale impact—and the winners will be those who can adopt and operationalize quickly. Join Insight, Dell Technologies, and NVIDIA for an exclusive session designed to help you build the right foundation for AI. Together, we’ll explore how the Dell AI Factory with NVIDIA—a fully integrated stack of compute, storage, networking, software, and services—removes complexity and accelerates time-to-value for your AI initiatives.</p><p><br></p><p>Expect to learn how organizations like yours are transforming AI strategy into real-world outcomes, and walk away with a clear playbook to design, deploy, and scale your AI environment.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/ai-adoption-lg-insight-dell-nvidia-jan-2026',
  },
  openGraph: {
    title: 'Accelerate AI Adoption with the Dell AI Factory with NVIDIA',
    description: '<p>AI is moving from experimentation to enterprise-scale impact—and the winners will be those who can adopt and operationalize quickly. Join Insight, Dell Technologies, and NVIDIA for an exclusive ... Fort Lauderdale, January 22, 2026.',
    url: '/ai-adoption-lg-insight-dell-nvidia-jan-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'Accelerate AI Adoption with the Dell AI Factory with NVIDIA - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accelerate AI Adoption with the Dell AI Factory with NVIDIA',
    description: '<p>AI is moving from experimentation to enterprise-scale impact—and the winners will be those who can adopt and operationalize quickly. Join Insigh... Fort Lauderdale, January 22, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
