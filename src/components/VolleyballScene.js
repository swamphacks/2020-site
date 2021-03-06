import React from 'react';
import styled from 'styled-components';

const Karen = styled.img.attrs(props => ({
  src: '/images/karen.svg'
}))`
  position: absolute;
  width: 200px;
  right: calc(40% - 100px);
  bottom: 30%;
  animation: karen 5s linear infinite;
  @keyframes karen {
    0% {
      transform: rotate(0);
      bottom: 30%;
    }
    50% {
      transform: rotate(-5deg);
      bottom: 31%;
    }
    100% {
      transform: rotate(0);
      bottom: 30%;
    }
  }
`;

const Danny = styled.img.attrs(props => ({
  src: '/images/danny.svg'
}))`
  position: absolute;
  width: 200px;
  bottom: 10%;
  animation: danny 4s linear infinite;
  @keyframes danny {
    0% {
      transform: rotate(0);
      bottom: 10%;
    }
    50% {
      transform: rotate(5deg);
      bottom: 11%;
    }
    100% {
      transform: rotate(0);
      bottom: 10%;
    }
  }
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

const VolleyballScene = ({style, ...props}) => {
  return (
    <Container style={style}>
      <Karen />
      <img
        src={'/images/net.svg'}
        style={{
          position: 'absolute',
          width: 400,
          left: 'calc(50% - 200px)',
          bottom: '20%'
        }}
      />
      <Danny />
    </Container>
  );
};

export default VolleyballScene;
