import React, {useState, useLayoutEffect} from 'react';
import styled from 'styled-components';
import useMediaQuery from 'react-use-media-query-hook';

import HamburgerMenu from './HamburgerMenu';
import SocialButton from '../SocialButton';
import {withFirebase} from '../Firebase';

// Styled components
const RootContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  padding-top: 140px;
  position: relative;
  background-color: #8daa90;
  @media screen and (min-width: 1200px) {
    padding-top: 40px;
    width: 33vw;
  }
`;

const PictureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/outlineLouis.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const FakePicture = styled.img`
  width: 250px;
  opacity: 0;
`;

const Initials = styled.p`
  font-weight: 900;
  font-size: 3.5rem;
  font-family: Montserrat-Bold, Helvetica, sans-serif;
  position: absolute;
  padding-top: 30px;
  padding-left: 5px;
`;

const InfoContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WelcomeText = styled.h1`
  font-weight: 900;
  font-size: 2.75rem;
  font-family: Montserrat-Bold, Helvetica, sans-serif;
  text-align: center;
  padding-bottom: 40px;
`;

const NameText = styled.h2`
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const InfoText = styled.p`
  font-family: Montserrat, Helvetica, sans-serif;
`;

const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const HomeComponent = ({firebase, paths}) => {
  const isComputer = useMediaQuery('(min-width: 1200px)');
  const [data, setData] = useState({
    initials: '',
    name: '{name}',
    email: '{email}',
    status: '{status}'
  });

  useLayoutEffect(() => {
    const unsubscribe = firebase.getDashboardData(val => {
      setData(val);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const _handleLogout = async () => {
    await firebase.signOut();
  };

  return (
    <RootContainer style={{backgroundColor: '#8daa90'}}>
      {/* Hamburger Menu */}
      {isComputer && <HamburgerMenu paths={paths} logout={_handleLogout} />}
      {/* Title */}
      <WelcomeText>Welcome to SwampHacks VI</WelcomeText>
      {/* Picture */}
      <PictureContainer>
        <Initials>{data.initials}</Initials>
        <FakePicture src='/images/outlineLouis.png' />
      </PictureContainer>
      <InfoContainer>
        <NameText>{data.name}</NameText>
        <InfoText>{data.email}</InfoText>
        <InfoText>Hacker</InfoText>
        <InfoText>Application Status: {data.status}</InfoText>
      </InfoContainer>
      {/* Social Buttons */}
      <div style={isComputer ? {position: 'absolute', bottom: 0} : {}}>
        <SocialContainer style={{paddingBottom: 0}}>
          <SocialButton slack link='/' big />
        </SocialContainer>
        <SocialContainer>
          <SocialButton
            facebook
            link='https://www.facebook.com/SwampHacks/?ref=br_rs'
          />
          <SocialButton
            instagram
            link='https://www.instagram.com/ufswamphacks/'
          />
          <SocialButton twitter link='https://twitter.com/swamphacks?lang=en' />
          <SocialButton
            snapchat
            link='https://www.snapchat.com/add/swamphackssnaps'
          />
        </SocialContainer>
      </div>
    </RootContainer>
  );
};

export default React.memo(withFirebase(HomeComponent));
