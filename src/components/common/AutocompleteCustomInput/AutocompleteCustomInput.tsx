import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface CustomInputProps {
    type?: string;
    onChange?: any;
    onBlur?: () => void;
    width?: number;
    name?: string;
    value?: any;
    color?: string;
    placeholder?: string;
    fullWidth?: boolean;
    error?: boolean;
    helperText?: string;
    defaultValue?: unknown;
    fontSize?: string;
    label?: string;
    margin?: string;
    data?: Record<string, unknown>;
    option: Record<string, unknown>[];
    getOption: (option: any) => string;
    renderOption?: any;
    onInputChange?: (event: any, value: string, reason: string) => void;
    disabled?: boolean
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
                    borderColor: props.error
                        ? '#F44336'
                        : (props.value.code && !props.disabled)
                        ? '#4285F4'
                        : props.color,
                    borderRadius: 10,
                    borderWidth: 1,
                },
                '& input': {
                    borderRadius: 10,
                    height: 45,
                    padding: 0,
                },
                '& label': {
                    color: props.error
                        ? '#F44336'
                        : (props.value.code && !props.disabled)
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
                    ? '#F44336'
                    :  (props.value.code && !props.disabled)
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

            '& .MuiFormHelperText-contained': {
                position: 'absolute',
                bottom: '-20px',
                marginLeft: '0',
                '&:after': {
                    content: "''",
                },
                '@media (max-width:960px)': {
                    position: 'absolute',
                },
            },
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

    //ToDo Fix bug with country code color
    return (
        <Autocomplete
            id="custom-input-demo"
            options={props.option}
            onChange={props.onChange}
            getOptionLabel={props.getOption}
            renderOption={props.renderOption}
            value={props.value}
            style={{ margin: props.margin }}
            onInputChange={props.onInputChange}
            disabled={props.disabled}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <TextField
                        name={props.name}
                        variant={'outlined'}
                        fullWidth
                        error={props.error}
                        label={props.label}
                        InputProps={{
                            style: {
                                background: 'white',
                                fontFamily: 'Neue Haas Grotesk',
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                fontSize: '16px',
                                lineHeight: '150%',
                                minWidth: "100px"
                            },
                        }}
                        classes={{
                            root: classes.root,
                        }}
                        {...params.inputProps}
                    />
                </div>
            )}
        />
    );
};

export default AutocompleteCustomInput;
