import React from 'react';
import styled from 'styled-components';
import {Loader, Dimmer} from 'semantic-ui-react';

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const LoadingPage = () => {
  return (
    <RootContainer>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    </RootContainer>
  );
};

export default LoadingPage;
