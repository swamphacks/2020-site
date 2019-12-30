import React, {useEffect} from 'react';
import {Route, useLocation, Redirect, Switch} from 'react-router-dom';
import {withFirebase} from './components/Firebase';
// import {Container} from 'semantic-ui-react';

// Pages
import MainPage from './pages/Main/MainPage';
import ApplicationPage from './pages/Application/ApplicationPage';
import MVApplicationPage from './pages/MentorVolunteerApp/MVApplicationPage';
import LoginPage from './pages/Login/Login';
import LoadingPage from './pages/Loading/LoadingPage';
import ClosedAppPage from './pages/ClosedApp/ClosedApp';
import LiveGreen from './pages/LiveGreen/LiveGreen';

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
  const location = useLocation();

  useEffect(() => {
    // Test code
    // End test code
  }, []);

  return (
    <Switch location={location}>
      <Route exact path='/'>
        <MainPage />
      </Route>
      {/* <Route exact path='/' component={Placeholder} /> */}
      <Route exact path='/comingsoon' component={() => <Redirect to='/' />} />
      <Route exact path='/application' component={ApplicationPage} />
      <Route exact path='/application?v=1.1' component={ApplicationPage} />
      <Route exact path='/mvapplication' component={MVApplicationPage} />
      <Route exact path='/login' component={LoginPage} />
      {/* PDFs */}
      <Route path='/SponsorshipProspectus.pdf' exact />
      <Route path='/PhotoReleaseForm.pdf' exact />
      <Route path='/DataUsageReleaseForm.pdf' exact />
      <Route path='/SustainableSponsors.pdf' exact />
      {/* LiveGreen */}
      <Route path='/livegreen' exact component={LiveGreen} />
      {/* 404 */}
      <Route path='*'>
        <h1>404: This page does not exist.</h1>
      </Route>
    </Switch>
  );
};

export default withFirebase(App);
