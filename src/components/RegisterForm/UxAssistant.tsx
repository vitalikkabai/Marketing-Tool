import React from "react";
import classes from "./RegisterForm.module.scss";
import {Box, Grid, Typography} from "@material-ui/core";
import check from "../../assets/images/checkMark.svg";
import assistantAvatar from "../../assets/images/avatar.png";

interface PropTypes {
    stepNumber: number
    assistantText: string
}

const UxAssistant: React.FC<PropTypes> = (props) => {
    return (
        <>
            <Grid item className={classes.progressContainer}>
                <ul className={classes.progressCircles}>
                    <li className={props.stepNumber === 1? classes.active + " " + classes.current + " " + classes.circleRipple : classes.active}>
                        {props.stepNumber === 2 || props.stepNumber === 3? <img src={check} alt={"check"}/> : <Typography variant={"subtitle2"}>1</Typography>}
                    </li>
                    <div className={props.stepNumber === 2 || props.stepNumber === 3? classes.line + " " + classes.lineActive : classes.line}/>
                    <li className={props.stepNumber === 2 ? classes.active + " " + classes.current + " " + classes.circleRipple : props.stepNumber === 1? "" : classes.active}>
                        {props.stepNumber === 3? <img src={check} alt={"check"}/> : <Typography variant={"subtitle2"}>2</Typography>}
                    </li>
                    <div className={props.stepNumber === 3? classes.line + " " + classes.lineActive : classes.line}/>
                    <li className={props.stepNumber === 3? classes.active + " " + classes.current + " " + classes.circleRipple : props.stepNumber === 2 || props.stepNumber === 1? "" : classes.active}>
                        <Typography variant={"subtitle2"}>3</Typography>
                    </li>
                </ul>
            </Grid>
            <Grid item className={classes.assistantContainer}>
                <img src={assistantAvatar} alt={"image"}/>
                <Box className={classes.assistantText}>
                    <Typography variant={"h6"}>{props.assistantText}</Typography>
                    {props.stepNumber === 1? <Typography variant={"h6"}>Let’s get started</Typography> : null}
                </Box>
            </Grid>
        </>
    );
}

export default UxAssistant;