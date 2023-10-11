import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { metaDescriptions, metaKeywords, metaTitles } from '@/static/copy';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: metaTitles.root,
  description: metaDescriptions.root,
  keywords: metaKeywords,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
