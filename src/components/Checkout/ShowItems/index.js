import { Container, CardMedia, } from '@mui/material';

import { useSelector, } from 'react-redux';
import { createSelector } from 'reselect';

import ItemsTable from './ItemsTable';

const ShowItems = ({cart, }) => {

  return (
    <Container>
      <ItemsTable items={cart.items}/>
    </Container>
  )
}

export default ShowItems;
