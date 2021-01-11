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
      Hi
    </div>
  );
}

export default App;
