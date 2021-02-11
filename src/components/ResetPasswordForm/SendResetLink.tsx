import React from 'react';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import classes from './ResetPasswordForm.module.scss';
import { useHistory } from 'react-router';
import CustomInput from '../common/Input/CustomInput';
import GoBackButton from '../common/Button/GoBackButton';
import CustomButton from '../common/Button/CustomButton';

type PropsType = {
    email: {
        value: string;
        touched: boolean;
        error: boolean;
        errorText: string;
        name: string;
    };
    errorMessage: string;
    handleInput: (inputData: string, inputType: string) => void;
    handleSubmit: (event: React.FormEvent<Element>) => void;
};

const SendResetLink: React.FC<PropsType> = (props) => {
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
                        <GoBackButton
                            onClick={() => {
                                history.push('/login');
                            }}
                        />
                        <Grid item className={classes.gridItem}>
                            <Typography variant="h2" className={classes.header}>
                                Reset password
                            </Typography>
                        </Grid>
                        <Grid item className={classes.gridItem}>
                            <Typography
                                variant="subtitle1"
                                className={classes.subtitle}
                            >
                                Enter your email address and we will send you a
                                reset link.
                            </Typography>
                        </Grid>
                        <Grid item className={classes.formContainer}>
                            <form onSubmit={props.handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <CustomInput
                                            type="text"
                                            label="Company email"
                                            fullWidth
                                            error={props.email.error}
                                            value={props.email.value}
                                            name="email"
                                            onChange={(
                                                event: React.ChangeEvent<
                                                    | HTMLTextAreaElement
                                                    | HTMLInputElement
                                                >
                                            ) =>
                                                props.handleInput(
                                                    event.target.value,
                                                    'EMAIL'
                                                )
                                            }
                                            width={290}
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item className={classes.errorText}>
                                        <Typography variant={'subtitle1'}>
                                            {props.errorMessage}
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.nextButton}>
                                        <CustomButton
                                            className={classes.buttonBlock}
                                            type="submit"
                                            text="Send"
                                        />
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SendResetLink;
