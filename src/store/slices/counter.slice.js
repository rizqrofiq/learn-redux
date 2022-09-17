import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrease(state, action) {
      state.counter -= action.payload;
    },
    toggleCounter(state) {
      console.log(state.showCounter);
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
