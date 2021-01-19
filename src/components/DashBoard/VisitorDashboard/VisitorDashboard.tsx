import {Box, Grid, Typography} from '@material-ui/core';
import React from 'react';
import classes from './VisitorDashboard.module.scss';
import check from '../../../assets/images/checkMark.svg'
import dashboardImage from "../../../assets/images/dashboardStepsImage.svg"
import playIcon from "../../../assets/images/playVideoIocn.svg"

const VisitorDashboard = () => {

    return (
        <Grid container className={classes.dashboard}>
            <Grid item className={classes.test}>
                <Box className={classes.todoTitleBox}>
                    <Typography variant={"h2"}>To-do list</Typography>
                </Box>
                <Box className={classes.contentContainer}>
                    <Grid container>
                        <Grid item xs={false} xl={2}/>
                        <Grid item xs={6} xl={4} className={classes.contentGridItem}>
                            <Typography variant={"h3"} className={classes.stepTitle}>Steps to becoming a brand</Typography>
                            <Grid container className={classes.stepBox}>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.tableTitleBox}>
                                        <Typography variant={"overline"}>Steps</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <Typography variant={"overline"}>Your job</Typography>
                                            <Typography variant={"overline"} style={{marginLeft: "10px"}}>Our job</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>1</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#FFDC22"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>2</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#FFAB08"}}>
                                        <Typography variant={"h6"}>Market research</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>3</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#EE6B1D"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>3+</Typography>
                                    <Box className={classes.coloredBox} style={{marginLeft: "0",background: "#43A047"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>5</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#0097A6"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>6</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#7B1FA2"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>7</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#C2185B"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Typography variant={"h6"}>8</Typography>
                                    <Box className={classes.coloredBox} style={{background: "#EA4335"}}>
                                        <Typography variant={"h6"}>Add products</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <img src={check} alt={"check"}/>
                                            <Box className={classes.vl}/>
                                            <img src={check} alt={"check"}/>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} className={classes.imageGridItem}>
                            <img src={dashboardImage} alt={"image"}/>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid container direction={"column"} className={classes.videoContainer}>
                <Grid container justify={"center"}>
                    <Grid item>
                        <Typography variant={"h6"}>
                            From the small stuff to the big picture
                        </Typography>
                        <Typography variant={"h6"}>
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
