import React from 'react';
import styled from 'styled-components';
import {animateScroll} from 'react-scroll';

const Button = styled.img`
  width: 30px;
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 20px;
  -webkit-filter: drop-shadow(0 0 1px black);
  filter: drop-shadow(0 0 1px black);
  v=-webkit-transition: transform 0.2s;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  -o-transition: transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ScrollToTop = () => {
  return (
    <Button
      src='/images/arrow.svg'
      onClick={() => {
        animateScroll.scrollToTop({
          duration: 1000,
          delay: 50,
          smooth: true
        });
      }}
    />
  );
};

export default ScrollToTop;
