import {forwardRef, } from 'react';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useSelector, useDispatch, } from 'react-redux';

import { SnackBarSelector, } from '../store/selectors/snackBarSelector';
import { closeSnackbar, } from '../store/slices/snackBarSlice';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBarApp = () => {

  const dispatch = useDispatch();

  const snackbar = useSelector(SnackBarSelector);

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeSnackbar())
  }

  return (
    <Snackbar
      open={snackbar.open}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
     }}
     autoHideDuration={2000}
     onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
        {snackbar.text}
      </Alert>
    </Snackbar>
  );
}

export default SnackBarApp;
