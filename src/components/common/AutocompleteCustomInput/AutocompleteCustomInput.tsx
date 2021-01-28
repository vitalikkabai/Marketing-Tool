import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CustomInput from "../Input/CustomInput";

interface CustomInputProps {
    type?: string;
    onChange?: any;
    onBlur?: any;
    onFocus?: any;
    value?: string;
    color?: string;
    width?: any; //ToDo change "any" types
    name?: string;
    placeholder?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    PassKey?: string;
    fontSize?: string;
    required?: boolean;
    variant?: string;
    autoFocus?: boolean;
    label?: string;
    margin?: string;
    paddingRight?: number;
    isShowPassword?: boolean;
    data: any;
    option: any;
}

const AutocompleteCustomInput: React.FC<CustomInputProps> = (props) => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    const useStyles = makeStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                margin: props.margin,
                width: props.width,
                padding: 0,
                '& .MuiOutlinedInput-input': {
                    paddingLeft: 10,
                    paddingRight: props.paddingRight,
                },

                '& fieldset': {
                    borderRadius: 10,
                    borderColor: props.color,
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

    const handleClickShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return <Autocomplete options={props.data}
                         style={{ width: 300 }}
                         getOptionLabel={props.option}
                         renderInput={(params) => <CustomInput {...params}/>}/>
}

export default AutocompleteCustomInput;