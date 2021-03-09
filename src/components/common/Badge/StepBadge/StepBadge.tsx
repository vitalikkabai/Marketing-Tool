import React from "react"
import {Box, makeStyles, Typography} from "@material-ui/core";
import classes from "./StepBadge.module.scss";

type PropsType = {
    stepNumber: number
}

const StepBadge: React.FC<PropsType> = ({stepNumber}) => {

    const getBackgroundColor = (stepNumber: number) => {
        if (stepNumber === 1) return '#F8D000';
        if (stepNumber === 2) return '#FFAB08';
        if (stepNumber === 3) return '#EE6B1D';
        if (stepNumber === 4) return '#43A047';
        if (stepNumber === 5) return '#0097A6';
        if (stepNumber === 6) return '#7B1FA2';
        if (stepNumber === 7) return '#DA4B7B';
        if (stepNumber === 8) return '#EA4335';
        return '#4285F4';
    };

    const getColor = (stepNumber: number) => {
        if (stepNumber === 1) return '248 208 0';
        if (stepNumber === 2) return '255 171 8';
        if (stepNumber === 3) return '238 107 29';
        if (stepNumber === 4) return '67 160 71';
        if (stepNumber === 5) return '0 151 166';
        if (stepNumber === 6) return '123 31 162';
        if (stepNumber === 7) return '218 75 123';
        if (stepNumber === 8) return '234 67 53';
        return '66 133 244';
    };

    const useStyles = makeStyles({
        '@keyframes ripple': {
            '0%': {
                boxShadow: `0 0 0 0 rgb(${
                    getColor(stepNumber)
                }/ 60%)`,
            },
            '100% ': {
                boxShadow: `0 0 0 0.6em rgb(${
                    getColor(stepNumber)
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

    return <Box
        className={classes.stepList + " " + styles.circleRipple}
        style={{background: getBackgroundColor(stepNumber)}}>
        <Typography variant={'h3'}>{stepNumber}</Typography>
    </Box>
}

export default StepBadge;