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
import Chat from "../../components/Chat/Chat";
import TopBarContainer from "../../components/TopBar/TopBarContainer";

const MarketingToolPagePreviewContainer = (props: any) => {


	return (
		<Box className={classes.wrapper}>
			<SideBarMenu isAuth={props.isAuth} />
			<Box className={classes.marketingContainer}>
				<TopBarContainer />
				<Grid container className={classes.contentContainer}>
					<Grid xs={12} xl={12} item className={classes.content}>
						<Switch>
							<Route path={'/preview/'} exact component={VisitorDashboard} />
							<Route path={'/preview/products'} exact component={H1} />
							<Route path={'/preview/market-research'} exact component={VisitorDashboard} />
							<Route path={'/preview/brand-creation'} exact component={H1} />
							<Route path={'/preview/sales-channels'} exact component={VisitorDashboard} />
							<Route path={'/preview/customer-support'} exact component={H1} />
							<Route path={'/preview/brand-awareness'} exact component={VisitorDashboard} />
							<Route path={'/preview/sales-statistics'} exact component={H1} />
							<Route path={'/preview/improvements'} exact component={VisitorDashboard} />
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

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
};


const H1 = () => {
	return (
		<h1>Hello user </h1>
	)
}
export default connect(mapStateToProps, mapDispatchToProps)(MarketingToolPagePreviewContainer);