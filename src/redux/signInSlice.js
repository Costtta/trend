import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSignIn = createAsyncThunk('signInSlice/fetchSignIn', async ({email, password}) => {
    const res = await fetch('https://test-ecomerce.hrt-wü.de/api/login', {
        method: 'POST',
        headers: {
            "Accept-Language": 'ar',
            "User-Type": "personal",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    const data = await res.json();
    return data;
})

export const signInSlice = createSlice({
    initialState: {
        data: null,
        isLoading: false,
        error: null
    },
    name: 'signInSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignIn.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSignIn.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchSignIn.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
})

export const {} = signInSlice.actions;
export default signInSlice.reducer;