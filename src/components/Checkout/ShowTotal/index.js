import {Card, CardContent, Typography, Divider, Container, } from '@mui/material';

const ShowTotal = ({cart, }) => {
  return (
    <Container>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="body1" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
          Precio total del carrito
        </Typography>
        <Divider />
        <Typography gutterBottom variant="body2" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
          {`Precio parcial:`}
        </Typography>
        <Typography gutterBottom variant="body1" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
          {`$${cart.totalPrice}`}
        </Typography>
      </CardContent>
    </Card>
    </Container>
  )
}

export default ShowTotal;
