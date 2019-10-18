import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Grommet} from 'grommet';
import * as firebase from 'firebase';

// Pages
import Application from './pages/Application/Application';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Grommet plain>
      <Router>
        <Route exact path='/' component={Application} />
        <Route exact path='/application' component={() => {}} />
      </Router>
    </Grommet>
  );
};

export default App;
