import { useNavigate } from 'react-router-dom';

import { Box, Toolbar, Stack, InputAdornment, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Logo from '../../../assets/images/Yu-Gi-Oh2001.png';

import ShowCart from './ShowCart';
import StyledTextField from '../../../Utils/StyledTextField';

const TopToolbar = ({cart, }) => {

  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        margin: '0px 5% 0px 5%'
      }}
    >

      <Stack
        direction="row"
        alignItems="center"
      >
        <Box
          component="img"
          sx={{
            height: 50,
            cursor: 'pointer'
          }}
          alt="Your logo."
          src={Logo}
          onClick={goToHome}
        />
      </Stack>

      <StyledTextField
        id="filled-search"
        label="Buscar carta..."
        type="search"
        sx={{ marginLeft: '-10%', width: '40%' }}
        size='small'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
              <SearchIcon
                sx={{ color: '#EABE3F' }}
              />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: { color: '#EABE3F' },
        }}
      />
      <ShowCart
        cart={cart}
      />
    </Toolbar>
  );
}

export default TopToolbar;
