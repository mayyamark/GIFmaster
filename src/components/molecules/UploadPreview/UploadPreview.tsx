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
      />
      <Button
        variant='outlined'
        disabled={!file}
        onClick={handleUpload}
        className={classes.uploadButton}
      >
        Upload
      </Button>
      <Button variant='outlined' disabled={!file} onClick={handleReset}>
        {cancelButtonText}
      </Button>
    </>
  );
};

export default UploadPreview;
