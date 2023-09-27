import React from 'react';
// import Image from 'next/image';
import { Box, Grid, Icon, Stack, SvgIcon, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';
import styles from './page.module.css';
import Image from 'next/image';
import { NextLogo } from '@/components/Logo';

const PLACEHOLDER_PROJECTS = [
	{ label: 'Project 1', description: 'This is a description of project 1' },
	{ label: 'Project 2', description: 'This is a description of project 2' },
	{ label: 'Project 3', description: 'This is a description of project 3' },
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
				<Stack direction="row" spacing={2} sx={{ mt: '2rem' }}>
					{/* <Image
						src="/public/next.svg" // Route of the image file
						height={144} // Desired size with correct aspect ratio
						width={144} // Desired size with correct aspect ratio
						alt="Your Name"
                    /> */}
					{/* <Box sx={{ width: '100px', height: '100px' }}>
						<Image
							alt="next-js_icon"
							src="/next.svg"
							// layout="fill"
							// layout=''
							width={100}
							height={50}
                        /> 
					</Box>*/}
					{/* <SvgIcon>
						<NextLogo />
					</SvgIcon> */}
					<Image
						alt="react_logo"
						src="/logo512.png"
						// layout="fill"
						// layout=''
						width={70}
						height={70}
					/>
					<Image
						alt="next-js_icon"
						src="/next.svg"
						// layout="fill"
						// layout=''
						width={100}
						height={70}
					/>
					<Image
						alt="type-script_icon"
						src="/typescript.svg"
						// layout="fill"
						// layout=''
						width={100}
						height={70}
					/>
					<Image
						alt="type-script_icon"
						src="/materialui.svg"
						// layout="fill"
						// layout=''
						width={100}
						height={70}
					/>

					{/* <NextLogo /> */}
				</Stack>
			</Box>
			<Box id="projects" sx={{ pt: 20 }}>
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
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
