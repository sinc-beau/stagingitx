import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Event Template - For Internal Preview Use Only | ITx Collective',
  description: 'This is an internal virtual event template for previewing virtual event page layouts. Not for public use.',
  robots: 'noindex, nofollow',
};

export default function EventTemplateVirtualLayout({ children }: { children: React.ReactNode }) {
  return children;
}
