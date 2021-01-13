import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import classes from './RegistrationPage.module.scss';
import { Route, Switch } from "react-router";
import RegisterFormStepTwoContainer from "../../components/RegisterForm/RegisterFormStepTwoContainer";
import RegisterFormContainer from "../../components/RegisterForm/RegisterFormContainer";


const RegistrationPage: FunctionComponent = () => {

    return (
        <>
            <Header />
            <Container>
                <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
                    <Grid item sm={8}>
                        <Switch>
                            <Route exact path='/register' component={RegisterFormContainer} />
                            <Route exact path='/register/2' component={RegisterFormStepTwoContainer} />
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default RegistrationPage;