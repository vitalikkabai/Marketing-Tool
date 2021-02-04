import { Button } from "@material-ui/core";
import classes from "./CustomButton.module.scss"
import React from "react";

interface PropTypes {
    width?: string
    type: "submit" | "button"
    text: any
    className?: string
    disabled?: boolean
    endIcon?: React.ReactNode
    onClick?: () => void
    borderRadius?: string
}

const CustomButton: React.FC<PropTypes> = (props) => {

    return <Button style={{ width: props.width, borderRadius: props.borderRadius}} endIcon={props.endIcon} variant="contained" color="primary" type={props.type} disabled={props.disabled}
        className={classes.customButton + " " + props.className}
        onClick={props.onClick}>{props.text}</Button>
}


export default CustomButton;