import { gql, useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const { data } = useQuery(gql`
    query {
      posts {
        id
        title
        __typename
      }
    }
  `);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
