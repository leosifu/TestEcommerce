import { useNavigate } from 'react-router-dom';

import {TableRow, TableCell, Button, IconButton, } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDispatch, } from 'react-redux';
import { addItemToCart, deleteItemFromCart, deleteCompletelyItemFromCart, } from '../../../../../store/slices/cartSlice';
import { openSnackbar, } from '../../../../../store/slices/snackBarSlice';

const ItemsTableRow = ({item, }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemToCart({
      item: item,
      price: item.card_prices[0].ebay_price
    }))
    dispatch(openSnackbar({
      open: true,
      severity: 'success',
      text: `Se agregó ${item.name}`
    }))
  }

  const deleteItem = () => {
    dispatch(deleteItemFromCart({
      id: item.id,
      price: item.card_prices[0].ebay_price
    }))
    dispatch(openSnackbar({
      open: true,
      severity: 'warning',
      text: `Se eliminó ${item.name}`
    }))
  }

  const deleteCompletelyItem = () => {
    dispatch(deleteCompletelyItemFromCart({
      id: item.id,
      price: item.card_prices[0].ebay_price
    }))
    dispatch(openSnackbar({
      open: true,
      severity: 'warning',
      text: `Se eliminaron todos los ${item.name}`
    }))
  }

  const goToCardDetails = () => navigate(`/card?name=${item.name}`);

  return(
    <TableRow hover role="checkbox" tabIndex={-1} key={item.code}>
      <TableCell>
        <img
          src={item.card_images[0].image_url}
          style={{width: 70, height: 105, cursor: 'pointer'}}
          alt={item.name}
          onClick={goToCardDetails}
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
          color="error"
          onClick={deleteCompletelyItem}
        >
          Borrar
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ItemsTableRow;
