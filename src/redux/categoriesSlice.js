import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk('categoriesSlice/fetchCategories', async () => {
    const res = await fetch('https://test-ecomerce.xn--hrt-w-ova.de/api/category/get',{
        method: 'GET',
        headers: {
            'Accept-Language': 'en'
        }
    })
    const data = await res.json()
    return data
})

export const categoriesSlice = createSlice({
    initialState: {
        fetchData: [],
        isLoading: false,
        error: null
    },
    name: 'categoriesSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.fetchData = action.payload.data
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

// export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;