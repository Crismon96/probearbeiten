import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DefaultErrorBoundary from './components/ErrorBoundary/components/DefaultErrorFallback/DefaultErrorFallback';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SideNavigation from './components/SideNavigation/SideNavigation';
import { Main, SectionContainer } from './utils/appStyles.styles';

const Timer = lazy(() => import('./screens/Timer/Timer'));
const Overview = lazy(() => import('./screens/Overview/Overview'));

function App() {
  // const { data } = useQuery<AbcQueryResult, AbcQueryVariables>(appQuery);
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
    <>
      <SideNavigation />

      <SectionContainer>
        <Main>
          <Suspense fallback={null}>
            <ErrorBoundary FallbackComponent={DefaultErrorBoundary}>
              <Route path="/" exact>
                <Timer />
              </Route>

              <Route path="/overview" exact>
                <Overview />
              </Route>
            </ErrorBoundary>
          </Suspense>
        </Main>
      </SectionContainer>
    </>
  );
}

export default App;
