import classes from './StepCounter.module.scss';
import check from '../../../assets/images/checkMark.svg';
import { Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import React from 'react';

type PropsType = {
    stepNumber: number;
    stepColor?: string;
    className?: string;
    completedStep?: number;
};

const StepCounter: React.FC<PropsType> = (props) => {
    const { stepNumber, stepColor, completedStep, className } = props;

    const getColor = () => {
        if (completedStep === 1) return '248 208 0';
        if (completedStep === 2) return '255 171 8';
        if (completedStep === 3) return '238 107 29';
        if (completedStep === 4) return '67 160 71';
        if (completedStep === 5) return '0 151 166';
        if (completedStep === 6) return '123 31 162';
        if (completedStep === 7) return '218 75 123';
        if (completedStep === 8) return '234 67 53';
        return '66 133 244';
    };

    const getBackgroundColor = (stepNumberBackground: number) => {
        if (stepNumberBackground === 1) return '#F8D000';
        if (stepNumberBackground === 2) return '#FFAB08';
        if (stepNumberBackground === 3) return '#EE6B1D';
        if (stepNumberBackground === 4) return '#43A047';
        if (stepNumberBackground === 5) return '#0097A6';
        if (stepNumberBackground === 6) return '#7B1FA2';
        if (stepNumberBackground === 7) return '#DA4B7B';
        if (stepNumberBackground === 8) return '#EA4335';
        return '#4285F4';
    };

    const stepsArr = [];

    const useStyles = makeStyles({
        '@keyframes ripple': {
            '0%': {
                boxShadow: `0 0 0 0 rgb(${
                    stepColor ? stepColor : getColor()
                }/ 60%)`,
            },
            '100% ': {
                boxShadow: `0 0 0 0.6em rgb(${
                    stepColor ? stepColor : getColor()
                } / 0%)`,
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

    if (completedStep) {
        for (let i = 0; i <= 8; i++) {
            stepsArr.push(
                <li className={classes.steps} key={`li${i}`}>
                    <div
                        className={
                            classes.stepsList +
                            ' ' +
                            (completedStep === i
                                ? classes.active +
                                  ' ' +
                                  classes.current +
                                  ' ' +
                                  styles.circleRipple
                                : stepNumber === i && stepNumber > completedStep
                                ? classes.current
                                : ' ')
                        }
                        style={
                            completedStep >= i
                                ? { background: getBackgroundColor(i) }
                                : stepNumber === i
                                ? {
                                      border: `3px solid ${getBackgroundColor(
                                          i
                                      )}`,
                                  }
                                : {}
                        }>
                        {completedStep > i ? (
                            <img
                                className={classes.stepsIcon}
                                src={check}
                                alt={'check'}
                            />
                        ) : (
                            <Typography variant={'subtitle2'}>
                                {i === 4 ? '3+' : i}
                            </Typography>
                        )}
                    </div>

                    {i < 8 ? (
                        <div
                            className={classes.line}
                            style={
                                completedStep >= i + 1
                                    ? { background: getBackgroundColor(i) }
                                    : {}
                            }
                        />
                    ) : null}
                </li>
            );
        }
    }

    return (
        <Grid item className={classes.stepProgressContainer + ' ' + className}>
            {!completedStep && (
                <ul className={classes.progressCircles}>
                    <li
                        className={
                            classes.stepsList +
                            ' ' +
                            (stepNumber === 1
                                ? classes.active +
                                  ' ' +
                                  classes.current +
                                  ' ' +
                                  styles.circleRipple
                                : classes.active)
                        }
                        style={{ background: theme.palette.primary.main }}>
                        {stepNumber === 2 || stepNumber === 3 ? (
                            <img src={check} alt={'check'} />
                        ) : (
                            <Typography variant={'subtitle2'}>1</Typography>
                        )}
                    </li>
                    <div
                        className={classes.line}
                        style={
                            stepNumber === 2 || stepNumber === 3
                                ? { background: theme.palette.primary.main }
                                : {}
                        }
                    />
                    <li
                        className={
                            classes.stepsList +
                            ' ' +
                            (stepNumber === 2
                                ? classes.active +
                                  ' ' +
                                  classes.current +
                                  ' ' +
                                  styles.circleRipple
                                : stepNumber === 1
                                ? ''
                                : classes.active)
                        }
                        style={
                            stepNumber === 2
                                ? { background: theme.palette.primary.main }
                                : stepNumber === 1
                                ? {}
                                : { background: theme.palette.primary.main }
                        }>
                        {stepNumber === 3 ? (
                            <img src={check} alt={'check'} />
                        ) : (
                            <Typography variant={'subtitle2'}>2</Typography>
                        )}
                    </li>
                    <div
                        className={classes.line}
                        style={
                            stepNumber === 3
                                ? { background: theme.palette.primary.main }
                                : {}
                        }
                    />
                    <li
                        className={
                            classes.stepsList +
                            ' ' +
                            (stepNumber === 3
                                ? classes.active +
                                  ' ' +
                                  classes.current +
                                  ' ' +
                                  styles.circleRipple
                                : stepNumber === 2 || stepNumber === 1
                                ? ''
                                : classes.active)
                        }
                        style={
                            stepNumber === 3
                                ? { background: theme.palette.primary.main }
                                : stepNumber === 2 || stepNumber === 1
                                ? {}
                                : { background: theme.palette.primary.main }
                        }>
                        <Typography variant={'subtitle2'}>3</Typography>
                    </li>
                </ul>
            )}

            {completedStep && <ul>{stepsArr}</ul>}
        </Grid>
    );
};

export default StepCounter;
