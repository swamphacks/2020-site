import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Switch,
  Redirect
} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import * as firebase from 'firebase';

// Pages
import ApplicationPage from './pages/Application/ApplicationPage';
import MainPage from './pages/Main/MainPage';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const Placeholder = () => {
  return (
    <Container text style={{paddingTop: 80}}>
      <h1>It's Almost Here!</h1>
      <p>
        The official SwampHacks website is almost ready to launch. Come back in
        a few days to start applying!
      </p>
    </Container>
  );
};

const App = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      {/* <Route exact path='/' component={MainPage} /> */}
      <Route exact path='/' component={Placeholder} />
      <Route exact path='/comingsoon' component={() => <Redirect to='/' />} />
      <Route exact path='/test' component={MainPage} />
      <Route exact path='/application' component={ApplicationPage} />
      <Route path='/SponsorshipProspectus.pdf' exact />
      <Route path='/PhotoReleaseForm.pdf' exact />
      <Route path='/DataUsageReleaseForm.pdf' exact />
    </Switch>
  );
};

export default App;
