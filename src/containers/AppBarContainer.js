import React from 'react';

import AppBar from '../components/Layout/AppBar';

import { useSelector, } from 'react-redux';

import {CartSelector, } from '../store/selectors/cartSelectors';

const AppBarContainer = () => {

  const cart = useSelector(CartSelector);

  return(
    <AppBar
      cart={cart}
    />
  )
}

export default AppBarContainer;
