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
        if (state.y < state.screenHeight / 2) {
          // 벽 경계값
          console.log("위 벽 경계")
          state.y = beforeY;
        } else state.y -= state.movementValueByY;
      //handle DOWN
      } else if (action.payload.keyCode === 40) {
        if (state.y > state.screenHeight * 5 / 6 - 2 * state.movementValueByY){
          // 벽 경계값
          state.y = beforeY;
        }
        else state.y += state.movementValueByY;
      //handle LEFT
      } else if (action.payload.keyCode === 37) {
        if (state.x < state.screenWidth / 32 * 7){
          // 벽 경계값
          state.x = beforeX;
        }
        else state.x -= state.movementValueByX;
      //handle RIGHT
      } else if (action.payload.keyCode === 39) {
        if (state.x > state.screenWidth / 16 * 13 - state.movementValueByX){
          // 벽 경계값
          state.x = beforeX;
        }
        else state.x += state.movementValueByX;
      }
      // 사물 조건 돌리기 (벽에 부딫히는 조건)
      // 왼쪽 위 책장
      if (
        state.x <= state.screenWidth / 32 * 7 + 12 * state.movementValueByX &&
        state.y < state.screenHeight / 2 
      ) {
        console.log("왼쪽 위 책상")
        state.x = beforeX;
        state.y = beforeY;
      }
      // 오른쪽 책장
      if (
        state.x >= state.screenWidth / 16 * 13 - 3 * state.movementValueByX &&
        state.y < state.screenHeight / 2 
      ) {
        console.log("오른쪽 책장")
        state.x = beforeX;
        state.y = beforeY;
      }
      // 오른쪽 책상
      if (
        state.y >= state.screenHeight / 2 + 2 * state.movementValueByY &&
        state.y <= state.screenHeight / 2 + 3 * state.movementValueByY &&
        state.x <= state.screenWidth / 2 + 10 * state.movementValueByX &&
        state.x >= state.screenWidth / 2 + 5 * state.movementValueByX
      ) {
        console.log("오른쪽 책상")
        state.x = beforeX;
        state.y = beforeY;
      }
      // 오른쪽 책상 모서리
      if (
        state.x >= state.screenWidth / 2 + 9 * state.movementValueByX &&
        state.x <= state.screenWidth / 2 + 10 * state.movementValueByX &&
        state.y >= state.screenHeight / 2 + 1 * state.movementValueByY &&
        state.y <= state.screenHeight / 2 + 2 * state.movementValueByY
      ) {
        console.log("오른쪽 책상 모서리")
        state.x = beforeX;
        state.y = beforeY;
      }
      //왼쪽 책상
      if (
        state.x <= state.screenWidth / 2 - 5 * state.movementValueByX &&
        state.x >= state.screenWidth / 2 - 11 * state.movementValueByX &&
        state.y >= state.screenHeight / 2 + 3 * state.movementValueByY &&
        state.y <= state.screenHeight / 2 + 4 * state.movementValueByY
      ) {
        console.log("왼쪽 책상")
        state.x = beforeX;
        state.y = beforeY;
      }
    },
    setScreen: (state) => {
      state.screenWidth = window.innerWidth;
      state.screenHeight = window.innerWidth * 9 / 16;
    },
    calcStartPos: (state) => {
      state.x = window.innerWidth / 2;
      state.y = window.innerHeight / 2;
      state.startPosX = window.innerWidth / 2;
      state.startPosY = state.y = window.innerHeight / 2;
    },
    setMovementValue: (state) => {
      state.movementValueByX = window.innerWidth * 19 / 32 / 30;
      state.movementValueByY = window.innerWidth * 6 / 32 / 9;
    },
  },
});

export const { handleMove, calcStartPos, setMovementValue, setScreen } =
  main.actions;
export default main.reducer;
