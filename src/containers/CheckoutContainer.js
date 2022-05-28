import React from 'react';

import Checkout from '../components/Checkout';

import { useSelector, } from 'react-redux';

import {CartSelector, } from '../store/selectors/cartSelectors';

const CheckoutContainer = () => {

  const cart = useSelector(CartSelector);

  return(
    <Checkout
      cart={cart}
    />
  )
}

export default CheckoutContainer;
