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
    initialState: [],
    name: 'categoriesSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            return state = action.payload.data
        })
        builder.addCase(fetchCategories.pending, (state, action) => {
            return state = ['Loading']
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            return state = ['Fetching is Rejected']
        })
    }
})

// export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;