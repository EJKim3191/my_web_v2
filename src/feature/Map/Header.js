import React from "react";
import { HeaderImg } from "./styles";
import headerImg from "../../img/pixelImg/header/mainHeader.png";
function House() {
  return (
    <div>
      <HeaderImg src={headerImg} wheight={window.innerHeight} wwidth={window.innerWidth} ></HeaderImg>
    </div>
  );
}
export default House;
