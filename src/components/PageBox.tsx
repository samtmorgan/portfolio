import React from 'react';
import Box from '@mui/material/Box';
import styles from '../app/page.module.css';

export function PageBox({ children }: { children: React.ReactNode[] | React.ReactNode }) {
  return <Box className={styles.container}>{children}</Box>;
}
