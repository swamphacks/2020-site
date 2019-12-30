import React, {useEffect} from 'react';
import styled from 'styled-components';

// Styled Components
const RootContainer = styled.div`
  display: flex;
  padding: 40px;
`;

const LiveGreen = () => {
  useEffect(() => {
    window.location.assign('https://livegreen.io/swamphacks');
  }, []);

  return (
    <RootContainer>
      <p>Redirecting...</p>
    </RootContainer>
  );
};

export default LiveGreen;
