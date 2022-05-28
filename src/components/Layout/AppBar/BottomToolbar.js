import { useNavigate } from 'react-router-dom';

import { Box, Toolbar, } from '@mui/material';

import AppBarButton from '../../../Utils/AppBarButton';

const BottomToolbar = () => {

  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <Toolbar
      sx={{
        justifyContent: "center",
      }}
    >
      <Box sx={{ '& button': { m: 1 } }}>
        <AppBarButton title={'Inicio'} onClick={goToHome}/>
        <AppBarButton title={'Cartas monstruo'} />
        <AppBarButton title={'Cartas mágicas'} />
        <AppBarButton title={'Cartas trampa'} />
      </Box>
    </Toolbar>
  );
}

export default BottomToolbar;
