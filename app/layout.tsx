// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Lora, Syne, Geist_Mono } from 'next/font/google';
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

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
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
    <html lang="en" className={`${inter.variable} ${lora.variable} ${syne.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
