/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import noonbackground from "../img/pixelImg/background/noonbackground.png"; // 12->17
import sunsetbackground from "../img/pixelImg/background/sunsetbackground.png"; // 17->20
import nightbackgroundwithmoon from "../img/pixelImg/background/nightbackgroundwithmoon.png"; // 20-> 05
import dawnbackground from "../img/pixelImg/background/dawnbackground.png"; //05->12
import { BackgroundContainer, Background } from "./styles";

function BackgroundPage() {
  const [background, setBackground] = useState(noonbackground);
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (12 < hour && hour <= 17) {
      setBackground(noonbackground);
    } else if (17 < hour && hour <= 20) {
      setBackground(sunsetbackground);
    } else if (20 < hour && hour <= 5) {
      setBackground(nightbackgroundwithmoon);
    } else {
      setBackground(dawnbackground);
    }
  }, []);

  return (
    <BackgroundContainer>
      <Background alt="background" src={background} />
    </BackgroundContainer>
  );
}

export default BackgroundPage;
