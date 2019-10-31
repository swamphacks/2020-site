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
  Paper
} from '@material-ui/core';

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
  background-color: red;
`;

const createEvent = (name, time) => ({
  name,
  time
});

const events = [
  createEvent('Test1', Date.now()),
  createEvent('Test2', Date.now()),
  createEvent('Test3', Date.now())
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
                <TableHead>
                  <TableRow>
                    <TableCell>Event</TableCell>
                    <TableCell align='right'>Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map(row => (
                    <TableRow key={row.name}>
                      <TableCell scope='row'>{row.name}</TableCell>
                      <TableCell align='right'>{row.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </ContentSectionGrid>
      </Grid>
    </Container>
  );
};

export default MainPage;
