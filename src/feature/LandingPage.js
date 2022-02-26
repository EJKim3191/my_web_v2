/* eslint-disable react/jsx-filename-extension */
import React from "react";
import noonbackground from "../img/pixelImg/background/noonbackground.png";
import grass_template2 from "../img/pixelImg/background/grass_template2.jpg";
import { Background, Background2 } from "./styles";

function LandingPage() {
  return (
    <div>
      <Background alt="background" src={noonbackground} />
      <Background2 alt="background2" src={grass_template2} />
    </div>
  );
}

export default LandingPage;
