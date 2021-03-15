import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/store';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import classes from '../MarketingToolPageBase/MarketingToolPageBase.module.scss';
import { Box } from '@material-ui/core';
import MobileTopBar from "../../components/TopBar/MobileTopBar";

type PropsType = {
    isAuth: boolean;
};

const MarketingToolPageMobileContainer: React.FunctionComponent<PropsType> = (
    props
) => {
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.marketingContainer}>
                <MobileTopBar />
            </Box>
        </Box>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.AuthReducer.isAuth,
    };
};



const connectedContainer = connect(mapStateToProps)(MarketingToolPageMobileContainer);
export default withAuthRedirect(connectedContainer);
