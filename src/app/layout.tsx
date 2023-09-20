'use client';

import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseMenu from '@mui/icons-material/Close';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import {
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	useTheme,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from '@/components/MenuDrawer';

const metadata = {
	title: 'Sam T Morgan Portfolio',
	description: 'Sam T Morgan Full Stack Developer Portfolio',
};

const DRAWER_WIDTH = 240;

const LINKS = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Projects', href: '/projects' },
	{ text: 'Contact', href: '/contact' },
];

const ICON_LINKS = [
	{
		label: 'GitHub',
		icon: GitHubIcon,
		href: 'https://github.com/samtmorgan',
	},
	{
		text: 'LinkedIn',
		icon: LinkedInIcon,
		href: 'https://www.linkedin.com/in/samuel-trindade-morgan-66804320/',
	},
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	// const theme = useTheme();

	// console.log({ theme });

	// React.useEffect(() => {
	// 	if (theme.breakpoints.up('xs')) {
	// 		console.log('xs');
	// 		setDrawerOpen(false);
	// 	}
	// }, [theme]);

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

	const MenuList = () => (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			role="presentation"
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
		>
			<Box
				sx={{
					zIndex: 2000,
					height: '48px',
					display: 'flex',
					padding: '0.5rem',
					width: '100%',
					backgroundColor: 'background.paper',
					flexDirection: 'row-reverse',
				}}
			>
				<Box
					sx={{
						display: {
							xs: 'flex',
							sm: 'none',
						},
					}}
				>
					<IconButton
						size="large"
						// edge="start"
						color="primary"
						aria-label="menu"
						sx={{ mr: '0.2rem' }}
						onClick={() => setDrawerOpen(!drawerOpen)}
					>
						<CloseMenu />
					</IconButton>
				</Box>
			</Box>
			<List>
				{LINKS.map(({ text, href }) => (
					<ListItem key={text} disablePadding>
						<ListItemButton
							component="a"
							href={href}
							onClick={() => setDrawerOpen(false)}
						>
							<ListItemText
								primary={text}
								primaryTypographyProps={{ align: 'center' }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<html lang="en">
			<head>
				<title>Title</title>
				<meta name="description" content="Description" />
			</head>
			<body style={{ padding: '0px !important' }}>
				<ThemeRegistry>
					{/* <AppBar
						// color="white"
						position="fixed"
						elevation={0}
						sx={{
							zIndex: 2000,
						}}
					> */}
					<Box
						sx={{
							position: 'fixed',
							zIndex: 2000,
							height: '48px',
							display: 'flex',
							padding: '0.5rem',
							width: '100%',
							backgroundColor: 'background.paper',
							flexDirection: 'row-reverse',
						}}
					>
						<Box
							sx={{
								display: {
									xs: 'flex',
									sm: 'none',
								},
							}}
						>
							<IconButton
								size="large"
								// edge="start"
								color="primary"
								aria-label="menu"
								sx={{ mr: '0.2rem' }}
								onClick={() => setDrawerOpen(!drawerOpen)}
							>
								<MenuIcon />
							</IconButton>
						</Box>

						<Box
							sx={{
								display: {
									xs: 'none',
									sm: 'flex',
								},
								gap: '0.5rem',
							}}
						>
							{LINKS.map(({ text, href }) => (
								<Button
									key={text}
									// sx={{ color: '#fff' }}
									component={Link}
									href={href}
								>
									{text}
								</Button>
							))}
							{ICON_LINKS.map((item, index) => (
								<IconButton
									key={`${item.label}-${index}}`}
									// size="large"
									edge="start"
									color="primary"
									aria-label={item.label}
									sx={{ mr: '0.2rem', ml: '0.2rem' }}
									component={Link}
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<item.icon />
								</IconButton>
							))}
						</Box>
					</Box>
					{/* </AppBar> */}
					<MenuDrawer
						links={LINKS}
						open={drawerOpen}
						onClose={toggleDrawer}
					/>
					<Drawer
						sx={{
							// minWidth: '400px',
							display: { xs: 'block', sm: 'none' },
						}}
						PaperProps={{
							sx: {
								width: '100%',
								// height: `calc(100% - 48px)`,
							},
						}}
						anchor="right"
						open={drawerOpen}
						onClose={toggleDrawer}
					>
						<MenuList />
					</Drawer>

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
