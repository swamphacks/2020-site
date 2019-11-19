import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  z-index: 1;
  border: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: transparent;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  width: 300px;
  height: 100px;

  -webkit-transition: -webkit-transform 0.25s ease;

  transition: -webkit-transform 0.25s ease;

  -o-transition: transform 0.25s ease;

  transition: transform 0.25s ease;

  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  :hover {
    -webkit-transform: scale(1.09) rotate(${Math.random() * 3 - 1}deg);
    -ms-transform: scale(1.09) rotate(${Math.random() * 3 - 1}deg);
    transform: scale(1.09) rotate(${Math.random() * 3 - 1}deg);
  }
`;

const Text = styled.div`
  position: absolute;
  font-family: Ink Free;
  line-height: 1.2;
  color: black;
  font-size: 21px;
`;

const WoodButton = props => {
  return (
    <CustomButton
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      style={props.style}
    >
      <img src={'/images/woodButton.svg'} width={'100%'} />
      <Text>{props.children}</Text>
    </CustomButton>
  );
};

export default WoodButton;
