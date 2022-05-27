import {useState, useEffect, } from 'react';

import {Button, Grid, } from '@mui/material';

import Card from '../../Card';

const Carousel = ({cards, }) => {

  const [carouselCards, setCarouselCards] = useState([]);
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    setShowCards([...cards]);
  }, [cards]);

  // useState(() => {
  //   setShowCards([...carouselCards]);
  // }, [carouselCards]);

  const changeShowCards = (side) => {
    if (side === 0) {
      setShowCards(prevState => {
        let copyCards = [...prevState];
        let element = copyCards.pop();
        return [element, ...copyCards];
      });
    }
    else {
      setShowCards(prevState => {
        let copyCards = [...prevState];
        let element = copyCards.shift();
        return [...copyCards, element];
      });
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={2}>
        <Button onClick={e => changeShowCards(0)}>
          i
        </Button>
      </Grid>
        {
          showCards.slice(0, 4).map(card =>
            <Grid item xs={2}>
              <Card card={card} />
            </Grid>
          )
        }
      <Grid item xs={2}>
        <Button onClick={e => changeShowCards(1)}>
          d
        </Button>
      </Grid>
    </Grid>
  )
}

export default Carousel;
