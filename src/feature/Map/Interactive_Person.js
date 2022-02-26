import React from "react";
import {
  Interactive_PersonImg,
  Interactive_PersonImg2,
  Interactive_ContatctImg2,
} from "./styles";
import test_character_2 from "../../img/pixelImg/character/test_character_2.png";
function Interactive_Person() {
  return (
    <div>
      <Interactive_PersonImg src={test_character_2}></Interactive_PersonImg>
      <Interactive_PersonImg2 src={test_character_2}></Interactive_PersonImg2>
      <Interactive_ContatctImg2
        src={test_character_2}
      ></Interactive_ContatctImg2>
    </div>
  );
}
export default Interactive_Person;
