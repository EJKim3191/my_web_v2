import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
  name: "MainReducer",
  initialState: {
    // 현재 케릭터 위치
    x: 750,
    y: 600,
    // 스크린 높낮이
    screenHeight: 0,
    screenWidth: 0,
    // 계산된 움직임 값
    movementValueByX: 30,
    movementValueByY: 30,
    // 처음 위치
    startPosX: 750,
    startPosY: 600,
  },
  reducers: {
    handleMove: (state, action) => {
      const beforeX = state.x;
      const beforeY = state.y;
      //handle UP
      if (action.payload.keyCode === 38) {
        if (state.y <= state.startPosY - 8 * state.movementValueByY) {
          // 벽 경계값
          console.log("위 벽")
          state.y = beforeY;
        } else state.y -= state.movementValueByY;
      //handle DOWN
      } else if (action.payload.keyCode === 40) {
        if (state.y >= state.startPosY + 0 * state.movementValueByY){
          // 벽 경계값
          console.log("아래 벽")
          state.y = beforeY;
        }
        else state.y += state.movementValueByY;
      //handle LEFT
      } else if (action.payload.keyCode === 37) {
        if (state.x <= state.startPosX - 14 * state.movementValueByX){
          // 벽 경계값
          console.log("왼쪽 벽", state.x, state.startPosX - 15 * state.movementValueByX, state.movementValueByX)
          state.x = beforeX;
        }
        else state.x -= state.movementValueByX;
      //handle RIGHT
      } else if (action.payload.keyCode === 39) {
        if (state.x >= state.startPosX + 14 * state.movementValueByX){
          // 벽 경계값
          console.log("오른쪽 벽")
          state.x = beforeX;
        }
        else state.x += state.movementValueByX;
      }
      // 사물 조건 돌리기 (벽에 부딫히는 조건)
      // 왼쪽 위 책장
      if (
        state.x <= state.startPosX - 3 * state.movementValueByX &&
        state.y < state.startPosY - 7 * state.movementValueByY
      ) {
        console.log("왼쪽 위 책상")
        state.x = beforeX;
        state.y = beforeY;
      }
      // 오른쪽 책장
      if (
        state.x >= state.startPosX + 13 * state.movementValueByX &&
        state.y < state.startPosY - 7 * state.movementValueByY
      ) {
        console.log("오른쪽 책장")
        state.x = beforeX;
        state.y = beforeY;
      }
      // 오른쪽 책상
      if (
        state.x >= state.startPosX + 6 * state.movementValueByX &&
        state.x <= state.startPosX + 10 * state.movementValueByX &&
        state.y >= state.startPosY - 5 * state.movementValueByY &&
        state.y <= state.startPosY - 4 * state.movementValueByY
      ) {
        console.log("오른쪽 책상")
        state.x = beforeX;
        state.y = beforeY;
      }
      // 오른쪽 책상 모서리
      if (
        state.x >= state.startPosX + 9 * state.movementValueByX &&
        state.x <= state.startPosX + 10 * state.movementValueByX &&
        state.y >= state.startPosY - 6 * state.movementValueByY &&
        state.y <= state.startPosY - 5 * state.movementValueByY
      ) {
        console.log("오른쪽 책상 모서리")
        state.x = beforeX;
        state.y = beforeY;
      }
      //왼쪽 책상
      if (
        state.x <= state.startPosX - 6 * state.movementValueByX &&
        state.x >= state.startPosX - 11 * state.movementValueByX &&
        state.y >= state.startPosY - 4 * state.movementValueByY &&
        state.y <= state.startPosY - 3 * state.movementValueByY
      ) {
        console.log("왼쪽 책상")
        state.x = beforeX;
        state.y = beforeY;
      }
    },
    setScreen: (state) => {
      //비율이 16:9 보다 세로가 더 길 때
      if(window.innerHeight * 16 / 9 > window.innerWidth){
        state.screenWidth = window.innerWidth;
        state.screenHeight = window.innerWidth * 9 / 16;
      }
      //가로가 더 길 때
      else if(window.innerHeight * 16 / 9 < window.innerWidth){
        state.screenHeight = window.innerHeight;
        state.screenWidth = window.innerHeight * 16 / 9;
      }
      //같을 때
      else{
        state.screenHeight = window.innerHeight;
        state.screenWidth = window.innerWidth;
      }
    },
  },
});

export const { handleMove, setScreen } =
  main.actions;
export default main.reducer;
