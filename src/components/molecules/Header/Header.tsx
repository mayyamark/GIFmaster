import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import SearchInput from '@app/components/atoms/SearchInput/SearchInput';
import useStyles from './Header.styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PublishIcon from '@material-ui/icons/Publish';
import PermMediaIcon from '@material-ui/icons/PermMedia';

const Header = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar style={{ backgroundColor: 'black', display: 'flex' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => setOpen(true)}
            edge='start'
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6'>GIFmaster</Typography>

          <Hidden smDown>
            <SearchInput />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Box className={classes.drawerHeader}>
          <IconButton className={classes.icon} onClick={() => setOpen(false)}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider style={{ backgroundColor: 'white' }} />

        <Hidden smUp>
          <SearchInput />
          <Divider style={{ backgroundColor: 'white' }} />
        </Hidden>

        <List>
          {[
            { label: 'Favoutites', icon: FavoriteIcon },
            { label: 'Upload a GIF', icon: PublishIcon },
            { label: 'My GIFs', icon: PermMediaIcon },
            { label: 'Show random GIF', icon: EmojiEmotionsIcon },
          ].map((item) => (
            <ListItem button key={item.label}>
              <ListItemIcon>
                <item.icon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
