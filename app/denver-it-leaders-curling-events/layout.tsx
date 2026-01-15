import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Unleashed: Redefining Business Communications | SHIELD Sessions',
  description: 'An exclusive evening of discussion, networking, and insights for senior IT professionals and AI innovators. Join us in McLean, VA for this intimate executive dinner.',
  openGraph: {
    title: 'AI Unleashed: Redefining Business Communications | SHIELD Sessions',
    description: 'An exclusive evening of discussion, networking, and insights for senior IT professionals and AI innovators.',
    images: ['/ITxCommandOG.png'],
  },
};

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return children;
}
