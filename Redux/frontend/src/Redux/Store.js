// src/Redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // slice 1
    // auth: authReducer, // slice 2
  },
});  

// counter → is the name of the slice in your global state
// counterReducer → the function that actually updates the state