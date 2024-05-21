import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export interface User {
    id: string;
    userId: string;
    username: string;
    email: string;
    userImg: string;
    bio: string;
  }

const initialState: User = {
    
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    }
})

export const getCurrentUser = createAsyncThunk(
    "counter/getCurrentUser",
    async (user: User) => {
        
    }
)