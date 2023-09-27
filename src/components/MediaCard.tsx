import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import styles from './style/mediaCard.module.css';

export default function MediaCard({
	heading,
	text,
	image,
	href,
}: {
	heading: string;
	text: string;
	image?: string | StaticImageData | undefined;
	href?: string | undefined;
}) {
	return (
		<Card sx={{ borderRadius: 0 }}>
			<Link underline="none" href={href || ''} target="blank">
				<CardActionArea>
					{image ? (
						<Image
							className={styles.mediaCardImage}
							alt={heading}
							src={image}
							// width={640}
							// height={480}
							// fill
							style={{
								// width: '100%',
								// height: '500px',
								objectFit: 'contain',
							}}
						/>
					) : (
						<Image
							className={styles.mediaCardImage}
							alt="Random image"
							src={'https://source.unsplash.com/random'}
							width={640}
							height={480}
							// fill
							style={{
								// width: '100%',
								// height: '200px',
								objectFit: 'cover',
							}}
						/>
					)}

					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{heading}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{text}
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
