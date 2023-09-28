import { Box, Typography } from '@mui/material';
import styles from '../app/page.module.css';
import React from 'react';

export function PageText({
	title,
	paragraphs,
}: {
	title: string | undefined;
	paragraphs: string[] | undefined;
}) {
	return (
		<Box className={styles.heading}>
			{title && (
				<Typography
					role="heading"
					sx={{
						fontSize: { sm: '4rem', xs: '2rem' },
						fontWeight: 'bold',
					}}
				>
					{title}
				</Typography>
			)}
			{paragraphs?.map((paragraph, index) => (
				<Typography
					key={`paragraph-${index}`}
					sx={{ maxWidth: '700px' }}
					variant="body1"
				>
					{paragraph}
				</Typography>
			))}
			{/* Dan is a fullstack software engineer with a primary focus on frontend development and experience building high-visibility, scalable, and accessible web applications. */}
			{/* <TechStackLogos /> */}
		</Box>
	);
}
