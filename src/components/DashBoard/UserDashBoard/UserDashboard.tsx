import {Box, Grid, Typography} from '@material-ui/core';
import React from 'react';
import classes from './UserDashboard.module.scss';
import check from '../../../assets/images/checkMark.svg'
import dashboardImage from "../../../assets/images/dashboardStepsImage.svg"
import playIcon from "../../../assets/images/playVideoIocn.svg"

const UserDashboard = () => {

    return (
        <Grid container className={classes.dashboard}>
            <Grid item className={classes.test}>
                <Box className={classes.todoTitleBox}>
                    <Typography variant={"h2"}>Tasks</Typography>
                </Box>
                <Box className={classes.contentContainer}>
                    <Grid container>
                        <Grid item xs={7} xl={6}>
                            <Box className={classes.tabContentGridItem}>
                                <Box className={classes.tabContent}>
                                    <Grid container className={classes.stepBox}>
                                        <Grid item xs={12} className={classes.stepRow}>
                                            <Box className={classes.coloredBox} style={{background: "#FFDC22"}}>
                                                <Typography variant={"h6"}>Add products</Typography>
                                                <Box className={classes.counterBox}>
                                                    <Typography variant={"h6"}>0</Typography>
                                                    <Box className={classes.vl}/>
                                                    <Typography variant={"h6"}>0</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid xs={false} xl={1}/>
                        <Grid item xs={5} xl={4} className={classes.taskListGridItem}>
                            <Grid container className={classes.stepBox}>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.tableTitleBox}>
                                        <Typography variant={"overline"}>Steps</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <Typography variant={"overline"}>Products</Typography>
                                            <Typography variant={"overline"} style={{marginLeft: "15px",
                                                marginRight: "5px"}}>Tasks</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#FFDC22"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#FFAB08"}}>
                                        <Typography variant={"h6"}>Market research</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#EE6B1D"}}>
                                        <Typography variant={"h6"}>Brand creation</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#43A047"}}>
                                        <Typography variant={"h6"}>Sales channels</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#0097A6"}}>
                                        <Typography variant={"h6"}>Customer support</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#7B1FA2"}}>
                                        <Typography variant={"h6"}>Brand awareness</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{background: "#C2185B"}}>
                                        <Typography variant={"h6"}>Sales</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.coloredBox} style={{marginBottom:"86px",background: "#EA4335"}}>
                                        <Typography variant={"h6"}>Improvements</Typography>
                                        <Box className={classes.counterBox}>
                                            <Typography variant={"h6"}>0</Typography>
                                            <Box className={classes.vl}/>
                                            <Typography variant={"h6"}>0</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
};

export default UserDashboard;