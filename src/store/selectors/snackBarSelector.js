import { createSelector } from 'reselect';

export const SnackBarSelector = createSelector(
  state => state.snackbar,
  snackbar => snackbar
)
