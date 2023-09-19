import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './layout.module.css';

export const metadata = {
	title: 'Sam T Morgan Portfolio',
	description: 'Sam T Morgan Full Stack Developer Portfolio',
};

const DRAWER_WIDTH = 240;

const LINKS = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/' },
	{ text: 'Work', href: '/' },
	{ text: 'Contact', href: '/' },
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

const PLACEHOLDER_LINKS = [
	{ text: 'Settings', icon: SettingsIcon },
	{ text: 'Support', icon: SupportIcon },
	{ text: 'Logout', icon: LogoutIcon },
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					<AppBar
						position="fixed"
						elevation={0}
						sx={{ zIndex: 2000, paddingRight: '6rem' }}
						// className={styles.appBar}
					>
						<Toolbar
							sx={{
								backgroundColor: 'background.paper',
								flexDirection: 'row-reverse',
								marginRight: '6rem',
							}}
							className={styles.appBar}
						>
							{/* <DashboardIcon
								sx={{
									color: '#444',
									mr: 2,
									transform: 'translateY(-2px)',
								}}
							/>
							<Typography
								variant="h6"
								noWrap
								component="div"
								color="black"
							>
								Next.js App Router
							</Typography>*/}

							<Box
								sx={{
									display: {
										xs: 'none',
										sm: 'flex',
										gap: '0.5rem',
									},
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
								{ICON_LINKS.map((item) => (
									<IconButton
										key={item.label}
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
						</Toolbar>
					</AppBar>

					<Box
						component="main"
						sx={{
							flexGrow: 1,
							bgcolor: 'background.default',
							// ml: `${DRAWER_WIDTH}px`,
							mt: ['48px', '56px', '64px'],
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
