import {TableRow, TableCell, Button, IconButton, } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDispatch, } from 'react-redux';
import { addItemToCart, deleteItemFromCart, deleteCompletelyItemFromCart, } from '../../../../../store/slices/cartSlice';

const ItemsTableRow = ({item, }) => {

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemToCart({
      item: item,
      price: item.card_prices[0].ebay_price
    }))
  }

  const deleteItem = () => {
    dispatch(deleteItemFromCart({
      id: item.id,
      price: item.card_prices[0].ebay_price
    }))
  }

  const deleteCompletelyItem = () => dispatch(deleteCompletelyItemFromCart({
    id: item.id,
    price: item.card_prices[0].ebay_price
  }))

  return(
    <TableRow hover role="checkbox" tabIndex={-1} key={item.code}>
      <TableCell>
        <img
          src={item.card_images[0].image_url}
          style={{width: 70, height: 105}}
        />
      </TableCell>
      <TableCell>
        {item.name}
      </TableCell>
      <TableCell>
        <IconButton
          onClick={deleteItem}
        >
          <RemoveCircleIcon />
        </IconButton>
        {item.quantity}
        <IconButton
          onClick={addItem}
        >
          <AddCircleIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        {item.itemTotalPrice}
      </TableCell>
      <TableCell>
        <Button
          onClick={deleteCompletelyItem}
        >
          Borrar
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ItemsTableRow;
