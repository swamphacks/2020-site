import React, {useState} from 'react';
import styled from 'styled-components';
import {Transition} from 'react-spring/renderprops';
import {Link} from 'react-router-dom';

import HamburgerButton from '../HamburgerButton';

// Styled components
const RootContainer = styled.div`
  width: 33vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  flex-direction: column;
  position: relative;
`;

const PictureContainer = styled.div`
  padding: 20px 0px;
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PictureOutline = styled.img`
  width: 100%;
  left: 0;
  top: 0;
`;

const Picture = styled.img`
  width: 80%;
  height: 200px;
  background-color: red;
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
`;

const Drawer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #8daa90;
  z-index: 40;
`;

const LinkContainer = styled.div`
  padding: 10px 0px;
`;

const DrawerLink = styled(Link)`
  font-size: 1.75rem;
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
    color: white;
  }
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const InfoText = styled.p`
  font-family: Montserrat-Bold, Helvetica, sans-serif;
`;

const HomeComponent = ({paths}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <RootContainer>
      {/* Hamburger Menu */}
      <HamburgerButton
        onClick={() => setMenuOpen(!menuOpen)}
        color='white'
        style={{position: 'absolute', top: 20, right: 20, zIndex: 41}}
      />
      <Transition
        items={menuOpen}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
      >
        {menuOpen =>
          menuOpen &&
          (props => (
            <Drawer style={props}>
              {paths.map(({label, path}, index) => (
                <LinkContainer
                  onClick={() => setMenuOpen(false)}
                  key={label + index}
                >
                  <DrawerLink to={path}>{label}</DrawerLink>
                </LinkContainer>
              ))}
            </Drawer>
          ))
        }
      </Transition>
      {/* Title */}
      <WelcomeText>Welcome to SwampHacks VI</WelcomeText>
      {/* Picture */}
      <PictureContainer>
        <PictureOutline src='/images/outlineLouis.png'></PictureOutline>
        <Picture />
      </PictureContainer>
      <InfoContainer>
        <InfoText>John Smith</InfoText>
        <InfoText>jsmith@gmail.com</InfoText>
        <InfoText>Hacker</InfoText>
        <InfoText>Application Status: Pending</InfoText>
      </InfoContainer>
    </RootContainer>
  );
};

export default HomeComponent;
