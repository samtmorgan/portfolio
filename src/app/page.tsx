import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import thisSite from '../../public/this_site.jpg';
import recharts from '../../public/recharts.jpg';
import star_wars from '../../public/star_wars.jpg';
import brunswick from '../../public/brunswick.jpg';
import superPotato from '../../public/superPotato.jpg';
import { PageText } from '@/components/PageText';
import { PageBox } from '@/components/PageBox';
import { ProjectType } from '@/types/types';
import { titles } from '@/static/copy';
import { Metadata } from 'next';

const PLACEHOLDER_PROJECTS: ProjectType[] = [
	{
		heading: 'Super Potato',
		description:
			'A very simple weather app, primarily used as a platform to explore different tooling, there are more features to add to this project which built with Next.js and TypeScript, styled with Tailwind.',
		image: superPotato,
		href: 'https://super-potato-samtmorgan.vercel.app/',
	},
	{
		heading: 'My personal site',
		description:
			'This is my personal site built with Next.js and MUI using TypeScript, deployed on Vercel.',
		image: thisSite,
		href: 'https://portfolio-five-lemon-11.vercel.app/',
	},
	{
		heading: 'App for property marketing suite',
		description: `Used on a tablet to control the lighting in an interactive model of a new property development 
        which allows the user to see where different apartments are located in the development. The app controls the
        lighting via the lighting controller API. Built with React and React-Bootstrap, in production the app is hosted
        on a Apache web server running on a Raspberry pi.`,
		image: brunswick,
		href: 'https://samtmorgan.github.io/bm_clarion_brunswick/',
	},
	{
		heading: 'Recharts library',
		description: `Recharts is a composable open source charting library, I have used the library extensively 
            in my professional work and have previously made a modest contribution to the project storybook.`,
		image: recharts,
		href: 'https://recharts.org/en-US/storybook',
	},
	{
		heading: 'Star Wars quotes',
		description:
			'Made in a galaxy far far away as a Free Code Camp project. Built with React and React-Bootstrap, deployed on GitHub Pages.',
		image: star_wars,
		href: 'https://samtmorgan.github.io/random-star-wars-quotes/',
	},
	// { label: 'Project 4', description: 'This is a description of project 4' },
];

const title = 'Sam T Morgan';
const paragraphs = [
	'Fullstack software engineer with a primary focus on Frontend development',
	'I build responsive websites and applications using modern web technologies and frameworks such as React, Next.js, and Material-UI.',
	'On this site you can find some of my projects, find out about about me and get in touch.',
];

// this is managing meta content with the 'app router'
export const metadata: Metadata = {
	title: titles.home,
};

export default function Home() {
	return (
		<PageBox>
			<PageText title={title} paragraphs={paragraphs} />
			<Box id="projects" sx={{ pt: 20, mb: '4rem' }}>
				<Typography
					sx={{
						fontSize: { sm: '4rem', xs: '2rem' },
						fontWeight: 'bold',
					}}
					gutterBottom
					variant="h2"
				>
					Projects
				</Typography>

				<Grid
					container
					// rowSpacing={3} columnSpacing={3}
					spacing={10}
				>
					{PLACEHOLDER_PROJECTS.slice(0, 4).map((project) => (
						<Grid item key={project.heading} xs={12} sm={12}>
							<MediaCard project={project} />
						</Grid>
					))}
				</Grid>
			</Box>
		</PageBox>
	);
}
