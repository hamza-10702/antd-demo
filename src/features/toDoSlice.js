import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    setToDoData: (state, action) => {
      state.data = action.payload;
    },
    unSetToDoData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setToDoData, unSetToDoData } = toDoSlice.actions;
export default toDoSlice.reducer;
