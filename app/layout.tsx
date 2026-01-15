import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import RB2BLoader from '@/components/RB2BLoader';
import Analytics from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'ITx Collective - Where CIOs & CTOs Connect, Learn, and Lead',
  description: 'Join 1,000+ CIOs and CTOs in the most exclusive IT leadership community. Peer forums, strategic insights, and direct access to enterprise solutions.',
  metadataBase: new URL('https://itxcollective.com'),
  icons: {
    icon: '/ITxFav.png',
    shortcut: '/ITxFav.png',
    apple: '/ITxFav.png',
  },
  openGraph: {
    title: 'ITx Collective - Where CIOs & CTOs Connect, Learn, and Lead',
    description: 'Join 1,000+ CIOs and CTOs in the most exclusive IT leadership community. Peer forums, strategic insights, and direct access to enterprise solutions.',
    url: 'https://itxcollective.com',
    siteName: 'ITx Collective',
    images: [
      {
        url: 'https://itxcollective.org/ITxCollectiveMainOG.png',
        width: 1200,
        height: 630,
        alt: 'ITx Collective - Executive IT Leadership Community',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITx Collective - Where CIOs & CTOs Connect, Learn, and Lead',
    description: 'Join 1,000+ CIOs and CTOs in the most exclusive IT leadership community.',
    images: ['https://itxcollective.org/ITxCollectiveMainOG.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="text/javascript"
          src="https://js.hsforms.net/forms/embed/v2.js"
          async
          defer
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Analytics />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P44K5PP5"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <RB2BLoader />
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
