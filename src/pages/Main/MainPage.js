import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// Semantic UI
import {
  Grid,
  Header,
  Container,
  Icon,
  Table,
  Button,
  Segment
} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import {Element} from 'react-scroll';
import {useSpring, animated} from 'react-spring';
import ModularAccordion from '../../components/Accordion';
// Custom components
import SocialButton from '../../components/SocialButton';
import VolleyballScene from '../../components/VolleyballScene';
import WoodButton from '../../components/Button';
import ScrollNav from '../../components/ScrollNav';
import ScrollToTop from '../../components/ScrollToTop';

// For flare animation
// TODO: Separate flare animation into separate circles + into component
// Make the background move with it
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const sunTrans = (x, y) => `translate3d(${x / 24 - 200}px,${y / 36 + 50}px,0)`;
const redTrans = (x, y) => `translate3d(${x / 15 - 50}px,${y / 24 + 400}px,0)`;
const yelTrans = (x, y) => `translate3d(${x / 15 - 100}px,${y / 24 + 300}px,0)`;
const smallYelTrans = (x, y) =>
  `translate3d(${x / 15 - 300}px,${y / 24 + 0}px,0)`;
const cloud1Trans = (x, y) =>
  `translate3d(${x / 18 - 500}px,${y / 27 + 100}px,0)`;
const cloud2Trans = (x, y) =>
  `translate3d(${x / 18 + 500}px,${y / 27 + 150}px,0)`;

// Styled components
const RootContainer = styled.div`
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const RocksWall = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-image: url('/images/rocksWall.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right bottom;
  position: relative;
  @media screen and (max-width: 1100px) {
    background-position: left bottom;
  }
`;

const SunnyDock = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-image: url('/images/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Cloud1 = styled(animated.img).attrs(props => ({
  src: '/images/cloud1.svg'
}))`
  width: 400px;
  z-index: 3;
  position: absolute;
  top: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Cloud2 = styled(animated.img).attrs(props => ({
  src: '/images/cloud2.svg'
}))`
  width: 400px;
  z-index: 3;
  position: absolute;
  top: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  padding: 40px 0;
  margin-bottom: 20vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  flex-direction: column;
`;

const ContentBlock = styled(Container)`
  padding: 60px 0;
`;

const FooterContainer = styled.footer`
  background-color: #586f52;
  width: 100vw;
  color: white;
`;

const TransitionImage = styled.img`
  width: 100vw;
`;

const Heart = styled.svg`
  fill: red;
  position: relative;
  top: 8px;
  width: 25px;
  animation: pulse 1.5s ease infinite;
  @keyframes pulse {
    0% {
      transform: scale(0.7);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.7);
    }
  }
`;

const FooterLink = styled.a.attrs(props => ({
  target: '_blank'
}))`
  color: white;
  display: block;
  :hover {
    text-decoration: underline;
    color: white;
  }
`;

const WaterScene = styled.img.attrs(props => ({
  src: '/images/sailing.svg'
}))`
  width: 600px;
  position: absolute;
  left: 0;
  animation: watta 4s linear infinite;
  @keyframes watta {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const MainTitle = styled.img.attrs(props => ({
  src: '/images/mainTitle.svg'
}))`
  z-index: 2;
  width: 40vw;
  max-width: 800px;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

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
        request travel support before December 1st. Additional travel routes and
        buses may be announced depending on interest.
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
        deadline for applications seeking travel reimbursement is December 1st,
        2019.
      </p>
    )
  },
  {
    title: 'When do applications close?',
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

const MainPage = props => {
  // For flare animation
  const [flareProps, setFlareProps] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 10, tension: 550, friction: 200}
  }));
  const [cloudProps, setCloudProps] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 7, tension: 350, friction: 155}
  }));
  const [sunProps, setSunProps] = useSpring(() => ({
    xy: [0, 0],
    config: {mass: 50, tension: 1000, friction: 550}
  }));

  return (
    <RootContainer id='mainRootContainer'>
      <ScrollNav
        items={[
          {label: 'About', scrollId: 'aboutSection'},
          {label: 'Schedule', scrollId: 'scheduleSection'},
          {label: 'FAQ', scrollId: 'faqSection'},
          {label: 'Sponsors', scrollId: 'sponsorSection'}
        ]}
      />
      <ScrollToTop />
      <SunnyDock
        onMouseMove={e => {
          setFlareProps({xy: calc(e.clientX, e.clientY)});
          setCloudProps({xy: calc(e.clientX, e.clientY)});
          setSunProps({xy: calc(e.clientX, e.clientY)});
        }}
      >
        {/* For flare animation */}
        <animated.img
          src={'/images/sun.svg'}
          style={{
            transform: sunProps.xy.interpolate(sunTrans),
            width: '300px',
            zIndex: 2,
            position: 'absolute',
            top: 0
          }}
        />
        <animated.img
          src={'/images/smallYellowFlare.svg'}
          style={{
            transform: flareProps.xy.interpolate(smallYelTrans),
            width: '85px',
            zIndex: 3,
            position: 'absolute',
            top: 0
          }}
        />
        <animated.img
          src={'/images/yellowFlare.svg'}
          style={{
            transform: flareProps.xy.interpolate(yelTrans),
            width: '125px',
            zIndex: 3,
            position: 'absolute',
            top: 0
          }}
        />
        <animated.img
          src={'/images/redFlare.svg'}
          style={{
            transform: flareProps.xy.interpolate(redTrans),
            width: '50px',
            zIndex: 3,
            position: 'absolute',
            top: 0
          }}
        />
        <Cloud1 style={{transform: cloudProps.xy.interpolate(cloud1Trans)}} />
        <Cloud2 style={{transform: cloudProps.xy.interpolate(cloud2Trans)}} />
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            zIndex: 4,
            paddingTop: '20%'
          }}
        >
          <MainTitle />
          <ButtonContainer>
            <WoodButton
              onClick={() => {
                props.history.push('/application');
              }}
            />
            <WoodButton
              sponsor
              onClick={() => {
                window.location.href = 'mailto:sponsors@swamphacks.com';
              }}
            />
          </ButtonContainer>
        </div>

        {/* </div> */}
      </SunnyDock>
      {/* Welcome to the swamp */}
      <Element name='aboutSection'>
        <ContentContainer
          style={{
            backgroundColor: '#FFD59A',
            alignItems: 'flex-start'
          }}
        >
          <VolleyballScene
            style={{
              position: 'absolute',
              right: 0
            }}
          />
          <Grid container padded>
            <Grid.Column>
              <ContentBlock text>
                <Header size='huge'>Welcome to the Swamp!</Header>
                <p>
                  Swamphacks VI is 36 hours of learning, coding, and creativity.
                  For a whole weekend, over 650 students nationwide come
                  together as developers, engineers, and designers. We welcome
                  all people with a desire to build and learn by making.
                </p>
                <p>
                  Experience software development in sunny Gainesville, Florida
                  through our hackathon! No experience is necessary to
                  participate; we welcome everyone regardless of year in school.
                  From seasoned mentors to intriguing workshops, Swamphacks VI
                  supports all student activities and encourages “outside the
                  box” thinking. Join us to meet some of the brightest minds in
                  the South and have an awesome weekend in our swamp.
                </p>
                <p>
                  This year, Swamphacks VI aims to make our event more
                  sustainable by reducing our waste and carbon output. Our goal
                  is to use more compostable material, encourage our Sponsors to
                  travel sustainably, and provide hackers with eco-friendly
                  swag.
                </p>
              </ContentBlock>
            </Grid.Column>
          </Grid>
        </ContentContainer>
      </Element>
      <TransitionImage
        src={'/images/sandToWater.svg'}
        style={{backgroundColor: '#FFD59A'}}
      />
      {/* Schedule of Events */}
      <Element name='scheduleSection'>
        <ContentContainer
          style={{
            backgroundImage: `url('/images/waves.svg')`,
            backgroundColor: '#1475BC'
          }}
        >
          <WaterScene />
          <ContentBlock text>
            <Header size='huge' inverted>
              Schedule of Events
            </Header>
            <Segment>
              {events.map(obj => {
                return (
                  <React.Fragment key={obj.day}>
                    <Header size='medium'>{obj.day}</Header>
                    <Grid columns='equal' celled='internally'>
                      {obj.events.map(e => {
                        return (
                          <Grid.Row key={e.name}>
                            <Grid.Column>
                              <Header size='tiny'>{e.name}</Header>
                            </Grid.Column>
                            <Grid.Column textAlign='right'>
                              <Header size='tiny'>{e.time}</Header>
                            </Grid.Column>
                          </Grid.Row>
                        );
                      })}
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Segment>
          </ContentBlock>
        </ContentContainer>
      </Element>
      {/* FAQ */}
      <Element name='faqSection'>
        <ContentContainer
          style={{
            background: '#786b66'
          }}
        >
          <div style={{height: 0}}>
            <div
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(20,117,188,1) 9.34%, rgba(64,199,244,1) 49.4%, rgba(255,255,253,1) 91.26%)'
              }}
            >
              <RocksWall />
            </div>
          </div>
          <ContentBlock text style={{minHeight: '100vh', zIndex: '3'}}>
            <Header size='huge' inverted>
              Frequently Asked Questions
            </Header>
            <ModularAccordion items={faq} />
          </ContentBlock>
        </ContentContainer>
      </Element>
      {/* Sponsors */}
      <Element name='sponsorSection'>
        <ContentContainer>
          <ContentContainer
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(120,107,102,1) 9.34%, rgba(250,172,98,1) 49.4%, rgba(254,228,116,1) 91.26%)'
            }}
          >
            <ContentBlock
              style={{
                minHeight: '50vh',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex'
              }}
            >
              <img
                src={'/images/sponsorsComingSoon.svg'}
                style={{width: '100%', maxWidth: 700}}
              />
            </ContentBlock>
          </ContentContainer>

          <img
            src={'/images/gatorSwan.png'}
            style={{width: '100%', backgroundColor: '#586f52'}}
          />
        </ContentContainer>
      </Element>
      {/* Footer */}
      <FooterContainer>
        <ContentBlock>
          <Grid
            container
            padded
            stackable
            columns='equal'
            textAlign='center'
            verticalAlign='middle'
          >
            <Grid.Row>
              <Grid.Column>
                <SocialButton
                  facebook
                  link='https://www.facebook.com/SwampHacks/?ref=br_rs'
                />
                <SocialButton
                  instagram
                  link='https://www.instagram.com/ufswamphacks/'
                />
                <SocialButton
                  twitter
                  link='https://twitter.com/swamphacks?lang=en'
                />
                <SocialButton
                  snapchat
                  link='https://www.snapchat.com/add/swamphackssnaps'
                />
              </Grid.Column>
              <Grid.Column>
                <p>
                  Made with{' '}
                  <Heart viewBox='0 0 32 29.6'>
                    <path
                      d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'
                    />
                  </Heart>{' '}
                  in Gainesville.
                </p>
              </Grid.Column>
              <Grid.Column>
                <FooterLink href='http://mlh.io/code-of-conduct'>
                  MLH Code of Conduct
                </FooterLink>
                <FooterLink href='https://2019.swamphacks.com'>
                  Last Year's Site
                </FooterLink>
                <FooterLink href='https://swamphacks-v.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover'>
                  Last Year's Devpost
                </FooterLink>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ContentBlock>
      </FooterContainer>
    </RootContainer>
  );
};

export default withRouter(MainPage);
