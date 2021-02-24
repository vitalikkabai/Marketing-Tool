import React from 'react';
import {makeStyles, Select} from '@material-ui/core';
import styles from './CustomSelect.module.scss';

interface CustomInputProps {
    onChange?: (
        event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
        child?: React.ReactNode
    ) => void | undefined;
    onBlur?: { (e: React.FocusEvent<unknown>): void, <T = unknown>(fieldOrEvent: T): T extends string ? ((e: unknown) => void) : void }
    value?: string | number | undefined;
    items: Array<unknown>;
    label?: string
    labelId?: string
    colored?: boolean
    error?: boolean
    helperText?: string | boolean
    color?: string
    name?: string
}

const CustomSelect: React.FC<CustomInputProps> = (props) => {
    const useStyles = makeStyles({
        root: {
            padding: '10px 14px',
            borderRadius: 10,
            fontFamily: 'Neue Haas Grotesk',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '16px',
            lineHeight: '150%',
            '&.MuiSelect-outlined.MuiSelect-outlined': {
                paddingRight: '75px',
            },
            '&.MuiSelect-select:focus': {
                borderRadius: 10,
            },
            '&.MuiList-padding': {
                padding: "0"
            }
        },

        select: {
            '& ul': {
                paddingTop: 0,
                paddingBottom: 0
            }
        },

        icon: {
            color: props.error? '#F44336' : '#4285F4',
        },

        selectMenu: {
            '&.MuiList-padding': {
                padding: "0"
            }
        }
    });

    const classes = useStyles();

    return (
        <Select
            name={props.name}
            error={props.error}
            classes={{
                root: classes.root,
                icon: classes.icon,
                selectMenu: classes.selectMenu
            }}
            labelId={props.labelId}
            MenuProps={{
                classes: {
                  paper: classes.select
                },
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
                getContentAnchorEl: null,
            }}
            color={"secondary"}
            label={props.label}
            className={props.colored || props.error
                ? styles.selectorWithError : (props.value !== "") ? styles.selector : ""}
            style={{borderRadius: '10px'}}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
        >
            {props.items.map((item: unknown) => item)}
        </Select>
    );
};


export default CustomSelect;
