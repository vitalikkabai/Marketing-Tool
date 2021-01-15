import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from 'react';
import classes from './RegisterForm.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FormStepTwoContainerType } from './RegisterFormStepTwoContainer';
import { useHistory } from "react-router";

const RegisterFormStepTwo: React.FunctionComponent<FormStepTwoContainerType> = (props) => {

    const history = useHistory();
    const [companyName, setCompanyName] = useState(props.companyName);
    const [countryName, setCountryName] = useState(props.country);
    const [cityName, setCityName] = useState(props.city);
    const [businessNumber, setBusinessNumber] = useState(props.businessNumber);
    const [ownerName, setOwnerName] = useState(props.ownerName);
    const [ownerEmail, setOwnerEmail] = useState(props.ownerEmailAddress);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submited")
        saveInputData();
        props.signUp(ownerEmail, password, ownerName);
    }

    const handleBackPressed = () => {
        console.log("here")
        console.log(props.setStepTwo)
        saveInputData();
        history.push('/register')
    }

    const saveInputData = () => {
        props.setStepTwo({
            companyName,
            country: countryName,
            city: cityName,
            businessNumber,
        })
    }

    return (
        <Box className={classes.registrationSheet}>
            <form onSubmit={handleSubmit}>
                <Box className={classes.backArrow} onClick={handleBackPressed}>
                    <Typography><ArrowBackIcon /> BACK</Typography>
                </Box>
                <Typography className={classes.header}>Registration</Typography>
                <Box className={classes.formContainer}>
                <TextField
                        label="Company Name"
                        variant="outlined"
                        value={companyName}
                        onChange={(event) =>
                            setCompanyName(event.target.value)
                        }
                    />
                <TextField
                        label="Country"
                        variant="outlined"
                        value={countryName}
                        onChange={(event) =>
                            setCountryName(event.target.value)
                        }
                    />
                <TextField
                        label="City"
                        variant="outlined"
                        value={cityName}
                        onChange={(event) =>
                            setCityName(event.target.value)
                        }
                    />
                <TextField
                        label="Business Number"
                        variant="outlined"
                        value={businessNumber}
                        onChange={(event) =>
                            setBusinessNumber(event.target.value)
                        }
                    />
                <TextField
                        label="Name"
                        variant="outlined"
                        value={ownerName}
                        onChange={(event) =>
                            setOwnerName(event.target.value)
                        }
                    />
                    <TextField
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={ownerEmail}
                        onChange={(event) =>
                            setOwnerEmail(event.target.value)
                        }
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                    />
                    <TextField
                        type="password"
                        label="RepeatPassword"
                        variant="outlined"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassword(event.target.value)
                        }
                    />

                </Box>
                <Button type="submit">dashboard</Button>
                <Typography>Have an account already? Log in</Typography>
            </form>

        </Box>
    );
}

export default RegisterFormStepTwo;