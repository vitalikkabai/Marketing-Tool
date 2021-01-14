import React, { useState } from "react";
import { Button, Grid, Link, Paper, TextField, Typography, Box, FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";
import { Auth } from "aws-amplify"
import classes from "./RegisterForm.module.scss";
import { useHistory } from "react-router";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FormContainerType } from './RegisterFormContainer';

const RegisterForm:React.FunctionComponent<FormContainerType> = (props) => {
    const history = useHistory();
    const [hasExperienceSelling, setHasExperienceSelling] = useState(props.haveExperienceSelling);
    const [sellingURLs, setSellingURLs] = useState<string[]>(props.storeURLs);

    const [hasWebsite, setHasWebsite] = useState(props.haveWebsite);
    const [websiteURLs, setWebsiteURLs] = useState<string[]>(props.websiteURLs);

    console.log(hasExperienceSelling, websiteURLs)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        props.setStepOne({
            haveExperienceSelling: hasExperienceSelling,
            storeURLs:sellingURLs,
            haveWebsite: hasWebsite,
            websiteURLs
        });
        history.push("register/2")


    }

    return (

        <Box className={classes.registrationSheet}>
            <Box className={classes.backArrow}>
                <Typography><ArrowBackIcon /> BACK</Typography>
            </Box>
            <Typography className={classes.header}>Registration</Typography>
            <form onSubmit={handleSubmit}>

            <Box className={classes.formContainer}>

                    <Typography>Do you already have experience selling online?</Typography>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label"/>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-outlined"
                            value={hasExperienceSelling ? 1 : 0}
                            onChange={e => setHasExperienceSelling(!!e.target.value)}
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
                        <InputLabel id="demo-simple-select-label"/>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select-outlined"
                            value={hasWebsite ? 1 : 0}
                            onChange={e => setHasWebsite(!!e.target.value)}
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
            </form>

        </Box>
    )
}

export default RegisterForm;