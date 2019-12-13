import React, {useEffect} from 'react';
import {Route, useLocation, Redirect, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {withFirebase} from '../../components/Firebase';

// Pages
import HomeComponent from '../../components/Dashboard/HomeComponent';

// Styled components
const RootContainer = styled.div`
  display: flex;
  color: white;
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
  overflow-y: scroll;
  overflow-x: hidden;
`;

// Routes
const routes = [
  {
    label: 'Home',
    path: '/dashboard',
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    label: '2',
    path: '/dashboard/2',
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
