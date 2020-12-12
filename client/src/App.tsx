import { useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import { AbcQueryResult, AbcQueryVariables } from './generated/graphql';
import logo from './logo.svg';
import { appQuery } from './screens/app.queries';

function App() {
  const { data } = useQuery<AbcQueryResult, AbcQueryVariables>(appQuery);
  // React.useEffect(() => {
  //   fetch('http://localhost:8000/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ query: graphqlQuery }),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resData) => {
  //       if (resData.errors) {
  //         console.log('NOT SO SERIOUS ERROR');
  //       }
  //       console.log('resData: ', resData);
  //     })
  //     .catch(() => console.log('SERIOUS ERROR'));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> {JSON.stringify(data)}.
        </p>
        <button>Learn React</button>
      </header>
    </div>
  );
}

export default App;
