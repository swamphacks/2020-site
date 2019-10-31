import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import * as firebase from 'firebase';

// Get the theme(s)
import {GlobalTheme} from './theme/Theme';

// Pages
import Application from './pages/Application/Application';
import MainPage from './pages/Main/MainPage';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/application' component={Application} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
