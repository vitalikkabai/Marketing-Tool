import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/store';
import { Dispatch } from 'redux';
import { signOut } from '../../store/Auth/AuthActions';
import VisitorDashboard from '../../components/DashBoard/VisitorDashboard/VisitorDashboard';
import { Route, Switch } from 'react-router';
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu';
import classes from './MarketingToolPageBase.module.scss';
import { Box, Grid } from '@material-ui/core';
import TopBarContainer from '../../components/TopBar/TopBarContainer';
import MarketResearchContainer from "../MarketResearch/MarketResearchContainer";
import ProductPageContainer from "../ProductPage/ProductPageContainer";

const MarketingToolPagePreviewContainer = (props: any) => {
    return (
        <Box className={classes.wrapper}>
            <SideBarMenu isAuth={props.isAuth} />
            <Box className={classes.marketingContainer}>
                <TopBarContainer />
                <Grid container className={classes.contentContainer}>
                    <Grid xs={12} xl={12} item className={classes.content}>
                        <Switch>
                            <Route
                                path={'/preview/'}
                                exact
                                component={VisitorDashboard}
                            />
                            <Route
                                path={'/preview/products'}
                                exact
                                component={ProductPageContainer}
                            />
                            <Route
                                path={'/preview/market-research'}
                                exact
                                component={MarketResearchContainer}
                            />
                            <Route
                                path={'/preview/brand-creation'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/preview/sales-channels'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/preview/customer-support'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/preview/brand-awareness'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/preview/sales-statistics'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/preview/improvements'}
                                exact
                                component={H1}
                            />
                        </Switch>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

const H1 = () => {
    return (
        <h1
            style={{
                width: '100%',
                height: '10vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            Coming soon...
        </h1>
    );
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketingToolPagePreviewContainer);
