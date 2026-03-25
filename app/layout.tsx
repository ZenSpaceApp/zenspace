// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Lora, Syne } from 'next/font/google';
import '@/styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  style: ['normal', 'italic'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: {
    default: 'ZenSpace — Clinical AI for Therapists',
    template: '%s | ZenSpace',
  },
  description: 'Your session ends. Your notes are already done. Five jobs in 12.8 seconds.',
  metadataBase: new URL('https://zenspaceapp.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ZenSpace',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
