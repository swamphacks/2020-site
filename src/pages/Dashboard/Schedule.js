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
  overflow-x: hidden;
  overflow-y: scroll;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const EventContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  max-width: 680px;
`;

const DayText = styled.h3`
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const EventText = styled.p`
  font-family: Montserrat, Helvetica, sans-serif;
`;

const Schedule = () => {
  return (
    <RootContainer>
      <PageTitle title='Schedule' />
      <ContentContainer>
        {events.map(event => (
          <EventContainer key={event.day}>
            <DayText>{event.day}</DayText>
            {event.events.map(({name, time}) => (
              <EventText key={name + time}>
                {name} - {time}
              </EventText>
            ))}
          </EventContainer>
        ))}
      </ContentContainer>
    </RootContainer>
  );
};

const createEvent = (name, time) => ({
  name,
  time
});

const events = [
  {
    day: 'Friday',
    events: [
      createEvent('Check-In', '5:30-7:30 PM'),
      createEvent('Dinner', '6:00-8:00 PM'),
      createEvent('Team Building', '6:30-8:00 PM'),
      createEvent('Opening Ceremony', '8:00-9:00 PM'),
      createEvent('Sponsor Fair', '9:00-10:00 PM'),
      createEvent('Hacking Begins', '10:00 PM')
    ]
  },
  {
    day: 'Saturday',
    events: [
      createEvent('Midnight Snack', '12:00 AM'),
      createEvent('Breakfast', '8:00-9:00 AM'),
      createEvent('Lunch', '1:00-2:30 PM'),
      createEvent('Dinner', '6:00-7:30 PM')
    ]
  },
  {
    day: 'Sunday',
    events: [
      createEvent('Midnight Snack', '12:00 AM'),
      createEvent('Breakfast', '6:00-8:00 AM'),
      createEvent('Devpost Submissions Close', '8:00 AM'),
      createEvent('Hacking Ends + Lunch', '10:00 AM'),
      createEvent('Demo Waves', '11:00 AM - 2:00 PM'),
      createEvent('Closing Ceremony', '2:30-3:30 PM')
    ]
  }
];

export default Schedule;
