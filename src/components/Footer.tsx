import React from 'react';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import styles from './style/footer.module.css';

const privacyPolicyHref = `https://samtmorgan.github.io/turbo-telegram/privacy_policy.pdf`;

export function Footer() {
	return (
		<Box className={styles.footer}>
			<Typography variant="body2">© 2023 Sam T Morgan</Typography>
			<Link
				target="_blank"
				rel="noopener noreferrer"
				color="inherit"
				variant="body2"
				href={privacyPolicyHref}
			>
				Privacy
			</Link>
		</Box>
	);
}
