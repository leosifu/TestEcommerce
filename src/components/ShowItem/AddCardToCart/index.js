import {useState, } from 'react';

import { CardContent, Typography, IconButton, Grid, } from '@mui/material';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useDispatch, } from 'react-redux';
import { addAnAmountOfItemsToCart, } from '../../../store/slices/cartSlice';
import { openSnackbar, } from '../../../store/slices/snackBarSlice';

import GeneralButton from '../../../Utils/GeneralButton';
import StyledTextField from '../../../Utils/StyledTextField';

const AddCardToCart = ({card, cardPrice, }) => {

  const dispatch = useDispatch();

  const [cardAmount, setCardAmount] = useState(1);

  const addCard = () => setCardAmount(amount => amount + 1);

  const removeCard = () => setCardAmount(amount => amount > 1 ? (amount - 1) : amount);

  const handleChange = (e) => setCardAmount(e.target.value);

  const addAnAmountOfItems = () => {
    dispatch(addAnAmountOfItemsToCart({
      item: card,
      price: cardPrice,
      amount: cardAmount
    }))
    dispatch(openSnackbar({
      open: true,
      severity: 'success',
      text: `Se agregó ${card.name}`
    }))
  }

  return (
    <CardContent>
      <Typography gutterBottom variant="body1" component="div" style={{ fontWeight: 'bold' }}>
        Agregar al carrito
      </Typography>

      <Typography gutterBottom variant="h6" component="div" className="limitText" style={{ fontWeight: 'bold', marginLeft: 15 }}>
        {` $${cardPrice}`}
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={3}>
          <IconButton
            onClick={removeCard}
          >
            <RemoveCircleIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <StyledTextField
            value={cardAmount}
            size="small"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <IconButton
            onClick={addCard}
          >
            <AddCircleIcon />
          </IconButton>
        </Grid>

      </Grid>

      <div
        style={{marginLeft: 45, marginTop: 10}}
      >
        <GeneralButton
          onClick={addAnAmountOfItems}
          title={'Agregar al carrito'}
        />

      </div>

    </CardContent>
  )
}

export default AddCardToCart;
