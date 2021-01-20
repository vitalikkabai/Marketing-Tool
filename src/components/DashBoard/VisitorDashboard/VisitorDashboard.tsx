import {Box, Grid, Typography} from '@material-ui/core';
import React from 'react';
import classes from './VisitorDashboard.module.scss';
import dashboardImage from "../../../assets/images/dashboardStepsImage.png"
import playIcon from "../../../assets/images/playVideoIocn.svg"

const VisitorDashboard = () => {

    return (
        <Grid container className={classes.dashboard}>
            <Grid item className={classes.contentContainer}>
                <Grid item className={classes.imageGridItem}>
                    <img src={dashboardImage} alt={"image"}/>
                </Grid>
                <Grid item container direction={"column"} alignItems={"center"} justify={"center"}
                      className={classes.videoContainer}>
                    <Grid item>
                        <Typography variant={"button"}>
                            From the small stuff to the big picture
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"button"}>
                            Marketing tool takes you to the next level
                        </Typography>
                    </Grid>
                    <Grid item className={classes.bottomPlayBox}>
                        <Box className={classes.videoBox}>
                            <Typography variant={"subtitle2"} color={"primary"}>Watch video</Typography>
                            <img src={playIcon} alt={"play"}/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default VisitorDashboard;
