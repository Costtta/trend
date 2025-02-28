import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSignUp = createAsyncThunk('signUpSlice/fetchSignUp', async ({ name, lastname, emailUp, passwordUp }) => {
    const res = await fetch('http://test-ecomerce.hrt-wü.de/api/register', {
        method: 'POST',
        headers: {
            "Accept-Language": "ar",
            "Content-Type": "application/json",
            "User-Type": "personal"
        },
        body: JSON.stringify({
            name,
            lastname,
            emailUp,
            passwordUp })
    });
    const data = await res.json();
    return data;
})

export const signUpSlice = createSlice({
    initialState: {
        data2: null,
        isLoading2: false,
        error2: null
    },
    name: 'signUpSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSignUp.pending, (state) => {
            state.isLoading2 = true
            state.error2 = null
        })
        builder.addCase(fetchSignUp.fulfilled, (state, action) => {
            state.isLoading2 = false
            state.data2 = action.payload
        })
        builder.addCase(fetchSignUp.rejected, (state, action) => {
            state.isLoading2 = false
            state.error2 = action.error.message
        })
    }
})

export const { } = signUpSlice.actions;
export default signUpSlice.reducer;