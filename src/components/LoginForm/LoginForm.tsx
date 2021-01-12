import React, {useEffect, useState} from "react";
import {Button, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import classes from "./LoginForm.module.scss";
import {Auth} from "aws-amplify";
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

    useEffect(()=>{
        if(props.isAuth) history.push("");
    });


    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.signIn(username, password);
    }

    return (
        <Grid container justify="center" alignItems={"center"} className={classes.wrapper}>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={2}
                    className={classes.loginForm}
                >
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className={classes.loginBackground}
                    >
                        <Grid item className={classes.gridItem}>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                        </Grid>
                        <Grid item>
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
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className={classes.buttonBlock}
                                        >
                                            LogIn
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item style={{display: "flex", justifyContent: "flex-end"}}>
                            <Link href="#" variant="body2" onClick={() => {
                                Auth.currentUserInfo().then((userInfo) => {
                                    console.log(userInfo);
                                })
                            }}>
                                Forgot Password?
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default LoginForm;