import React from 'react';
import styled from 'styled-components';

// Images
import net from '../resources/images/net.svg';
import danny from '../resources/images/danny.svg';
import karen from '../resources/images/karen.svg';

const Karen = styled.img.attrs(props => ({
  src: karen
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
  src: danny
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

const VolleyballScene = ({style, ...props}) => {
  return (
    <div {...props} style={{width: '100%', height: 600}}>
      <Karen />
      <img
        src={net}
        style={{
          position: 'absolute',
          width: 400,
          left: 'calc(50% - 200px)',
          bottom: '20%'
        }}
      />
      <Danny />
    </div>
  );
};

export default VolleyballScene;
