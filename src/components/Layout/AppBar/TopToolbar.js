import { useNavigate } from 'react-router-dom';

import { Box, Toolbar, TextField, Stack, InputAdornment, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

import Logo from '../../../assets/images/Yu-Gi-Oh2001.png';

import ShowCart from './ShowCart';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#EABE3F',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#EABE3F',
  },
  '& .MuiOutlinedInput-root': {
    color: '#EABE3F',
    '& fieldset': {
      borderColor: '#EABE3F',
    },
    '&:hover fieldset': {
      borderColor: '#EABE3F',
      color: '#EABE3F'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#EABE3F',
      color: '#EABE3F'
    },
  },
});

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

      <CssTextField
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
