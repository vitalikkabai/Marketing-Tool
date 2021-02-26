import React, {useEffect} from 'react';
import {Box, Grid, Typography, Container} from '@material-ui/core';
import classes from './ResetPasswordForm.module.scss';
import {useHistory} from 'react-router';
import CustomInput from '../common/Input/CustomInput';
import GoBackButton from '../common/Button/GoBackButton';
import CustomButton from '../common/Button/CustomButton';
import {useFormik} from "formik";
import * as Yup from "yup";

type PropsType = {
    isNewPasswordEntered: boolean;
    isEmailEntered: boolean
    sendEmail: (value: string) => void
    errorText: {code: string, message: string, name: string}
    isPending: boolean;
};

const SendResetLink: React.FC<PropsType> = (props) => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required('Required'),
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            if (!props.isNewPasswordEntered && !props.isEmailEntered) {
                props.sendEmail(formik.values.email);
            }
        },
    });

    useEffect(() => {
        //Detect async error status
        switch (props.errorText.code) {
            case 'UserNotFoundException': {
                formik.setFieldError("email", 'User not found')
                break;
            }
            case 'LimitExceededException': {
                formik.setFieldError("email", 'Attempt limit exceeded, try again later')
                break;
            }
        }
    }, [props.errorText]);

    return (
        <Container>
            <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.registrationContainer}>
                <Grid item sm={6}>
                    <Box className={classes.loginSheet}>
                        <GoBackButton
                            onClick={() => {
                                history.push('/login');
                            }}
                        />
                        <Grid item className={classes.gridItem}>
                            <Typography variant="h2" className={classes.header}>
                                Reset password
                            </Typography>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Typography
                                variant="subtitle1"
                                className={classes.subtitle}
                            >
                                Enter your email address and we will send you a
                                reset link.
                            </Typography>
                        </Grid>
                        <Grid item className={classes.formContainer}>
                            <form onSubmit={formik.handleSubmit} style={{height: "100%"}}>
                                <Grid container direction="column" className={classes.gridContainer}>
                                    <Grid item>
                                        <CustomInput
                                            type="text"
                                            label="Company email"
                                            name="email"
                                            fullWidth
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            width={290}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item className={classes.nextButton}>
                                        <CustomButton
                                            className={classes.buttonBlock}
                                            type="submit"
                                            text="Send"
                                            isPending={props.isPending}
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SendResetLink;
