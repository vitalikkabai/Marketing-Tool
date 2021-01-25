import React, {useEffect, useState} from "react";
import {Box, CircularProgress, Grid, Link, Typography} from "@material-ui/core";
import classes from "./LoginForm.module.scss";
import {useHistory} from "react-router";
import CustomInput from "../common/Input/CustomInput"
import GoBackButton from "../common/Button/GoBackButton";
import CustomButton from "../common/Button/CustomButton";
import {PropsFromRedux} from "./LoginFormContainer";
import {isEmpty, validateField} from "../../utils/validators/validators";

const LoginForm: React.FC<PropsFromRedux> = (props) => {

    const [inputValue, setInputValue] = useState({ //For input values
        username: {value: "", touched: false, error: false, errorText: "", name: "USER_NAME"},
        password: {value: "", touched: false, error: false, errorText: "", name: "PASSWORD"}
    });

    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.username.name: {
                    currInputValue.username.value = inputData;
                    currInputValue.username.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.username.error = !!errorArray[0];
                    currInputValue.username.errorText = errorArray[0];
                    break;
                }
                case prevInput.password.name: {
                    currInputValue.password.value = inputData;
                    currInputValue.password.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.password.error = !!errorArray[0];
                    currInputValue.password.errorText = errorArray[0];
                    break;
                }

                default:
                    break;
            }
            return currInputValue
        })
    }

    const [isPending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.cleanErrors();
        if (inputValue.username.value && inputValue.password.value) {
            setPending(true);
            props.signIn(inputValue.username.value, inputValue.password.value);
        } else {
            if(!inputValue.username.value)
            setInputValue(prevStyle => ({
                ...prevStyle,
                username: {...prevStyle.username, error: true, errorText: "This field cannot be empty"}
            }));
            if(!inputValue.password.value)
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    password: {...prevStyle.password, error: true, errorText: "This field cannot be empty"}
                }));
        }
    }

    useEffect(() => {
        if (props.errorText) setPending(false);
        switch (props.errorText.code) {
            case "UserNotFoundException": {
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    username: {...prevStyle.username, error: true},
                    password: {...prevStyle.password, error: false},
                }));
                break;
            }

            case "NotAuthorizedException": {
                setInputValue(prevStyle => ({
                    ...prevStyle,
                    username: {...prevStyle.username, error: true},
                    password: {...prevStyle.password, error: true},
                }));
                break;
            }
        }
    }, [props.errorText]);

    useEffect(() => {
        return function cleanup() {
            props.cleanErrors();
        };
    }, [])

    if (props.isAuth) {
        history.push("")
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.loginForm}>
                <Box className={classes.loginSheet}>
                    <GoBackButton onClick={() => {
                        history.push("/")
                    }}/>
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h2" className={classes.header}>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item className={classes.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <CustomInput
                                        type="email"
                                        placeholder="Email"
                                        label="Email"
                                        error={inputValue.username.error}
                                        fullWidth
                                        name="username"
                                        value={inputValue.username.value}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "USER_NAME")
                                        }
                                        color={"#9e9e9e"}
                                        width={290}
                                        autoFocus/>
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
                                        color={"#9e9e9e"}
                                        width={290}/>
                                </Grid>
                                <Grid item className={classes.loginButton}>
                                    <CustomButton type={"submit"} text={isPending ? "" : "Log in"}
                                                  className={isPending ? classes.buttonBlock + " " + classes.disabledBtn : classes.buttonBlock}/>
                                    {isPending &&
                                    <CircularProgress size={24} className={classes.buttonProgress} color="secondary"/>}
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
                            {props.errorText.message? props.errorText.message.replace(/\./g, '') :
                            inputValue.username.errorText?inputValue.username.errorText:inputValue.password.errorText}
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