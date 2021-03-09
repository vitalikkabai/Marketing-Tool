import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/store';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Route, Switch } from 'react-router';
import SideBarMenu from '../../components/SideBarMenu/SideBarMenu';
import classes from './MarketingToolPageBase.module.scss';
import { Box, Grid } from '@material-ui/core';
import UserDashboard from '../../components/DashBoard/UserDashBoard/UserDashboard';
import TopBarContainer from '../../components/TopBar/TopBarContainer';
import PersonalProfileContainer from '../PersonalProfile/PersonalProfileContainer';
import BusinessProfileContainer from '../BusinessProfile/BusinessProfileContainer';
import ProductPageContainer from '../ProductPage/ProductPageContainer';
import AddProductContainer from '../../components/Product/AddProduct/AddProductContainer';
import MarketResearchContainer from "../MarketResearch/MarketResearchContainer";

type PropsType = {
    isAuth: boolean;
};

const MarketingToolPageContainer: React.FunctionComponent<PropsType> = (
    props
) => {
    return (
        <Box className={classes.wrapper}>
            <SideBarMenu isAuth={props.isAuth} />
            <Box className={classes.marketingContainer}>
                <TopBarContainer />
                <Grid container className={classes.contentContainer}>
                    <Grid xs={12} xl={12} item className={classes.content}>
                        <Switch>
                            <Route path={'/'} exact component={UserDashboard} />
                            <Route
                                path={'/personal-profile'}
                                exact
                                component={PersonalProfileContainer}
                            />
                            <Route
                                path={'/business-profile'}
                                component={BusinessProfileContainer}
                            />
                            <Route
                                path={'/products'}
                                exact
                                component={ProductPageContainer}
                            />
                            <Route
                                path={'/products/add-new-product'}
                                exact
                                component={AddProductContainer}
                            />
                            <Route
                                path={'/market-research'}
                                exact
                                component={MarketResearchContainer}
                            />
                            <Route
                                path={'/brand-creation'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/sales-channels'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/customer-support'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/brand-awareness'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/sales-statistics'}
                                exact
                                component={H1}
                            />
                            <Route
                                path={'/improvements'}
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

const connectedContainer = connect(mapStateToProps)(MarketingToolPageContainer);
export default withAuthRedirect(connectedContainer);
