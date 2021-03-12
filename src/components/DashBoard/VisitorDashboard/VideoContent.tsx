import React from 'react';
import classes from "./VisitorDashboard.module.scss";
import {Box, Grid} from "@material-ui/core";
import teamPhoto from "../../../assets/images/teamPhoto.png";
import CustomButton from "../../common/Button/CustomButton";
import PlayVideoIcon from "../../../assets/images/playVideoIcon.svg";

type CustomProps = {
    small?: boolean
}

const VideoContent = (props: CustomProps) => {
    return (
        <Grid xs={6} xl={6} item className={classes.videoContentItem}>
            <Box className={classes.teamPhotoContainer}>
                <img src={teamPhoto} alt="teamPhoto" />
            </Box>

            <CustomButton
                width={props.small ? "100%" : "316px"}
                type="submit"
                text={'Watch video'}
                endIcon={<img src={PlayVideoIcon} alt={'Icon'} />}
            />
        </Grid>
    );
};

export default VideoContent;
