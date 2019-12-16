import React, {useState, useLayoutEffect} from 'react';
import {Route, useRouteMatch, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {withFirebase} from '../../components/Firebase';
import useMediaQuery from 'react-use-media-query-hook';

// Pages
import HomeComponent from '../../components/Dashboard/HomeComponent';
import Home from './Home';
import Event from './Event';
import Schedule from './Schedule';
import Checklist from './Checklist';
import Help from './Help';
import LoadingPage from '../Loading/LoadingPage';

// Components
import HamburgerMenu from '../../components/Dashboard/HamburgerMenu';

// Styled components
const RootContainer = styled.div`
  color: white;
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const SidebarContainer = styled.div`
  background-color: #8daa90;
  display: flex;
  position: fixed;
  overflow: auto;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: #5e765e;
  display: flex;
  overflow: auto;
  @media screen and (min-width: 1200px) {
    width: 67%;
    float: right;
  }
`;

const Dashboard = ({firebase}) => {
  const [signedIn, setSignedIn] = useState(null);
  const {path, url} = useRouteMatch();
  const isComputer = useMediaQuery('(min-width: 1200px)');

  useLayoutEffect(() => {
    const unsubscribe = firebase.checkSignedIn(val => {
      setSignedIn(val);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (signedIn === null) {
    return <LoadingPage />;
  }

  if (!signedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {from: '/dashboard'}
        }}
      />
    );
  }

  const HomePage = isComputer
    ? () => <Home />
    : () => <HomeComponent paths={paths} />;

  // Routes
  const routes = [
    {
      label: 'Home',
      path: path,
      exact: true,
      main: HomePage
    },
    {
      label: 'Event',
      path: `${path}/event`,
      exact: false,
      main: Event
    },
    {
      label: 'Schedule',
      path: `${path}/schedule`,
      exact: false,
      main: Schedule
    },
    {
      label: 'Checklist',
      path: `${path}/checklist`,
      exact: false,
      main: Checklist
    },
    {
      label: 'Help',
      path: `${path}/help`,
      exact: false,
      main: Help
    }
  ];

  // Paths
  const paths = [
    ...routes.map(({label, path}) => ({
      label: label,
      path: path
    }))
  ];

  return (
    <RootContainer>
      {isComputer && (
        <SidebarContainer>
          <HomeComponent paths={paths} />
        </SidebarContainer>
      )}
      {!isComputer && (
        <HamburgerMenu
          paths={paths}
          logout={async () => await firebase.signOut()}
          buttonStyle={{left: 30, position: 'fixed'}}
        />
      )}
      <ContentContainer>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </ContentContainer>
    </RootContainer>
  );
};

export default withFirebase(Dashboard);
