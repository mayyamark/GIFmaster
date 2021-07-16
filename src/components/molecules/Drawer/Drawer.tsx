import React, { useMemo } from 'react';
import { useTheme } from '@material-ui/core/styles';
import MuiDrawer, { DrawerProps } from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PublishIcon from '@material-ui/icons/Publish';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import SearchInput from '@app/components/atoms/SearchInput/SearchInput';
import LinkItem from '@app/components/atoms/LinkItem/LinkItem';
import useStyles from './Drawer.styles';

interface Props extends DrawerProps {
  open: boolean;
  handleClose: () => void;
}

const Drawer: React.FC<Props> = ({ open, handleClose }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  const links = useMemo(
    () => [
      { href: '/favourites', label: 'Favoutites', IconComponent: FavoriteIcon },
      {
        href: '/upload-gif',
        label: 'Upload a GIF',
        IconComponent: PublishIcon,
      },
      { href: '/my-gifs', label: 'My GIFs', IconComponent: PermMediaIcon },
      {
        href: '/random-gif',
        label: 'Show random GIF',
        IconComponent: EmojiEmotionsIcon,
      },
    ],
    []
  );

  return (
    <MuiDrawer
      className={classes.drawer}
      variant='temporary'
      onEscapeKeyDown={handleClose}
      onBackdropClick={handleClose}
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box className={classes.drawerHeader}>
        <Typography variant='h6' className={classes.menuText}>
          GIFmaster
        </Typography>
        <IconButton className={classes.icon} onClick={handleClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
      <Divider className={classes.divider} />

      <Hidden smUp>
        <SearchInput />
        <Divider className={classes.divider} />
      </Hidden>

      <List className={classes.linksContainer}>
        {links.map(({ href, label, IconComponent }) => (
          <LinkItem
            href={href}
            key={label}
            label={label}
            IconComponent={IconComponent}
            extendStyles={{
              content: label.includes('random')
                ? classes.randomGifLink
                : undefined,
            }}
          />
        ))}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
