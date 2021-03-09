import React from 'react';
import classes from './GoBackButton.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box, Typography } from '@material-ui/core';

interface PropTypes {
    onClick: () => void;
}

const GoBackButton: React.FC<PropTypes> = (props) => {
    return (
        <Box className={classes.backArrow} onClick={props.onClick}>
            <ArrowBackIcon className={classes.backArrowIconDesktop} />
            <svg  className={classes.backArrowIconMobile} width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.745304 12.8565L11.538 23.6456C12.0116 24.118 12.7788 24.118 13.2536 23.6456C13.7272 23.1732 13.7272 22.406 13.2536 21.9336L3.31698 12.0005L13.2524 2.06751C13.726 1.59513 13.726 0.827861 13.2524 0.354285C12.7788 -0.118095 12.0104 -0.118095 11.5368 0.354285L0.744108 11.1433C0.277807 11.6108 0.277807 12.3901 0.745304 12.8565Z" fill="#9E9E9E"/>
            </svg>
            <Typography> BACK</Typography>
        </Box>
    );
};

export default GoBackButton;
