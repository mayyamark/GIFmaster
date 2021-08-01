import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';

import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Layout from '@app/components/molecules/Layout/Layout';
import UploadPreview from '@app/components/molecules/UploadPreview/UploadPreview';
import UploadInput from '@app/components/atoms/UploadInput/UploadInput';
import Loader from '@app/components/atoms/Loader/Loader';
import generateFormData from '@app/utils/generate-formdata';
import { useMyGifs } from '@app/context/MyGifsContext';

interface Props {
  endpointUrl: string;
}

// add tags https://developers.giphy.com/docs/api/endpoint#upload
const UploadPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const { changeUploads } = useMyGifs();

  const [file, setFile] = useState<File | null | undefined>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorFiles, setErrorFiles] = useState<
    FileRejection[] | null | undefined
  >(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, fileRejections, isDragActive } =
    useDropzone({
      accept: 'image/gif',
      maxFiles: 1,
      onDrop,
    });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setErrorFiles(fileRejections);
    }
  }, [fileRejections]);

  // Test this
  const fileRejectionItems = useMemo(
    () =>
      errorFiles && errorFiles.length > 0 ? (
        <div>
          <p>Only one GIF is allowed! Choose between:</p>
          {errorFiles.map(({ file: errorFile }) => {
            console.log(file, 'inside');
            return (
              <li key={errorFile.name}>
                <p>{errorFile.name}</p>{' '}
                <CardMedia
                  component='img'
                  src={window.URL.createObjectURL(errorFile)}
                  style={{
                    border: 'none',
                    width: '30%',
                  }}
                  onClick={() => {
                    setFile(errorFile);
                    setErrorFiles(null);
                  }}
                />
              </li>
            );
          })}
        </div>
      ) : null,
    [errorFiles, file]
  );

  const handleUpload = useCallback(async () => {
    if (file) {
      try {
        setLoading(true);

        const response = await fetch(endpointUrl, {
          method: 'POST',
          body: generateFormData(file),
        });
        const json = await response.json();

        if (response.status === 200) {
          changeUploads(json.data.id);
          // TODO: Add snackbar
        } else {
          setError(true);
        }
      } catch (err) {
        setError(err);
      } finally {
        setFile(null);
        setLoading(false);
      }
    }
  }, [file, endpointUrl, changeUploads]);

  if (error) {
    return <Typography>Error!</Typography>;
  }

  return (
    <Layout>
      <Box {...getRootProps()} style={{ border: '1px solid black' }}>
        {!file ? (
          <UploadInput
            getInputProps={getInputProps}
            isDragActive={isDragActive}
          />
        ) : (
          <UploadPreview
            file={file}
            handleUpload={handleUpload}
            handleReset={() => setFile(null)}
          />
        )}
      </Box>
      {fileRejectionItems}
      {loading && <Loader showLoader={loading} />}
    </Layout>
  );
};

export default UploadPage;
