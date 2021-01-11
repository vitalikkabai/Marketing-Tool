import React, {ReactElement, useState} from "react";
import {Button, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import classes from "./LoginForm.module.scss";


const LoginForm = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
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
                        <Grid item>
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
                        <Grid item>
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