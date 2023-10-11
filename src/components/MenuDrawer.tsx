import * as React from 'react';
import Box from '@mui/material/Box';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from './style/menu.module.css';

function MenuList({ onClose, links }: { onClose: () => void; links: { text: string; href: string }[] }) {
  return (
    <nav className={styles.drawerNav}>
      <Box role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {links.map(({ text, href }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={href} onClick={onClose}>
                <ListItemText primary={text} primaryTypographyProps={{ align: 'center' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </nav>
  );
}

export default function MenuDrawer({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: { text: string; href: string }[];
}) {
  return (
    <Drawer
      sx={{
        display: { xs: 'block', sm: 'none' },
      }}
      PaperProps={{
        sx: {
          width: '100%',
        },
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <MenuList onClose={onClose} links={links} />
    </Drawer>
  );
}
