import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './Dropzone.module.scss';
import { Box, Button, Typography } from '@material-ui/core';
import { ReactComponent as ClipIcon } from '../../../assets/images/clip.svg';
import CustomCarousel from "../Carousel/CustomCarousel";
// @ts-ignore
import VideoPlayer from 'simple-react-video-thumbnail';
import playIcon from "../../../assets/images/playButton.svg";


type PropsType = {
    title: string
}

const FileDropzone: React.FunctionComponent<PropsType> = (props) => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({accept: 'image/*, video/*',
        onDrop: (acceptedFiles) => {
            // @ts-ignore
            setFiles((oldArray) => [
                ...oldArray,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                ),
            ]);
        },
    });

    const Videos = files.filter((file: any)=>{return file.type.includes('video')}).map((file: any, index) => (
        <div className={classes.imgBox} key={file.name + ' ' + index}>
            <img src={playIcon} className={classes.svgPlay}/>
            <video src={file.preview}/>
        </div>
    ));

    const Photos = files.filter((file: any)=>{return file.type.includes('image')}).map((file: any, index) => (
        <div className={classes.imgBox} key={file.name + ' ' + index}>
            <img src={file.preview} className={classes.photoItem}/>
        </div>
    ));

    useEffect(
        () => () => {
            console.log(files)
            files.forEach((file: any) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

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
                            {props.title}
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
            <Box className={classes.photoSection} style={files.length === 0? {display: "none"}:{}}>
                <CustomCarousel Items={Photos}/>
                <CustomCarousel Items={Videos}/>
            </Box>
        </Box>
    );
}

export default FileDropzone;
