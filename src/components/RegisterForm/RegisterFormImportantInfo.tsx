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
import {isEmpty, validateField} from "../../utils/validators/validators";

const RegisterFormImportantInfo: React.FunctionComponent<RegisterFormImportantInfoContainerType> = (props) => {

    const history = useHistory();
    const [isPending, setPending] = useState(false);
    const [inputValue, setInputValue] = useState({ //For input values
        companyName: {value: props.companyName, touched: false, error: false, errorText: "", name: "COMPANY_NAME"},
        countryName: {value: props.country, touched: false, error: false, errorText: "", name: "COUNTRY_NAME"},
        cityName: {value: props.city, touched: false, error: false, errorText: "", name: "CITY"},
        businessNumber: {value: props.businessNumber, touched: false, error: false, errorText: "", name: "BUSINESS_NUMBER"},
        ownerName: {value: props.profile.name, touched: false, error: false, errorText: "", name: "OWNER_NAME"},
        ownerEmail: {value: props.profile.email, touched: false, error: false, errorText: "", name: "OWNER_EMAIL"},
        password: {value: "", touched: false, error: false, errorText: "", name: "PASSWORD"},
        confirmPassword: {value: "", touched: false, error: false, errorText: "", name: "CONFIRM_PASSWORD"},
    });

    const handleInput = (inputData: string, inputType: string) => {
        setInputValue((prevInput) => {
            const currInputValue = Object.assign({}, prevInput);
            switch (inputType) {
                case prevInput.companyName.name: {
                    currInputValue.companyName.value = inputData;
                    currInputValue.companyName.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.companyName.error = !!errorArray[0];
                    currInputValue.companyName.errorText = errorArray[0];
                    break;
                }
                case prevInput.countryName.name: {
                    currInputValue.countryName.value = inputData;
                    currInputValue.countryName.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.countryName.error = !!errorArray[0];
                    currInputValue.countryName.errorText = errorArray[0];
                    break;
                }
                case prevInput.cityName.name: {
                    currInputValue.cityName.value = inputData;
                    currInputValue.cityName.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.cityName.error = !!errorArray[0];
                    currInputValue.cityName.errorText = errorArray[0];
                    break;
                }
                case prevInput.businessNumber.name: {
                    currInputValue.businessNumber.value = inputData;
                    currInputValue.businessNumber.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.businessNumber.error = !!errorArray[0];
                    currInputValue.businessNumber.errorText = errorArray[0];
                    break;
                }
                case prevInput.ownerName.name: {
                    currInputValue.ownerName.value = inputData;
                    currInputValue.ownerName.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.ownerName.error = !!errorArray[0];
                    currInputValue.ownerName.errorText = errorArray[0];
                    break;
                }
                case prevInput.ownerEmail.name: {
                    currInputValue.ownerEmail.value = inputData;
                    currInputValue.ownerEmail.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.ownerEmail.error = !!errorArray[0];
                    currInputValue.ownerEmail.errorText = errorArray[0];
                    break;
                }
                case prevInput.password.name: {
                    currInputValue.password.value = inputData;
                    currInputValue.password.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.password.error = !!errorArray[0];
                    currInputValue.password.errorText = errorArray[0];
                    break;
                }

                case prevInput.confirmPassword.name: {
                    currInputValue.confirmPassword.value = inputData;
                    currInputValue.confirmPassword.touched = true;
                    const errorArray = validateField(inputData,
                        isEmpty(inputData));
                    currInputValue.confirmPassword.error = !!errorArray[0];
                    currInputValue.confirmPassword.errorText = errorArray[0];
                    break;
                }

                default:
                    break;
            }
            return currInputValue
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Signed up with credits: " + inputValue.ownerEmail.value + " " + inputValue.password.value +
            " " + inputValue.ownerName.value);

        /*
        saveInputData();
        props.signUp(inputValue.ownerEmail.value, inputValue.password.value, inputValue.ownerName.value);
        history.push("");
         */
    }

    const handleBackPressed = () => {
        saveInputData();
        history.goBack()
    }

    const saveInputData = () => {
        props.setStepTwo({
            companyName:  inputValue.companyName.value,
            country:  inputValue.countryName.value,
            city:  inputValue.cityName.value,
            businessNumber: inputValue.businessNumber.value,
        });
        props.setProfile(new Profile({
            name: inputValue.ownerName.value,
            email: inputValue.ownerEmail.value,
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
                                        value={inputValue.companyName.value}
                                        error={inputValue.companyName.error}
                                        variant="outlined"
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "COMPANY_NAME")
                                        }
                                    />
                                    <CustomInput
                                        label="Country"
                                        placeholder={"Country Name"}
                                        fullWidth={true}
                                        value={inputValue.countryName.value}
                                        error={inputValue.countryName.error}
                                        variant="outlined"
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "COUNTRY_NAME")
                                        }
                                    />
                                    <CustomInput
                                        label="City"
                                        variant="outlined"
                                        placeholder={"City"}
                                        fullWidth={true}
                                        value={inputValue.cityName.value}
                                        error={inputValue.cityName.error}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "CITY")
                                        }
                                    />
                                    <CustomInput
                                        label="Business Number"
                                        variant="outlined"
                                        placeholder={"Business Number"}
                                        fullWidth={true}
                                        value={inputValue.businessNumber.value}
                                        error={inputValue.businessNumber.error}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "BUSINESS_NUMBER")
                                        }
                                    />
                                </Grid>
                                <Grid item xs={5} style={{ paddingLeft: "12px" }}>
                                    <CustomInput
                                        label="Name"
                                        variant="outlined"
                                        placeholder={"Name"}
                                        fullWidth={true}
                                        value={inputValue.ownerName.value}
                                        error={inputValue.ownerName.error}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "OWNER_NAME")
                                        }
                                    />
                                    <CustomInput
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        placeholder={"email"}
                                        fullWidth={true}
                                        value={inputValue.ownerEmail.value}
                                        error={inputValue.ownerEmail.error}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "OWNER_EMAIL")
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        name="password"
                                        placeholder={"Password"}
                                        fullWidth={true}
                                        value={inputValue.password.value}
                                        error={inputValue.password.error}
                                        margin={"0 0 16px 0"}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "PASSWORD")
                                        }
                                    />
                                    <CustomInput
                                        type="password"
                                        name="password"
                                        label="Repeat Password"
                                        variant="outlined"
                                        placeholder={"Repeat Password"}
                                        fullWidth={true}
                                        value={inputValue.confirmPassword.value}
                                        error={inputValue.confirmPassword.error}
                                        onChange={(event: any) =>
                                            handleInput(event.target.value, "CONFIRM_PASSWORD")
                                        }
                                    />
                                </Grid>
                                <Grid item xs={1} />
                            </Grid>
                        </Box>
                        <Grid item className={classes.errorText}>
                            <Typography variant={"subtitle1"}>

                            </Typography>
                        </Grid>
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