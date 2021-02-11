import { Button } from '@material-ui/core';
import classes from './CustomButton.module.scss';
import React from 'react';

interface PropTypes {
    width?: string;
    type: 'submit' | 'button';
    text: any;
    className?: string;
    disabled?: boolean;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    borderRadius?: string;
    color?: boolean;
}

const CustomButton: React.FC<PropTypes> = (props) => {
    return (
        <Button
            style={
                props.color
                    ? {
                          width: props.width,
                          borderRadius: props.borderRadius,
                          background: '#4285F4',
                          color: 'white',
                      }
                    : { width: props.width, borderRadius: props.borderRadius }
            }
            endIcon={props.endIcon}
            variant="contained"
            color={props.color ? 'default' : 'primary'}
            type={props.type}
            disabled={props.disabled}
            className={classes.customButton + ' ' + props.className}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
};

export default CustomButton;
