import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Auth/authSlice";


export const store = configureStore({
    reducer: {
       user: authSlice
    },
})


export type rootState = ReturnType<typeof store.getState>
//this is need when working with asynchoronous actions
export type AppDispatch = typeof store.dispatch
