import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartItems = createAsyncThunk('cartSlice/fetchCartItems', async () => {
    const res = await fetch('http://test-ecomerce.xn--hrt-w-ova.de/api/cart/add-item', {
        method: 'POST'
    });
    const data = res.json();
    return data;
})

const cartSlice = createSlice({
    initialState: {
        items: [],
        total: 0,
        isLoading: false,
        error: null,
        fetchData: null
    },
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
        },
        deleteBtn: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);

            if (indexToRemove !== -1) {
                const newItems = [...state.items];
                newItems.splice(indexToRemove, 1);
                // Update the state
                state.items = newItems;
            }
        },
        clearAll: (state) => {
            // there is no delete all cart in the design to dispatch it
            state.items = []
        },
        totalPrice: (state) => {
            state.total = state.items.reduce((acc, item) => acc + parseFloat(item.price), 0)
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.fetchData = action.payload;
        })
        builder.addCase(fetchCartItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
}
)

export const { addToCart, deleteBtn, clearAll, totalPrice, incrementQuantity, decrementQuantity } = cartSlice.actions;





export default cartSlice.reducer;