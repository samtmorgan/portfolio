import Image from 'next/image';
import styles from './page.module.css';
import { Box, Grid, Typography } from '@mui/material';
import MediaCard from '@/components/MediaCard';

const PLACEHOLDER_PROJECTS = [
	{ label: 'Project 1', description: 'This is a description of project 1' },
	{ label: 'Project 2', description: 'This is a description of project 2' },
	{ label: 'Project 3', description: 'This is a description of project 3' },
	{ label: 'Project 4', description: 'This is a description of project 4' },
];

export default function Home() {
	return (
		<Box className={styles.container}>
			<Box className={styles.heading}>
				<Typography
					sx={{
						fontSize: { sm: '4rem', xs: '2rem' },
						fontWeight: 'bold',
					}}
				>
					Sam T Morgan
				</Typography>
				<Typography variant="body1">Full Stack Developer</Typography>
				<Typography variant="body1">
					Designing and building things for the web.
				</Typography>
			</Box>
			<Box sx={{ mt: 20 }}>
				<Box sx={{ mb: 5, display: 'flex', justifyContent: 'center' }}>
					<Typography variant="h4">Selected Project</Typography>
				</Box>

				<Grid
					container
					// rowSpacing={3} columnSpacing={3}
					spacing={10}
				>
					{PLACEHOLDER_PROJECTS.slice(0, 1).map((project) => (
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
