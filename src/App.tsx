import React, { ReactElement } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import LoginFormContainer from "./components/LoginForm/LoginFormContainer";


Amplify.configure(awsconfig);

function App(): ReactElement {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route path='/' exact component={LoginPage} />
                    <Route path='/login' component={LoginFormContainer} />
                    <Route path='/register' component={RegisterForm} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default App;