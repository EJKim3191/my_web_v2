/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import noonbackground from '../img/pixelImg/background/noonbackground.png';
import { Background } from './styles';

function LandingPage() {
  return (
    <div>
      <Background alt="background" src={noonbackground} />
    </div>
  );
}

export default LandingPage;
