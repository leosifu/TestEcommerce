import {Card, CardActions, CardContent, CardMedia, Typography, Grid, IconButton, Button, } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDispatch, } from 'react-redux';
import { addItemToCart, deleteItemFromCart, deleteCompletelyItemFromCart, } from '../../../../store/slices/cartSlice';
import { openSnackbar, } from '../../../../store/slices/snackBarSlice';

import StyledTextField from '../../../../Utils/StyledTextField';

const CartItem = ({item, }) => {

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
      severity: 'error',
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
      severity: 'error',
      text: `Se eliminaron todos los ${item.name}`
    }))
  }

  return (
    <Card style={{margin: 5, width: 240, border: 'none', boxShadow: 'none'}}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            image={item.card_images[0].image_url}
            style={{width: 70, height: 105}}
          />
        </Grid>

        <Grid item xs={8}>
          <CardContent
            sx={{padding: '0px 0px 0px 15px'}}
          >
            <Typography variant="subtitle2" gutterBottom component="div" style={{fontWeight: 'bold'}}>
              {item.name}
            </Typography>
            <Grid container>
              <Typography variant="body2" gutterBottom component="div">
                {`${item.quantity} x`}
              </Typography>
              <Typography variant="body1" gutterBottom component="div" style={{fontWeight: 'bold', marginLeft: 3}}>
                {`${item.itemTotalPrice}`}
              </Typography>
            </Grid>
            <Button
              color="error"
              size="small"
              onClick={deleteCompletelyItem}
            >
              Eliminar
            </Button>
          </CardContent>
        </Grid>
        <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={3}>
            <IconButton
              onClick={deleteItem}
            >
              <RemoveCircleIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              readOnly
              value={item.quantity}
              size="small"
              disabled
            />
          </Grid>
          <Grid item xs={3}>
            <IconButton
              onClick={addItem}
            >
              <AddCircleIcon />
            </IconButton>
          </Grid>

        </Grid>
        </CardActions>
      </Grid>
    </Card>
  );
}

export default CartItem;
