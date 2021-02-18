import {DatePicker} from "@material-ui/pickers";
import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import moment from "moment";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

type PropsType = {
    error?: boolean
    value:  moment.Moment
    label: string
    onChange: (date: MaterialUiPickersDate) => void
}

const CustomDatePicker: React.FC<PropsType> = (props) => {
    const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
                transform: "translate(14px, -9px) scale(0.75)"
            },
            "& label": {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                color: props.error
                    ? '#F44336 !important'
                    : props.value
                        ? '#4285F4'
                        : ""
            }
        },
        input: {
            fontFamily: 'Neue Haas Grotesk',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '150%',
            borderRadius: '10px',
            borderColor: "red",
            '& .MuiOutlinedInput-input': {
                padding: "13px 14px"
            },
            '& .MuiFormLabel-root': {
                fontSize: "16px",
                fontStyle: "normal",
                fontFamily: "Neue Haas Grotesk",
                fontWeight: "normal",
                lineHeight: "150%",
            },
            '& fieldset': {
                borderColor: props.error
                    ? '#F44336 !important'
                    : props.value
                        ? '#4285F4'
                        : "",
            }
        },
        dialogue: {
            '& .MuiPickersToolbar-toolbar': {
                backgroundColor: theme.palette.secondary.main,
                color: "white"
            },//.
            '& .MuiPickersDay-daySelected': {
                backgroundColor: theme.palette.secondary.main,
                color: "white"
            },
            '& .MuiPickersToolbarText-toolbarTxt': {
                color: "white"
            },
            '& .MuiPickersYear-yearSelected, & .MuiButton-textPrimary, & .MuiPickersMonth-monthSelected, & .MuiPickersDay-current': {
                color: theme.palette.secondary.main
            },
            '& .MuiPickersMonth-root:focus, & .MuiPickersYear-root:focus': {
                color: theme.palette.secondary.main
            }

        }
    }));

    const classes = useStyles();

    return <DatePicker
        disableFuture
        openTo="year"
        fullWidth
        color={"secondary"}
        className={classes.root}
        format="DD/MM/yyyy"
        label={props.label}
        views={["year", "month", "date"]}
        value={props.value}
        inputVariant="outlined"
        onChange={props.onChange}
        DialogProps={{className: classes.dialogue}}
        InputProps={{className: classes.input}}
    />
}

export default CustomDatePicker;