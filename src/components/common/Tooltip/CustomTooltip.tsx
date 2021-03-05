import React from "react";
import {makeStyles, Tooltip} from '@material-ui/core';

interface CustomInputProps {
    children: any,
    title: string,
    color?: string,
    fontSize?: string,
    placement?: "bottom" | "left" | "right" | "top" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined,
    background?: string
}

const CustomTooltip: React.FC<CustomInputProps> = (props) => {
    const [hover, setHover] = React.useState(false);
    const [focus, setFocus] = React.useState(false);

    const useStyles = makeStyles({
        tooltip: {
            '&.MuiTooltip-tooltip': {
                background: props.background ? props.background : "#dfdfdf",
                color: props.color ? props.color : "#333",
                fontSize: props.fontSize ? props.fontSize : "12px",
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "15px",
                minWidth: "158px",
                maxWidth: "170px",
                borderRadius: "4px"
            }
        },
        arrow: {
            '&.MuiTooltip-arrow': {
                color: props.background ? props.background : "#dfdfdf"
            }
        }
    });

    const classes = useStyles();

    return (
        <Tooltip
            title={props.title}
            placement={props.placement ? props.placement : "top"}
            arrow
            open={hover && !focus}
            onMouseEnter={() => {setHover(true)}}
            onMouseLeave={() => {setHover(false)}}
            onFocus={() => {setFocus(true)}}
            onBlur={() => {
                setHover(false);
                setFocus(false);
            }}
            disableHoverListener
            disableFocusListener
            disableTouchListener
            classes={{
                tooltip: classes.tooltip,
                arrow: classes.arrow
            }}
        >
            {props.children}
        </Tooltip>
    )
}

export default CustomTooltip;