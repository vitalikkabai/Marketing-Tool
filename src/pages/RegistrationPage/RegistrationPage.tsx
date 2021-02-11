import { Container, Grid } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import Header from '../../components/Header/Header';
import classes from './RegistrationPage.module.scss';
import { Route, Switch } from 'react-router';
import RegisterFormStepTwoContainer from '../../components/RegisterForm/RegisterFormChooseRole/RegisterFormChooseRoleContainer';
import RegisterFormContainer from '../../components/RegisterForm/RegisterFormWebLinks/RegisterFormWebLinksContainer';
import RegisterFormStepThreeContainer from '../../components/RegisterForm/RegisterFormImportantInfo/RegisterFormImportantInfoContainer';
import { withNotAuthRedirect } from '../../hoc/withNotAuthRedirect';

const RegistrationPage: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Container>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.registrationContainer}
                >
                    <Grid item sm={8} className={classes.registerItem}>
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={RegisterFormContainer}
                            />
                            <Route
                                exact
                                path="/register/2"
                                component={RegisterFormStepTwoContainer}
                            />
                            <Route
                                exact
                                path="/register/3"
                                component={RegisterFormStepThreeContainer}
                            />
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default withNotAuthRedirect(RegistrationPage);
