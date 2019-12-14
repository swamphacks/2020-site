import React, {useEffect} from 'react';
import {Route, useLocation, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {withFirebase} from '../../components/Firebase';

// Pages
import HomeComponent from '../../components/Dashboard/HomeComponent';
import Home from './Home';
import Event from './Event';
import Schedule from './Schedule';

// Styled components
const RootContainer = styled.div`
  display: flex;
  color: white;
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const SidebarContainer = styled.div`
  background-color: #8daa90;
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ContentContainer = styled.div`
  flex: 1;
  background-color: #5e765e;
  display: flex;
`;

// Routes
const routes = [
  {
    label: 'Home',
    path: '/dashboard',
    exact: true,
    main: Home
  },
  {
    label: 'Event',
    path: '/dashboard/event',
    exact: true,
    main: Event
  },
  {
    label: 'Schedule',
    path: '/dashboard/schedule',
    exact: true,
    main: Schedule
  },
  {
    label: 'Checklist',
    path: '/dashboard/checklist',
    exact: true,
    main: () => <h2>2</h2>
  },
  {
    label: 'Help',
    path: '/dashboard/help',
    exact: true,
    main: () => <h2>2</h2>
  }
];

const Dashboard = ({firebase}) => {
  return (
    <RootContainer>
      <SidebarContainer>
        <HomeComponent
          paths={[
            ...routes.map(({label, path}) => ({
              label: label,
              path: path
            }))
          ]}
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
