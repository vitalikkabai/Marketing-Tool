import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './Dropzone.module.scss';
import { Box, Typography } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';
import { ReactComponent as ClipIcon } from '../../../assets/images/clip.svg';
import CustomCarousel from '../Carousel/CustomCarousel';
import playIcon from '../../../assets/images/playButton.svg';
import deleteIcon from '../../../assets/images/deleteIcon.svg';
import CustomTooltip from '../Tooltip/CustomTooltip';
import Magnifier from 'react-magnifier';
import { useEffect } from 'react';

type PropsType = {
    title: string;
    position: string;
    tooltipTitle?: string;
};

const FileDropzone: React.FunctionComponent<PropsType> = (props) => {
    const [videos, setVideos] = useState<any[]>([]);
    const [photos, setPhotos] = useState<any[]>([]);
    const [files, setFiles] = useState<any[]>([]);
    const [contentPreview, setContentPreview] = useState<any>(null);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { getRootProps, getInputProps } = useDropzone({
        accept:
            props.position === 'vertical'
                ? 'image/*, video/*'
                : props.position === 'horizontal'
                ? '.pdf'
                : 'image/*, video/*, .pdf',
        onDrop: (acceptedFiles) => {
            // @ts-ignore
            acceptedFiles.map((item) => {
                if (item.type.includes('video')) {
                    // @ts-ignore
                    setVideos((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                } else if (item.type.includes('image')) {
                    // @ts-ignore
                    setPhotos((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                } else if (item.type.includes('application/pdf')) {
                    console.log(files);
                    // @ts-ignore
                    setFiles((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                }
            });
        },
    });

    useEffect(() => {
        if (photos.length === 1 && videos.length === 0 && files.length === 0) {
            createPreview(0, 'image');
        } else if (videos.length === 1 && files.length === 0 && photos.length === 0) {
            createPreview(0, 'video');
        } else if (files.length === 1 && videos.length === 0 && photos.length === 0) {
            createPreview(0, 'file');
        }
    }, [files, photos, videos]);

    const deleteFile = (index: number, type: string) => {
        if (type.includes('video')) {
            setVideos([...videos.slice(0, index).concat(videos.slice(index + 1, videos.length))]);
            if (videos.length === 1) {
                if (photos.length > 0) {
                    createPreview(0, 'image');
                } else {
                    if (files.length > 0) {
                        createPreview(0, 'file');
                    } else {
                        setContentPreview(null);
                    }
                }
            } else createPreview(index === 0 ? 1 : 0, 'video');
        }
        if (type.includes('image')) {
            setPhotos([...photos.slice(0, index).concat(photos.slice(index + 1, photos.length))]);
            if (photos.length === 1) {
                if (videos.length > 0) {
                    createPreview(0, 'video');
                } else {
                    if (files.length > 0) {
                        createPreview(0, 'file');
                    } else {
                        setContentPreview(null);
                    }
                }
            } else createPreview(index === 0 ? 1 : 0, 'image');
        }
        if (type.includes('pdf')) {
            setFiles([...files.slice(0, index).concat(files.slice(index + 1, files.length))]);
            if (files.length === 1) {
                if (photos.length > 0) {
                    createPreview(0, 'photo');
                } else {
                    if (videos.length > 0) {
                        createPreview(0, 'video');
                    } else {
                        setContentPreview(null);
                    }
                }
            } else createPreview(index === 0 ? 1 : 0, 'file');
        }
    };

    const createPreview = (index: number, type: string) => {
        setContentPreview(
            type.includes('video') ? (
                <Box className={classes.videoBox}>
                    <video src={videos[index].preview} controls />
                </Box>
            ) : type.includes('image') ? (
                <Box className={classes.photoBox}>
                    <Magnifier
                        mgShape={'square'}
                        className={classes.bibosh}
                        src={photos[index].preview}
                    />
                    {/* <img src={photos[index].preview} alt="Products Photo" /> */}
                </Box>
            ) : (
                <Box className={classes.photoBox}>
                    <Document file={files[index].preview} className={classes.pdfBox}>
                        <Page pageNumber={1} />
                    </Document>
                </Box>
            )
        );
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
            <div onClick={() => createPreview(index, photo.type)} className={classes.imgContainer}>
                <img src={photo.preview} className={classes.photoItem} />
            </div>
        </Box>
    ));

    const FilesItem = files.map((file: any, index) => (
        <Box className={classes.imgBox} key={file.name + ' ' + index}>
            <img
                src={deleteIcon}
                onClick={() => deleteFile(index, file.type)}
                className={classes.svgDelete}
            />
            <div onClick={() => createPreview(index, file.type)} className={classes.fileContainer}>
                <Document file={file.preview} className={classes.fileItem}>
                    <Page pageNumber={1} />
                </Document>
                {/* <iframe src={file.preview}></iframe> */}
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
            <CustomTooltip title={props.tooltipTitle ? props.tooltipTitle : ''}>
                <Box
                    {...getRootProps()}
                    className={classes.dropZone}
                    onDrop={() => console.log('hi')}>
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
            </CustomTooltip>
            <Box
                marginTop="46px"
                display={
                    videos.length !== 0 || photos.length !== 0 || files.length !== 0
                        ? 'flex'
                        : 'none'
                }
                className={classes.dropBox}
                justifyContent={
                    videos.length === 0 || photos.length === 0 ? 'center' : 'space-between'
                }>
                <Box
                    className={classes.photoSection}
                    style={photos.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel position="vertical" Items={PhotosItem} />
                </Box>
                <Box className={classes.dialogContent}>{contentPreview}</Box>
                <Box
                    className={classes.photoSection}
                    style={videos.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel position="vertical" Items={VideosItem} />
                </Box>
            </Box>
            <Box
                display={
                    videos.length !== 0 || photos.length !== 0 || files.length !== 0
                        ? 'flex'
                        : 'none'
                }>
                <Box
                    className={classes.photoSection}
                    style={files.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel position="horizontal" Items={FilesItem} />
                </Box>
            </Box>
        </Box>
    );
};

export default FileDropzone;
