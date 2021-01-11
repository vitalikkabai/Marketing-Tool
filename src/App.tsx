import React, { ReactElement, useEffect } from 'react';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listAuthors } from './graphql/queries';
import awsconfig from './aws-exports';

import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';


Amplify.configure(awsconfig);

function App(): ReactElement {

    useEffect(() => {
        console.log("starting fetching authors");
        const authors = async () => await API.graphql(graphqlOperation(listAuthors));
        authors().then(res => console.log(res))
        // authors.subscribe(() =>)
    }, [])

    return (
        <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={LoginForm} />
                    <Route path='/register' component={RegistrationPage} />
                </Switch>
        </BrowserRouter>
    );
}

export default App;