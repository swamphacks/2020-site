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

const ChecklistContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  max-width: 680px;
`;

const LabelText = styled.h3`
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const ContentText = styled.p`
  font-family: Montserrat, Helvetica, sans-serif;
  display: inline;
`;

const Checklist = () => {
  return (
    <RootContainer>
      <PageTitle title='Checklist' />
      <ContentContainer>
        {items.map((item, index) => (
          <ChecklistContainer key={index}>
            <LabelText>
              {index + 1}). <ContentText>{item}</ContentText>
            </LabelText>
          </ChecklistContainer>
        ))}
      </ContentContainer>
    </RootContainer>
  );
};

const items = [
  'Any hacking gear you need (laptop, hardware, chargers, batteries, etc.)',
  'Comfortable clothes',
  'Toiletries (toothpaste, toothbrush, deodorant, etc.)',
  'A photo ID for registration',
  'A government ID to rent hardware',
  'Decorations for your station',
  'Yourself!',
  'Reusable stuff...'
];

export default Checklist;
