import { InputLabel, makeStyles} from "@material-ui/core";
import React from "react";

interface CustomInputProps {
    value: string;
    inputValue?: string;
    error?: boolean;
}

const CustomLabel: React.FC<CustomInputProps> = (props) => {

    const useStyles = makeStyles({
        root: {
            fontFamily: 'Neue Haas Grotesk',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '150%',
            transform: "translate(13px, 10px) scale(1)",
            color: props.error
                ? '#F44336 !important'
                : props.inputValue
                    ? '#4285F4'
                    : "",
        },
        shrink: {
            transform: 'translate(12px, -9px) scale(0.75) !important',
        }
    });

    const classes = useStyles();

    return (
        <InputLabel id="demo-simple-select-outlined-label"
                    color={"secondary"}
                    classes={{
                        root: classes.root,
                        shrink: classes.shrink
                    }}>{props.value}</InputLabel>
    );
}

export default CustomLabel;