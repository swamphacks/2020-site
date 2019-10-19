import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Grommet} from 'grommet';
import * as firebase from 'firebase';

// Pages
import Application from './pages/Application/Application';

// Config file
import firebaseConfig from './firebaseConfig.json';

firebase.initializeApp(firebaseConfig);

const GrommetTheme = {
  name: 'SwampHacks VI',
  rounding: 4,
  spacing: 24,
  global: {
    colors: {
      brand: '#e59c2e',
      background: '#d3e9b7',
      focus: '#8c5044',
      'accent-1': '#eec183',
      'accent-2': '#f7e6b0',
      'neutral-1': '#eec183',
      'neutral-2': '#f7e6b0',
      'accent-3': '#688ea5',
      'accent-4': '#2f5591',
      'neutral-3': '#688ea5',
      'neutral-4': '#2f5591',
      control: {
        light: '#e59c2e',
        dark: '#eec183'
      }
    },
    font: {
      family: 'Helvetica'
    }
  }
};

const App = () => {
  return (
    <Grommet theme={GrommetTheme}>
      <Router>
        <Route exact path='/' component={Application} />
        <Route exact path='/application' component={() => {}} />
      </Router>
    </Grommet>
  );
};

export default App;
