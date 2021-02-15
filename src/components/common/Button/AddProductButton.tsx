import {Box, Typography} from '@material-ui/core';
import classes from './CustomButton.module.scss';
import React from 'react';
import {ReactComponent as PlusIcon} from "../../../assets/images/formPlus.svg";

interface PropTypes {
    text: string;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const AddProductButton: React.FC<PropTypes> = (props) => {
    return (
        <Box className={classes.buttonWithCircleBox}>
            <Typography variant={"button"}>{props.text}</Typography>
            <Box className={classes.circleBox}>
                <PlusIcon/>
            </Box>
        </Box>
    );
};

export default AddProductButton;
