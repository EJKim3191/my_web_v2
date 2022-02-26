/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import LandingPage from "../feature/LandingPage";
// 케릭터
import Character from "../feature/Character/Character";
// 맵과 맵 구조물
import Interactive_Person from "../feature/Map/Interactive_Person";
// Interactive message
import MessageScientist from "../feature/InteractiveMessage/MessageProjects";
import MessageProjects from "../feature/InteractiveMessage/MessageScientist";
import MessageContatct from "../feature/InteractiveMessage/MessageContact";
import { useDispatch, useSelector } from "react-redux";
import { handleMove } from "../feature/MainReducer";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line react/display-name
export default function () {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    dispatch(handleMove(e));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <LandingPage />
      <Character />
      <Interactive_Person />
      <MessageScientist />
      <MessageProjects />
      <MessageContatct />
    </div>
  );
}
