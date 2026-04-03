import React from "react";
import { BackgroundContainer, Background } from "./styles";
import webonconstruction from "../../img/pixelImg/background/webonconstruction.png"; //05->12
import Loader from "../../components/Loader/Loader";

export default function ChapterOne() {
  return (
    <BackgroundContainer>
      <Background alt="background" src={webonconstruction} />
      <Loader open={true} label="Loading..." />
    </BackgroundContainer>
  );
}
