/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import test_character_1 from "../../img/pixelImg/character/test_character_1.png";
import { CharacterImg } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../MainReducer";

function Character() {
  const dispatch = useDispatch();

  const x = useSelector((state) => state.main.x);
  const y = useSelector((state) => state.main.y);
  console.log(x,y)
  useEffect(() => {
    dispatch(setScreen());
  }, []);
  useEffect(() => {
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
