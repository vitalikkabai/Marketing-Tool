import {Box, Button, Grid, Typography} from "@material-ui/core";
import React, {useState} from 'react';
import classes from './RegisterForm.module.scss';
import {FormStepTwoContainerType} from './RegisterFormStepTwoContainer';
import {useHistory} from "react-router";
import GoBackButton from "../common/Button/GoBackButton";
import UxAssistant from "./UxAssistant";
import CustomInput from "../common/Input/CustomInput";

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
        props.signUp(ownerEmail, password);
    }

    const handleBackPressed = () => {
        saveInputData();
        history.push('/register')
    }

    const saveInputData = () => {
        props.setStepTwo({
            companyName,
            country: countryName,
            city: cityName,
            businessNumber,
            ownerName,
            ownerEmailAddress: ownerEmail,
        })
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.registerForm}>
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={handleBackPressed}/>
                    <UxAssistant assistantText={"Tell us about yourself"} stepNumber={3}/>
                    <form onSubmit={handleSubmit}>
                        <Box className={classes.formContainer}>
                            <Grid container>
                                <Grid item xs={1}/>
                                <Grid item xs={4}>
                                    <CustomInput
                                        label="Company Name"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        variant="outlined"
                                        value={companyName}
                                        onChange={(event:any) =>
                                            setCompanyName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        label="Country"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        variant="outlined"
                                        value={countryName}
                                        onChange={(event:any) =>
                                            setCountryName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        label="City"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={cityName}
                                        onChange={(event:any) =>
                                            setCityName(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        label="Business Number"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={businessNumber}
                                        onChange={(event:any) =>
                                            setBusinessNumber(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1}/>
                                <Grid item xs={4}>
                                    <CustomInput
                                        label="Name"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={ownerName}
                                        onChange={(event:any) =>
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
                                        onChange={(event:any) =>
                                            setOwnerEmail(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={password}
                                        onChange={(event:any) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        label="RepeatPassword"
                                        variant="outlined"
                                        placeholder={"Company Name"}
                                        fullWidth={true}
                                        value={confirmPassword}
                                        onChange={(event:any) =>
                                            setConfirmPassword(event.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1}/>
                            </Grid>

                        </Box>
                        <Button type="submit">dashboard</Button>
                        <Typography>Have an account already? Log in</Typography>
                    </form>

                </Box>
            </Grid>
        </Grid>
    );
}

export default RegisterFormStepTwo;