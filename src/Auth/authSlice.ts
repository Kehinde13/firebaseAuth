import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export interface User {
  id: string;
  userId: string;
  username: string;
  email: string;
  userImg: string;
  bio: string;
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null
};

// Helper function to get the current user from auth
const getCurrentUserFromAuth = () => {
  return new Promise<User | null>((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user && user.uid) {
        const userRef = collection(db, "users");
        const userSnapShot = await getDoc(doc(userRef, user.uid));
        if (userSnapShot.exists()) {
          const response = { ...(userSnapShot.data() as User) };
          resolve(response);
        } else {
          reject(new Error("User data does not exist"));
        }
      } else {
        resolve(null);
      }
    });
  });
};

export const checkCurrentUser = createAsyncThunk(
  "auth/checkCurrentUser",
  async () => {
    const user = await getCurrentUserFromAuth();
    return user as User;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(checkCurrentUser.pending, () => { //add cases for every instance
      console.log("getting current user");
  })
    .addCase(checkCurrentUser.fulfilled, (state, action: PayloadAction<User | null>) => {
      
      state.currentUser = action.payload;
      console.log(action.payload);
    });
  },
});

export default authSlice.reducer;

export const getCurrentUser = (state: UserState ) => state.currentUser;
