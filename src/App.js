import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Pages
import Application from './pages/Application/Application';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Application} />
      <Route exact path='/application' component={() => {}} />
    </Router>
  );
};

export default App;
