import React, {useState} from "react";
import {makeStyles, TextField} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CustomInput from "../Input/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {ReactComponent as Visibility} from "../../../assets/images/eye.svg";
import {ReactComponent as VisibilityOff} from "../../../assets/images/eyeOff.svg";

interface CustomInputProps {
    type?: string;
    onChange?: any;
    width?: any; //ToDo change "any" types
    name?: string;
    placeholder?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    PassKey?: string;
    fontSize?: string;
    label?: string;
    margin?: string;
    data?: any;
    option: any;
    getOption: any;
    renderOption?: any;
    onInputChange?: any;
}

const AutocompleteCustomInput: React.FC<CustomInputProps> = (props) => {

    const useStyles = makeStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                width: props.width,
                padding: 0,
                '& .MuiOutlinedInput-input': {
                    paddingLeft: 42,
                },

                '& fieldset': {
                    borderRadius: 10,
                    borderWidth: 1,
                },
                '& input': {
                    borderRadius: 10,
                    height: 45,
                    padding: 0,
                },
            },
            '& .MuiInputLabel-outlined': {
                fontFamily: 'liberation-sans',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                top: '-9px',
            },
            '& .MuiInputLabel-shrink': {
                transform: 'translate(14px, -2px) scale(0.75)'
            },
            '& .PrivateNotchedOutline-legendLabelled-11': {
                '& span': {
                    paddingRight: 5,
                    fontFamily: 'liberation-sans',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    lineHeight: '150%',
                    color: '#9E9E9E',
                }
            },

            '& .MuiFormHelperText-contained': {
                position: "absolute",
                bottom: "-20px",
                marginLeft: "0",
                '&:after': {
                    content: "''",
                },
                "@media (max-width:960px)": {
                    position: "absolute",
                }
            },
            '&.MuiOutlinedInput-input': {
                paddingLeft: "35px"
            },
            '& .Mui-error': {},
        },
        label: {
            textTransform: 'capitalize',
        },
    });


    const classes = useStyles();


    return <Autocomplete
        id="custom-input-demo"
        options={props.option}
        onChange={props.onChange}
        getOptionLabel={props.getOption}
        renderOption={props.renderOption}
        style={{margin: props.margin}}
        onInputChange={props.onInputChange}
        renderInput={(params) => (
            <div ref={params.InputProps.ref}>
                <TextField
                    variant={"outlined"}
                    fullWidth
                    error={props.error}
                    label={props.label}
                    InputProps={{
                        style: {
                            background: "white",
                            fontFamily: 'liberation-sans',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '16px',
                            lineHeight: '150%',
                        }
                    }}
                    classes={{
                        root: classes.root
                    }}
                    {...params.inputProps} />
            </div>
        )}
    />
}

export default AutocompleteCustomInput;