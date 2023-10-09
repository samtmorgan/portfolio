import * as React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import styles from './style/mediaCard.module.css';
import { ProjectType } from '@/types/types';

export default function MediaCard({ project }: { project: ProjectType }) {
	return (
		<Card sx={{ borderRadius: 0 }}>
			<Link underline="none" href={project.href || ''} target="blank">
				<CardActionArea>
					<Image
						className={styles.mediaCardImage}
						alt={project.heading}
						src={project.image}
						priority={project.heading === 'Super Potato'}
						// width={640}
						// height={480}
						// fill
						style={{
							// width: '100%',
							// height: '500px',
							objectFit: 'contain',
						}}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{project.heading}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{project.description}
						</Typography>
					</CardContent>
					{/* <CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions> */}
				</CardActionArea>
			</Link>
		</Card>
	);
}
