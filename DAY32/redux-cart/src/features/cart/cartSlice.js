// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if already in cart
      } else {
        state.items.push({ ...item, quantity: 1 }); // Add new item
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
