import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.img`
  width: 160px;
  padding: 5px 0px;
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

const WoodButton = ({register, sponsor, mentorVolunteer, onClick}) => {
  let src = '/images/registerButton.svg';
  if (sponsor) src = '/images/sponsorButton.svg';
  if (mentorVolunteer) src = '/images/mvButton.svg';
  return <CustomButton src={src} onClick={onClick} />;
};

export default WoodButton;
