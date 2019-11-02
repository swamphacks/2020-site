import React from 'react';
import styled from 'styled-components';
// Semantic UI
import {Grid, Image, Header, Container, Icon, Table} from 'semantic-ui-react';
import ModularAccordion from '../../components/Accordion';

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

const ContentBlock = styled(Container)`
  padding: 60px 0;
`;

const createEvent = (name, time) => ({
  name,
  time
});

const events = [
  {
    day: 'Friday',
    events: [
      createEvent('Test1', '8:30 AM'),
      createEvent('Test2', '8:30 AM'),
      createEvent('Test3', '8:30 AM')
    ]
  },
  {
    day: 'Saturday',
    events: [
      createEvent('Test1', '8:30 AM'),
      createEvent('Test2', '8:30 AM'),
      createEvent('Test3', '8:30 AM')
    ]
  },
  {
    day: 'Sunday',
    events: [
      createEvent('Test1', '8:30 AM'),
      createEvent('Test2', '8:30 AM'),
      createEvent('Test3', '8:30 AM')
    ]
  }
];

const faq = [
  {
    title: 'What is a hackathon?',
    content: (
      <p>
        A hackathon is a weekend long event where students come together to
        build computer science projects. Hackathons teach students about
        software development by letting them make their own products. They
        create a space for students to learn new skills and eliminate coding
        road-blocks. Swamphacks VI provides resources such as hardware,
        workshops, and mentors to support all student endeavors.
      </p>
    )
  },
  {
    title: 'Where is Swamphacks?',
    content: (
      <p>
        Collaboration Commons in the Marston Science Library at the University
        of Florida. Address is 444 Newell Dr, Gainesville, FL 32611.
      </p>
    )
  },
  {
    title: 'What should I bring?',
    content: (
      <p>
        Any hacking gear you need (laptop, hardware, chargers, batteries, etc.),
        comfortable clothes, toiletries (toothpaste, toothbrush, deodorant,
        etc.), a photo ID for registration, a government ID to rent hardware,
        and most importantly, yourself!
      </p>
    )
  },
  {
    title: 'Help, this is my first hackathon!',
    content: (
      <p>
        Amazing! SwampHacks VI welcomes everyone regardless of major or skill
        level. So long as you have a passion for development and a willingness
        to learn we can guide you with our numerous mentors and beginner
        workshops.
      </p>
    )
  },
  {
    title: 'How much will I spend?',
    content: (
      <p>
        Swamphacks VI is free! Everything from the food, swag, and prizes has
        been covered by our generous sponsors.
      </p>
    )
  },
  {
    title: 'Who is Swamphacks for?',
    content: (
      <p>
        Swamphacks VI is for everyone! All students currently enrolled in
        university and interested in development are eligible.
      </p>
    )
  },
  {
    title: 'Can high school students attend?',
    content: (
      <p>
        Our venue does not allow minors to stay overnight. High school students
        and others below legal age are unable to participate.
      </p>
    )
  },
  {
    title: 'How can I volunteer or mentor?',
    content: (
      <p>
        We start volunteer and mentor recruitment in December. Please note that
        if you choose to either mentor or volunteer, you cannot participate in
        the hackathon or submit a project.
      </p>
    )
  },
  {
    title: 'What happens after I apply?',
    content: (
      <p>
        After we receive your application, we send an email regarding your
        participant status. That email will contain instructions to set up your
        dashboard account. This account will contain your event registration
        information. Your dashboard will also indicate your application status.
      </p>
    )
  },
  {
    title: 'What if I don’t have a team?',
    content: (
      <p>
        Swamphacks VI allows you plus a max of 3 others (4 total) to form a team
        and participate. You can either form your own team or attend our team
        formation workshop at the beginning of the hackathon. You can also work
        by yourself. We strive to let students forge new connections with people
        from other states and encourage you to work with people you don’t know.
      </p>
    )
  },
  {
    title: 'How do I get there?',
    content: (
      <p>
        We provide a charter bus to and from the Georgia Institute of
        Technology. We also provide travel reimbursements for applications that
        request travel support before 11:59pm November 18th. Additional travel
        routes and buses may be announced depending on interest.
      </p>
    )
  },
  {
    title: 'Will I be sitting at my computer all weekend?',
    content: (
      <p>
        The event will have many activities for participants including
        networking sessions, tech talks, engineering workshops, and much more.
        Feel free to attend as many or as few of these activities as you want in
        addition to coding your project.
      </p>
    )
  },
  {
    title: 'Will Swamphacks provide travel reimbursement?',
    content: (
      <p>
        SwampHacks VI provides a limited number of travel reimbursements. The
        deadline for applications seeking travel reimbursement is Sunday,
        November 18th at 11:59PM.
      </p>
    )
  },
  {
    title: 'When are applications out?',
    content: <p>Applications will close on December 21st.</p>
  },
  {
    title: 'Is there a Code of Conduct?',
    content: (
      <p>
        All hackers must adhere to the{' '}
        <a
          href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'
          target='_blank'
        >
          MLH Code of Conduct
        </a>
        .
      </p>
    )
  }
];

const MainPage = () => {
  return (
    <RootContainer>
      <SunnyDock />
      {/* Welcome to the swamp */}
      <Grid container padded>
        <Grid.Column>
          <ContentBlock text>
            <Header size='huge'>Welcome to the Swamp!</Header>
            <p>
              Swamphacks VI is 36 hours of learning, coding, and creativity. For
              a whole weekend, over 650 students nationwide come together as
              developers, engineers, and designers. We welcome all people with a
              desire to build and learn by making.
            </p>
            <p>
              Experience software development in sunny Gainesville, Florida
              through our hackathon! From seasoned mentors to intriguing
              workshops, Swamphacks VI supports all student activities and
              encourages “outside the box” thinking. Join us to meet some of the
              brightest minds in the South and have an awesome weekend in our
              swamp.
            </p>
            <p>
              This year, Swamphacks VI aims to make our event more sustainable
              by reducing our waste and carbon output.
            </p>
          </ContentBlock>
        </Grid.Column>
      </Grid>
      {/* Schedule of Events */}
      <Grid container padded>
        <Grid.Column>
          <ContentBlock text>
            <Header size='huge'>Schedule of Events</Header>
            <Table>
              {events.map(obj => (
                <React.Fragment key={obj.day}>
                  <Table.Header fullWidth>
                    <Table.Row>
                      <Table.HeaderCell>{obj.day}</Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {obj.events.map(event => (
                      <Table.Row key={event.name}>
                        <Table.Cell>{event.name}</Table.Cell>
                        <Table.Cell textAlign='right'>{event.time}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </React.Fragment>
              ))}
            </Table>
          </ContentBlock>
        </Grid.Column>
      </Grid>
      {/* FAQ */}
      <Grid container padded>
        <Grid.Column>
          <ContentBlock text>
            <Header size='huge'>Frequently Asked Questions</Header>
            <ModularAccordion items={faq} />
          </ContentBlock>
        </Grid.Column>
      </Grid>
    </RootContainer>
  );
};

export default MainPage;
