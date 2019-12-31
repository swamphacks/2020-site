import React from 'react';
import styled from 'styled-components';

const RootContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

const ClosedAppPage = () => {
  return (
    <RootContainer>
      <h1>Applications are currently closed.</h1>
      <p>
        Applications for SwampHacks VI are currently closed, sorry! Missed out
        this year? Be sure to apply next year!
      </p>
    </RootContainer>
  );
};

export default ClosedAppPage;
