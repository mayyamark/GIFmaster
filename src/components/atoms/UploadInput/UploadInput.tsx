import React from 'react';
import Typography from '@material-ui/core/Typography';

import useStyles from './UploadInput.styles';

interface Props {
  isDragActive: boolean;
  additionalText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInputProps: () => any;
}

const UploadInput: React.FC<Props> = ({
  isDragActive,
  additionalText,
  getInputProps,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Drop the files here ...</Typography>
      ) : (
        <>
          <Typography className={classes.title}>
            Drag and drop a file here, or click to select file
          </Typography>
          {additionalText ? (
            <em className={classes.additionalText}>{additionalText}</em>
          ) : null}
        </>
      )}
    </>
  );
};

export default UploadInput;
