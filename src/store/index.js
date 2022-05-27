import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './slices/cartSlice';

const reducer = {
  cart: cartSlice,
}

export default configureStore({
  reducer
})
