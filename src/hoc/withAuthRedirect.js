import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth,
    };
};

export const withAuthRedirect = (Component) => {
    //HOC for redirecting to login screen if user not authorized
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/preview'} />;
            return <Component {...this.props} />;
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
