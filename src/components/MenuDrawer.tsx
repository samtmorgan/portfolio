import * as React from 'react';
import Box from '@mui/material/Box';
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function MenuList({ onClose, links }: { onClose: () => void; links: { text: string; href: string }[] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '56px',
      }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      {/* <Box
					sx={{
						zIndex: 2000,
						height: '56px',
						display: 'flex',
						padding: '0.5rem',
						width: '100%',
						backgroundColor: 'background.paper',
						flexDirection: 'row-reverse',
					}}
				>
					<Box
						sx={{
							display: {
								xs: 'flex',
								sm: 'none',
							},
						}}
					>
						<IconButton
							// size="large"
							// edge="start"
							color="primary"
							aria-label="menu"
							sx={{ mr: '0.2rem' }}
							onClick={onClose}
						>
							<CloseMenu />
						</IconButton>
					</Box>
				</Box> */}
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
        // minWidth: '400px',
        display: { xs: 'block', sm: 'none' },
      }}
      PaperProps={{
        sx: {
          width: '100%',
          // height: `calc(100% - 48px)`,
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
