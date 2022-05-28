import { Button, } from '@mui/material';

const AppBarButton = (props) => (
  <Button
    {...props}
    variant="outlined"
    size="small"
    sx={
      {
        color: '#EABE3F',
        borderColor: '#EABE3F',
        ':hover': {
          bgcolor: '#EABE3F',
          color: '#000',
          borderColor: '#EABE3F',
        },
      }
    }
  >
    {props.title}
  </Button>
)

export default AppBarButton;
