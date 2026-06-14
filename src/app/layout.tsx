import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Afia Ava | Portfolio',
  description:
    'Portfolio of a tech, engineering, sustainability, and film enthusiast. Cinematic, modern, and elegant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-black text-white min-h-screen`}
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
