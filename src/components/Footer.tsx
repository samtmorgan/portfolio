import React from 'react';
import { Box } from '@mui/system';
import { Link } from '@mui/material';
import styles from './style/footer.module.css';

const privacyPolicyHref = `https://samtmorgan.github.io/turbo-telegram/privacy_policy.pdf`;

export function Footer() {
	return (
		<Box className={styles.footer}>
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
