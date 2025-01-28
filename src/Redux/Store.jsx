import { configureStore } from "@reduxjs/toolkit";
import DataSlice from '../Redux/SetData'
export const Store =configureStore({
  reducer:{
    data:DataSlice,
  }
})