import React, {useMemo, useState, useLayoutEffect} from 'react';
import {Route, useRouteMatch, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {withFirebase} from '../../components/Firebase';

// Pages
import HomeComponent from '../../components/Dashboard/HomeComponent';
import Home from './Home';
import Event from './Event';
import Schedule from './Schedule';
import Checklist from './Checklist';
import Help from './Help';
import LoadingPage from '../Loading/LoadingPage';

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
  width: 67%;
  background-color: #5e765e;
  display: flex;
  float: right;
  overflow: auto;
`;

const Dashboard = ({firebase}) => {
  const [signedIn, setSignedIn] = useState(null);
  const [dashboardData, setDashboardData] = useState({
    name: '{name}',
    email: '{email}',
    status: '{status}'
  });
  const {path, url} = useRouteMatch();

  useLayoutEffect(() => {
    const unsubscribe1 = firebase.getDashboardData(val => {
      setDashboardData(val);
    });
    const unsubscribe2 = firebase.checkSignedIn(val => {
      setSignedIn(val);
    });
    return () => {
      unsubscribe1();
      unsubscribe2();
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

  // Routes
  const routes = [
    {
      label: 'Home',
      path: path,
      exact: false,
      main: Home
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
      <SidebarContainer>
        <HomeComponent
          paths={paths}
          data={dashboardData}
          logout={async () => await firebase.signOut()}
        />
      </SidebarContainer>
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
