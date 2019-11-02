import React from 'react';
import styled from 'styled-components';
// Semantic UI
import {
  Grid,
  Image,
  Header,
  Container,
  Accordion,
  Icon
} from 'semantic-ui-react';

// Import image assets
import sunnyDock from '../../resources/images/background.svg';

// Styled components
const RootContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const SunnyDock = styled(Image).attrs(props => ({
  src: sunnyDock,
  className: 'hidden-image'
}))`
  width: 100vw;
  min-width: 1920px;
  z-index: 1;
`;

const createEvent = (name, time) => ({
  name,
  time
});

const events = [
  {
    day: 'Friday',
    events: [
      createEvent('Test1', Date.now()),
      createEvent('Test2', Date.now()),
      createEvent('Test3', Date.now())
    ]
  },
  {
    day: 'Saturday',
    events: [
      createEvent('Test1', Date.now()),
      createEvent('Test2', Date.now()),
      createEvent('Test3', Date.now())
    ]
  },
  {
    day: 'Sunday',
    events: [
      createEvent('Test1', Date.now()),
      createEvent('Test2', Date.now()),
      createEvent('Test3', Date.now())
    ]
  }
];

const faq = [
  {
    question: 'What is a hackathon?',
    details: (
      <p>
        A hackathon is a weekend long event where students come together to
        build computer science projects. Hackathons teach students about
        software development by letting them make their own products. They
        create a space for students to learn new skills and eliminate coding
        road-blocks. Swamphacks VI provides resources such as hardware,
        workshops, and mentors to support all student endeavors.
      </p>
    )
  }
];

const MainPage = () => {
  return (
    <RootContainer>
      <SunnyDock />
      <Grid>
        <Grid container padded>
          <Grid.Column color='blue'>
            <Container text>
              <Header size='huge'>Test</Header>
              <p>
                A hackathon is a weekend long event where students come together
                to build computer science projects. Hackathons teach students
                about software development by letting them make their own
                products. They create a space for students to learn new skills
                and eliminate coding road-blocks. Swamphacks VI provides
                resources such as hardware, workshops, and mentors to support
                all student endeavors.
              </p>
            </Container>
          </Grid.Column>
        </Grid>
      </Grid>
    </RootContainer>
  );
};

export default MainPage;
