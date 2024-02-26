import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.productId === newItem.productId
      );
      if (existingItemIndex !== -1) {
        // If item already exists, update its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItems: (state, action) => {
      const productIdToRemove = action.payload;
      const indexToRemove = state.items.findIndex(
        (item) => item.productId === productIdToRemove
      );
      if (indexToRemove !== -1) {
        const itemToRemove = state.items[indexToRemove];
        if (itemToRemove.quantity === 1) {
          state.items.splice(indexToRemove, 1);
        } else {
          state.items[indexToRemove].quantity -= 1;
        }
      }
    },
    deleteItems: (state, action) => {
        const productIdToRemove = action.payload;
        state.items = state.items.filter(item => item.productId !== productIdToRemove);
    },
    

    deleteCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, deleteCart,deleteItems } = CartSlice.actions;
export default CartSlice.reducer;
