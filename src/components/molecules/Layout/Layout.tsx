import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import AppBar from '@app/components/atoms/AppBar/AppBar';
import Drawer from '@app/components/molecules/Drawer/Drawer';
import useStyles from './Layout.styles';

interface Props {
  children: React.ReactNode;
}

const Header: React.FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar handleOpenDrawer={() => setOpenDrawer(true)} />
      <Drawer open={openDrawer} handleClose={() => setOpenDrawer(false)} />
      <Container className={classes.wrapper}>
        <>{children}</>
      </Container>
    </>
  );
};

export default Header;
