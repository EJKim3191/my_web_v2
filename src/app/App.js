/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Intro from "../feature/Intro";
import { handleMove, setChapter, setRepoList } from "../feature/MainReducer";
import ChapterOne from "../page/ChapterOne";
import Prologue from "../page/Prologue";

import axios from "axios";

// CSS
import { App, PrologueContainer, Background, ChapterOneContainer } from "./App.styles";

const introText = {
  prologue: {
    header: "Prologue",
    text: "preparations for a leap forward"
  },
  chapter_one: {
    header: "Chapter 1",
    text: "Frontend Software Developer"
  }
}

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/display-name
export default function () {
  const dispatch = useDispatch();
  const chapter = useSelector((state) => state.main.chapter);
  const ref = useRef();

  // 이벤트핸들러 삭제 필요 ...
  const handleKeyDown = ((e) => {
    if(chapter % 2 === 0) dispatch(setChapter(chapter+1))
    else if(chapter === 1) dispatch(handleMove(e))

    ref.current = handleKeyDown;
  })

  useEffect(async ()=>{
    const result = await axios.get(`https://api.github.com/users/${`EJKim3191`}/repos`);
    console.log(result)
    dispatch(setRepoList(result.data));
  },[])

  useEffect(() => {
    window.removeEventListener("keydown", ref.current);
    window.addEventListener("keydown", handleKeyDown);
    console.log("### 현 챕터는: ", chapter)
  }, [chapter]);

  return (
    <App>
      <Background />
      {/* {
        chapter === 0 && 
        <Intro header={introText.prologue.header} text={introText.prologue.text}/>
      }
      {
        chapter === 1 &&
        <PrologueContainer>
            <Prologue />
        </PrologueContainer>
      }
      {
        chapter === 2 &&
        <Intro header={introText.chapter_one.header} text={introText.chapter_one.text}/>
      } */}
      {
        // chapter === 3 &&
        <ChapterOneContainer>
          <ChapterOne />
        </ChapterOneContainer>
      }
    </App>
  );
}
