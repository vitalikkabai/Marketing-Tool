import React, { useState } from "react";
import { Button, Grid, Link, Paper, TextField, Typography, Box, FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { Auth } from "aws-amplify"
import classes from "./RegisterForm.module.scss";
import { useHistory } from "react-router";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { AppStateType } from "../../store/store";

const RegisterForm = () => {

    const [hasExperienceSelling, setHasExperienceSelling] = useState(false);
    const [sellingURLs, setSellingURLs] = useState<string[]>(["url 1", "url 2"]);

    const [hasWebsite, setHasWebsite] = useState(false);
    const [websiteURLs, setWebsiteURLs] = useState<string[]>(["url 1", "url 2"]);

    console.log(hasExperienceSelling, websiteURLs)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit")

    }
    return (
        <form onSubmit={handleSubmit}>

        <Box className={classes.registrationSheet}>
            <Box className={classes.backArrow}>
                <Typography><ArrowBackIcon /> BACK</Typography>
            </Box>
            <Typography className={classes.header}>Registration</Typography>
            <Box className={classes.formContainer}>
                <Typography>Do you already have experience selling online?</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-outlined"
                        value={hasExperienceSelling ? 1 : 0}
                        onChange={e => setHasExperienceSelling(e.target.value as boolean)}
                        label="Age"
                    >
                        <MenuItem value={0}>No</MenuItem>
                        <MenuItem value={1}>Yes</MenuItem>
                    </Select>
                </FormControl>
                {
                    hasExperienceSelling ?
                    sellingURLs.map((URL, index) => (
                        <TextField
                            type="text"
                            fullWidth
                            key={index}
                            name="Website URL address"
                            variant="outlined"
                            value={URL}
                            onChange={(event) =>
                                setSellingURLs((prevURLs) => {
                                    const newURLs = [...prevURLs];
                                    newURLs[index] = event.target.value;
                                    return newURLs;
                                })
                            }
                            required
                            autoFocus
                        />
                    ))

                        : <Typography>We will get you there in 3 steps</Typography>
                }
                <Typography>Do you already have a website?</Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-outlined"
                        value={hasWebsite ? 1 : 0}
                        onChange={e => setHasWebsite(e.target.value as boolean)}
                        label="Age"
                    >
                        <MenuItem value={0}>No</MenuItem>
                        <MenuItem value={1}>Yes</MenuItem>
                    </Select>
                </FormControl>
                {
                    hasWebsite ?
                    websiteURLs.map((URL, index) => (
                        <TextField
                            type="text"
                            fullWidth
                            key={index}
                            name="Website URL address"
                            variant="outlined"
                            value={URL}
                            onChange={(event) =>
                                setWebsiteURLs((prevURLs) => {
                                    const newURLs = [...prevURLs];
                                    newURLs[index] = event.target.value;
                                    return newURLs;
                                })
                            }
                            required
                            autoFocus
                        />
                    ))

                        : <Typography>We will get you there in 3 steps</Typography>
                }
            </Box>
            <Button type="submit">NEXT</Button>
            <Typography>Have an account already? Log in</Typography>
        </Box>
        </form>
    )
}

const RegisterForm1 = () => {

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [signedUp, setSignedUp] = useState(false);
    const history = useHistory();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!signedUp) {
            Auth.signUp({
                username: userName,
                password: password,
                attributes: {
                    email: email
                }
            }).then(() => console.log("signed up")).catch(err => console.log(err));
            setSignedUp(true);
        } else {
            Auth.confirmSignUp(userName, confirmationCode)
                .then(() => history.push("login"))
                .catch(err => console.log(err));
        }
    }


    if (!signedUp) {
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
                            <Grid item className={classes.gridItem}>
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
                            <Grid item style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Link href="#" variant="body2">
                                    Have an account?
                                </Link>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    } else {
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
                            <Grid item className={classes.gridItem}>
                                <Typography component="h1" variant="h5" align={"center"}>
                                    Register
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={handleSubmit}>
                                    <Grid container direction="column" spacing={2}>
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
                                                type="text"
                                                placeholder="Confirm code"
                                                fullWidth
                                                name="code"
                                                variant="outlined"
                                                value={confirmationCode}
                                                onChange={(event) =>
                                                    setConfirmationCode(event.target.value)
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
                                                Confirm
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default RegisterForm;