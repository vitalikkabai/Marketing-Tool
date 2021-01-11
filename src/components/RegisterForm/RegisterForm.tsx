import React, {useState} from "react";
import {Button, Grid, Link, Paper, TextField, Typography} from "@material-ui/core";
import classes from "./RegisterForm.module.scss";


const RegisterForm = () => {

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [signedUp, setSignedUp] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault()
    }

    return (
        <Grid container justify={"center"} alignItems={"center"} className={classes.wrapper}>
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
                            <Typography component="h1" variant="h5" align={"center"}>
                                Register
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
                                            value={email}
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="text"
                                            placeholder="Username"
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
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                Have an account?
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default RegisterForm;