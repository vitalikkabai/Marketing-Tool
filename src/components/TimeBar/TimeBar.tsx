import React, {useEffect, useState} from 'react';
import classes from "./TimeBar.module.scss";
import {Box, Grid, Typography} from "@material-ui/core";
import clock from "../../assets/images/clock.svg";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import exchange from '../../assets/images/exchange.svg';

type CustomProps = {
    small?: boolean
}

const TimeBar = (props: CustomProps) => {
    const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.between(0, 600));
    const clocksText = isSmallScreen ? {
        firstClock: 'Israel',
        timeDiff: <img src={exchange} alt='diff' />,
        secondClock: 'USA'
    } : {
        firstClock: 'Time in Israel',
        timeDiff: 'Time Difference',
        secondClock: 'Your Time'
    }
    const israelTimeArr: string[] = new Date()
        .toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })
        .split(', ')[1]
        .split(':'); // change on Israel zone, Australia just from test
    const [currentTime, setCurrentTime] = useState(new Date());
    const [israelCurrentTime, setIsraelCurrentTime] = useState({
        hour: parseInt(israelTimeArr[0]),
        min: parseInt(israelTimeArr[1]),
    });

    useEffect(() => {
        let prevTime = currentTime;
        const intervalId = setInterval(() => {
            const newTime = new Date();
            const newIsraelTimeArr = new Date()
                .toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })
                .split(', ')[1]
                .split(':'); // change on Israel zone, Australia just from test
            if (newTime.getMinutes() !== prevTime.getMinutes()) {
                prevTime = newTime;
                setIsraelCurrentTime({
                    hour: parseInt(newIsraelTimeArr[0]),
                    min: parseInt(newIsraelTimeArr[1]),
                });
                setCurrentTime(newTime);
            }
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Grid item className={classes.clockContainer}>
            <Grid className={classes.clock + ' ' + (!props.small && classes.ml23)}>
                <Typography variant="body1">{clocksText?.firstClock}</Typography>
                <Box className={classes.timeContainer}>
                    <img src={clock} alt="clock" />
                    {israelCurrentTime ? (
                        <Typography
                            variant="caption"
                            className={classes.time}>
                            {israelCurrentTime.hour < 10
                                ? ' 0' + israelCurrentTime.hour
                                : israelCurrentTime.hour}
                            :
                            {israelCurrentTime.min < 10
                                ? ' 0' + israelCurrentTime.min
                                : israelCurrentTime.min}
                        </Typography>
                    ) : null}
                </Box>
            </Grid>
            <Grid className={classes.clock + ' ' + classes.ml23}>
                <Typography variant="body1">{clocksText?.timeDiff}</Typography>
                <Box className={classes.timeContainer}>
                    <img src={clock} alt="clock" />
                    <Typography
                        variant="caption"
                        className={classes.time}>
                        {israelCurrentTime && currentTime
                            ? 2 +
                            currentTime.getTimezoneOffset() / 60 +
                            'h'
                            : null}
                    </Typography>
                </Box>
            </Grid>
            <Grid className={classes.clock + ' ' + classes.ml23}>
                <Typography variant="body1">{clocksText?.secondClock}</Typography>
                <Box className={classes.timeContainer}>
                    <img src={clock} alt="clock" />
                    {currentTime ? (
                        <Typography
                            variant="caption"
                            className={classes.time}>
                            {currentTime.getHours() < 10
                                ? '0' + currentTime.getHours()
                                : currentTime.getHours()}
                            :
                            {currentTime.getMinutes() < 10
                                ? '0' + currentTime.getMinutes()
                                : currentTime.getMinutes()}
                        </Typography>
                    ) : null}
                </Box>
            </Grid>
        </Grid>
    );
};

export default TimeBar;
