import React from 'react';
// import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import styles from './page.module.css';
import thisSite from '../../public/this_site.jpg';
import recharts from '../../public/recharts.jpg';
import star_wars from '../../public/star_wars.jpg';

const PLACEHOLDER_PROJECTS = [
	{
		label: 'My personal site',
		description:
			'This is my personal site built with Next.js and MUI using TypeScript, deployed on Vercel.',
		image: thisSite,
		href: 'https://portfolio-five-lemon-11.vercel.app/',
	},
	{
		label: 'Recharts library',
		description: `Recharts is a composable open source charting library, I have used the library extensively 
            in my professional work and have previously made a modest contribution to the project storybook.`,
		image: recharts,
		href: 'https://recharts.org/en-US/storybook',
	},
	{
		label: 'Star Wars quotes',
		description:
			'Made in a galaxy far far away as a Free Code Camp project. Built with React and React-Bootstrap, deployed on GitHub Pages.',
		image: star_wars,
		href: 'https://samtmorgan.github.io/random-star-wars-quotes/',
	},
	{ label: 'Project 4', description: 'This is a description of project 4' },
];

export default function Home() {
	// const projectsRef = React.useRef(null);
	return (
		<Box className={styles.container}>
			<Box className={styles.heading}>
				<Typography
					role="heading"
					// id="home"
					sx={{
						fontSize: { sm: '4rem', xs: '2rem' },
						fontWeight: 'bold',
					}}
				>
					Sam T Morgan
				</Typography>

				<Typography role="heading" variant="body1">
					Front-end developer with full-stack experience
				</Typography>
				<Typography sx={{ maxWidth: '700px' }} variant="body1">
					I build responsive websites and applications using modern
					web technologies and frameworks such as React, Next.js, and
					Material-UI.
				</Typography>
				<Typography sx={{ maxWidth: '700px' }} variant="body1">
					On this site you can find some of my projects, some more
					information about me and get in touch.
				</Typography>
				{/* Dan is a fullstack software engineer with a primary focus on frontend development and experience building high-visibility, scalable, and accessible web applications. */}
				{/* <TechStackLogos /> */}
			</Box>
			<Box id="projects" sx={{ pt: 20, mb: '4rem' }}>
				<Box sx={{ mb: 5, display: 'flex', justifyContent: 'center' }}>
					<Typography variant="h2">Projects</Typography>
				</Box>

				<Grid
					container
					// rowSpacing={3} columnSpacing={3}
					spacing={10}
				>
					{PLACEHOLDER_PROJECTS.slice(0, 3).map((project) => (
						<Grid item key={project.label} xs={12} sm={12}>
							<MediaCard
								heading={project.label}
								text={project.description}
								image={project.image}
								href={project.href}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
