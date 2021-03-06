import { Grid, } from '@mui/material';

import ShowItems from './ShowItems';
import ShowTotal from './ShowTotal';

const Checkout = ({cart, }) => {

  return (
    <div
      style={{ textAlign: 'center' }}
    >
      <h1>
        Checkout
      </h1>
      <Grid container>
        <Grid item xs={12} sm={12} md={9} >
          <ShowItems cart={cart}/>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <ShowTotal cart={cart}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Checkout;
