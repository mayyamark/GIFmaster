import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ErrorPreview from '@app/components/molecules/ErrorPreview/ErrorPreview';
import RejectedFiles from '@app/components/molecules/RejectedFiles/RejectedFiles';
import UploadPreview from '@app/components/molecules/UploadPreview/UploadPreview';
import UploadInput from '@app/components/atoms/UploadInput/UploadInput';
import Loader from '@app/components/atoms/Loader/Loader';
import generateFormData from '@app/utils/generate-formdata';
import { useMyGifs } from '@app/context/MyGifsContext';
import useStyles from './UploadPage.styles';

interface Props {
  endpointUrl: string;
}

const UploadPage: React.FC<Props> = ({ endpointUrl }): JSX.Element => {
  const classes = useStyles();

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
          // TODO: Add snackbar => upon the action string
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setFile(null);
        setLoading(false);
      }
    }
  }, [file, endpointUrl, changeUploads]);

  if (error) {
    return <ErrorPreview />;
  }

  if (loading) {
    return <Loader showLoader={loading} />;
  }

  return (
    <Box className={classes.root}>
      <Typography variant='h3' className={classes.title}>
        You are about to upload your awesome GIF!
      </Typography>

      {errorFiles && errorFiles.length > 0 ? (
        <RejectedFiles
          errorTitle='Only one GIF is allowed! Choose between:'
          buttonText='Pick another one'
          errorFiles={errorFiles}
          handleClickFile={(errorFile) => {
            setFile(errorFile);
            setErrorFiles(null);
          }}
          handleClickButton={() => {
            setFile(null);
            setErrorFiles(null);
          }}
        />
      ) : (
        <Box
          {...getRootProps()}
          className={clsx(
            classes.container,
            !file ? classes.withBorder : undefined
          )}
        >
          {!file ? (
            <UploadInput
              isDragActive={isDragActive}
              additionalText='(Only *.gif files will be accepted)'
              getInputProps={getInputProps}
            />
          ) : (
            <UploadPreview
              cancelButtonText='Pick another one'
              file={file}
              handleUpload={handleUpload}
              handleReset={() => setFile(null)}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default UploadPage;
