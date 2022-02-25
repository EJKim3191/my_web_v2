import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
  name: "MainReducer",
  initialState: {
    x: 0,
    y: 0,
  },
  reducers: {
    handleMove: (state, action) => {
      if (action.payload.keyCode === 38) {
        if (state.y <= 20) state.y = 0;
        else state.y -= 20;
      } else if (action.payload.keyCode === 40) {
        if (state.y >= 980) state.y = 1000;
        else state.y += 20;
      } else if (action.payload.keyCode === 37) {
        if (state.x <= 20) state.x = 0;
        else state.x -= 20;
      } else if (action.payload.keyCode === 39) {
        if (state.x >= 980) state.x = 1000;
        else state.x += 20;
      }
    },
  },
});

export const { handleMove } = main.actions;
export default main.reducer;
