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
import CustomDialog from "../Dialog/CustomDialog";
import { useEffect } from 'react';

type PropsType = {
    title: string;
    position: "vertical" | "horizontal" | "mixed";
    tooltipTitle?: string;
};

const FileDropzone: React.FunctionComponent<PropsType> = (props) => {
    const [videos, setVideos] = useState<any[]>([]);
    const [photos, setPhotos] = useState<any[]>([]);
    const [documents, setDocuments] = useState<any[]>([]); //Array for pdf docs
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [fileToDelete, setFileToDelete] = useState<{index: number, type: string}>({index: 0, type: ""});
    const [contentPreview, setContentPreview] = useState<any>(null);
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    const { getRootProps, getInputProps } = useDropzone({
        accept:
            props.position === 'vertical' //Filer images & videos if position is vertical
                ? 'image/*, video/*'
                : props.position === 'horizontal' //Filer pdf if position is horizontal
                ? '.pdf'
                : 'image/*, video/*, .pdf', //Filer img, video & pdf if position is mixed
        onDrop: (acceptedFiles) => {
            acceptedFiles.map((item) => {
                if (item.type.includes('video')) { //Set all video files to videos array
                    setVideos((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                } else if (item.type.includes('image')) { //Set all image files to photos array
                    setPhotos((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                } else if (item.type.includes('application/pdf')) { //Set all pdf files to documents array
                    console.log(documents);
                    setDocuments((oldArray) => [
                        ...oldArray,
                        Object.assign(item, {
                            preview: URL.createObjectURL(item),
                        }),
                    ]);
                }
            });
        },
    });

    useEffect(() => { //Automatically set the first dropped item for preview
        if (photos.length === 1 && videos.length === 0 && documents.length === 0) {
            createPreview(0, 'image');
        } else if (videos.length === 1 && documents.length === 0 && photos.length === 0) {
            createPreview(0, 'video');
        } else if (documents.length === 1 && videos.length === 0 && photos.length === 0) {
            createPreview(0, 'file');
        }
    }, [documents, photos, videos]);

    const deleteFile = (index: number, type: string) => {
        if (type.includes('video')) {
            setVideos([...videos.slice(0, index).concat(videos.slice(index + 1, videos.length))]);
            if (videos.length === 1) { // Set video or pdf to preview if photos is empty after delete
                if (photos.length > 0) {
                    createPreview(0, 'image');
                } else {
                    if (documents.length > 0) {
                        createPreview(0, 'file');
                    } else {
                        setContentPreview(null);
                    }
                }
            } else createPreview(index === 0 ? 1 : 0, 'video');
        }
        if (type.includes('image')) {
            setPhotos([...photos.slice(0, index).concat(photos.slice(index + 1, photos.length))]);
            if (photos.length === 1) { // Set image or pdf to preview if videos is empty after delete
                if (videos.length > 0) {
                    createPreview(0, 'video');
                } else {
                    if (documents.length > 0) {
                        createPreview(0, 'file');
                    } else {
                        setContentPreview(null);
                    }
                }
            } else createPreview(index === 0 ? 1 : 0, 'image');
        }
        if (type.includes('pdf')) {
            setDocuments([...documents.slice(0, index).concat(documents.slice(index + 1, documents.length))]);
            if (documents.length === 1) { // Set video or image to preview if documents is empty after delete
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
            //If there is more than 1 item in the array, just set the first item to preview
        }
    };

    const createPreview = (index: number, type: string) => { // Function to set preview HTML content
        setContentPreview(
            type.includes('video') ? ( //Set video preview HTML
                <Box className={classes.videoBox}>
                    <video src={videos[index].preview} controls />
                </Box>
            ) : type.includes('image') ? ( //Set image preview HTML
                <Box className={classes.photoBox}>
                    <Magnifier
                        mgShape={'square'}
                        className={classes.bibosh}
                        src={photos[index].preview}
                    />
                </Box>
            ) : ( //Set pdf preview HTML
                <Box className={classes.photoBox}>
                    <Document file={documents[index].preview} className={classes.pdfBox}>
                        <Page pageNumber={1} />
                    </Document>
                </Box>
            )
        );
    };

    const VideosCarouselItems = videos.map((videos: any, index) => (//Preparing video HTML items for carousel
        <Box className={classes.imgBox} key={videos.name + ' ' + index}>
            <img
                src={deleteIcon}
                onClick={() => {
                    setFileToDelete({index, type: videos.type});
                    setIsOpen(true);
                }}
                className={classes.svgDelete}
                alt={"image"}
            />
            <div
                onClick={() => createPreview(index, videos.type)}
                className={classes.videoContainer}>
                <img src={playIcon} className={classes.svgPlay} alt={"image"}/>
                <video src={videos.preview} />
            </div>
        </Box>
    ));

    const PhotosCarouselItems = photos.map((photo: any, index) => (//Preparing image HTML items for carousel
        <Box className={classes.imgBox} key={photo.name + ' ' + index}>
            <img
                src={deleteIcon}
                onClick={() => {
                    setFileToDelete({index, type: photo.type});
                    setIsOpen(true);
                }}
                className={classes.svgDelete}
                alt={"image"}
            />
            <div onClick={() => createPreview(index, photo.type)} className={classes.imgContainer}>
                <img src={photo.preview} className={classes.photoItem} alt={"image"}/>
            </div>
        </Box>
    ));

    const DocumentsCarouselItems = documents.map((file: any, index) => (//Preparing pdf HTML items for carousel
        <Box className={classes.imgBox} key={file.name + ' ' + index}>
            <img
                src={deleteIcon}
                onClick={() => {
                    setFileToDelete({index, type: file.type});
                    setIsOpen(true);
                }}
                className={classes.svgDelete}
                alt={"image"}
            />
            <div onClick={() => createPreview(index, file.type)} className={classes.fileContainer}>
                <Document file={file.preview} className={classes.fileItem}>
                    <Page pageNumber={1} />
                </Document>
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
                    videos.length !== 0 || photos.length !== 0 || documents.length !== 0
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
                    <CustomCarousel position="vertical" Items={PhotosCarouselItems} />
                </Box>
                <Box className={classes.dialogContent}>{contentPreview}</Box>
                <Box
                    className={classes.photoSection}
                    style={videos.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel position="vertical" Items={VideosCarouselItems} />
                </Box>
            </Box>
            <Box
                display={
                    videos.length !== 0 || photos.length !== 0 || documents.length !== 0
                        ? 'flex'
                        : 'none'
                }>
                <Box
                    className={classes.photoSection}
                    style={documents.length === 0 ? { display: 'none' } : {}}>
                    <CustomCarousel position="horizontal" Items={DocumentsCarouselItems} />
                </Box>
            </Box>
            <CustomDialog
                text={"Are you sure you want to delete?"}
                iconType={"delete"}
                isOpen={isOpen}
                closeDialog={() => setIsOpen(false)}
                confirmButtonClick={() => {
                    deleteFile(fileToDelete.index, fileToDelete.type);
                    setFileToDelete({index: 0, type: ""});
                }}
            />
        </Box>
    );
};

export default FileDropzone;
