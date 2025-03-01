import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async () => {
    const res = await fetch('https://test-ecomerce.xn--hrt-w-ova.de/api/product/get', {
        method: 'GET',
        headers: {
            'Accept-Language': 'En',
        }
    });
    const data = await res.json();
    return data;
})


const productSlice = createSlice({
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    name: 'productSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
            state.error = null
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.data;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer;