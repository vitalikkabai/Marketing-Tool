import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid,
    Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomButton from '../common/Button/CustomButton';
import classes from './TopBar.module.scss';
import clock from '../../assets/images/clock.svg';
import logOutIcon from '../../assets/images/logOutConfirmIcon.svg';
import { useHistory } from 'react-router';
import AvatarSection from './AvatarSection/AvatarSection';
import { PropsFromRedux } from './TopBarContainer';

const TopBar = (props: PropsFromRedux) => {
    const israelTimeArr: string[] = new Date()
        .toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })
        .split(', ')[1]
        .split(':'); // change on Israel zone, Australia just from test
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isOpen, setIsOpen] = React.useState(false);
    const [israelCurrentTime, setIsraelCurrentTime] = useState({
        hour: parseInt(israelTimeArr[0]),
        min: parseInt(israelTimeArr[1]),
    });
    const history = useHistory();

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
        <Box className={classes.topBarContainer}>
            <Grid
                container
                alignItems={'center'}
                justify={'space-between'}
                className={classes.TopBarContent}>
                <Grid item className={classes.clockContainer}>
                    <Grid className={classes.clock}>
                        <Typography variant="body1">Time in israel</Typography>
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
                    <Grid className={classes.clock}>
                        <Typography variant="body1">Time Difference</Typography>
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
                    <Grid className={classes.clock}>
                        <Typography variant="body1">Your time</Typography>
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
                <Grid item />
                <Grid item className={classes.personalInfo}>
                    {props.isAuth ? (
                        <AvatarSection
                            setDialogueSubject={setIsOpen}
                            profile={props.profile}
                            avatarURL={props.avatarURL}
                            userAttributes={props.userAttributes}
                            signOut={props.signOut}
                        />
                    ) : (
                        <Box className={classes.logInBox}>
                            <Typography
                                variant={'subtitle2'}
                                color={'primary'}
                                className={classes.logInText}
                                onClick={() => history.push('/login')}>
                                Log In
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.logInButton}
                                onClick={() => history.push('/register')}>
                                Try to free
                            </Button>
                        </Box>
                    )}
                </Grid>
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    BackdropProps={{
                        classes: {
                            root: classes.backDrop,
                        },
                    }}>
                    <DialogContent className={classes.logOutDialog}>
                        <Typography variant="h3" align="center">
                            Are you sure you want to <br /> log out?
                        </Typography>
                        <Box className={classes.logOutImageBox}>
                            <img
                                src={logOutIcon}
                                alt="image"
                            />
                        </Box>

                        <Box className={classes.buttonBox}>
                            <CustomButton
                                color
                                type="button"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                                text="NO"
                            />
                            <CustomButton
                                color
                                type="button"
                                onClick={() => {
                                    props.signOut();
                                }}
                                text="YES"
                            />
                        </Box>
                    </DialogContent>
                </Dialog>
            </Grid>
        </Box>
    );
};

export default TopBar;
