import React from 'react';
import MuiAppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SearchInput from '@app/components/atoms/SearchInput/SearchInput';
import useStyles from './AppBar.styles';

interface Props extends AppBarProps {
  handleOpenDrawer: () => void;
}

const AppBar: React.FC<Props> = ({ handleOpenDrawer }): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiAppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.leftItems}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleOpenDrawer}
            edge='start'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            GIFmaster
          </Typography>
        </Box>
        <Hidden smDown>
          <SearchInput />
        </Hidden>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
