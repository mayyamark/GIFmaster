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
      {
        href: '/favourites',
        label: 'Favoutites',
        dataTestId: 'my-favourites-route-link',
        IconComponent: FavoriteIcon,
      },
      {
        href: '/upload-gif',
        label: 'Upload a GIF',
        dataTestId: 'upload-route-link',
        IconComponent: PublishIcon,
      },
      {
        href: '/my-uploads',
        label: 'My uploads',
        dataTestId: 'my-uploads-route-link',
        IconComponent: PermMediaIcon,
      },
      {
        href: '/random-gif',
        label: 'Show random GIF',
        dataTestId: 'random-gif-route-link',
        IconComponent: EmojiEmotionsIcon,
      },
    ],
    []
  );

  return (
    <MuiDrawer
      className={classes.drawer}
      variant='temporary'
      onClose={handleClose}
      anchor='left'
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      data-testid='drawer-menu'
    >
      <Box className={classes.drawerHeader}>
        <Typography variant='h6' className={classes.menuText}>
          GIFmaster
        </Typography>
        <IconButton
          className={classes.icon}
          onClick={handleClose}
          data-testid='close-drawer-button'
        >
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
      <Divider className={classes.divider} />

      <Hidden smUp>
        <SearchInput onKeyPressCallback={handleClose} />
        <Divider className={classes.divider} />
      </Hidden>

      <List className={classes.linksContainer}>
        {links.map(({ href, label, IconComponent, dataTestId }) => (
          <LinkItem
            href={href}
            key={label}
            label={label}
            handleClick={handleClose}
            IconComponent={IconComponent}
            dataTestId={dataTestId}
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
