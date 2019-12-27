import React from 'react';
import styled from 'styled-components';
import useMediaQuery from 'react-use-media-query-hook';

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
  font-size: ${props => (props.small ? '1em' : '1.5em')};
  position: absolute;
  top: ${props => (props.small ? '-30px' : '-40px')};
  left: 0;
`;

const Image = styled.img`
  width: ${props => (props.small ? '150px' : '300px')};
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
  const isComputer = useMediaQuery('(min-width: 992px)');
  return (
    <RootContainer {...props}>
      <ContentContainer>
        <Text small={!isComputer}>Co-Hosted by:</Text>
        <Image
          src='/images/sponsorLogos/realtruckDark.svg'
          onClick={() => window.open('https://realtruck.com', '_blank')}
          small={!isComputer}
        />
      </ContentContainer>
    </RootContainer>
  );
};

export default CoHost;
