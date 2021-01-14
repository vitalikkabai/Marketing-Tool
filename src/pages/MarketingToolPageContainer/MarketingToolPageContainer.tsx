import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../store/store";
import {compose, Dispatch} from "redux";
import {signOut} from "../../store/Auth/AuthActions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dashboard from "../../components/DashBoard/Dashboard";
import {Route, Switch} from "react-router";
import TopBar from "../../components/TopBar/TopBar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import classes from "./MarketingToolPageContainer.module.scss"
import {Box, Grid} from "@material-ui/core";
import Chat from "../../components/Chat/Chat";

const MarketingToolPageContainer = (props: any) => {

    return (
        <Grid container className={classes.wrapper}>
            <SideBarMenu/>
            <Box className={classes.marketingContainer}>
                <TopBar signOut={props.signOut}/>
                <Grid container className={classes.contentContainer}>
                    <Grid xs={8} item>
                        <Switch>
                            <Route path='/' exact component={Dashboard}/>
                        </Switch>
                    </Grid>
                    <Grid xs={4} item>
                        <Chat/>
                    </Grid>

                </Grid>
            </Box>

        </Grid>
    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(MarketingToolPageContainer);