import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let checkItemExistsInCart = state.items.findIndex(item => item.id === action.payload.item.id);
      let itemPrice = parseFloat(action.payload.price);
      if (checkItemExistsInCart > -1) {
        let findItem = state.items[checkItemExistsInCart];
        state.items[checkItemExistsInCart] = {
          ...findItem,
          quantity: findItem.quantity + 1,
          itemTotalPrice: parseFloat(parseFloat(findItem.itemTotalPrice) + itemPrice).toFixed(2)
        };
      }
      else {
        state.items.push({
          ...action.payload.item,
          quantity: 1,
          itemTotalPrice: action.payload.price
        });
      }
      state.totalPrice = parseFloat(parseFloat(state.totalPrice) + itemPrice).toFixed(2);
    },
    deleteItemFromCart: (state, action) => {
      let itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let findItem = state.items[itemIndex];
      let itemPrice = parseFloat(action.payload.price);
      if (findItem.quantity > 1) {
        state.items[itemIndex] = {
          ...findItem,
          quantity: findItem.quantity - 1,
          itemTotalPrice: parseFloat(parseFloat(findItem.itemTotalPrice) - itemPrice).toFixed(2)
        };
      }
      else {
        state.items.splice(itemIndex, 1);
        state.totalPrice = parseFloat(parseFloat(findItem.itemTotalPrice) - itemPrice).toFixed(2)
      }
    }
  }
})

export const {addItemToCart, deleteItemFromCart, } = cartSlice.actions;

export default cartSlice.reducer;
