import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {animateScroll} from 'react-scroll';
import {Transition} from 'semantic-ui-react';

// https://www.sitepoint.com/throttle-scroll-events/
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

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

const SHOW_POS = 150;
const DELAY = 50;
const DURATION = 1000;

const ScrollToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > SHOW_POS) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 1000));
  }, []);
  return (
    <Transition visible={isScrolled} animation='fade left'>
      <Button
        src='/images/arrow.svg'
        onClick={() => {
          animateScroll.scrollToTop({
            duration: DURATION,
            delay: DELAY,
            smooth: true
          });
          setTimeout(() => setIsScrolled(false), DELAY + DURATION);
        }}
      />
    </Transition>
  );
};

export default ScrollToTop;
