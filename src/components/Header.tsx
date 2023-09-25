import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';

import { Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { useElementSize } from 'usehooks-ts';

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
	setDrawerOpen,
	links,
}: {
	open: boolean;
	onClose: () => void;
	setDrawerOpen: (open: boolean) => void;
	links: { text: string; href: string }[];
}) {
	const [headerRef, { width, height }] = useElementSize();

	React.useEffect(() => {
		console.log({ width, height });
	}, [width, height]);

	const d = 'M 10,10 L 20,20 L 40,0 L 60,20 L 80,0 L 90, 10';

	const squiggle = <path d={d} />;

	const Squiggles = () => {
		const source = Array.from({ length: 30 }).map(() => squiggle);
		const getRand = (min: number, max: number) =>
			Math.random() * (max - min) + min;
		// const box = { width: height, height };
		// const boxWidth = (width / height) * height;
		return source.map((item, index) => (
			// <path
			// 	d={d}
			// 	key={index}
			// 	transform={`scale(${(index + 1) * 0.1}) translate(${
			// 		10 + index
			// 	})`}
			// 	fill="transparent"
			// 	stroke="black"
			// 	strokeWidth={2}
			// 	strokeLinecap="round"
			// />

			// animates circles
			<circle
				key={index}
				cx={getRand(0, width)}
				cy={getRand(0, height)}
				r={2}
				fill="coral"
			>
				<animate
					attributeName="r"
					values={`${getRand(2, 7)}`}
					dur="10s"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="cx"
					values={`${getRand(0, width)};${getRand(
						0,
						width
					)};${getRand(0, width)}`}
					dur={`${getRand(1, 10)}s`}
					repeatCount="indefinite"
				/>
				<animate
					attributeName="cy"
					values={`${getRand(0, height)};${getRand(
						0,
						height
					)};${getRand(0, height)}`}
					dur={`${getRand(1, 3)}s`}
					repeatCount="indefinite"
				/>
			</circle>

			// simple circle
			// <circle
			// 	key={index}
			// 	cx={getRand(0, width)}
			// 	cy={getRand(0, height)}
			// 	r={2}
			// 	fill="coral"
			// />

			// <rect
			// 	key={index}
			// 	x={index * height}
			// 	y={0}
			// 	width={box.width}
			// 	height={box.height}
			// 	fill="transparent"
			// 	stroke="red"
			// />
		));
	};

	return (
		<Box
			ref={headerRef}
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
			<svg
				style={{ position: 'absolute' }}
				viewBox={`0 0 ${width} ${width}`}
			>
				<Squiggles />
			</svg>

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
