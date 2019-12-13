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
  background-color: red;
  width: 200px;
  height: 200px;
`;

const InfoContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const WelcomeText = styled.h1`
  font-weight: bold;
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
`;

const HomeComponent = ({paths}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <RootContainer>
      {/* Hamburger Menu */}
      <HamburgerButton
        onClick={() => setMenuOpen(!menuOpen)}
        color='white'
        style={{position: 'absolute', top: 20, right: 20, zIndex: 40}}
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
      <PictureContainer />
      <h3>John Smith</h3>
      <InfoContainer>
        <h3>jsmith@gmail.com</h3>
        <h3>Hacker</h3>
        <h3>Application Status: Pending</h3>
      </InfoContainer>
    </RootContainer>
  );
};

export default HomeComponent;
