import { CardContent, Typography, Divider, Grid, } from '@mui/material';

import CardDetailsTable from './CardDetailsTable';

const CardDetails = ({card, cardPrice, }) => {

  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
        {card.name}
      </Typography>
      <Divider />

      <Grid container>
        <Typography gutterBottom variant="body2" component="div" className="limitText">
          {`Precio: `}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" className="limitText" style={{ fontWeight: 'bold', marginLeft: 15 }}>
          {` $${cardPrice}`}
        </Typography>
      </Grid>

      <Typography gutterBottom variant="body1" component="div" style={{ fontWeight: 'bold', marginTop: 10 }}>
        Características
      </Typography>

      <CardDetailsTable card={card} />

      <Typography gutterBottom variant="body1" component="div" style={{ fontWeight: 'bold', marginTop: 15 }}>
        Descripción
      </Typography>

      <Typography gutterBottom variant="body2" component="div">
        {card.desc}
      </Typography>

    </CardContent>
  )
}

export default CardDetails;
