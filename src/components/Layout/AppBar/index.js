import {AppBar, Box, Divider, } from '@mui/material';

import TopToolbar from './TopToolbar';
import BottomToolbar from './BottomToolbar';

const ApplicationBar = ({cart, }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>

        <AppBar
          position="static"
          style={{ background: '#121212' }}
        >

          <TopToolbar cart={cart} />

          <Divider xs={{borderColor: '#EABE3F'}}/>

          <BottomToolbar />

        </AppBar>
    </Box>
  );
}

export default ApplicationBar;
