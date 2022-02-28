/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import test_character_1 from "../../img/pixelImg/character/test_character_1.png";
import { CharacterImg } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { calcStartPos, setMovementValue, setScreen } from "../MainReducer";

function Character() {
  const dispatch = useDispatch();

  const x = useSelector((state) => state.main.x);
  const y = useSelector((state) => state.main.y);
  useEffect(() => {
    dispatch(setScreen());
    dispatch(calcStartPos());
    dispatch(setMovementValue());
  }, []);
  useEffect(() => {
    console.log(x, "x");
    console.log(y, "y");
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(window.innerWidth);
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
