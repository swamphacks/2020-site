import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Grid,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Import image assets
import sunnyDock from '../../resources/images/background.svg';

// Styled components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const SunnyDock = styled.img.attrs(props => ({
  src: sunnyDock,
  className: 'hidden-image'
}))`
  width: 100vw;
  min-width: 1920px;
  z-index: 1;
`;

const ContentSectionGrid = styled(Grid)`
  padding: 80px 25vw;
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
      <Typography>
        A hackathon is a weekend long event where students come together to
        build computer science projects. Hackathons teach students about
        software development by letting them make their own products. They
        create a space for students to learn new skills and eliminate coding
        road-blocks. Swamphacks VI provides resources such as hardware,
        workshops, and mentors to support all student endeavors.
      </Typography>
    )
  }
];

const MainPage = () => {
  return (
    <Container>
      <SunnyDock />
      <Grid container spacing={4}>
        {/* Basic Info */}
        <ContentSectionGrid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3' paragraph>
              Welcome to the Swamp!
            </Typography>
            <Typography variant='body1' paragraph>
              Swamphacks VI is 36 hours of learning, coding, and creativity. For
              a whole weekend, over 650 students nationwide come together as
              developers, engineers, and designers. We welcome all people with a
              desire to build and learn by making.
            </Typography>
            <Typography variant='body1' paragraph>
              Experience software development in sunny Gainesville, Florida
              through our hackathon! From seasoned mentors to intriguing
              workshops, Swamphacks VI supports all student activities and
              encourages “outside the box” thinking. Join us to meet some of the
              brightest minds in the South and have an awesome weekend in our
              swamp.
            </Typography>
            <Typography variant='body1' paragraph>
              This year, Swamphacks VI aims to make our event more sustainable
              by reducing our waste and carbon output.
            </Typography>
          </Grid>
        </ContentSectionGrid>
        {/* Schedule of Events */}
        <ContentSectionGrid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3' paragraph>
              Schedule of Events
            </Typography>
            <Paper>
              <Table>
                {events.map(obj => (
                  <>
                    <TableHead>
                      <TableRow>
                        <TableCell>{obj.day}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {obj.events.map(event => (
                        <TableRow key={event.name}>
                          <TableCell scope='row'>{event.name}</TableCell>
                          <TableCell align='right'>{event.time}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </>
                ))}
              </Table>
            </Paper>
          </Grid>
        </ContentSectionGrid>
        {/* Frequently Asked Questions (FAQ) */}
        <ContentSectionGrid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3' paragraph>
              Frequently Asked Questions
            </Typography>
            {faq.map(qa => (
              <ExpansionPanel key={qa.question}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{qa.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>{qa.details}</ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
          </Grid>
        </ContentSectionGrid>
      </Grid>
    </Container>
  );
};

export default MainPage;
