import React from 'react';
import classes from "./MobileTopBar.module.scss";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import { ReactComponent as MobileSidebarIcon } from '../../assets/images/mobileSidebarIcon.svg';
import { ReactComponent as MobileUserIcon } from '../../assets/images/mobileUserIcon.svg';

const MobileTopBar = () => {
    return (
        <Box className={classes.topBarContainer}>
            <Grid
                container
                className={classes.TopBarContent}
            >
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.topBarButton}
                    >
                        <MobileSidebarIcon />
                    </Button>
                    <Typography
                        variant={'body2'}
                        color={'primary'}
                        className={classes.topBarText}
                    >
                        Dashboard
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.topBarButton}
                    >
                        <MobileUserIcon />
                    </Button>
            </Grid>
        </Box>
    );
};

export default MobileTopBar;
