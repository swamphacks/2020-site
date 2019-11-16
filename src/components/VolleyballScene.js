import React from 'react';
import styled from 'styled-components';

// Images
import net from '../resources/images/net.svg';
import danny from '../resources/images/danny.svg';
import dannyShadow from '../resources/images/dannyShadow.svg';
import karen from '../resources/images/karen.svg';
import karenWing from '../resources/images/karenWing.svg';
import karenShadow from '../resources/images/karenShadow.svg';
import {findAllByDisplayValue} from '@testing-library/dom';

const VolleyballScene = ({style, ...props}) => {
  return (
    <div {...props} style={{width: 600, height: 600}}>
      <div>
        <img src={karenShadow} style={{position: 'absolute', width: 200}} />
        <img src={karen} style={{position: 'absolute', width: 200}} />
        <img
          src={karenWing}
          style={{position: 'absolute', width: 100, left: 330, top: 470}}
        />
      </div>
      <img src={net} style={{position: 'absolute', width: 400}} />
    </div>
  );
};

export default VolleyballScene;
