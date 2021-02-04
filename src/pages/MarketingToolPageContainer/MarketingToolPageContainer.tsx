import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../store/store";
import { compose, Dispatch } from "redux";
import { signOut } from "../../store/Auth/AuthActions";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import VisitorDashboard from "../../components/DashBoard/VisitorDashboard/VisitorDashboard";
import { Route, Switch } from "react-router";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import classes from "./MarketingToolPageContainer.module.scss"
import { Box, Grid } from "@material-ui/core";
import UserDashboard from "../../components/DashBoard/UserDashBoard/UserDashboard";
import BusinessProfile from "../BusinessProfile/BusinessProfile";
import TopBarContainer from "../../components/TopBar/TopBarContainer";
import PersonalProfileContainer from "../PersonalProfile/PersonalProfileContainer";


const MarketingToolPageContainer = (props: any) => {


	return (
		<Box className={classes.wrapper}>
			<SideBarMenu isAuth={props.isAuth} />
			<Box className={classes.marketingContainer}>
				<TopBarContainer />
				<Grid container className={classes.contentContainer}>
					<Grid xs={12} xl={12} item className={classes.content}>
						<Switch>
							<Route path={'/'} exact component={UserDashboard} />
							<Route path={'/personal-profile'} exact component={PersonalProfileContainer} />
							<Route path={'/business-profile'} component={BusinessProfile} />
							<Route path={'/products'} exact component={H1} />
							<Route path={'/market-research'} exact component={H1} />
							<Route path={'/brand-creation'} exact component={H1} />
							<Route path={'/sales-channels'} exact component={H1} />
							<Route path={'/customer-support'} exact component={H1} />
							<Route path={'/brand-awareness'} exact component={H1} />
							<Route path={'/sales-statistics'} exact component={H1} />
							<Route path={'/improvements'} exact component={H1} />
						</Switch>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

const mapStateToProps = (state: AppStateType) => {
	return {
		isAuth: state.AuthReducer.isAuth
	}
};




const H1 = () => {
	return (
		<h1 style={{width: "100%", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center"}}>Coming soon...</h1>
	)
}
export default compose(withAuthRedirect, connect(mapStateToProps))(MarketingToolPageContainer);