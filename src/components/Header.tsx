'use client';

import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './MenuDrawer';
import CloseMenu from '@mui/icons-material/Close';

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

const LINKS = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Projects', href: '/#projects' },
	{ text: 'Contact', href: '/contact' },
];

export function Header() {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					zIndex: 2000,
					height: '56px',
					display: 'flex',
					padding: '0.5rem',
					width: '100%',
					backgroundColor: 'background.paper',
					flexDirection: 'row',
					justifyContent: { xs: 'space-between', sm: 'flex-end' },
					paddingLeft: { sm: '12rem' },
					paddingRight: { sm: '12rem' },
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
						color="primary"
						aria-label="menu"
						sx={{ mr: '0.2rem' }}
						onClick={() => setDrawerOpen(!drawerOpen)}
					>
						{drawerOpen ? <CloseMenu /> : <MenuIcon />}
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
						<Button key={text} component={Link} href={href}>
							{text}
						</Button>
					))}
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '0.5rem',
					}}
				>
					{ICON_LINKS.map((item, index) => (
						<IconButton
							key={`${item.label}-${index}}`}
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
			<MenuDrawer
				links={LINKS}
				open={drawerOpen}
				onClose={() => setDrawerOpen(false)}
			/>
		</>
	);
}
