import { useState, } from 'react';

import { useNavigate } from 'react-router-dom';

import { IconButton, Badge, Drawer, Box, Divider, Typography, Paper, Card, Grid, Button, } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartItem from './CartItem';

const ShowCart = ({cart, }) => {

  const {items, totalPrice} = cart;

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const goToCheckout = () => {
    setOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Badge
          badgeContent={items.reduce((total, item) => total + item.quantity, 0)}
          color="error"
        >
          <ShoppingCartIcon
            sx={{ color: '#EABE3F' }}
          />
        </Badge>
      </IconButton>

      <Drawer
        anchor={'right'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 280 }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          style={{paddingTop: 10, paddingLeft: 5}}
        >
          <Typography variant="h5" gutterBottom component="div">
            {`Carro de compras (${items.length})`}
          </Typography>
          {
            items.length > 0 ?
            <>
              {
                items.map((item, i) =>
                  <>
                    <CartItem
                      item={item}
                    />
                    {
                      i === items.length-1 ||
                      <Divider />
                    }
                  </>
                )
              }
              <Card sx={{ position: 'sticky', bottom: 0, width: 280, flexGrow: 1, minHeight: 100, border: 'none', boxShadow: 'none', padding: '5px 0px 5px 0px', }}>
                <Divider />
                <Grid
                  container
                  justifyContent="space-around"
                >
                  <Grid item xs={6}>
                      <Typography variant="body1" gutterBottom component="div" style={{fontWeight: 'bold', marginLeft: 3}}>
                        {`Total: `}
                      </Typography>
                  </Grid>

                  <Grid item xs={6}>
                      <Typography variant="body1" gutterBottom component="div" style={{fontWeight: 'bold', marginLeft: 3}}>
                        {`$ ${totalPrice}`}
                      </Typography>
                  </Grid>
                </Grid>
                <Button
                  onClick={goToCheckout}
                  variant="contained"
                >
                  Ir a Checkout
                </Button>
              </Card>
            </>
            :
            <>
              El carrito esta vacío :(
            </>
          }
        </Box>
      </Drawer>
    </>
  )
}

export default ShowCart;
