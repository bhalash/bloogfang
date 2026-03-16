import { Geist, Geist_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { SiteHeader } from '@/lib/components';
import { SiteMeta, fetchSiteMeta } from '@/lib/api';

import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const meta: SiteMeta = await fetchSiteMeta();

  return {
    title: meta.name,
    description: meta.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center gap-4`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
