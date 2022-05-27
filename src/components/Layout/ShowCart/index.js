import { useState, } from 'react';

import { IconButton, Badge, Drawer, Box, Divider, Typography, } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartItem from './CartItem';

const ShowCart = ({items, }) => {

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

  return (
    <>
      <IconButton onClick={handleClick}>
        <Badge
          badgeContent={items.reduce((total, item) => total + item.quantity, 0)}
          color="success"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer
        anchor={'right'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={ 250 }
          role="presentation"
          onKeyDown={toggleDrawer(false)}
          style={{paddingTop: 10, paddingLeft: 5}}
        >
          <Typography variant="h5" gutterBottom component="div">
            {`Carro de compras (${items.length})`}
          </Typography>
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
        </Box>
      </Drawer>
    </>
  )
}

export default ShowCart;
