import React from "react";

import BackgroundPage from "../../feature/BackgroundPage"
// 케릭터
import Character from "../../feature/Character/Character";
// 맵과 맵 구조물
import Header from "../../feature/Map/Header";
import House from "../../feature/Map/House";
import Interactive_Person from "../../feature/Map/Interactive_Person";
import Interactive_Obstacles from "../../feature/Map/Interactive_Obstacles";
// Interactive message
import MessageScientist from "../../feature/InteractiveMessage/MessageProjects";
import MessageProjects from "../../feature/InteractiveMessage/MessageScientist";
import MessageContatct from "../../feature/InteractiveMessage/MessageContact";
import MessageNextRoom from "../../feature/InteractiveMessage/MessageNextRoom";

const Prologue = () => {
    return (
        <> 
            <BackgroundPage />
            <Header />
            <House />
            <Character />
            <Interactive_Person />
            <Interactive_Obstacles />
            <MessageScientist />
            <MessageProjects />
            <MessageContatct />
            <MessageNextRoom />
        </>
    );
}

export default Prologue;