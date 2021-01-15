import {Button} from "@material-ui/core";
import classes from "./CustomButton.module.scss"
import React from "react";

interface PropTypes {
    type: "submit" | "button"
    text: string
    className?: string
    disabled?: boolean
    onClick?: () => void
}

const CustomButton: React.FC<PropTypes> = (props) => {
    return <Button variant="contained" color="primary" type={props.type} disabled={props.disabled}
                   className={classes.customButton + " " + props.className}
                   onClick={props.onClick}>{props.text}</Button>
}


export default CustomButton;