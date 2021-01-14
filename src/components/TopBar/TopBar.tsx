import {Box, Button, Grid, Typography} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import classes from './TopBar.module.scss';
import clock from "../../assets/images/clock.svg";

const TopBar = (props: any) => {

    const israelTimeArr: string[] = new Date().toLocaleString('he-IL', {timeZone: 'Asia/Jerusalem'}).split(', ')[1].split(':');// change on Israel zone, Australia just from test
    const [currentTime, setCurrentTime] = useState(new Date());
    const [israelCurrentTime, setIsraelCurrentTime] = useState({
        hour: parseInt(israelTimeArr[0]),
        min: parseInt(israelTimeArr[1])
    });

    useEffect(() => {
        let prevTime = currentTime;
        const intervalId = setInterval(() => {
            const newTime = new Date();
            const newIsraelTimeArr = new Date().toLocaleString('he-IL', {timeZone: 'Asia/Jerusalem'}).split(', ')[1].split(':');// change on Israel zone, Australia just from test
            if (newTime.getMinutes() !== prevTime.getMinutes()) {
                prevTime = newTime;
                setIsraelCurrentTime({hour: parseInt(newIsraelTimeArr[0]), min: parseInt(newIsraelTimeArr[1])});
                setCurrentTime(newTime);
            }
        }, 1000);
        const date = new Date();
        const offset = date.getTimezoneOffset();
        console.log(offset)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box className={classes.topBarContainer}>
            <Grid container alignItems={"center"} justify={"space-between"} className={classes.TopBarContent}>
                <Grid item className={classes.clockContainer}>
                    <Grid className={classes.clock}>
                        <Typography variant="body1">TIME IN ISRAEL</Typography>
                        <Box className={classes.timeContainer}>
                            <img src={clock} alt="clock"/>
                            {israelCurrentTime ?
                                <Typography variant="body1" className={classes.time}>
                                    {israelCurrentTime.hour < 10 ? " 0" + israelCurrentTime.hour : israelCurrentTime.hour}:
                                    {israelCurrentTime.min < 10 ? " 0" + israelCurrentTime.min : israelCurrentTime.min}
                                </Typography>
                                : null
                            }
                        </Box>
                    </Grid>
                    <Grid className={classes.clock}>
                        <Typography variant="body1">TIME DIFFERENCE</Typography>
                        <Box className={classes.timeContainer}>
                            <img src={clock} alt="clock"/>
                            <Typography variant="body1" className={classes.time}>
                                {israelCurrentTime && currentTime ? (2 + currentTime.getTimezoneOffset()/60) + "h" : null}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid className={classes.clock}>
                        <Typography variant="body1">YOUR TIME</Typography>
                        <Box className={classes.timeContainer}>
                            <img src={clock} alt="clock"/>
                            {currentTime ?
                                <Typography variant="body1" className={classes.time}>
                                    {currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours()}:
                                    {currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes()}
                                </Typography>
                                : null
                            }
                        </Box>
                    </Grid>
                </Grid>
                <Grid item/>
                <Grid item className={classes.personalInfo}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={() => {
                            props.signOut()
                        }}
                    >
                        Log Out
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}


export default TopBar;