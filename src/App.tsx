import React, { ReactElement, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listAuthors } from './graphql/queries';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App(): ReactElement {

  useEffect(() => {
    console.log("starting fetching authors");
    const authors = async () => await API.graphql(graphqlOperation(listAuthors));
    authors().then(res => console.log(res))
    // authors.subscribe(() =>)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
