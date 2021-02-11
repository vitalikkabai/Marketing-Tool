import React from 'react';
import classes from '../RegisterForm.module.scss';
import { Box, Grid, Typography } from '@material-ui/core';
import assistantAvatar from '../../../assets/images/avatar.png';
import StepCounter from '../../common/StepCounter/StepCounter';

interface PropTypes {
    stepNumber: number;
    assistantText: string;
}

const UxAssistant: React.FC<PropTypes> = (props) => {
    return (
        <>
            <StepCounter
                stepNumber={props.stepNumber}
                stepColor={'66 133 244'}
                className={classes.stepCounter}
            />
            <Grid item className={classes.assistantContainer}>
                <img src={assistantAvatar} alt={'image'} />
                <Box className={classes.assistantText}>
                    <Typography variant={'h6'}>
                        {props.assistantText}
                    </Typography>
                    {props.stepNumber === 1 ? (
                        <Typography variant={'h6'}>
                            Let’s get started
                        </Typography>
                    ) : null}
                </Box>
            </Grid>
        </>
    );
};

export default UxAssistant;
