import { Button } from "@material-ui/core";
import classes from "./CustomButton.module.scss"
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface PropTypes {
    width?: string
    type: "submit" | "button"
    text: string
    className?: string
    disabled?: boolean
    endIcon?: React.ReactNode
    onClick?: () => void
}

const CustomButton: React.FC<PropTypes> = (props) => {

    return <Button style={{ width: props.width }} endIcon={props.endIcon} variant="contained" color="primary" type={props.type} disabled={props.disabled}
        className={classes.customButton + " " + props.className}
        onClick={props.onClick}>{props.text}</Button>
}


export default CustomButton;