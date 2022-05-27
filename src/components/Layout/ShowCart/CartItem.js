import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, } from '@mui/material';

import { useDispatch, } from 'react-redux';
import { addItemToCart, deleteItemFromCart, } from '../../../store/slices/cartSlice';

const CartItem = ({item, }) => {

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

  return (
    <Card style={{margin: 20, width: 240, border: 'none', boxShadow: 'none'}}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            image={item.card_images[0].image_url}
            style={{width: 70, height: 105}}
          />
        </Grid>

        <Grid item xs={8}>
          <CardContent>
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
          </CardContent>
        </Grid>
        <CardContent>
          <Grid container>
            <Button
              onClick={deleteItem}
            >
              -
            </Button>
            <Typography variant="body2" gutterBottom component="div" >
              {`${item.quantity}`}
            </Typography>
            <Button
              onClick={addItem}
            >
              +
            </Button>
          </Grid>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default CartItem;
