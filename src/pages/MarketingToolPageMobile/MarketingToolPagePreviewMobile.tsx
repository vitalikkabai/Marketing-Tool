import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/store';
import { Dispatch } from 'redux';
import { signOut } from '../../store/Auth/AuthActions';
import classes from './MarketingToolPageMobile.module.scss';
import { Box } from '@material-ui/core';
import TopBarContainer from '../../components/TopBar/TopBarContainer';
import TimeBar from "../../components/TimeBar/TimeBar";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const MarketingToolPagePreviewMobileContainer = () => {
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.marketingContainer}>
                <TopBarContainer small />
                <TimeBar small />
                <MobileMenu />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarketingToolPagePreviewMobileContainer);
