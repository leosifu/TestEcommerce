import {Card as CardMUI, CardActions, CardContent, CardMedia, Button, Typography, Grid, CircularProgress, Box, } from '@mui/material';

const LoadingImageComponent = () => (
  <Box
    style={{width: 210, height: 315}}
  >
    <CircularProgress sx={{marginTop: 20}}/>
  </Box>
)

const EmptyStateCard = () => {

  return (
    <Grid item xs={3}>
      <CardMUI style={{margin: 20, width: 210}}>
        <CardMedia
          component={LoadingImageComponent}
          style={{width: 210, height: 315}}
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {'----'}
          </Typography>
          <Typography gutterBottom component="div" className="limitText" style={{ opacity: 0.4, fontSize: 12 }}>
            {'----'}
          </Typography>
          <Typography gutterBottom variant="body1" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
            {'----'}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className="limitText" style={{ fontWeight: 'bold' }}>
            {'----'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            disabled
            size="small"
          >
            Cargando...
          </Button>
        </CardActions>
      </CardMUI>
    </Grid>
  );
}

export default EmptyStateCard;
