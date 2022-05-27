import {Card as CardMUI, CardActions, CardContent, CardMedia, Button, Typography, Grid, } from '@mui/material';

import { useDispatch, } from 'react-redux';
import { addItemToCart, } from '../../store/slices/cartSlice';

const Card = ({card, }) => {

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addItemToCart({
      item: card,
      price: card.card_prices[0].ebay_price
    }))
  }

  return (
    <Grid item xs={3}>
      <CardMUI style={{margin: 20, width: 240}}>
        <CardMedia
          image={card.card_images[0].image_url}
          style={{width: 240, height: 360}}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
            {card.name}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>*/}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={addItem}>Agregar al carrito</Button>
        </CardActions>
      </CardMUI>
    </Grid>
  );
}

export default Card;
