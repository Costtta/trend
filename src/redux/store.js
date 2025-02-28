import { configureStore } from '@reduxjs/toolkit'
import  testSlice  from './testSlice'
import categoriesSlice from './categoriesSlice'
import productsSlice from './productSlice'
import themeSlice from './themeSlice'
import cartSlice from './cartSlice'
import signInSlice from './signInSlice'
import signUpSlice from './signUpSlice'

export const store = configureStore({
    reducer: {
        test: testSlice,
        categories: categoriesSlice,
        products: productsSlice,
        themeMode: themeSlice,
        cart: cartSlice,
        signIn: signInSlice,
        signUp: signUpSlice
    }
})

