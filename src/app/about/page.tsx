import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../page.module.css';

export default function AboutPage() {
  return (
    <Container className={styles.pageContainer}>
      <Box>
        <Typography variant="body1" gutterBottom>
          AboutPage
        </Typography>
      </Box>
    </Container>
  );
}
