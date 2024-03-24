import { configureStore } from "@reduxjs/toolkit";
import cineZenithSlice from "./cineZenithSlice";


export const store =configureStore({
    reducer:{
        cineZenithSlice,
    }

})