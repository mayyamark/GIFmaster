import React from 'react';
import clsx from 'clsx';
import {
  Paper,
  Modal as MuiModal,
  ModalProps,
  IconButton,
  Box,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

import useStyles from './Modal.styles';

interface ExtendStyles {
  content?: string;
}

interface Props extends ModalProps {
  extendStyles?: ExtendStyles;
  handleClose?: () => void;
}

const Modal: React.FC<Props> = ({
  children,
  extendStyles,
  handleClose,
  ...other
}) => {
  const classes = useStyles();

  return (
    <MuiModal
      {...other}
      className={other.className}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      data-testid='modal'
    >
      <Fade in={other.open}>
        <Box className={classes.root}>
          <Paper
            elevation={0}
            square
            className={clsx(classes.content, extendStyles?.content)}
          >
            <IconButton
              aria-label='close'
              disableRipple
              disableFocusRipple
              className={classes.closeButton}
              onClick={handleClose}
            >
              <Close className={classes.closeIcon} />
            </IconButton>
            {children}
          </Paper>
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
