// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userSlice, // To'g'ridan-to'g'ri userSlice'ni qo'shish
  },
});
