import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  severity: 'success',
  text: ''
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.open = true;
      state.severity = action.payload.severity;
      state.text = action.payload.text;
    },
    closeSnackbar: (state, action) => {
      state.open = false;
      state.text = '';

    },
  }
})

export const {openSnackbar, closeSnackbar, } = snackbarSlice.actions;

export default snackbarSlice.reducer;
