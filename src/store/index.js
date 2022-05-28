import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './slices/cartSlice';
import snackbarSlice from './slices/snackBarSlice';

const reducer = {
  cart: cartSlice,
  snackbar: snackbarSlice
}

export default configureStore({
  reducer
})
