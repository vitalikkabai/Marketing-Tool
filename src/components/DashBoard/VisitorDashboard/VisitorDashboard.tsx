import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import classes from './VisitorDashboard.module.scss';
import VideoContent from "./VideoContent";
import StepsContent from "./StepsContent";

const VisitorDashboard: React.FC<void> = () => {
    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid className={classes.titleBox} container item xs={9} xl={9}>
                    <Typography variant={'h2'}>Become a brand</Typography>
                </Grid>
            </Box>

            <Box className={classes.contentContainer}>
                <VideoContent />
                <StepsContent />
            </Box>
        </Grid>
    );
};

export default VisitorDashboard;
