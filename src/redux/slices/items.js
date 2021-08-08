import { createSlice } from "@reduxjs/toolkit";

let initialState = JSON.parse(localStorage.getItem("contacts"));
if (!initialState) initialState = [];

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      localStorage.setItem(
        "contacts",
        JSON.stringify([...state, action.payload])
      );
      state.push(action.payload); // [...state, action.payload]
    },

    delItem: (state, action) => {
      localStorage.setItem(
        "contacts",
        JSON.stringify(state.filter(item => item.id !== action.payload))
      );
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, delItem } = itemSlice.actions;
export default itemSlice.reducer;
