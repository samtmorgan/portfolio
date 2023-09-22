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

export function Header({
	open,
	onClose,
	setDrawerOpen,
	links,
}: {
	open: boolean;
	onClose: () => void;
	setDrawerOpen: (open: boolean) => void;
	links: { text: string; href: string }[];
}) {
	return (
		<Box
			sx={{
				position: 'fixed',
				zIndex: 2000,
				height: '56px',
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
					// size="large"
					// edge="start"
					color="primary"
					aria-label="menu"
					sx={{ mr: '0.2rem' }}
					onClick={() => setDrawerOpen(!open)}
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
				{links.map(({ text, href }) => (
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
	);
}
