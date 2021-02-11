import classes from './StepCounter.module.scss';
import check from '../../../assets/images/checkMark.svg';
import { Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import React from 'react';

type PropsType = {
    stepNumber: number;
    stepColor: string;
    className?: string;
};

const StepCounter: React.FC<PropsType> = (props) => {
    const useStyles = makeStyles({
        '@keyframes ripple': {
            '0%': {
                boxShadow: `0 0 0 0 rgb(${props.stepColor}/ 60%)`,
            },
            '100% ': {
                boxShadow: `0 0 0 0.6em rgb(${props.stepColor} / 0%)`,
            },
        },
        circleRipple: {
            backgroundColor: '#fff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            animation: `$ripple 1.7s linear infinite`,
        },
    });
    const styles = useStyles();

    const theme = useTheme();

    return (
        <Grid
            item
            className={classes.stepProgressContainer + ' ' + props.className}
        >
            <ul className={classes.progressCircles}>
                <li
                    className={
                        props.stepNumber === 1
                            ? classes.active +
                              ' ' +
                              classes.current +
                              ' ' +
                              styles.circleRipple
                            : classes.active
                    }
                    style={{ background: theme.palette.primary.main }}
                >
                    {props.stepNumber === 2 || props.stepNumber === 3 ? (
                        <img src={check} alt={'check'} />
                    ) : (
                        <Typography variant={'subtitle2'}>1</Typography>
                    )}
                </li>
                <div
                    className={classes.line}
                    style={
                        props.stepNumber === 2 || props.stepNumber === 3
                            ? { background: theme.palette.primary.main }
                            : {}
                    }
                />
                <li
                    className={
                        props.stepNumber === 2
                            ? classes.active +
                              ' ' +
                              classes.current +
                              ' ' +
                              styles.circleRipple
                            : props.stepNumber === 1
                            ? ''
                            : classes.active
                    }
                    style={
                        props.stepNumber === 2
                            ? { background: theme.palette.primary.main }
                            : props.stepNumber === 1
                            ? {}
                            : { background: theme.palette.primary.main }
                    }
                >
                    {props.stepNumber === 3 ? (
                        <img src={check} alt={'check'} />
                    ) : (
                        <Typography variant={'subtitle2'}>2</Typography>
                    )}
                </li>
                <div
                    className={classes.line}
                    style={
                        props.stepNumber === 3
                            ? { background: theme.palette.primary.main }
                            : {}
                    }
                />
                <li
                    className={
                        props.stepNumber === 3
                            ? classes.active +
                              ' ' +
                              classes.current +
                              ' ' +
                              styles.circleRipple
                            : props.stepNumber === 2 || props.stepNumber === 1
                            ? ''
                            : classes.active
                    }
                    style={
                        props.stepNumber === 3
                            ? { background: theme.palette.primary.main }
                            : props.stepNumber === 2 || props.stepNumber === 1
                            ? {}
                            : { background: theme.palette.primary.main }
                    }
                >
                    <Typography variant={'subtitle2'}>3</Typography>
                </li>
            </ul>
        </Grid>
    );
};

export default StepCounter;
