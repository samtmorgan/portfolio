'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseMenu from '@mui/icons-material/Close';
import MenuDrawer from './MenuDrawer';
import styles from './style/header.module.css';

const ICON_LINKS = [
  {
    label: 'Link to GitHub',
    icon: GitHubIcon,
    href: 'https://github.com/samtmorgan',
  },
  {
    label: 'Link to LinkedIn',
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/samuel-trindade-morgan-66804320/',
  },
];

const LINKS = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: '/#projects' },
  { text: 'Contact', href: '/contact' },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.menuButton}>
          <IconButton edge="start" color="primary" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
            {drawerOpen ? <CloseMenu /> : <MenuIcon />}
          </IconButton>
        </div>

        <nav className={styles.nav}>
          {LINKS.map(({ text, href }) => (
            <Button key={text} component={Link} href={href}>
              {text}
            </Button>
          ))}
        </nav>
        <nav className={styles.iconButtonContainer}>
          {ICON_LINKS.map(item => (
            <IconButton
              key={item.label}
              edge="start"
              color="primary"
              aria-label={item.label}
              component={Link}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon />
            </IconButton>
          ))}
        </nav>
      </header>
      <MenuDrawer links={LINKS} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
