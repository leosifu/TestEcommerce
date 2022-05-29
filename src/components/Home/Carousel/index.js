import {useState, useEffect, } from 'react';

import { Grid, IconButton, } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import Card from '../../Card/ItemCard';
import EmptyStateCard from '../../Card/EmptyStateCard';

import useWindowDimensions from '../../../hooks/windowSizeHook';

const numberOfCards = (size) => {
  if (size > 1290) {
    return 4
  }
  if (size > 860) {
    return 3
  }
  if (size > 535) {
    return 2
  }
  else {
    return 1
  }
};

const getGrid = (size) => {
  if (size > 1290) {
    return [2, 2, 2]
  }
  if (size > 860) {
    return [1, 3, 1]
  }
  if (size > 535) {
    return [1, 5, 1]
  }
  else {
    return [1, 10, 1]
  }
}

const Carousel = ({cards, }) => {

  const [showCards, setShowCards] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    setShowCards([...cards]);
  }, [cards]);

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

  const [leftButton, cardNumber, rightButton] = getGrid(width);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={leftButton}>
        <IconButton
          onClick={e => changeShowCards(0)}
          size="large"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Grid>
        {
          showCards.length > 0 ?
          showCards.slice(0, numberOfCards(width)).map(card =>
            <Grid item xs={cardNumber} key={card.id}>
              <Card card={card} />
            </Grid>
          )
          :
          <>
            {
                Array(numberOfCards(width)).fill().map(i =>
                <Grid item xs={cardNumber}>
                  <EmptyStateCard />
                </Grid>
              )
            }
          </>
        }
      <Grid item xs={rightButton}>
        <IconButton
          onClick={e => changeShowCards(1)}
          size="large"
        >
          <ChevronRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Carousel;
