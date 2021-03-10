import React from 'react';
import classes from './GoBackButton.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {ReactComponent as BackArrowMob} from '../../../assets/images/backArrowMob.svg';
import { Box, Typography } from '@material-ui/core';

interface PropTypes {
    onClick: () => void;
}

const GoBackButton: React.FC<PropTypes> = (props) => {
    return (
        <Box className={classes.backArrow} onClick={props.onClick}>
            <ArrowBackIcon className={classes.backArrowIconDesktop} />
            <BackArrowMob className={classes.backArrowIconMobile} />
            <Typography> BACK</Typography>
        </Box>
    );
};

export default GoBackButton;
