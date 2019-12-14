import React, {useEffect} from 'react';
import styled from 'styled-components';

import PageTitle from '../../components/Dashboard/PageTitle';

// Styled components
const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-family: Montserrat, Helvetica, sans-serif;
`;

const Event = () => {
  return (
    <RootContainer>
      <PageTitle title='Event' />
      <ContentContainer>
        <Text>Event maps and more information coming soon.</Text>
      </ContentContainer>
    </RootContainer>
  );
};

export default Event;
