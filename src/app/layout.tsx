import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Header } from '@/components/Header';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { metaDescriptions, metaKeywords, metaTitles } from '@/static/copy';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: metaTitles.root,
  description: metaDescriptions.root,
  keywords: metaKeywords,
  //   con,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ padding: '0px !important' }}>
        <ThemeRegistry>
          <Header />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              // mt: '48px',
              // p: 3,
            }}
          >
            {children}
            <Analytics />
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
