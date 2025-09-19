import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartProducts.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const { id, size, color } = action.payload;
            state.cartProducts = state.cartProducts.filter(
                (item) => !(item.id === id && item.size === size && item.color === color)
            );
        },
        increaseQuantity: (state, action) => {
            const { id, size, color } = action.payload;
            const item = state.cartProducts.find(
                (p) => p.id === id && p.size === size && p.color === color
            );
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const { id, size, color } = action.payload;
            const item = state.cartProducts.find(
                (p) => p.id === id && p.size === size && p.color === color
            );
            if (item && item.quantity > 1) item.quantity -= 1;
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;

export default cartSlice.reducer;
