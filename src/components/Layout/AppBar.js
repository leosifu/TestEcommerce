import {AppBar, Box, Toolbar, Typography, Button, IconButton, TextField, Grid, Badge, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ShowCart from './ShowCart';

import { useSelector, useDispatch, } from 'react-redux';
import { createSelector } from 'reselect';

const CartSelector = createSelector(
  state => state.cart,
  cart => cart
)

const TopBar = () => {

  const cart = useSelector(CartSelector);

  console.log(cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <ShowCart items={cart.items} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
