import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('testSlice/fetchData', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    // console.log(data);
})

export const testSlice = createSlice({
    initialState: [],
    name: 'testSlice',
    reducers: {}
})

// export const {} = testSlice.actions;
export default testSlice.reducer;