import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
  name: "MainReducer",
  initialState: {
    // 현재 케릭터 위치
    x: 0,
    y: 0,
    // 스크린 높낮이
    screenHeight: 0,
    screenWidth: 0,
    // 계산된 움직임 값
    movementValue: 0,
    movementValueByX: 0,
    movementValueByY: 0,
    // 처음 위치
    startPosX: 0,
    startPosY: 0,
  },
  reducers: {
    handleMove: (state, action) => {
      const beforeX = state.x;
      const beforeY = state.y;
      //handle UP
      if (action.payload.keyCode === 38) {
        if (state.y < state.screenHeight / 2 - 2 * state.movementValue) {
          state.y = beforeY;
        } else state.y -= state.movementValue;
      //handle DOWN
      } else if (action.payload.keyCode === 40) {
        if (state.y > state.screenHeight / 2 + 5 * state.movementValue)
          state.y = beforeY;
        else state.y += state.movementValue;
      //handle LEFT
      } else if (action.payload.keyCode === 37) {
        if (state.x < state.screenWidth / 2 - 14 * state.movementValue)
          state.x = beforeX;
        else state.x -= state.movementValue;
      //handle RIGHT
      } else if (action.payload.keyCode === 39) {
        if (state.x > state.screenWidth / 2 + 15 * state.movementValue)
          state.x = beforeX;
        else state.x += state.movementValue;
      }
      // 사물 조건 돌리기
      if (
        state.x >= state.screenWidth / 2 - 15 * state.movementValue &&
        state.x <= state.screenWidth / 2 - 2.5 * state.movementValue &&
        state.y <= state.screenHeight / 2 - 2.5 * state.movementValue
      ) {
        state.x = beforeX;
        state.y = beforeY;
      }
      if (
        state.y < state.screenHeight / 2 - 2.5 * state.movementValue &&
        state.x >= state.screenWidth / 2 + 12.5 * state.movementValue
      ) {
        state.x = beforeX;
        state.y = beforeY;
      }
      if (
        state.y >= state.screenHeight / 2 &&
        state.y <= state.screenHeight / 2 + state.movementValue &&
        state.x <= state.screenWidth / 2 + 11 * state.movementValue &&
        state.x >= state.screenWidth / 2 + 5 * state.movementValue
      ) {
        state.x = beforeX;
        state.y = beforeY;
      }
      if (
        state.x >= state.screenWidth / 2 + 9 * state.movementValue &&
        state.x <= state.screenWidth / 2 + 11 * state.movementValue &&
        state.y === state.screenHeight / 2 - state.movementValue
      ) {
        state.x = beforeX;
        state.y = beforeY;
      }
      if (
        state.x <= state.screenWidth / 2 - 5 * state.movementValue &&
        state.x >= state.screenWidth / 2 - 11 * state.movementValue &&
        state.y >= state.screenHeight / 2 + state.movementValue &&
        state.y <= state.screenHeight / 2 + 2 * state.movementValue
      ) {
        state.x = beforeX;
        state.y = beforeY;
      }
    },
    setScreen: (state) => {
      // state.screenHeight = window.innerHeight;
      state.screenWidth = window.innerWidth;
      state.screenHeight = window.innerWidth*9/16;
    },
    calcStartPos: (state) => {
      state.x = window.innerWidth / 2;
      state.y = window.innerHeight / 2;
      state.startPosX = window.innerWidth / 2;
      state.startPosY = state.y = window.innerHeight / 2;
    },
    setMovementValue: (state) => {
      state.movementValue = window.innerWidth / 50;
    },
  },
});

export const { handleMove, calcStartPos, setMovementValue, setScreen } =
  main.actions;
export default main.reducer;
