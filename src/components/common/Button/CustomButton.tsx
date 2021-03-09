import { Button, CircularProgress } from '@material-ui/core';
import classes from './CustomButton.module.scss';
import React, {ReactElement} from 'react';

interface PropTypes {
    width?: string;
    type: 'submit' | 'button';
    text: string | ReactElement;
    className?: string;
    inverted?: boolean;
    disabled?: boolean;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    borderRadius?: string;
    color?: boolean;
    isPending?: boolean;
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
                    : props.inverted ? { width: props.width, borderRadius: props.borderRadius } :
                    { width: props.width, borderRadius: props.borderRadius, color: 'white' }
            }
            endIcon={props.endIcon}
            variant={props.inverted ? "outlined" : "contained"}
            color={props.color && !props.inverted ? 'default' : 'primary'}
            type={props.type}
            disabled={props.disabled}
            className={
                (classes.customButton + ' ' + props.className)
                + " " + (props.isPending ? classes.disabledBtn : "")
            }
            onClick={props.onClick}
        >
            {
                props.isPending ?
                    <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                        color="secondary"
                    />
                    :
                    props.text
            }
        </Button>
    );
};

export default CustomButton;
