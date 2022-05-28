import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart'))?.items || [],
  totalPrice: JSON.parse(localStorage.getItem('cart'))?.totalPrice || 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let checkItemExistsInCart = state.items.findIndex(item => item.id === action.payload.item.id);
      let itemPrice = parseFloat(action.payload.price);

      const copyStateItems = [...state.items];

      if (checkItemExistsInCart > -1) {

        const findItem = copyStateItems[checkItemExistsInCart];
        copyStateItems[checkItemExistsInCart] = {
          ...findItem,
          quantity: findItem.quantity + 1,
          itemTotalPrice: parseFloat(parseFloat(findItem.itemTotalPrice) + itemPrice).toFixed(2)
        }
      }
      else {
        copyStateItems.push({
          ...action.payload.item,
          quantity: 1,
          itemTotalPrice: action.payload.price
        });
      }

      state.items = [...copyStateItems];
      let newTotalPrice = parseFloat(parseFloat(state.totalPrice) + itemPrice).toFixed(2);
      state.totalPrice = newTotalPrice;
      const cartState = {
        items: copyStateItems,
        totalPrice: newTotalPrice,
      }

      localStorage.setItem('cart', JSON.stringify(cartState));
    },
    deleteItemFromCart: (state, action) => {
      let itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let findItem = state.items[itemIndex];
      let itemPrice = parseFloat(action.payload.price);

      const copyStateItems = [...state.items];

      if (findItem.quantity > 1) {
        copyStateItems[itemIndex] = {
          ...findItem,
          quantity: findItem.quantity - 1,
          itemTotalPrice: parseFloat(parseFloat(findItem.itemTotalPrice) - itemPrice).toFixed(2)
        };
      }
      else {
        copyStateItems.splice(itemIndex, 1);
      }
      state.items = [...copyStateItems];

      let newTotalPrice = parseFloat(parseFloat(state.totalPrice) - itemPrice).toFixed(2)
      state.totalPrice = newTotalPrice;

      const cartState = {
        items: copyStateItems,
        totalPrice: newTotalPrice,
      }

      localStorage.setItem('cart', JSON.stringify(cartState));

    },
    deleteCompletelyItemFromCart: (state, action) => {
      let itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let itemPrice = parseFloat(action.payload.price);

      const copyStateItems = [...state.items];

      copyStateItems.splice(itemIndex, 1);
      state.items = [...copyStateItems];

      let newTotalPrice = parseFloat(parseFloat(state.totalPrice) - itemPrice).toFixed(2)
      state.totalPrice = newTotalPrice;

      const cartState = {
        items: copyStateItems,
        totalPrice: newTotalPrice,
      }

      localStorage.setItem('cart', JSON.stringify(cartState));

    },
    deleteAllItemsFromCart: (state, action) => {

    }
  }
})

export const {addItemToCart, deleteItemFromCart, deleteCompletelyItemFromCart, } = cartSlice.actions;

export default cartSlice.reducer;
