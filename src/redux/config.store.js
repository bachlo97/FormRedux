import { configureStore } from "@reduxjs/toolkit";
import { quanLySVReducer } from "./quanLySV.slice";
export const store = configureStore({
    reducer:{
        quanLySVReducer,
    }
})