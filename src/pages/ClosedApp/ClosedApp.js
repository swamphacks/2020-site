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

const ClosedAppPage = ({ message }) => {
  return (
    <RootContainer>
      <h1>Applications are currently closed.</h1>
      {message ? (
        <p>{message}</p>
      ) : (
        <p>
          Applications for SwampHacks VI are currently closed, sorry! Didn't get
          to apply? You can try to attend as a walk-on, but spots will be
          extremely limited!
        </p>
      )}
    </RootContainer>
  );
};

export default ClosedAppPage;
