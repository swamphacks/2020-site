import React, {useEffect} from 'react';
import styled from 'styled-components';

import PageTitle from '../../components/Dashboard/PageTitle';
import {PageRootContainer as RootContainer} from '../../components/Dashboard/PageRootContainer';
import ChecklistItem from '../../components/Dashboard/ChecklistItem';

// Styled components
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

const Checklist = () => {
  return (
    <RootContainer>
      <PageTitle title='Checklist' />
      <ContentContainer>
        {items.map((item, index) => (
          <ChecklistContainer key={index}>
            <ChecklistItem label={item} />
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
