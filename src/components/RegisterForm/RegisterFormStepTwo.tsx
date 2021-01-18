import {Box, Grid, Link, Typography} from "@material-ui/core";
import React, {useState} from 'react';
import classes from './RegisterForm.module.scss';
import {FormStepTwoContainerType} from './RegisterFormStepThreeContainer';
import {useHistory} from "react-router";
import GoBackButton from "../common/Button/GoBackButton";
import UxAssistant from "./UxAssistant";
import CustomButton from "../common/Button/CustomButton";

const RegisterFormStepTwo: React.FunctionComponent<FormStepTwoContainerType> = (props) => {

    const history = useHistory();
    const [selectedRole, setSelectedRole] = useState([false, false, false, false, false, false]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push("3");
    }

    const handleBackPressed = () => {
        history.goBack();
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.registerForm}>
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={handleBackPressed}/>
                    <UxAssistant assistantText={"What are you in charge of?"} stepNumber={2}/>
                    <form onSubmit={handleSubmit}>
                        <Box className={classes.formContainer}>
                            <Grid container justify={"center"}>
                                <Grid item className={classes.roleGridItem} xs={12} style={{paddingBottom: "33px"}}>
                                    <Box
                                        className={selectedRole[0] ? classes.roleBox + " " + classes.roleBoxActive : classes.roleBox}
                                        onClick={() => {
                                            setSelectedRole(roles => roles.map((elem, index) => index === 0 ? !elem : elem));
                                        }}>

                                    </Box>
                                    <Box
                                        className={selectedRole[1] ? classes.roleBox + " " + classes.roleBoxActive : classes.roleBox}
                                        style={{margin: "0 24px"}}
                                        onClick={() => {
                                            setSelectedRole(roles => roles.map((elem, index) => index === 1 ? !elem : elem));
                                        }}>

                                    </Box>
                                    <Box
                                        className={selectedRole[2] ? classes.roleBox + " " + classes.roleBoxActive : classes.roleBox}
                                        onClick={() => {
                                            setSelectedRole(roles => roles.map((elem, index) => index === 2 ? !elem : elem));
                                        }}>

                                    </Box>
                                </Grid>
                                <Grid item className={classes.roleGridItem} xs={12}>
                                    <Box
                                        className={selectedRole[3] ? classes.roleBox + " " + classes.roleBoxActive : classes.roleBox}
                                        onClick={() => {
                                            setSelectedRole(roles => roles.map((elem, index) => index === 3 ? !elem : elem));
                                        }}>

                                    </Box>
                                    <Box
                                        className={selectedRole[4] ? classes.roleBox + " " + classes.roleBoxActive : classes.roleBox}
                                        style={{margin: "0 24px"}}
                                        onClick={() => {
                                            setSelectedRole(roles => roles.map((elem, index) => index === 4 ? !elem : elem));
                                        }}>

                                    </Box>
                                    <Box
                                        className={selectedRole[5] ? classes.roleBox + " " + classes.roleBoxActive : classes.roleBox}
                                        onClick={() => {
                                            setSelectedRole(roles => roles.map((elem, index) => index === 5 ? !elem : elem));
                                        }}>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid item className={classes.nextContainer}>
                            <CustomButton type={"submit"} className={classes.buttonBlock} text={"Next"}/>
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

export default RegisterFormStepTwo;