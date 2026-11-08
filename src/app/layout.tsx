import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const description =
  'Afia is a 19 y/o engineer building cool things: rockets, circuit boards, training robots, etc.';
const previewImage = { url: '/things-about-stuff/ces.jpg', width: 2112, height: 1584, alt: 'Afia at CES' };

export const metadata: Metadata = {
  metadataBase: new URL('https://afiaava.com'),
  title: 'Afia Ava',
  description,
  openGraph: {
    title: 'Afia Ava',
    description,
    siteName: 'Afia Ava',
    images: [previewImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afia Ava',
    description,
    images: [previewImage.url],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-black text-[#fff6ee] min-h-screen`}
        style={{
          background: 'linear-gradient(120deg, #181818 0%, #232526 100%)',
        }}
      >
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
