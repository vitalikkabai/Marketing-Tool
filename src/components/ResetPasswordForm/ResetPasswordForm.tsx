import React, {useEffect} from 'react';
import {Box, Grid, Typography, Container} from '@material-ui/core';
import classes from './ResetPasswordForm.module.scss';
import CustomInput from '../common/Input/CustomInput';
import GoBackButton from '../common/Button/GoBackButton';
import CustomButton from '../common/Button/CustomButton';
import {useFormik} from "formik";
import * as Yup from "yup";

type PropsType = {
    resetEmailAddress: string
    cleanSuccess: () => { type: string };
    errorText: { code: string, message: string, name: string }
    sendNewPassword: (email: string, code: string, newPassword: string) => { payload: { code: string, newPassword: string, email: string }, type: string }
    isPending: boolean;
};

const ResetPasswordForm: React.FC<PropsType> = (props) => {
    const formik = useFormik({
        initialValues: {
            code: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            code: Yup.string()
                .required('Required'),
            password: Yup.string()
                .min(6,"The password must be at least 6 characters")
                .required("Required"),
            confirmPassword: Yup.string().when("password", {
                is: (val:string) => (!!(val && val.length > 0)),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Password mismatched"
                )
            }).required("Required")
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            props.sendNewPassword(
                props.resetEmailAddress,
                formik.values.code,
                formik.values.password
            );
        },
    });

    useEffect(() => {
        //Detect async error status
        switch (props.errorText.code) {
            case 'LimitExceededException': {
                formik.setFieldError("code", 'Attempt limit exceeded, try again later')
                break;
            }
            case 'CodeMismatchException': {
                formik.setFieldError("code", 'Invalid verification code')
                break;
            }
            case 'UserLambdaValidationException': {
                formik.setFieldError("code", 'Server error occurred, try again later')
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
                className={classes.registrationContainer}
            >
                <Grid item sm={6}>
                    <Box className={classes.loginSheet}>
                        <GoBackButton
                            onClick={() => {
                                props.cleanSuccess();
                            }}
                        />
                        <Grid item className={classes.gridItem}>
                            <Typography variant="h2" className={classes.header}>
                                Reset password
                            </Typography>
                        </Grid>
                        <Grid item className={classes.formContainer}>
                            <form onSubmit={formik.handleSubmit} style={{height: "100%"}}>
                                <Grid container direction="column" style={{height: "100%"}}>
                                    <Grid item style={{marginBottom: "24px"}}>
                                        <CustomInput
                                            type="text"
                                            label="Code"
                                            fullWidth
                                            name="code"
                                            value={formik.values.code}
                                            helperText={formik.touched.code && formik.errors.code}
                                            onChange={formik.handleChange}
                                            width={290}
                                            error={formik.touched.code && Boolean(formik.errors.code)}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item style={{marginBottom: "24px"}}>
                                        <CustomInput
                                            type="password"
                                            label="New password"
                                            fullWidth
                                            name="password"
                                            onChange={formik.handleChange}
                                            width={290}
                                            helperText={formik.touched.password && formik.errors.password}
                                            error={formik.touched.password && Boolean(formik.errors.password)}
                                            value={formik.values.password}
                                        />
                                    </Grid>
                                    <Grid item style={{marginBottom: "24px"}}>
                                        <CustomInput
                                            type="password"
                                            label="Retype password"
                                            fullWidth
                                            name="confirmPassword"
                                            onChange={formik.handleChange}
                                            width={290}
                                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                            value={formik.values.confirmPassword}
                                        />
                                    </Grid>
                                    <Grid item className={classes.nextButton}>
                                        <CustomButton
                                            className={classes.buttonBlock}
                                            type="submit"
                                            text="Reset"
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

export default ResetPasswordForm;
