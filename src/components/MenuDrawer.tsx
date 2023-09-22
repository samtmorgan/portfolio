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

export default function MenuDrawer({
	open,
	onClose,
	links,
}: {
	open: boolean;
	onClose: () => void;
	links: { text: string; href: string }[];
}) {
	const MenuList = () => (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			role="presentation"
			onClick={onClose}
			onKeyDown={onClose}
		>
			<Box
				sx={{
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
						onClick={onClose}
					>
						<CloseMenu />
					</IconButton>
				</Box>
			</Box>
			<List>
				{links.map(({ text, href }) => (
					<ListItem key={text} disablePadding>
						<ListItemButton
							component="a"
							href={href}
							onClick={onClose}
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
			open={open}
			onClose={onClose}
		>
			<MenuList />
		</Drawer>
	);
}
