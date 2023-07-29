"use client";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
  },
  reducers: {
    
  },
});
// export const { sirketEkle } = userSlice.actions;
export const selectUser = (state) => state.users.user;
export default userSlice.reducer;
