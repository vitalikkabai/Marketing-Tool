import { Container, Grid } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import Header from '../../components/Header/Header';
import classes from './LoginPage.module.scss';
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer';
import { withNotAuthRedirect } from '../../hoc/withNotAuthRedirect';

const LoginPage: FunctionComponent = () => {
    return (
        <>
            <Header />
            <Container>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.loginContainer}
                >
                    <Grid item sm={6}>
                        <LoginFormContainer />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default withNotAuthRedirect(LoginPage);
