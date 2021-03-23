import { Box, Grid, Typography, } from '@material-ui/core';
import React from 'react';
import moment from 'moment';
import classes from './UserDashboard.module.scss';
import ChatContainer from '../../Chat/ChatContainer';
import DashboardSteps from "./DashboardSteps";

moment.updateLocale('en', {
    relativeTime: {
        past: '%s',
        s: 'just now',
        ss: 'just now',
        m: '%d min ago',
        mm: '%d mins ago',
        h: '%d hour ago',
        hh: '%d hours ago',
        d: '%d day ago',
        dd: '%d days ago',
        M: '%d month ago',
        MM: '%d months ago',
        y: '%d year ago',
        yy: '%d years ago',
    },
});

const UserDashboard: React.FC<any> = () => {
    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid className={classes.titleBox} container item xs={8} xl={9}>
                    <Typography variant={'h2'}>To-do list</Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <Grid
                    item
                    className={classes.contentBox}
                    container
                    xs={8}
                    xl={9}
                >
                    <DashboardSteps />
                </Grid>
                <Grid xs={4} xl={3} item>
                    <ChatContainer backGroundColor={'#D8E7FF'} />
                </Grid>
            </Box>
        </Grid>
    );
}

export default UserDashboard;
