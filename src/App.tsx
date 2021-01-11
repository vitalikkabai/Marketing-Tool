import React, { ReactElement, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listAuthors } from './graphql/queries';
import awsconfig from './aws-exports';

import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Dashboard from './components/DashBoard/Dashboard';


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
        <Route path='/register' component={RegisterForm} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;