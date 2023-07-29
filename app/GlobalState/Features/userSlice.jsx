"use client";
import { useEffect,useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
  },
  reducers: {
    girisYap: (state, action) => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
      state.user = action.payload;
    },
    cikisYap: (state, action) => {
      signOut(auth);
        state.user = null;
    },
  },
});
export const { girisYap,cikisYap } = userSlice.actions;
export const selectUser = (state) => state.users.user;
export default userSlice.reducer;
