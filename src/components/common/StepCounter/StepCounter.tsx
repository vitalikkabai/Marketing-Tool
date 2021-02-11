import classes from "./StepCounter.module.scss";
import check from "../../../assets/images/checkMark.svg";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import React from "react";

type PropsType = {
    stepNumber: number
    stepColor?: string
    className?: string
    completedStep?: number
}

const StepCounter: React.FC<PropsType> = (props) => {

    const getColor = () => {
        if (props.completedStep === 1) return "248 208 0";
        if (props.completedStep === 2) return "255 171 8";
        if (props.completedStep === 3) return "238 107 29";
        if (props.completedStep === 4) return "67 160 71";
        if (props.completedStep === 5) return "0 151 166";
        if (props.completedStep === 6) return "123 31 162";
        if (props.completedStep === 7) return "218 75 123";
        if (props.completedStep === 8) return "234 67 53";
        return ("66 133 244")
    }

    const getBackgroundColor = (stepNumberBackground?: number) => {
        if (stepNumberBackground === 1) return "#F8D000";
        if (stepNumberBackground === 2) return "#FFAB08";
        if (stepNumberBackground === 3) return "#EE6B1D";
        if (stepNumberBackground === 4) return "#43A047";
        if (stepNumberBackground === 5) return "#0097A6";
        if (stepNumberBackground === 6) return "#7B1FA2";
        if (stepNumberBackground === 7) return "#DA4B7B";
        if (stepNumberBackground === 8) return "#EA4335";
        return ("#4285F4")
    }

    const useStyles = makeStyles({
        "@keyframes ripple": {
            "0%": {
                boxShadow: `0 0 0 0 rgb(${props.stepColor ? props.stepColor : getColor()}/ 60%)`
            },
            "100% ": {
                boxShadow: `0 0 0 0.6em rgb(${props.stepColor ? props.stepColor : getColor()} / 0%)`
            }
        },
        circleRipple: {
            backgroundColor: "#fff",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            animation: `$ripple 1.7s linear infinite`,
        },
    });
    const styles = useStyles();

    const theme = useTheme();

    return <Grid item className={classes.stepProgressContainer + " " + props.className}>
        {!props.completedStep &&
            <ul className={classes.progressCircles}>
                <li className={props.stepNumber === 1 ? classes.active + " " + classes.current + " " + styles.circleRipple : classes.active}
                    style={{ background: theme.palette.primary.main }}>
                    {props.stepNumber === 2 || props.stepNumber === 3 ? <img src={check} alt={"check"} /> :
                        <Typography variant={"subtitle2"}>1</Typography>}
                </li>
                <div className={classes.line}
                    style={props.stepNumber === 2 || props.stepNumber === 3 ? { background: theme.palette.primary.main } : {}} />
                <li className={props.stepNumber === 2 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 1 ? "" : classes.active}
                    style={props.stepNumber === 2 ? { background: theme.palette.primary.main } : props.stepNumber === 1 ? {} : { background: theme.palette.primary.main }}>
                    {props.stepNumber === 3 ? <img src={check} alt={"check"} /> :
                        <Typography variant={"subtitle2"}>2</Typography>}
                </li>
                <div className={classes.line}
                    style={props.stepNumber === 3 ? { background: theme.palette.primary.main } : {}} />
                <li className={props.stepNumber === 3 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 2 || props.stepNumber === 1 ? "" : classes.active}
                    style={props.stepNumber === 3 ? { background: theme.palette.primary.main } : props.stepNumber === 2 || props.stepNumber === 1 ? {} : { background: theme.palette.primary.main }}>
                    <Typography variant={"subtitle2"}>3</Typography>
                </li>
            </ul>
        }

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {props.completedStep &&
            <>
                <ul className={classes.progressCircles}>
                    <li className={props.completedStep === 0 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 0 ? classes.current : " "}
                        style={{ background: getBackgroundColor(0) }}>
                        <img src={check} alt={"check"} />
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 1 ? { background: getBackgroundColor(0) } : {}} />

                    <li className={props.completedStep === 1 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 1 ? classes.current : " "}
                        style={props.completedStep >= 1 ? { background: getBackgroundColor(1) } : props.stepNumber === 1 ? { border: `3px solid ${getBackgroundColor(1)}` } : {}}>
                        {props.completedStep > 1 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>1</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 2 ? { background: getBackgroundColor(1) } : {}} />

                    <li className={props.completedStep === 2 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 2 ? classes.current : " "}
                        style={props.completedStep >= 2 ? { background: getBackgroundColor(2) } : props.stepNumber === 2 ? { border: `3px solid ${getBackgroundColor(2)}` } : {}}>
                        {props.completedStep > 2 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>2</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 3 ? { background: getBackgroundColor(2) } : {}} />

                    <li className={props.completedStep === 3 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 3 ? classes.current : " "}
                        style={props.completedStep >= 3 ? { background: getBackgroundColor(3) } : props.stepNumber === 3 ? { border: `3px solid ${getBackgroundColor(3)}` } : {}}>
                        {props.completedStep > 3 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>3</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 4 ? { background: getBackgroundColor(3) } : {}} />

                    <li className={props.completedStep === 4 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 4 ? classes.current : " "}
                        style={props.completedStep >= 4 ? { background: getBackgroundColor(4) } : props.stepNumber === 4 ? { border: `3px solid ${getBackgroundColor(4)}` } : {}}>
                        {props.completedStep > 4 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>4</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 5 ? { background: getBackgroundColor(4) } : {}} />

                    <li className={props.completedStep === 5 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 5 ? classes.current : " "}
                        style={props.completedStep >= 5 ? { background: getBackgroundColor(5) } : props.stepNumber === 5 ? { border: `3px solid ${getBackgroundColor(5)}` } : {}}>
                        {props.completedStep > 5 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>5</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 6 ? { background: getBackgroundColor(5) } : {}} />

                    <li className={props.completedStep === 6 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 6 ? classes.current : " "}
                        style={props.completedStep >= 6 ? { background: getBackgroundColor(6) } : props.stepNumber === 6 ? { border: `3px solid ${getBackgroundColor(6)}` } : {}}>
                        {props.completedStep > 6 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>6</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 7 ? { background: getBackgroundColor(6) } : {}} />

                    <li className={props.completedStep === 7 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 7 ? classes.current : " "}
                        style={props.completedStep >= 7 ? { background: getBackgroundColor(7) } : props.stepNumber === 7 ? { border: `3px solid ${getBackgroundColor(7)}` } : {}}>
                        {props.completedStep > 7 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>7</Typography>}
                    </li>

                    <div className={classes.line}
                        style={props.completedStep >= 8 ? { background: getBackgroundColor(7) } : {}} />

                    <li className={props.completedStep === 8 ? classes.active + " " + classes.current + " " + styles.circleRipple : props.stepNumber === 8 ? classes.current : " "}
                        style={props.completedStep >= 8 ? { background: getBackgroundColor(8) } : props.stepNumber === 8 ? { border: `3px solid ${getBackgroundColor(8)}` } : {}}>
                        {props.completedStep > 8 ? <img src={check} alt={"check"} /> :
                            <Typography variant={"subtitle2"}>8</Typography>}
                    </li>
                </ul>
                <ul>

                </ul>
            </>
        }


    </Grid >
}

export default StepCounter;