import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import Header from "../../components/Header/Header";
import classes from './RegistrationPage.module.scss';
import { Route, Switch } from "react-router";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterFinForm from "../../components/RegisterForm/RegisterFinForm";

// export interface RegistrationPageProps {

// }

const RegistrationPage: FunctionComponent = () => {

    return (
        <>
            <Header />
            <Container>
                <Grid container justify="center" alignItems="center" className={classes.registrationContainer}>
                    <Grid item sm={8}>
                        <Switch>
                            <Route exact path='/register' component={RegisterForm} />
                            <Route exact path='/register/fin' component={RegisterFinForm} />

                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </>
        // <Switch>
        //                         <Route path='/register/:id' component={RegistrationPage} />

        // </Switch>
        // <RegisterForm/>
    );
}

export default RegistrationPage;