import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'From Build to Deployment: Inside the New Era of Copilot+ and Edge Computing | ITx Collective',
  description: '<p>Dive into the evolving world of Windows 11, Copilot+ PCs, and AI-powered edge computing. You will have the opportunity to hear from our featured keynote speaker, Chris Stadler, Dell Partner Specialist for Commercial Client Solutions, as well as other leaders from Insight. They will unpack post-Build announcements, showcase advancements in NPU-accelerated Windows experiences, and explore how to future-proof your endpoint strategy ahead of Windows 10 end-of-support. Additionally, we will highlight the overall brand unification and silicon diversity within our device portfolio.</p><p><br></p><p>Learn from real-world device proof-of-concept data, see how leading organizations deploy AI endpoints at scale. Whether your focus is security, deployment, or digital transformation, this event provides practical insights and actionable steps to accelerate readiness, streamline refresh cycles, and unlock value from device partnerships.</p><p><br></p><p>Attendance is limited to senior leaders; reserve your seat and start planning your next move today.</p>',
  metadataBase: new URL('https://itxcollective.com'),
  alternates: {
    canonical: '/copilot-edge-computing-Insight-dell-Intel-raleigh-jan-2026',
  },
  openGraph: {
    title: 'From Build to Deployment: Inside the New Era of Copilot+ and Edge Computing',
    description: '<p>Dive into the evolving world of Windows 11, Copilot+ PCs, and AI-powered edge computing. You will have the opportunity to hear from our featured keynote speaker, Chris Stadler, Dell Partner Spec... Raleigh, January 20, 2026.',
    url: '/copilot-edge-computing-Insight-dell-Intel-raleigh-jan-2026',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'From Build to Deployment: Inside the New Era of Copilot+ and Edge Computing - ITx Collective',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Build to Deployment: Inside the New Era of Copilot+ and Edge Computing',
    description: '<p>Dive into the evolving world of Windows 11, Copilot+ PCs, and AI-powered edge computing. You will have the opportunity to hear from our featured... Raleigh, January 20, 2026.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
