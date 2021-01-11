import React, {useState} from "react";
import {Button, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import classes from "./LoginForm.module.scss";
import {Auth} from "aws-amplify";


const LoginForm = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [signedIn, setSignedIn] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        Auth.signIn({
            username: userName,
            password: password,
        }).then(() => alert("Signed In")).catch(err => console.log(err));
        setSignedIn(true);
        Auth.confirmSignIn(userName, confirmationCode)
            .then(() => console.log("confirmed"))
            .catch(err => console.log(err));
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
                                            value={userName}
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
                            <Link href="#" variant="body2">
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