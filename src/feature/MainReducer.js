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
        if (state.y <= 40) state.y = 0;
        else state.y -= 40;
      } else if (action.payload.keyCode === 40) {
        if (state.y >= 960) state.y = 1000;
        else state.y += 40;
      } else if (action.payload.keyCode === 37) {
        if (state.x <= 40) state.x = 0;
        else state.x -= 40;
      } else if (action.payload.keyCode === 39) {
        if (state.x >= 960) state.x = 1000;
        else state.x += 40;
      }
    },
  },
});

export const { handleMove } = main.actions;
export default main.reducer;
