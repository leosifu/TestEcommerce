import { useState, } from 'react';

import { useNavigate } from 'react-router-dom';

import { IconButton, Badge, Drawer, Box, Divider, Typography, Card, Grid, } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartItem from './CartItem';
import GeneralButton from '../../../../Utils/GeneralButton';

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
          badgeContent={items.reduce((total, item) => total + parseInt(item.quantity), 0)}
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
          <Typography variant="h6" gutterBottom component="div">
            {`Carro de compras (${items.length})`}
          </Typography>
          {
            items.length > 0 ?
            <>
              {
                items.map((item, i) =>
                  <div key={`cartItem${item.id}`}>
                    <CartItem
                      item={item}
                    />
                    {
                      i === items.length-1 ||
                      <Divider />
                    }
                  </div>
                )
              }
              <Card sx={{ position: 'sticky', bottom: 0, width: 280, flexGrow: 1, minHeight: 150, border: 'none', boxShadow: 'none', padding: '0px 20px 5px 0px', }}>
                <Divider sx={{marginBottom: 3}}/>
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
                <GeneralButton
                  onClick={goToCheckout}
                  title={'Ir a Checkout'}
                />
              </Card>
            </>
            :
            <>
              El carrito esta vac??o :(
            </>
          }
        </Box>
      </Drawer>
    </>
  )
}

export default ShowCart;
