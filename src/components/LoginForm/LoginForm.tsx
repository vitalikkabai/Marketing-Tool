import React, { useEffect, useState } from "react";
import classes from "./LoginForm.module.scss";
import { PropsFromRedux } from "./LoginFormContainer";
import { Box, CircularProgress, Grid, Link, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import CustomInput from "../common/Input/CustomInput"
import GoBackButton from "../common/Button/GoBackButton";
import CustomButton from "../common/Button/CustomButton";
import { isEmail, isEmpty } from "../../utils/validators/validators";

const LoginForm: React.FC<PropsFromRedux> = (props) => {

    const [inputValue, setInputValue] = useState({ //For input values
        username: { value: "", touched: false, error: false, errorText: "", name: "USER_NAME" },
        password: { value: "", touched: false, error: false, errorText: "", name: "PASSWORD" }
    });
    const [isPending, setPending] = useState(false);
    const history = useHistory();

    useEffect(() => { //Detect async error status
        if (props.errorText.code) setPending(false);
        switch (props.errorText.code) {
            case "UserNotFoundException": {
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    username: { ...prevStyle.username, error: true },
                    password: { ...prevStyle.password, error: false },
                }));
                break;
            }

            case "NotAuthorizedException": {
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    username: { ...prevStyle.username, error: true },
                    password: { ...prevStyle.password, error: true },
                }));
                break;
            }
        }
    }, [props.errorText]);

    useEffect(() => { //CleanErrors on unmount
        return function cleanup() {
            props.cleanErrors();
        };
    }, [])


    const handleInput = (inputData: string, inputType: string) => {
        props.cleanErrors();
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.username.name: {
                    currInputValue.username.value = inputData;
                    currInputValue.username.touched = true;
                    const error = isEmpty(inputData);
                    currInputValue.username.error = !!error;
                    currInputValue.username.errorText = error;
                    break;
                }
                case prevInput.password.name: {
                    currInputValue.password.value = inputData;
                    currInputValue.password.touched = true;
                    const error = isEmpty(inputData);
                    currInputValue.password.error = !!error;
                    currInputValue.password.errorText = error;
                    break;
                }
                default:
                    break;
            }
            return currInputValue;
        })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.cleanErrors();
        if (inputValue.username.value && inputValue.password.value && !isEmail(inputValue.username.value)) {
            setPending(true);
            props.signIn(inputValue.username.value, inputValue.password.value);
        } else {//if fields is empty or email is invalid
            if (isEmail(inputValue.username.value))
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    username: { ...prevStyle.username, error: true, errorText: isEmail(inputValue.username.value) }
                }));
            if (!inputValue.username.value)
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    username: { ...prevStyle.username, error: true, errorText: "This field cannot be empty" }
                }));
            if (!inputValue.password.value)
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    password: { ...prevStyle.password, error: true, errorText: "This field cannot be empty" }
                }));
        }
    }

    const getErrorMessage = () => { //Setting error messages
        if (props.errorText.message) return props.errorText.message.replace(/\.$/, "");
        if (inputValue.username.errorText) return inputValue.username.errorText;
        if (inputValue.password.errorText) return inputValue.password.errorText;
        return "";
    }

    if (props.isAuth) { //Redirect authorised user
        history.push("")
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center">
                <Box className={classes.loginSheet}>
                    <GoBackButton onClick={() => {
                        history.push("/")
                    }} />
                    <Grid item>
                        <Typography variant="h2" className={classes.header}>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item className={classes.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <CustomInput
                                        type="text"
                                        placeholder="Email"
                                        label="Email"
                                        error={inputValue.username.error}
                                        fullWidth
                                        name="username"
                                        value={inputValue.username.value}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "USER_NAME")
                                        }
                                        width={290}
                                        autoFocus />
                                </Grid>
                                <Grid item className={classes.passwordGridItem}>
                                    <CustomInput
                                        type="password"
                                        placeholder="Password"
                                        label="Password"
                                        error={inputValue.password.error}
                                        fullWidth
                                        name="password"
                                        value={inputValue.password.value}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "PASSWORD")
                                        }

                                        width={290} />
                                </Grid>
                                <Grid item className={classes.loginButton}>
                                    <CustomButton type={"submit"} text={isPending ? "" : "Log in"}
                                        className={isPending ? classes.disabledBtn : ""} />
                                    {isPending &&
                                        <CircularProgress size={24} className={classes.buttonProgress} color="secondary" />}
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item className={classes.forgotPassword}>
                        <Typography variant="subtitle1"
                            onClick={() => {
                                history.push("resetPassword")
                            }}>
                            Forgot your password?
                        </Typography>
                    </Grid>
                    <Grid item className={classes.errorText}>
                        <Typography variant={"subtitle1"}>
                            {getErrorMessage()}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.createAccount}>
                        <Typography variant={"subtitle1"}>Don’t have an account yet?&nbsp;
                            <Link variant={"subtitle1"} className={classes.link}
                                onClick={() => {
                                    history.push("register")
                                }}>
                                Register
                            </Link>
                        </Typography>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}


export default LoginForm;