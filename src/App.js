import React, {useEffect} from 'react';
import {Route, useLocation, Redirect, Switch} from 'react-router-dom';
import {withFirebase} from './components/Firebase';
// import {Container} from 'semantic-ui-react';

// Pages
import ApplicationPage from './pages/Application/ApplicationPage';
import MainPage from './pages/Main/MainPage';
import MVApplicationPage from './pages/MentorVolunteerApp/MVApplicationPage';
import Dashboard from './pages/Dashboard/Dashboard';

// const Placeholder = () => {
//   return (
//     <Container text style={{paddingTop: 80}}>
//       <h1>It's Almost Here!</h1>
//       <p>
//         The official SwampHacks website is almost ready to launch. Come back in
//         a few days to start applying!
//       </p>
//     </Container>
//   );
// };

const App = ({firebase}) => {
  useEffect(() => {
    // firebase.getNumberApplications();
  }, []);

  const location = useLocation();
  return (
    <Switch location={location}>
      <Route exact path='/' component={MainPage} />
      {/* <Route exact path='/' component={Placeholder} /> */}
      <Route exact path='/comingsoon' component={() => <Redirect to='/' />} />
      <Route exact path='/application' component={ApplicationPage} />
      <Route exact path='/mvapplication' component={MVApplicationPage} />
      <Route path='/dashboard' component={Dashboard} />
      {/* PDFs */}
      <Route path='/SponsorshipProspectus.pdf' exact />
      <Route path='/PhotoReleaseForm.pdf' exact />
      <Route path='/DataUsageReleaseForm.pdf' exact />
      <Route path='/SustainableSponsors.pdf' exact />
    </Switch>
  );
};

export default withFirebase(App);
