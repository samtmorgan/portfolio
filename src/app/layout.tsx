import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Header } from '@/components/Header';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { metaDescription, metaKeywords, titles } from '@/static/copy';
import { Metadata } from 'next';

// const DRAWER_WIDTH = 240;
export const metadata: Metadata = {
  title: titles.root,
  description: metaDescription,
  keywords: metaKeywords,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // // const [drawerOpen, setDrawerOpen] = React.useState(false);

  // const toggleDrawer =
  // 	() => (event: React.KeyboardEvent | React.MouseEvent) => {
  // 		if (
  // 			event.type === 'keydown' &&
  // 			((event as React.KeyboardEvent).key === 'Tab' ||
  // 				(event as React.KeyboardEvent).key === 'Shift')
  // 		) {
  // 			return;
  // 		}

  // 		setDrawerOpen(false);
  // 	};

  return (
    <html lang="en">
      {/* <head>
				<title>{titles.root}</title>
			<meta property="title" content={titles.root} key="title" />
				<meta name="description" content={metaDescription} />
				<meta name="keywords" content={metaKeywords} />
			</head>
			 <Head>
				<title>hello</title>
				<meta property="og:title" content={titles.root} key="title" />
				<meta name="description" content={metaDescription} />
				<meta name="keywords" content={metaKeywords} />
			</Head> */}
      <body style={{ padding: '0px !important' }}>
        <ThemeRegistry>
          <Header />
          {/* <MenuDrawer
						links={LINKS}
						open={drawerOpen}
						onClose={toggleDrawer}
					/> */}

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
          </Box>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
