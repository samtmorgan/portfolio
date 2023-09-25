'use client';

import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import MenuDrawer from '@/components/MenuDrawer';
import { Header } from '@/components/Header';
import { Box } from '@mui/material';

const metadata = {
	title: 'Sam T Morgan Portfolio',
	description: 'Sam T Morgan Full Stack Developer Portfolio',
};

// const DRAWER_WIDTH = 240;

const LINKS = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Projects', href: '/projects' },
	{ text: 'Contact', href: '/contact' },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const toggleDrawer =
		() => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			setDrawerOpen(false);
		};

	return (
		<html lang="en">
			<head>
				<title>{metadata.title}</title>
				<meta
					key="desc"
					name="description"
					content={metadata.description}
				/>
			</head>
			<body style={{ padding: '0px !important' }}>
				<ThemeRegistry>
					<Header
						open={drawerOpen}
						onClose={toggleDrawer}
						setDrawerOpen={setDrawerOpen}
						links={LINKS}
					/>
					<MenuDrawer
						links={LINKS}
						open={drawerOpen}
						onClose={toggleDrawer}
					/>

					<Box
						component="main"
						sx={{
							flexGrow: 1,
							bgcolor: 'background.default',
							// mt: ['48px', '56px', '64px'],
							p: 3,
						}}
					>
						{children}
					</Box>
				</ThemeRegistry>
			</body>
		</html>
	);
}
