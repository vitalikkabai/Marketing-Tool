import {DatePicker} from "@material-ui/pickers";
import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import moment from "moment";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

type PropsType = {
    error?: boolean
    value: moment.Moment | string | null | undefined
    label: string
    name?: string
    helperText?: string | boolean
    onBlur?: { (e: React.FocusEvent<unknown>): void, <T = unknown>(fieldOrEvent: T): T extends string ? ((e: unknown) => void) : void }
    onChange: (date: MaterialUiPickersDate) => void
    onFocus?: () => void
}

const CustomDatePicker: React.FC<PropsType> = (props) => {
    const [focus, setFocus] = useState(false);
    const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
                transform: "translate(14px, -9px) scale(0.75)"
            },
            "& .MuiInputLabel-outlined": {
                transform: "translate(14px, 12px) scale(1)"
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
            },
            '& .MuiFormHelperText-contained': {
                position: 'absolute',
                bottom: '-20px',
                marginLeft: '10px',
                '&:after': {
                    content: "''",
                },
            },
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
            },
        },
        dialogue: {
            // TODO Fix white borders
            // '& .MuiPickersModal-dialogRoot': {
            //     borderRadius: '10px'
            // },
            '& .MuiPickersToolbar-toolbar': {
                backgroundColor: theme.palette.primary.main,
                color: "white"
            },//.
            '& .MuiPickersDay-daySelected': {
                backgroundColor: theme.palette.primary.main,
                color: "white"
            },
            '& .MuiPickersToolbarText-toolbarTxt': {
                color: "white"
            },
            '& .MuiPickersYear-yearSelected, & .MuiButton-textPrimary, & .MuiPickersMonth-monthSelected, & .MuiPickersDay-current': {
                color: theme.palette.primary.main
            },
            '& .MuiPickersMonth-root:focus, & .MuiPickersYear-root:focus': {
                color: theme.palette.primary.main
            }

        }
    }));

    const classes = useStyles();

    return <DatePicker
        name={props.name}
        disableFuture
        autoOk
        focused={focus}
        openTo="year"
        fullWidth
        error={props.error}
        helperText={props.helperText}
        color={"secondary"}
        onFocus={props.onFocus}
        onOpen={() => {
            setFocus(true)
        }}
        onClose={() => {
            setFocus(false)
        }}
        className={classes.root}
        format="DD/MM/yyyy"
        label={props.label}
        views={["year", "month", "date"]}
        value={props.value}
        inputVariant="outlined"
        onChange={props.onChange}
        onBlur={props.onBlur}
        DialogProps={{className: classes.dialogue}}
        InputProps={{className: classes.input}}
    />
}

export default CustomDatePicker;