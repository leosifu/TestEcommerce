import {Card as CardMUI, CardActions, CardContent, CardMedia, Typography, Grid, } from '@mui/material';

import { useDispatch, } from 'react-redux';
import { addItemToCart, } from '../../store/slices/cartSlice';
import { openSnackbar, } from '../../store/slices/snackBarSlice';

import GeneralButton from '../../Utils/GeneralButton';

const Card = ({card, }) => {

  const dispatch = useDispatch();

  let cardPrice = card.card_prices[0].ebay_price;

  const addItem = () => {
    dispatch(addItemToCart({
      item: card,
      price: cardPrice
    }))
    dispatch(openSnackbar({
      open: true,
      severity: 'success',
      text: `Se agregó ${card.name}`
    }))
  }

  return (
    <Grid item xs={3}>
      <CardMUI style={{margin: 20, width: 210}}>
        <CardMedia
          image={card.card_images[0].image_url}
          style={{width: 210, height: 315}}
        />
        <CardContent>
          <Typography gutterBottom component="div" className="limitText" style={{ opacity: 0.6, fontSize: 14 }}>
            {card.type}
          </Typography>
          <Typography gutterBottom component="div" className="limitText" style={{ opacity: 0.4, fontSize: 12 }}>
            {card.race}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
            {card.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
            {`$${cardPrice}` || '-'}
          </Typography>
        </CardContent>
        <CardActions sx={{paddingLeft: 2}}>
            <GeneralButton
              disabled={!cardPrice}
              size="small"
              onClick={addItem}
              title={cardPrice ? 'Agregar al carrito' : 'Agotado'}
            />

        </CardActions>
      </CardMUI>
    </Grid>
  );
}

export default Card;
