import { Box, Grid, Typography, Tab, Hidden } from '@material-ui/core';
import React from 'react';
import moment from 'moment';
import classes from './ManagerDashboard.module.scss';
import TabPanel from '../../common/TabPanel/TabPanel';
import Blob from '../../../assets/images/Blob.png';
import CustomAppBar from '../../common/TabPanel/CustomAppBar';
import CustomBadge from '../../common/Badge/CustomBadge/CustomBadge';
import team1 from '../../../assets/images/Teammate1.svg';
import team2 from '../../../assets/images/Teammate2.svg';
import team3 from '../../../assets/images/Teammate3.svg';
import team4 from '../../../assets/images/Teammate4.svg';
import ChatContainer from '../../Chat/ChatContainer';

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

const UserDashboard: React.FC<void> = () => {
    const [value, setValue] = React.useState(0);

    const getBackgroundColor = (colorId: number) => {
        switch (colorId) {
            case 1:
                return { background: '#4285F4' };
            case 2:
                return { background: '#FFDC22' };
            case 3:
                return { background: '#FFAB08' };
            case 4:
                return { background: '#EE6B1D' };
            case 5:
                return { background: '#43A047' };
            case 6:
                return { background: '#0097A6' };
            case 7:
                return { background: '#7B1FA2' };
            case 8:
                return { background: '#C2185B' };
            case 9:
                return { background: '#EA4335' };
        }
    };

    const tasks = [
        {
            id: 0,
            taskTitle: 'Upload your photo',
            taskType: 1,
            status: false,
            timeAgo: 1611425499068,
        },
        {
            id: 1,
            taskTitle: 'Add products',
            taskType: 2,
            status: false,
            timeAgo: 1611425499068,
        },
    ];

    const TabTasks = tasks.map((el, i) => (
        <Grid key={el.id} item xs={12} xl={12} className={classes.stepRow}>
            <Box
                className={classes.coloredTaskBox}
                style={getBackgroundColor(el.taskType)}
            >
                <Typography variant={'h6'} className={classes.indexNum}>
                    {i + 1}
                </Typography>
                <Typography variant={'h6'}>{el.taskTitle}</Typography>
            </Box>
            <Box className={classes.agoTime}>
                <Typography variant={'body1'}>
                    {moment(el.timeAgo).fromNow()}
                </Typography>
            </Box>
        </Grid>
    ));

    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid className={classes.titleBox} container item xs={8} xl={9}>
                    <Typography variant={'h2'}>To-do list</Typography>
                </Grid>
                <Grid item xs={4} xl={3} className={classes.teamContainer}>
                    <Box className={classes.teamAvatarBox}>
                        <img src={team4} alt={'avatar'} />
                        <img src={team2} alt={'avatar'} />
                        <img src={team3} alt={'avatar'} />
                        <Hidden mdDown>
                            <img src={team1} alt={'avatar'} />
                        </Hidden>
                        <Hidden lgDown>
                            <img src={team4} alt={'avatar'} />
                        </Hidden>
                    </Box>
                    <Typography color={'primary'}>View team</Typography>
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
                    <CustomAppBar value={value} setValue={setValue}>
                        <Tab label="Steps" />
                        <Tab icon={<CustomBadge badgeCount={tasks.length} />} />
                        <Tab icon={<img src={team4} alt={'avatar'} />} />
                    </CustomAppBar>
                    <TabPanel
                        className={classes.tabPanelBox}
                        index={0}
                        value={value}
                    >
                        <Grid item container className={classes.stepBox}>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box className={classes.tableTitleBox}>
                                    <Box className={classes.checkJobBox}>
                                        <Typography
                                            color={'primary'}
                                            variant={'h6'}
                                            style={{fontWeight: 700}}
                                        >
                                            Products
                                        </Typography>
                                        <Typography
                                            color={'primary'}
                                            variant={'h6'}
                                            style={{fontWeight: 700}}
                                        >
                                            Tasks
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#FFDC22' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Add products
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#FFAB08' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Market research
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#EE6B1D' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Brand creation
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#43A047' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Sales channels
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#0097A6' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Customer support
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#7B1FA2' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Brand awareness
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{ background: '#C2185B' }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Sales
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} className={classes.stepRow}>
                                <Box
                                    className={classes.coloredBox}
                                    style={{
                                        background: '#EA4335',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    <Typography
                                        variant={'subtitle2'}
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Improvements
                                    </Typography>
                                    <Box className={classes.counterBox}>
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                        <Box className={classes.vl} />
                                        <Typography
                                            variant={'h6'}
                                            className={classes.taskValue}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel
                        className={classes.tabPanelBox}
                        index={1}
                        value={value}
                    >
                        <Grid
                            item
                            xs={12}
                            xl={12}
                            className={classes.taskContainer}
                        >
                            <Grid container className={classes.stepBox}>
                                <Box className={classes.tasksTitle}>
                                    <Typography
                                        color={'primary'}
                                        variant={'h6'}
                                    >
                                        Tasks
                                    </Typography>
                                </Box>
                                {TabTasks}
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel
                        className={classes.tabPanelBox}
                        index={2}
                        value={value}
                    >
                        <Grid
                            item
                            xs={12}
                            xl={12}
                            className={classes.taskContainer}
                        >
                            <Box
                                marginTop={'57px'}
                                textAlign={'center'}
                                className={classes.tasksTitle}
                            >
                                <Typography variant={'subtitle2'}>
                                    OUR TEAM IS WAITING FOR YOU <br />
                                    TO COMPLETE YOUR TASKS
                                </Typography>
                            </Box>
                            <Box
                                textAlign={'center'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <img src={Blob} />
                            </Box>
                        </Grid>
                    </TabPanel>
                </Grid>
                <Grid xs={4} xl={3} item>
                    <ChatContainer backGroundColor={'#D8E7FF'} />
                </Grid>
            </Box>
        </Grid>
    );
}

export default UserDashboard;
