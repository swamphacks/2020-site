import React from 'react';
import { Route, useLocation, Redirect, Switch } from 'react-router-dom';

// Pages
import MainPage from './pages/Main/MainPage';
import LiveGreen from './pages/LiveGreen/LiveGreen';

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path='/'>
        <MainPage />
      </Route>
      <Route exact path='/comingsoon' component={() => <Redirect to='/' />} />
      {/* PDFs */}
      <Route path='/SponsorshipProspectus.pdf' exact />
      <Route path='/PhotoReleaseForm.pdf' exact />
      <Route path='/DataUsageReleaseForm.pdf' exact />
      <Route path='/SustainableSponsors.pdf' exact />
      {/* LiveGreen */}
      <Route path='/livegreen' exact component={LiveGreen} />
      {/* 404 */}
      <Route path='*'>
        <h1>404: This page does not exist.</h1>
      </Route>
    </Switch>
  );
};

export default App;
