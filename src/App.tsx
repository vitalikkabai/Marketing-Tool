import React, { ReactElement, useEffect } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import store, { AppStateType } from "./store/store";
import { connect, Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from "./pages/LoginPage/LoginPage";
import OverridesCss from './material/themeProvider';
import LoginFormContainer from "./components/LoginForm/LoginFormContainer";
import { Dispatch } from 'redux';
import { getAuthData } from './store/Auth/AuthActions';


Amplify.configure(awsconfig);

function App(props: any): ReactElement {

    useEffect(()=>{
        props.getAuthData();
    },[]);

    if(!props.autoauthComplete) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <OverridesCss>
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route path='/' exact component={LoginPage} />
                        <Route path='/login' component={LoginFormContainer} />
                        <Route path='/register' component={RegistrationPage} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        </OverridesCss>

    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        autoauthComplete: state.AuthReducer.autoauthComplete
    }
};
type MapDispatchType = {
    getAuthData: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
    return {
        getAuthData: () => dispatch(getAuthData())
    }
};

// export default connect(mapStateToProps)(App);
const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);
const AppWithRouter = () => {
    return (
        <OverridesCss>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </OverridesCss>
    )
}

export default AppWithRouter;