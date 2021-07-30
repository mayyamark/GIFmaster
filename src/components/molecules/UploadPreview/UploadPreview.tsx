import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

interface Props {
  file: File | null;
  handleUpload: () => void;
  handleReset: () => void;
}

const UploadPreview: React.FC<Props> = ({
  file,
  handleUpload,
  handleReset,
}): JSX.Element => {
  return (
    <>
      <CardMedia
        component='img'
        src={window.URL.createObjectURL(file)}
        style={{
          border: 'none',
          height: '100%',
        }}
      />
      <Button variant='outlined' disabled={!file} onClick={handleUpload}>
        Upload
      </Button>
      <Button variant='outlined' disabled={!file} onClick={handleReset}>
        Pick another one
      </Button>
    </>
  );
};

export default UploadPreview;
