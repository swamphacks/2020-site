import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Grommet} from 'grommet';

// Pages
import Application from './pages/Application/Application';

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
