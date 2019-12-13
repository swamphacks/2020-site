import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  width: 32px;
  -webkit-transition: transform 0.2s;
  -ms-transition: transform 0.2s;
  transition: transform 0.2s;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Button = styled.div`
  padding: 10px;
`;

const HamburgerButton = ({color, ...props}) => {
  const fill = color || 'black';
  return (
    <Button {...props}>
      <Icon viewBox='0 0 32 32' fill={fill}>
        <path d='M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z' />
      </Icon>
    </Button>
  );
};

export default HamburgerButton;
