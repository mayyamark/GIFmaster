import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import useStyles from './UploadPreview.styles';
interface Props {
  cancelButtonText: string;
  file: File | null;
  handleUpload: () => void;
  handleReset: () => void;
}

const UploadPreview: React.FC<Props> = ({
  cancelButtonText,
  file,
  handleUpload,
  handleReset,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <CardMedia
        component='img'
        src={window.URL.createObjectURL(file)}
        className={classes.file}
        data-testid='upload-gif-preview'
      />
      <Button
        variant='outlined'
        disabled={!file}
        onClick={handleUpload}
        className={classes.uploadButton}
        data-testid='upload-button'
      >
        Upload
      </Button>
      <Button
        variant='outlined'
        disabled={!file}
        onClick={handleReset}
        data-testid='cancel-button'
      >
        {cancelButtonText}
      </Button>
    </>
  );
};

export default UploadPreview;
