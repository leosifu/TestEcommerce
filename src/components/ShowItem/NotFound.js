import { CardMedia, Grid, Typography, } from '@mui/material';

import GeneralButton from '../../Utils/GeneralButton';

import NotFoundYuGi from '../../assets/images/yugi_sad.jpg';

const NotFound = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <CardMedia
          image={NotFoundYuGi}
          style={{width: 400, height: 300}}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} sx={{ marginTop: '5%' }}>
        <Typography gutterBottom variant="h4" component="div" style={{ fontWeight: 'bold' }}>
          Intentamos encontrar tu carta :(
        </Typography>
        <Typography gutterBottom variant="body1" component="div" style={{ fontWeight: 'bold' }}>
          Al parecer la carta no está disponible, por favor revisa el nombre de la carta que quieres.
        </Typography>
        <div style={{marginTop: 20}}>
          <GeneralButton
            title={'Ir a la página de inicio'}
            size="large"
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default NotFound;
