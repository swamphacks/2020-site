import React from 'react';
import styled from 'styled-components';

import {Header} from 'semantic-ui-react';
import {scroller} from 'react-scroll';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 40px;
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

const ScrollNav = ({items}) => {
  return (
    <Container>
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
    </Container>
  );
};

export default ScrollNav;
