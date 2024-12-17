import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import { firebaseAuth } from "./firebase";

export const signUpUser = createAsyncThunk("auth/signUpUser", async ({ email, password, displayName }, { rejectWithValue }) => {
    try {
        const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredentials.user;
        await updateProfile(user, { displayName });
        return { email: user.email, uid: user.uid, displayName };
    } catch (error) {
        rejectWithValue(error.message);
    }
});

export const signInUser = createAsyncThunk("auth/signInUser", async ({ email, password }, { rejectWithValue }) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(firebaseAuth, email, password);
        return { email: userCredentials.user.email, uid: userCredentials.user.uid, displayName: userCredentials.user.displayName };
    } catch (error) {
        rejectWithValue(error.message);
    }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValue }) => {
    try {
        await signOut(firebaseAuth);
        return true;
    } catch (error) {
        rejectWithValue(error.message)
    }
})


export const authSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: "idle",
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.status = "succeeded";
            state.user = action.payload;
            state.error = null;
        },
        clearUser: (state, action) => {
            state.status = "idle",
            state.user = null;
        }
    },
    // extraReducers: (builder) => {
    //     builder
            
    // }
}) 

export const {setUser, clearUser} = authSlice.actions;
export default authSlice.reducer;
