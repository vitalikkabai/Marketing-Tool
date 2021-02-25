import React from 'react';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import classes from './ResetPasswordForm.module.scss';
import { useHistory } from 'react-router';
import { ReactComponent as BigCheckMark } from '../../assets/images/bigCheckMark.svg';
import CustomButton from '../../components/common/Button/CustomButton';

type PropsType = {
    cleanSuccess: () => { type: string };
};

const ResetsIsDone: React.FC<PropsType> = (props) => {
    const history = useHistory();
    return (
        <Container>
            <Grid
                container
                justify="center"
                alignItems="center"
                className={classes.registrationContainer}
            >
                <Grid item sm={6}>
                    <Box className={classes.loginSheet}>
                        <Grid item className={classes.bigCheckMark}>
                            <BigCheckMark />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h2"
                                className={classes.checkHeadline}
                                align={"center"}
                            >
                                Password Resent link was sent to your email
                            </Typography>
                        </Grid>
                        <Grid item className={classes.closeButton}>
                            <CustomButton
                                onClick={() => {
                                    history.push('/login');
                                    props.cleanSuccess();
                                }}
                                type="button"
                                text="Close"
                            />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ResetsIsDone;
