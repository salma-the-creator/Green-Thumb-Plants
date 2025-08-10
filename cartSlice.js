import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, 
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (state.items[plant.id]) {
      
        return;
      }
      state.items[plant.id] = { ...plant, quantity: 1 };
      state.totalQuantity += 1;
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
    deleteItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.totalQuantity -= state.items[id].quantity;
        delete state.items[id];
      }
    },
    clearCart(state) {
      state.items = {};
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

