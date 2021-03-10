import {
    Box,
    Button,
    Grid,
    Typography,
} from '@material-ui/core';
import React from 'react';
import classes from './TopBar.module.scss';
import mobileLogo from '../../assets/images/mobileLogo.svg';
import { useHistory } from 'react-router';
import AvatarSection from './AvatarSection/AvatarSection';
import { PropsFromRedux } from './TopBarContainer';
import CustomDialog from "../common/Dialog/CustomDialog";
import TimeBar from "../TimeBar/TimeBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const TopBar: React.FC<any> = (props: PropsFromRedux) => {
    const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.between(0, 600));
    const elementToRender = isSmallScreen ?
        <Grid item className={classes.logoContainer}>
            <img src={mobileLogo} alt='diff' />
        </Grid>
        : <TimeBar />;

    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();

    return (
        <Box className={classes.topBarContainer}>
            <Grid
                container
                alignItems={'center'}
                justify={'space-between'}
                className={classes.TopBarContent}>
                {elementToRender}
                <Grid item />
                <Grid item className={classes.personalInfo}>
                    {props.isAuth ? (
                        <AvatarSection
                            setDialogueSubject={setIsOpen}
                            profile={props.profile}
                            avatarURL={props.avatarURL}
                            userAttributes={props.userAttributes}
                            signOut={props.signOut}
                        />
                    ) : (
                        <Box className={classes.logInBox}>
                            <Typography
                                variant={'subtitle2'}
                                color={'primary'}
                                className={classes.logInText}
                                onClick={() => history.push('/login')}>
                                Log In
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.logInButton}
                                onClick={() => history.push('/register')}>
                                Try to free
                            </Button>
                        </Box>
                    )}
                </Grid>
                <CustomDialog
                    text={"Are you sure you want to log out?"}
                    iconType={"logout"}
                    isOpen={isOpen}
                    closeDialog={() => setIsOpen(false)}
                    confirmButtonClick={() => props.signOut()}
                />
            </Grid>
        </Box>
    );
};

export default TopBar;
