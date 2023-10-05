import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Header } from '@/components/Header';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';

const metadata = {
	title: 'Sam T Morgan Portfolio',
	description: 'Sam T Morgan Full Stack Developer Portfolio',
};

// const DRAWER_WIDTH = 240;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
			<head>
				<title>{metadata.title}</title>
			</head>
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
