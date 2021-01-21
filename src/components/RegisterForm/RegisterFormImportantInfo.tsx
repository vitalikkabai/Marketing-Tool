import { Box, Grid, Link, Typography } from "@material-ui/core";
import React, { useState } from 'react';
import classes from './RegisterForm.module.scss';
import {RegisterFormImportantInfoContainerType} from './RegisterFormImportantInfoContainer';
import {useHistory} from "react-router";
import GoBackButton from "../common/Button/GoBackButton";
import UxAssistant from "./UxAssistant";
import CustomInput from "../common/Input/CustomInput";
import CustomButton from "../common/Button/CustomButton";
import { Profile } from "../../models";

const RegisterFormImportantInfo: React.FunctionComponent<RegisterFormImportantInfoContainerType> = (props) => {

    const history = useHistory();
    const [companyName, setCompanyName] = useState(props.companyName);
    const [countryName, setCountryName] = useState(props.country);
    const [cityName, setCityName] = useState(props.city);
    const [businessNumber, setBusinessNumber] = useState(props.businessNumber);
    const [ownerName, setOwnerName] = useState(props.profile.name);
    const [ownerEmail, setOwnerEmail] = useState(props.profile.email);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveInputData();
        props.signUp(ownerEmail, password, ownerName);
        history.push("");
    }

    const handleBackPressed = () => {
        saveInputData();
        history.goBack()
    }

    const saveInputData = () => {
        props.setStepTwo({
            companyName,
            country: countryName,
            city: cityName,
            businessNumber,
        });
        props.setProfile(new Profile({
            name: ownerName,
            email: ownerEmail,
            ownerUID: "",
            businessID: ""
        }))
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.registerForm}>
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={handleBackPressed} />
                    <UxAssistant assistantText={"Tell us about yourself"} stepNumber={3} />
                    <form onSubmit={handleSubmit}>
                        <Box className={classes.formContainer}>
                            <Grid container>
                                <Grid item xs={1} />
                                <Grid item xs={5} style={{ paddingRight: "12px" }}>
                                    <CustomInput
                                        label="Company Name"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        variant="outlined"
                                        value={companyName}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            setCompanyName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        label="Country"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        variant="outlined"
                                        value={countryName}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            setCountryName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        label="City"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={cityName}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            setCityName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        label="Business Number"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={businessNumber}
                                        onChange={(event: any) =>
                                            setBusinessNumber(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={5} style={{ paddingLeft: "12px" }}>
                                    <CustomInput
                                        label="Name"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={ownerName}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            setOwnerName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={ownerEmail}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            setOwnerEmail(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        name="password"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={password}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        name="password"
                                        label="Repeat Password"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={confirmPassword}
                                        onChange={(event: any) =>
                                            setConfirmPassword(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1} />
                            </Grid>
                        </Box>
                        <Grid item className={classes.nextContainer}>
                            <CustomButton type={"submit"} className={classes.buttonBlock} text={"Dashboard"} />
                            <Typography variant={"subtitle1"}>Have an account already?&nbsp;
                                <Link className={classes.link} onClick={() => {
                                    history.replace("/login")
                                }}>Log in</Link>
                            </Typography>
                        </Grid>
                    </form>

                </Box>
            </Grid>
        </Grid>
    );
}

export default RegisterFormImportantInfo;