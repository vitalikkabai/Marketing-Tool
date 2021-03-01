import React, { useEffect, useState } from 'react';
import classes from './LoginForm.module.scss';
import { PropsFromRedux } from './LoginFormContainer';
import {
    Box,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router';
import CustomInput from '../common/Input/CustomInput';
import GoBackButton from '../common/Button/GoBackButton';
import CustomButton from '../common/Button/CustomButton';
import {useFormik} from "formik";
import * as Yup from "yup";

const LoginForm: React.FC<PropsFromRedux> = (props) => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("This field cannot be empty"),
            password: Yup.string()
                .trim()
                .required("This field cannot be empty"),
        }),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: () => {
            setPending(true);
            props.signIn(formik.values.username, formik.values.password);
        },
    });
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    useEffect(() => {
        //Detect async error status
        if (props.errorText.code) setPending(false);
        switch (props.errorText.code) {
            case 'UserNotFoundException': {
                formik.setFieldError("username", props.errorText.message.replace(/\.$/, ''))
                break;
            }

            case 'NotAuthorizedException': {
                formik.setFieldError("username", props.errorText.message.replace(/\.$/, ''))
                formik.setFieldError("password", props.errorText.message.replace(/\.$/, ''))
                break;
            }
        }
    }, [props.errorText]);

    useEffect(() => { //CleanErrors on unmount
        return function cleanup() {
            props.cleanErrors();
        };
    }, []);

    if (props.isAuth) {//Redirect authorised user
        history.push('');
    }

    return (
        <Grid container justify="center" alignItems={'center'}>
            <Grid container direction="column" justify="center">
                <Box className={classes.loginSheet}>
                    <GoBackButton
                        onClick={() => {
                            history.push('/');
                        }}
                    />
                    <Grid item className={classes.formContainer}>
                        <form onSubmit={formik.handleSubmit} style={{height: "100%"}}>
                            <Grid container direction="column" style={{height: "100%"}}>
                                <Grid item>
                                    <Typography variant="h2" className={classes.header}>
                                        Login
                                    </Typography>
                                </Grid>
                                <Grid item className={classes.usernameGridItem}>
                                    <CustomInput
                                        type="text"
                                        placeholder="Email"
                                        label="Email"
                                        name="username"
                                        error={formik.touched.username && Boolean(formik.errors.username)}
                                        helperText={formik.touched.username && formik.errors.username}
                                        value={formik.values.username}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        width={290}
                                        autoFocus
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item className={classes.passwordGridItem}>
                                    <CustomInput
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        name="password"
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        width={290}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item container className={classes.buttonContainer}>
                                    <Grid item className={classes.loginButton}>
                                        <CustomButton
                                            type={'submit'}
                                            text={'Log in'}
                                            borderRadius={"10px"}
                                            isPending={isPending}
                                        />
                                    </Grid>
                                    <Grid item className={classes.forgotPassword}>
                                        <Typography
                                            variant="subtitle1"
                                            onClick={() => {
                                                history.push('resetPassword');
                                            }}
                                        >
                                            Forgot your password?
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.createAccount}>
                                        <Typography variant={'subtitle1'}>
                                            Don’t have an account yet?&nbsp;
                                            <Link
                                                variant={'subtitle1'}
                                                className={classes.link}
                                                onClick={() => {
                                                    history.push('register');
                                                }}
                                            >
                                                Register
                                            </Link>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginForm;
