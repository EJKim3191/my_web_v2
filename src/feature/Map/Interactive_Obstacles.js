import React from "react";
import { SinglePaperImg, RedArrow, BlueArrow, YellowArrow } from "./styles";
import paper from "../../img/pixelImg/object/singlePaper.png";
import redArrow from "../../img/pixelImg/object/redArrow.gif";
import blueArrow from "../../img/pixelImg/object/blueArrow.gif";
import yellowArrow from "../../img/pixelImg/object/yellowArrow.gif";

function Interactive_Person() {
  return (
    <div>
      <SinglePaperImg src={paper}></SinglePaperImg>
      <RedArrow src={redArrow}></RedArrow>
      <BlueArrow src={blueArrow}></BlueArrow>
      <YellowArrow src={yellowArrow}></YellowArrow>
    </div>
  );
}
export default Interactive_Person;
