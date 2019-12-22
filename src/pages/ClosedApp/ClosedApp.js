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
      <h1>Applications are currently closed BUT...</h1>
      <p>
        Applications for SwampHacks VI are currently closed, but stay tuned for
        a HUGE announcement!
      </p>
    </RootContainer>
  );
};

export default ClosedAppPage;
