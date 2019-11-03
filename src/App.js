import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as firebase from 'firebase';

// Pages
import ApplicationPage from './pages/Application/ApplicationPage';
import MainPage from './pages/Main/MainPage';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/application' component={ApplicationPage} />
    </Router>
  );
};

export default App;
