import { Box, Button, Typography } from "@material-ui/core";
import React from 'react';
import classes from './RegisterForm.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const RegisterFinForm: React.FunctionComponent = () => {


    return (
        <Box className={classes.registrationSheet}>
            <Box className={classes.backArrow}>
                <Typography><ArrowBackIcon /> BACK</Typography>
            </Box>
            <Typography className={classes.header}>Registration</Typography>
            <Box className={classes.formContainer}>
                <Typography>Do you already have a website?</Typography>

            </Box>
            <Button>NEXT</Button>
            <Typography>Have an account already? Log in</Typography>
        </Box>
    );
}

export default RegisterFinForm;