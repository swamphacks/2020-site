import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Switch
} from 'react-router-dom';
import * as firebase from 'firebase';

// Pages
import ApplicationPage from './pages/Application/ApplicationPage';
import MainPage from './pages/Main/MainPage';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const App = () => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/application' component={ApplicationPage} />
    </Switch>
  );
};

export default App;
