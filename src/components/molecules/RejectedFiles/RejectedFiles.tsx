import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useStyles from './RejectedFiles.styles';

interface ErrorFile {
  errors: unknown[];
  file: File;
}

interface Props {
  errorTitle: string;
  buttonText: string;
  errorFiles: ErrorFile[];
  handleClickFile: (errorFile: File) => void;
  handleClickButton: () => void;
}

const RejectedFiles: React.FC<Props> = ({
  errorTitle,
  buttonText,
  errorFiles,
  handleClickFile,
  handleClickButton,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.errorTitle}>{errorTitle}</Typography>
      {errorFiles.map(({ file: errorFile }) => (
        <Box
          key={errorFile.name}
          className={classes.errorFileContainer}
          onClick={() => handleClickFile(errorFile)}
        >
          <Typography className={classes.fileName}>{errorFile.name}</Typography>{' '}
          <CardMedia
            component='img'
            src={window.URL.createObjectURL(errorFile)}
            className={classes.file}
          />
        </Box>
      ))}
      <Button variant='outlined' onClick={handleClickButton}>
        {buttonText}
      </Button>
    </Box>
  );
};

export default RejectedFiles;
