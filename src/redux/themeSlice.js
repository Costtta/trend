import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    initialState: {
        darkMode: false
    },
    name: 'themeSlice',
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        }
    }
})

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;