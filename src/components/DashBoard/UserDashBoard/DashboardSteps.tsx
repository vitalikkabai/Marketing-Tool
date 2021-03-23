import React from 'react';
import TabPanel from "../../common/TabPanel/TabPanel";
import classes from "./UserDashboard.module.scss";
import {Box, Grid, Tab, Typography} from "@material-ui/core";
import Blob from "../../../assets/images/Blob.png";
import CustomBadge from "../../common/Badge/CustomBadge/CustomBadge";
import team4 from "../../../assets/images/Teammate4.svg";
import CustomAppBar from "../../common/TabPanel/CustomAppBar";
import moment from "moment";
import {useHistory} from "react-router";

const DashboardSteps = () => {
    const [value, setValue] = React.useState(0);

    const history = useHistory();

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

    const getLink = (taskType: number): string => {
        switch (taskType) {
            case 1:
                return '/personal-profile';
            case 2:
                return '/products/add-new-product';
            default:
                return ' ';
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

    const TabTasks = tasks.map((el) => (
        <Grid key={el.id} item xs={12} xl={12} className={classes.stepRow}>
            <Box
                onClick={() => history.push(getLink(el.taskType))}
                className={classes.coloredTaskBox}
                style={getBackgroundColor(el.taskType)}>
                <Typography
                    style={{ textTransform: 'uppercase' }}
                    variant={'subtitle2'}>
                    {el.taskTitle}
                </Typography>
            </Box>
            <Box className={classes.agoTime}>
                <Typography variant={'caption'} className={classes.coloredTaskBoxTimeAgo}>
                    {moment(el.timeAgo).fromNow()}
                </Typography>
            </Box>
        </Grid>
    ));

    return (
        <>
            <CustomAppBar value={value} setValue={setValue}>
                <Tab label={<Typography className={classes.uppercaseText} variant={"h6"}>Steps</Typography>} />
                <Tab icon={<CustomBadge badgeCount={tasks.length} />} />
                <Tab icon={<img src={team4} alt={'avatar'} />} />
            </CustomAppBar>
            <TabPanel
                className={classes.tabPanelBox}
                index={0}
                value={value}>
                <Grid item container className={classes.stepBox}>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box className={classes.tableTitleBox}>
                            <Box className={classes.checkJobBox}>
                                <Box
                                    className={
                                        classes.taskValue +
                                        ' ' +
                                        classes.taskTitle
                                    }>
                                    <Typography
                                        color={'primary'}
                                        variant={'h6'}
                                        style={{fontWeight: 700}}
                                    >
                                        Products
                                    </Typography>
                                </Box>

                                <Box
                                    className={
                                        classes.taskValue +
                                        ' ' +
                                        classes.taskTitle
                                    }>
                                    <Typography
                                        color={'primary'}
                                        variant={'h6'}
                                        style={{fontWeight: 700}}
                                    >
                                        Tasks
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#EDCD27' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Add products
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#EDCD27' }}>
                            <Typography variant={'h6'}>
                                1
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#EDCD27' }}>
                            <Typography variant={'h6'}>
                                1
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#FFAB08' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Market research
                            </Typography>
                        </Box>
                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#FFAB08' }}>
                            <Typography variant={'h6'}>
                                2
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#FFAB08' }}>
                            <Typography variant={'h6'}>
                                7
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#EE6B1D' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Brand creation
                            </Typography>
                        </Box>
                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#EE6B1D' }}>
                            <Typography variant={'h6'}>
                                1
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#EE6B1D' }}>
                            <Typography variant={'h6'}>
                                1
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#43A047' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Sales channels
                            </Typography>
                        </Box>
                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#43A047' }}>
                            <Typography variant={'h6'}>
                                1
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#43A047' }}>
                            <Typography variant={'h6'}>
                                2
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#0097A6' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Customer support
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#0097A6' }}>
                            <Typography variant={'h6'}>
                                {' '}
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#0097A6' }}>
                            <Typography variant={'h6'}>
                                {' '}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#7B1FA2' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Brand awareness
                            </Typography>
                        </Box>
                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#7B1FA2' }}>
                            <Typography variant={'h6'}>
                                {' '}
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#7B1FA2' }}>
                            <Typography variant={'h6'}>
                                {' '}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{ background: '#C2185B' }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Sales
                            </Typography>
                        </Box>
                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#C2185B' }}>
                            <Typography variant={'h6'}>
                                6
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#C2185B' }}>
                            <Typography variant={'h6'}>
                                5
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.stepRow}>
                        <Box
                            className={classes.coloredBox}
                            style={{
                                background: '#EA4335',
                                textTransform: 'uppercase',
                            }}>
                            <Typography
                                variant={'subtitle2'}
                                className={classes.uppercaseText}
                            >
                                Improvements
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.leftTask
                            }
                            style={{ background: '#EA4335' }}>
                            <Typography variant={'h6'}>
                                {' '}
                            </Typography>
                        </Box>

                        <Box
                            className={
                                classes.taskValue +
                                ' ' +
                                classes.rightTask
                            }
                            style={{ background: '#EA4335' }}>
                            <Typography variant={'h6'}>
                                {' '}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel
                className={classes.tabPanelBox}
                index={1}
                value={value}>
                <Grid
                    item
                    xs={12}
                    xl={12}
                    className={classes.taskContainer}>
                    <Grid container className={classes.stepBox}>
                        <Box className={classes.tasksTitle}>
                            <Typography
                                color={'primary'}
                                variant={'h6'}>
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
                value={value}>
                <Grid
                    item
                    xs={12}
                    xl={12}
                    className={classes.taskContainer}>
                    <Box
                        marginTop={'57px'}
                        textAlign={'center'}
                        className={classes.tasksTitle}>
                        <Typography variant={'subtitle2'}>
                            OUR TEAM IS WAITING FOR YOU <br />
                            TO COMPLETE YOUR TASKS
                        </Typography>
                    </Box>
                    <Box
                        textAlign={'center'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <img src={Blob} className={classes.blobSvg} />
                    </Box>
                </Grid>
            </TabPanel>
        </>
    );
};

export default DashboardSteps;
