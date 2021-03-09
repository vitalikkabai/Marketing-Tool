import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import classes from './VisitorDashboard.module.scss';
import teamPhoto from '../../../assets/images/teamPhoto.png';
import CustomButton from '../../common/Button/CustomButton';
import PlayVideoIcon from '../../../assets/images/playVideoIcon.svg';
import { ReactComponent as CheckMark } from '../../../assets/images/checkMark.svg';

const VisitorDashboard: React.FC<void> = () => {
    return (
        <Grid container className={classes.dashboard}>
            <Box className={classes.todoTitleBox}>
                <Grid className={classes.titleBox} container item xs={9} xl={9}>
                    <Typography variant={'h2'}>Become a brand</Typography>
                </Grid>
            </Box>
            <Box className={classes.contentContainer}>
                <Grid xs={6} xl={6} item className={classes.videoContentItem}>
                    <Box className={classes.teamPhotoContainer}>
                        <img src={teamPhoto} alt="teamPhoto" />
                    </Box>

                    <CustomButton
                        width="316px"
                        type="submit"
                        text={'Watch video'}
                        endIcon={<img src={PlayVideoIcon} alt={'Icon'} />}
                    />
                </Grid>

                <Grid xs={6} xl={6} item className={classes.stepsContentItem}>
                    <Box>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box className={classes.tableTitleBox}>
                                <Box marginLeft="13px">
                                    <Typography
                                        color={'primary'}
                                        variant={'h6'}
                                        style={{fontWeight: 700}}
                                    >
                                        Steps
                                    </Typography>
                                </Box>
                                <Box className={classes.checkJobBox}>
                                    <Typography
                                        color={'primary'}
                                        variant={'h6'}
                                        style={{fontWeight: 700}}
                                    >
                                        Your job
                                    </Typography>
                                    <Typography
                                        color={'primary'}
                                        variant={'h6'}
                                        style={{fontWeight: 700}}
                                    >
                                        Our job
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#EDCD27' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    1
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Add products
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#EDCD27' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#EDCD27' }}>
                                <Typography variant={'subtitle2'}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#FFAB08' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    2
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Market research
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#FFAB08' }}>
                                <Typography variant={'subtitle2'}/>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#FFAB08' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#EE6B1D' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    3
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Brand creation
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#EE6B1D' }}>
                                <Typography variant={'subtitle2'}/>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#EE6B1D' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#43A047' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    3+
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Sales channels
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#43A047' }}>
                                <Typography variant={'subtitle2'}/>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#43A047' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#0097A6' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    5
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Customer support
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#0097A6' }}>
                                <Typography variant={'subtitle2'}> </Typography>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#0097A6' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#7B1FA2' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    6
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Brand awareness
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#7B1FA2' }}>
                                <Typography variant={'subtitle2'}> </Typography>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#7B1FA2' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={classes.stepRow}>
                            <Box
                                className={classes.coloredBox}
                                style={{ background: '#C2185B' }}>
                                <Typography
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    7
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Sales
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#C2185B' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#C2185B' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
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
                                    variant={'body2'}
                                    className={classes.indexNum}>
                                    8
                                </Typography>
                                <Typography
                                    variant={'body2'}
                                    style={{ textTransform: 'uppercase' }}>
                                    Improvements
                                </Typography>
                            </Box>
                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.leftTask
                                }
                                style={{ background: '#EA4335' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>

                            <Box
                                className={
                                    classes.taskValue + ' ' + classes.rightTask
                                }
                                style={{ background: '#EA4335' }}>
                                <Typography variant={'subtitle2'}>
                                    <CheckMark className={classes.checkIcon} />
                                </Typography>
                            </Box>
                        </Grid>
                    </Box>
                    <Box className={classes.sloganBox}>
                        <Typography variant={'h2'} align="center">
                            Taking you to the next level
                        </Typography>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    );
};

export default VisitorDashboard;
