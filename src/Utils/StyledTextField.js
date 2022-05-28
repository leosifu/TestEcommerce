import { TextField, } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const StyledTextField = (props) => (
  <CssTextField
    {...props}
  />
)

export default StyledTextField;
