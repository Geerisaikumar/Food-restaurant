import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    quantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // console.log(state)
      let itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },

    decrementCart: (state, action) => {
      let itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity -= 1;
      } else if (state.items[itemIndex].quantity === 0) {
        state.items.remove();
      } else return;
    },

    incrementCart: (state, action) => {
      let itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      itemIndex >= 0 ? (state.items[itemIndex].quantity += 1) : "null";
    },

    clearItems: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, decrementCart, incrementCart, clearItems } =
  cartSlice.actions;
