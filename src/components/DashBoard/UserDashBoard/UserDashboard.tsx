import {Box, Grid, Typography} from '@material-ui/core';
import React from 'react';
import classes from './UserDashboard.module.scss';
import roundCheck from '../../../assets/images/roundCheckBoxIcon.svg'
import dashboardImage from "../../../assets/images/dashboardStepsImage.svg"
import playIcon from "../../../assets/images/playVideoIocn.svg"

const UserDashboard = () => {

    const getBackgroundColor = (colorId:number) => {
        switch (colorId){
            case 1: return {background: "#4285F4"}
            case 2: return {background: "#FFDC22"}
            case 3: return {background: "#FFAB08"}
            case 4: return {background: "#EE6B1D"}
            case 5: return {background: "#43A047"}
            case 6: return {background: "#0097A6"}
            case 7: return {background: "#7B1FA2"}
            case 8: return {background: "#C2185B"}
            case 9: return {background: "#EA4335"}
        }
    }

    const tasks = [
        {id: 0, taskTitle: "Upload your photo", taskType: 1, status: false},
        {id: 1, taskTitle: "Add products", taskType: 2, status: false},
        {id: 2, taskTitle: "Improve yourself", taskType: 9, status: false},
    ]

    const TabTasks = tasks.map(el => (
        <Grid key={el.id} item xs={12} className={classes.stepRow}>
            <Box className={classes.coloredBox} style={getBackgroundColor(el.taskType)}>
                <Typography variant={"h6"}>{el.taskTitle}</Typography>
                <Box className={classes.tabTaskBox}>
                    <Box className={classes.vlWhite}/>
                    <img src={roundCheck} alt={"check"}/>
                </Box>
            </Box>
        </Grid>));

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
                                        {TabTasks}
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={false} xl={1}/>
                        <Grid item xs={5} xl={4} className={classes.taskListGridItem}>
                            <Grid container className={classes.stepBox}>
                                <Grid item xs={12} className={classes.stepRow}>
                                    <Box className={classes.tableTitleBox}>
                                        <Typography variant={"overline"}>Steps</Typography>
                                        <Box className={classes.checkJobBox}>
                                            <Typography variant={"overline"}>Products</Typography>
                                            <Typography variant={"overline"} style={{
                                                marginLeft: "15px",
                                                marginRight: "5px"
                                            }}>Tasks</Typography>
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
                                    <Box className={classes.coloredBox}
                                         style={{marginBottom: "86px", background: "#EA4335"}}>
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