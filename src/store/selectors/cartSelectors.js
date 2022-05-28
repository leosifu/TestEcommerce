import { createSelector } from 'reselect';

export const CartSelector = createSelector(
  state => state.cart,
  cart => cart
)
