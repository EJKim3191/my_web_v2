import React from "react";
import { HouseImg } from "./styles";
import house from "../../img/pixelImg/house/house.png";
function House() {
  console.log((window.innerHeight/window.innerWidth) >= (9/16))
  console.log((window.innerHeight -window.innerWidth * 9 / 16)/2)
  return (
    <div>
      <HouseImg src={house} wheight={window.innerHeight} wwidth={window.innerWidth}></HouseImg>
    </div>
  );
}
export default House;
