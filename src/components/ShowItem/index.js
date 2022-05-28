import { useState, useEffect, } from 'react';

import { Container, Card, CardMedia, CardContent, Grid, Typography, Divider, } from '@mui/material';

import { useLocation, useSearchParams, } from 'react-router-dom';

import { getCardByNameService, } from '../../services/cardsServices';

import CardDetails from './CardDetails';
import AddCardToCart from './AddCardToCart';

const ShowItem = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const cardName = searchParams.get('name');

  const [card, setCard] = useState({
    card_prices: [],
    card_images: []
  });

  useEffect(() => {
    if (cardName) {
      getCardData(cardName);
    }
  }, [cardName]);

  const getCardData = async (name) => {
    try {
      const {data} = await getCardByNameService(name);
      console.log(data);
      setCard(data.data[0])
    } catch (e) {
      console.log(e);
    }
  }

  let cardPrice = card?.card_prices[0]?.ebay_price;

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia
              image={card?.card_images[0]?.image_url}
              style={{width: 280, height: 420}}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={6}>
            <CardDetails card={card} cardPrice={cardPrice} />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={3}>
            <AddCardToCart card={card} cardPrice={cardPrice} />
          </Grid>
        </Grid>


      </Card>
    </Container>
  )
}

export default ShowItem;
