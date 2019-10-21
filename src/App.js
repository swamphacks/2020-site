import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import * as firebase from 'firebase';

// Get the theme(s)
import {GlobalTheme} from './theme/Theme';

// Pages
import Application from './pages/Application/Application';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <Route exact path='/' component={Application} />
        <Route exact path='/application' component={() => {}} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
