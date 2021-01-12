import React, {useState} from "react";
import {Box, Button, Grid, Link, TextField, Typography} from "@material-ui/core";
import classes from "./LoginForm.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {useHistory} from "react-router";

type PropsType = {
    isAuth: boolean
    signIn: (username: string, password: string) => void
    getAuthData: () => void
}

const LoginForm: React.FC<PropsType> = (props) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.signIn(username, password);
    }

    if (props.isAuth) {
        history.push("")
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.loginForm}>
                <Box className={classes.loginSheet}>
                    <Box className={classes.backArrow}>
                        <ArrowBackIcon/>
                        <Typography> BACK</Typography>
                    </Box>
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h5" className={classes.header}>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item className={classes.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField
                                        type="email"
                                        placeholder="Email"
                                        fullWidth
                                        name="username"
                                        variant="outlined"
                                        value={username}
                                        onChange={(event) =>
                                            setUserName(event.target.value)
                                        }
                                        required
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        type="password"
                                        placeholder="Password"
                                        fullWidth
                                        name="password"
                                        variant="outlined"
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        required
                                    />
                                </Grid>
                                <Grid item className={classes.loginButton}>
                                    <Button variant="contained" color="primary"
                                            type="submit" className={classes.buttonBlock}>
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item className={classes.forgotPassword}>
                        <Link variant="body2" className={classes.link}>
                            Forgot your password?
                        </Link>
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