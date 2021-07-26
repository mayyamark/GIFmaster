import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Layout from '@app/components/molecules/Layout/Layout';
import generateFormData from '@app/utils/generate-formdata';
import { Button } from '@material-ui/core';

interface Props {
  endpointUrl: string;
}

// add tags https://developers.giphy.com/docs/api/endpoint#upload
const UploadPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  console.log(endpointUrl);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleClick = useCallback(async () => {
    if (file) {
      try {
        setLoading(true);

        const response = await fetch(endpointUrl, {
          method: 'POST',
          body: generateFormData(file),
        });
        const json = await response.json();

        if (response.status === 200) {
          // save to localStorage
          localStorage.setItem('uploads', json.data.id);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  }, [file, endpointUrl]);

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Layout>
      <Box {...getRootProps()} style={{ border: '1px solid black' }}>
        {!file ? (
          <>
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography>Drop the files here ...</Typography>
            ) : (
              <Typography>
                Drag and drop a file here, or click to select file
              </Typography>
            )}
          </>
        ) : (
          <>
            <CardMedia
              component='img'
              src={window.URL.createObjectURL(file)}
              style={{
                border: 'none',
                height: '100%',
              }}
            />
            <Button variant='outlined' disabled={!file} onClick={handleClick}>
              Upload
            </Button>
            <Button
              variant='outlined'
              disabled={!file}
              onClick={() => setFile(null)}
            >
              Pick another one
            </Button>
          </>
        )}
      </Box>
      {loading && <Typography>Loading...</Typography>}
    </Layout>
  );
};

export default UploadPage;
