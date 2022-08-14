//Auth Slice - AuthSlice.ts

import { createSlice } from "@reduxjs/toolkit";
// taaza taaza app, structure define karne ke liye
const initialState = {
  isAuth: false,
  user: {
    name: "",
    email: "",
    role: "",
    token: "",
  },
};
//action or reducer dono hai
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
