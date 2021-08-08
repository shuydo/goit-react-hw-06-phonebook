import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    // addItem: (state, action) => [...state, action.payload], state.push(action.payload)
    addItem: (state, action) => {state.push(action.payload)},
    delItem: (state, action) =>
      state.filter(item => item.id !== action.payload),
  },
});

export const { addItem, delItem } = itemSlice.actions;
export default itemSlice.reducer;
