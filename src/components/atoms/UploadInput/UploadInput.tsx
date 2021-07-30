import React from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getInputProps: () => any;
  isDragActive: boolean;
}

const UploadInput: React.FC<Props> = ({
  getInputProps,
  isDragActive,
}): JSX.Element => {
  return (
    <>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Drop the files here ...</Typography>
      ) : (
        <>
          <Typography>
            Drag and drop a file here, or click to select file
          </Typography>
          <em>(Only *.gif files will be accepted)</em>
        </>
      )}
    </>
  );
};

export default UploadInput;
