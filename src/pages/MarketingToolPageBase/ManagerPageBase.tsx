import { Box, Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router';
import ManagerDashboard from '../../components/DashBoard/ManagerDashBoard/ManagerDashboard';
import ManagersSideBarMenuContainer from '../../components/ManagersSideBarMenu/ManagersSideBarMenuContainer';
import TopBarContainer from '../../components/TopBar/TopBarContainer';
import PersonalProfileContainer from '../PersonalProfile/PersonalProfileContainer';
import classes from './MarketingToolPageBase.module.scss';

const ManagerPageBase: React.FunctionComponent = () => {
    return (
        <Box className={classes.wrapper}>
            <ManagersSideBarMenuContainer/>
            <Box className={classes.marketingContainer}>
                <TopBarContainer />
                <Grid container className={classes.contentContainer}>
                    <Grid xs={12} xl={12} item className={classes.content}>
                        <Switch>
							<Route path={'/'} exact component={ManagerDashboard} />
                            <Route
                                path={'/personal-profile'}
                                exact
                                component={PersonalProfileContainer}
                            />
						</Switch>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ManagerPageBase;
