import {Box, Grid, Link, Typography} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import classes from './RegisterForm.module.scss';
import {useHistory} from "react-router";
import GoBackButton from "../common/Button/GoBackButton";
import UxAssistant from "./UxAssistant";
import CustomButton from "../common/Button/CustomButton";
import RoleBoxes from "../common/RoleBoxes/RoleBoxes";
import { ChooseRoleProps } from "./RegisterFormChooseRoleContainer";

const RegisterFormChooseRole: React.FunctionComponent<ChooseRoleProps> = (props) => {

    const history = useHistory();
    const [selectedRole, setSelectedRole] = useState(props.roleTags ? [
        props.roleTags.Sales,
        props.roleTags.Marketing,
        props.roleTags.Logistics,
        props.roleTags.Accounting,
        props.roleTags.Production,
        props.roleTags.QC
    ] : [false,false,false,false,false,false]);

    const handleDataInput = () => {
        props.setRoleTags({
            Sales: selectedRole[0],
            Marketing: selectedRole[1],
            Logistics: selectedRole[2],
            Accounting: selectedRole[3],
            Production: selectedRole[4],
            QC: selectedRole[5]
        })
    }
    const [errorText, setErrorText] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleDataInput();
        if(selectedRole.includes(true)){
            history.push("3");
        }
        else {
            setErrorText("You must select at least one option")
        }
    }

    useEffect(()=>{
        setErrorText("");
    }, [selectedRole]);

    const handleBackPressed = () => {
        handleDataInput();
        history.goBack();
    }

    return (
        <Grid container justify="center" alignItems={"center"}>
            <Grid container direction="column" justify="center" className={classes.registerForm}>
                <Box className={classes.registrationSheet}>
                    <GoBackButton onClick={handleBackPressed}/>
                    <UxAssistant assistantText={"What are you in charge of?"} stepNumber={2}/>
                    <form onSubmit={handleSubmit}>
                        <Box className={classes.formContainer} style={{marginTop: "24px"}}>
                            <RoleBoxes selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
                        </Box>
                        <Grid item className={classes.errorText}>
                            <Typography variant={"subtitle1"}>
                                {errorText}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.nextContainer + " " + classes.roles}>
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