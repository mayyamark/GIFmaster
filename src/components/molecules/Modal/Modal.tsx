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
import useStyles from './Modal.styles';

interface ExtendStyles {
  content?: string;
}

interface Props extends ModalProps {
  extendStyles?: ExtendStyles;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({
  children,
  extendStyles,
  onClose,
  ...other
}) => {
  const classes = useStyles();

  return (
    <MuiModal {...other} className={other.className}>
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
            onClick={onClose}
          >
            <Close className={classes.closeIcon} />
          </IconButton>
          {children}
        </Paper>
      </Box>
    </MuiModal>
  );
};

export default Modal;
