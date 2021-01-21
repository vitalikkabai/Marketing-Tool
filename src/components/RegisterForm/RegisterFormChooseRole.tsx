import {Box, Grid, Link, Typography} from "@material-ui/core";
import React, {useState} from 'react';
import classes from './RegisterForm.module.scss';
import {useHistory} from "react-router";
import GoBackButton from "../common/Button/GoBackButton";
import UxAssistant from "./UxAssistant";
import CustomButton from "../common/Button/CustomButton";
import RoleBoxes from "../common/RoleBoxes/RoleBoxes";

const RegisterFormChooseRole: React.FunctionComponent = (props) => {

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
                            <RoleBoxes selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
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

export default RegisterFormChooseRole;