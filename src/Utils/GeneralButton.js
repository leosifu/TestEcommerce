import { Button, } from '@mui/material';

const GeneralButton = (props) => (
  <Button
    {...props}
    variant="contained"
    size="small"
    sx={
      {
        color: '#fff',
        bgcolor: '#EABE3F',
        border: '1px solid #EABE3F',
        ':hover': {
          bgcolor: '#fff',
          color: '#EABE3F',
          border: 1
        },
      }
    }
  >
    {props.title}
  </Button>
)

export default GeneralButton;
