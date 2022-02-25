/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import test_character_1 from "../../img/pixelImg/character/test_character_1.png";
import { CharacterImg } from "./styles";
import { useSelector } from "react-redux";

function Character() {
  const x = useSelector((state) => state.main.x);
  const y = useSelector((state) => state.main.y);

  useEffect(() => {
    console.log(x, "x");
    console.log(y, "y");
  }, [x, y]);
  return (
    <CharacterImg
      src={test_character_1}
      x={`${x}px`}
      y={`${y}px`}
    ></CharacterImg>
  );
}
export default Character;
