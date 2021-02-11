import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './Dropzone.module.scss';
import { Box, Typography } from '@material-ui/core';
import { ReactComponent as ClipIcon } from '../../../assets/images/clip.svg';

function FileDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div {...getRootProps()} className={classes.dropZone}>
            <input {...getInputProps()} />
            {
                <Box className={classes.dropZoneDashedBox}>
                    <Box className={classes.dropZoneIcon}>
                        <ClipIcon />
                    </Box>
                    <Box className={classes.dropZoneText}>
                        <Typography
                            variant={'subtitle1'}
                            align={'center'}
                            style={{ color: '#4285F4' }}
                        >
                            Upload product photos & videos
                        </Typography>
                        <Typography
                            variant={'subtitle1'}
                            align={'center'}
                            style={{ color: '#9f9f9f' }}
                        >
                            or drop files here
                        </Typography>
                    </Box>
                </Box>
            }
        </div>
    );
}

export default FileDropzone;
