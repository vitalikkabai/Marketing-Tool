import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './Dropzone.module.scss';
import { Box, DialogContent, Typography, Dialog } from '@material-ui/core';
import { ReactComponent as ClipIcon } from '../../../assets/images/clip.svg';
import CustomCarousel from '../Carousel/CustomCarousel';
import playIcon from '../../../assets/images/playButton.svg';
import deleteIcon from '../../../assets/images/deleteIcon.svg';
//@ts-ignore
import video from '../../../VID_20180720_185630.mp4';

type PropsType = {
    title: string;
};

const FileDropzone: React.FunctionComponent<PropsType> = (props) => {
    const [videos, setVideos] = useState<any[]>([]);
    const [photos, setPhotos] = useState<any[]>([]);
    const [contentPreview, setContentPreview] = useState<any>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*, video/*',
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles);
            // @ts-ignore
            acceptedFiles.map((item) => {
                if (item.type.includes('video')) {
                    console.log(videos);
                    // @ts-ignore
                    setVideos((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                } else if (item.type.includes('image')) {
                    console.log(photos);
                    // @ts-ignore
                    setPhotos((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                }
            });
        },
    });

    const createPreview = (index: any, type: any) => {
        setIsDialogOpen(true);
        setContentPreview(
            type.includes('video') ? (
                <Box className={classes.videoBox}>
                    <video autoPlay controls>
                        <source src={videos[index].preview} type={type} />
                    </video>
                    <Typography align="center" variant="subtitle1">
                        {index + 1}/{videos.length}
                    </Typography>
                </Box>
            ) : (
                <Box className={classes.photoBox}>
                    <img src={photos[index].preview} alt="Products Photo" />
                    <Typography align="center" variant="subtitle1">
                        {index + 1}/{photos.length}
                    </Typography>
                </Box>
            )
        );
    };

    const deleteFile = (index: any, type: any) => {
        if (type.includes('video')) {
            setVideos([
                ...videos
                    .slice(0, index)
                    .concat(videos.slice(index + 1, videos.length)),
            ]);
        } else if (type.includes('image')) {
            setPhotos([
                ...photos
                    .slice(0, index)
                    .concat(photos.slice(index + 1, photos.length)),
            ]);
        }
    };

    const VideosItem = videos.map((videos: any, index) => (
        <Box className={classes.imgBox} key={videos.name + ' ' + index}>
            <img
                src={deleteIcon}
                onClick={() => deleteFile(index, videos.type)}
                className={classes.svgDelete}
            />
            <div
                onClick={() => createPreview(index, videos.type)}
                className={classes.videoContainer}>
                <img src={playIcon} className={classes.svgPlay} />
                <video src={videos.preview} />
            </div>
        </Box>
    ));

    const PhotosItem = photos.map((photo: any, index) => (
        <Box className={classes.imgBox} key={photo.name + ' ' + index}>
            <img
                src={deleteIcon}
                onClick={() => deleteFile(index, photo.type)}
                className={classes.svgDelete}
            />
            <div
                onClick={() => createPreview(index, photo.type)}
                className={classes.imgContainer}>
                <img src={photo.preview} className={classes.photoItem} />
            </div>
        </Box>
    ));

    // useEffect(
    //     () => () => {
    //         videos.forEach((item: any) => URL.revokeObjectURL(item.preview));
    //     },
    //     [photos]
    // );

    // ToDo fix bug with useEffect

    // useEffect(
    //     () => () => {
    //         photos.forEach((item: any) => URL.revokeObjectURL(item.preview));
    //     },
    //     [photos]
    // );

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
                            style={{ color: '#4285F4' }}>
                            {props.title}
                        </Typography>
                        <Typography
                            variant={'subtitle1'}
                            align={'center'}
                            style={{ color: '#9f9f9f' }}>
                            or drop files here
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                width="100%"
                justifyContent={
                    videos.length === 0 || photos.length === 0
                        ? 'center'
                        : 'space-between'
                }>
                <Box
                    className={classes.photoSection}
                    style={photos.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel Items={PhotosItem} />
                </Box>

                <Box
                    className={classes.photoSection}
                    style={videos.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel Items={VideosItem} />
                </Box>
            </Box>
            <Dialog
                onClose={() => setIsDialogOpen(false)}
                maxWidth={false}
                BackdropProps={{
                    classes: {
                        root: classes.backDrop,
                    },
                }}
                open={isDialogOpen}>
                <DialogContent className={classes.dialogContent}>
                    {contentPreview}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default FileDropzone;
