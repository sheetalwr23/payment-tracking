// src/store.js

import { configureStore } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  loginStatus: localStorage.getItem("accessToken") ? true : false,
};

// Reducer function
const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loginStatus: true };
    case "LOGOUT":
      return { ...state, loginStatus: false };
    default:
      return state;
  }
};

// Create Redux store with configureStore
const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
