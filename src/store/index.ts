import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {

    }
})


export type rootState = ReturnType<typeof store.getState>
