import React, {useState} from 'react';
import styled from 'styled-components';
import {Header, Responsive} from 'semantic-ui-react';
import {scroller} from 'react-scroll';
import {Spring} from 'react-spring/renderprops';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 40px;
  @media screen and (max-width: 600px) {
    position: fixed;
  }
`;

const Hamburger = styled.img`
  fill: black;
  width: 30px;
  -webkit-transition: transform 0.2s;
  -ms-transition: transform 0.2s;
  transition: transform 0.2s;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Close = styled.img`
  position: absolute;
  top: 40px;
  left: 40px;
  fill: black;
  width: 30px;
  -webkit-transition: transform 0.2s;
  -ms-transition: transform 0.2s;
  transition: transform 0.2s;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Item = styled.li`
  float: left;
`;

const Button = styled.div`
  padding: 0px 20px;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Drawer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd59a;
`;

const ScrollNav = ({items}) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Responsive as={Container} minWidth={600}>
        <List>
          {items.map(({label, scrollId}, index) => {
            return (
              <Item key={label + index}>
                <Button
                  onClick={() => {
                    scroller.scrollTo(scrollId, {
                      duration: 1000,
                      delay: 50,
                      smooth: true
                    });
                  }}
                >
                  <Header>{label}</Header>
                </Button>
              </Item>
            );
          })}
        </List>
      </Responsive>
      <Responsive as={Container} maxWidth={600}>
        <Hamburger
          src='./images/hamburgerMenu.svg'
          onClick={() => setOpen(true)}
        />
        {open && (
          <Spring
            from={{opacity: 0}}
            to={{
              opacity: 1
            }}
          >
            {props => (
              <Drawer style={props}>
                <Close
                  src='./images/hamburgerMenu.svg'
                  onClick={() => setOpen(false)}
                />
                <List>
                  {items.map(({label, scrollId}, index) => {
                    return (
                      <Item
                        key={label + index}
                        style={{
                          float: 'none',
                          paddingTop: 20,
                          paddingBottom: 20
                        }}
                      >
                        <Button
                          onClick={() => {
                            scroller.scrollTo(scrollId, {
                              duration: 1000,
                              delay: 50,
                              smooth: true
                            });
                            setOpen(false);
                          }}
                        >
                          <Header textAlign='center'>{label}</Header>
                        </Button>
                      </Item>
                    );
                  })}
                </List>
              </Drawer>
            )}
          </Spring>
        )}
      </Responsive>
    </React.Fragment>
  );
};

export default ScrollNav;
