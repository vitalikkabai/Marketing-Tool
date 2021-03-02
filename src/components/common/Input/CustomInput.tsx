import React, {useState} from 'react';
import {makeStyles, TextField} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {ReactComponent as Visibility} from '../../../assets/images/eye.svg';
import {ReactComponent as VisibilityOff} from '../../../assets/images/eyeOff.svg';

interface CustomInputProps {
    type?: string;
    onChange?: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    onBlur?: { (e: React.FocusEvent<unknown>): void, <T = unknown>(fieldOrEvent: T): T extends string ? ((e: unknown) => void) : void };
    value?: string;
    color?: string;
    width?: number;
    name?: string;
    placeholder?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string | boolean;
    fontSize?: string;
    required?: boolean;
    variant?: 'filled' | 'standard' | 'outlined' | undefined;
    autoFocus?: boolean;
    label?: string;
    margin?: string;
    paddingRight?: number;
    isShowPassword?: boolean;
    disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const useStyles = makeStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                margin: props.margin,
                minWidth: props.width,
                borderRadius: 10,
                padding: 0,
                '& .MuiOutlinedInput-input': {
                    paddingLeft: 10,
                    paddingRight: props.paddingRight,
                },
                '& fieldset': {
                    borderRadius: 10,
                    borderColor: props.error
                        ? '#F44336 !important'
                        : (props.value && !props.disabled)
                            ? '#4285F4'
                            : props.color,
                    borderWidth: 1,
                },
                '& input': {
                    borderRadius: 10,
                    height: 45,
                    padding: 0,
                },
                '& label': {
                    color: props.error
                        ? '#F44336 !important'
                        : (props.value && !props.disabled)
                            ? '#4285F4'
                            : props.color,
                },
            },
            '& .MuiInputLabel-outlined': {
                fontFamily: 'Neue Haas Grotesk',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '150%',
                top: '-9px',
                color: props.error
                    ? '#F44336 !important'
                    : (props.value && !props.disabled)
                        ? '#4285F4'
                        : props.color,
            },
            '& .MuiInputLabel-shrink': {
                transform: 'translate(14px, -2px) scale(0.75)',
            },
            '& .PrivateNotchedOutline-legendLabelled-11': {
                '& span': {
                    paddingRight: 5,
                    fontFamily: 'Neue Haas Grotesk',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    lineHeight: '150%',
                    color: '#9E9E9E',
                },
            },
            /*'& .MuiFormHelperText-contained': {
                position: 'absolute',
                bottom: '-20px',
                marginLeft: '10px',
                '&:after': {
                    content: "''",
                },
            },*/
            '&.MuiOutlinedInput-input': {
                paddingLeft: '35px',
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

    return (
        <TextField
            color="secondary"
            error={props.error}
            disabled={props.disabled}
            name={props.name}
            type={
                (props.name === 'password' || props.name === 'confirmPassword' || props.name === 'oldPassword' )
                    ? isShowPassword
                    ? 'text'
                    : 'password'
                    : props.type
            }
            helperText={props.helperText}
            fullWidth={props.fullWidth}
            variant={props.variant ? props.variant : 'outlined'}
            label={props.label}
            autoFocus={props.autoFocus}
            required={props.required}
            placeholder={props.placeholder}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {(props.name === 'password' || props.name === 'confirmPassword' || props.name === 'oldPassword' ) && (
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                color={"secondary"}
                            >
                                {isShowPassword ? (
                                    <Visibility fill={props.error ? "red" : "#9E9E9E"} />
                                ) : (
                                    <VisibilityOff fill={props.error ? "red" : "#9E9E9E"} />
                                )}
                            </IconButton>
                        )}
                    </InputAdornment>
                ),
                style: {
                    background: 'white',
                    fontFamily: 'Neue Haas Grotesk',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineHeight: '150%',
                },
            }}
            classes={{
                root: classes.root,
            }}
            onBlur={props.onBlur}
            onChange={props.onChange}
            value={props.value}
        />
    );
};

export default CustomInput;
