/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import LandingPage from "../feature/LandingPage";
// 케릭터
import Character from "../feature/Character/Character";
// 맵과 맵 구조물
import Header from "../feature/Map/Header";
import House from "../feature/Map/House";
import Interactive_Person from "../feature/Map/Interactive_Person";
import Interactive_Obstacles from "../feature/Map/Interactive_Obstacles";
// Interactive message
import MessageScientist from "../feature/InteractiveMessage/MessageProjects";
import MessageProjects from "../feature/InteractiveMessage/MessageScientist";
import MessageContatct from "../feature/InteractiveMessage/MessageContact";
import { useDispatch, useSelector } from "react-redux";
import { handleMove } from "../feature/MainReducer";
// CSS
import { App, MainContainer, Background } from "./App.styles";

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/display-name
export default function () {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    dispatch(handleMove(e));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <App>
      <Background />
      <MainContainer>
        <LandingPage />
        <Header />
        <House />
        <Character />
        <Interactive_Person />
        <Interactive_Obstacles />
        <MessageScientist />
        <MessageProjects />
        <MessageContatct />
      </MainContainer>
    </App>
  );
}
