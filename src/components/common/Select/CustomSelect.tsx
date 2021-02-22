import React from 'react';
import {makeStyles, Select} from '@material-ui/core';
import styles from './CustomSelect.module.scss';

interface CustomInputProps {
    onChange?: (
        event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
        child?: React.ReactNode
    ) => void | undefined;
    value?: any;
    items: any;
    label?: string
    labelId?: string
    colored?: boolean
    error?:boolean
    color?:string
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
        },

        select: {
            '& ul': {
                paddingTop: 0,
                paddingBottom: 0
            }
        },

        icon: {
            color: '#4285F4',
        },
    });

    const classes = useStyles();

    return (
        <Select
            classes={{
                root: classes.root,
                icon: classes.icon,
                outlined: styles.outlined,
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
            className={props.colored || props.value? styles.selector : ""}
            style={{borderRadius: '10px'}}
            onChange={props.onChange}
            value={props.value}
        >
            {props.items.map((item: any) => item)}
        </Select>
    );
};

export default CustomSelect;
