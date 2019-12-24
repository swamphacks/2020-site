import React from 'react';
import styled from 'styled-components';

// Styled Components
const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.5rem;
  position: absolute;
  top: -40px;
  left: 0;
`;

const Image = styled.img`
  width: 300px;
  -webkit-transition: transform 0.2s;
  -ms-transition: transform 0.2s;
  transition: transform 0.2s;
  :hover {
    cursor: pointer;
    -webkit-transform: scale(1.05);
    -ms-transform: scale(1.05);
    transform: scale(1.05);
  }
  z-index: 40;
`;

const CoHost = props => {
  return (
    <RootContainer {...props}>
      <ContentContainer>
        <Text>Co-Hosted by:</Text>
        <Image
          src='/images/sponsorLogos/realtruckDark.svg'
          onClick={() => window.open('https://realtruck.com', '_blank')}
        />
      </ContentContainer>
    </RootContainer>
  );
};

export default CoHost;
