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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
