import React, {ReactElement, useEffect} from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import store, {AppStateType} from './store/store';
import {connect, ConnectedProps, Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OverridesCss from './material/themeProvider';
import {Dispatch} from 'redux';
import {getAuthData} from './store/Auth/AuthActions';
import MarketingToolPageContainer from './pages/MarketingToolPageBase/MarketingToolPageBase';
import ResetPasswordPageContainer from './pages/ResetPasswordPage/ResetPasswordPageContainer';
import MarketingToolPagePreviewContainer from './pages/MarketingToolPageBase/MarketingToolPagePreviewBase';
import {Occupation} from './store/Auth/AuthReducer';
import ManagerPageBase from './pages/MarketingToolPageBase/ManagerPageBase';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

Amplify.configure(awsconfig);

function App(props: AppProps): ReactElement {
    useEffect(() => {
        // Start initialization
        props.getAuthData();
    }, []);

    if (!props.initialized) {
        //Show empty page while initialization isn't completed
        return <div/>;
    }

    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegistrationPage}/>
            <Route
                path="/resetPassword"
                component={ResetPasswordPageContainer}
            />
            <Route
                path="/preview"
                component={MarketingToolPagePreviewContainer}
            />
            {props.occupation === Occupation.MANAGER ? (
                <Route path="/" component={ManagerPageBase}/>
            ) : null}
            <Route path="/" component={MarketingToolPageContainer}/>
        </Switch>
    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.AuthReducer.initialized,
        occupation: state.AuthReducer.userAttributes.occupation,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getAuthData: () => dispatch(getAuthData()),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type AppProps = ConnectedProps<typeof connector>;
const AppContainer = connector(App);

const AppWithRouter: React.FunctionComponent = () => {
    // Store render before App initialization
    return (
        <BrowserRouter>
            <OverridesCss>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Provider store={store}>
                        <AppContainer/>
                    </Provider>
                </MuiPickersUtilsProvider>
            </OverridesCss>
        </BrowserRouter>
    );
};

export default AppWithRouter;
