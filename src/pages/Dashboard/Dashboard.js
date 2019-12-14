import React, {useEffect} from 'react';
import {Route, useLocation, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {withFirebase} from '../../components/Firebase';

// Pages
import HomeComponent from '../../components/Dashboard/HomeComponent';
import Home from './Home';
import Event from './Event';
import Schedule from './Schedule';
import Checklist from './Checklist';
import Help from './Help';

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
    main: Checklist
  },
  {
    label: 'Help',
    path: '/dashboard/help',
    exact: true,
    main: Help
  }
];

export default withFirebase(Dashboard);
