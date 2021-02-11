import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import classes from "./Dropzone.module.scss";
import {Box, Button, Typography} from "@material-ui/core";
import {ReactComponent as ClipIcon} from "../../../assets/images/clip.svg";
import Carousel from "react-multi-carousel";
import CustomCarousel from "../Carousel/Carousel";

function FileDropzone() {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        onDrop: acceptedFiles => {
            // @ts-ignore
            setFiles(oldArray => [...oldArray,
                ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            ]);
        }
    });

    const Photos = files.map((file: any, index) => (
        <div className={classes.imgBox} key={file.name + " " + index}>
            <img src={file.preview}/>
        </div>
    ));

    useEffect(() => () => {
        files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <Box className={classes.dropZoneSection}>
            <Box {...getRootProps()} className={classes.dropZone}>
                <input {...getInputProps()} />
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
            </Box>
            <Box className={classes.photoSection}>
                <CustomCarousel Items={Photos}/>
            </Box>
        </Box>

    )
}

export default FileDropzone;
