import {Box} from '@mui/material';
import React from 'react';

export default function Calander() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          background: 'rgba(248,250,252,0.3)',
          p: {xs: '8px', sm: '24px'},
          border: '1px solid #fff',
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 1px, rgba(0, 0, 0, 0.25) 0px 1px 0px 0px, rgba(0, 0, 0, 0.25) 0px 1px 1px 0px',
          backdropFilter: 'blur(15px)',
          borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
          height: '100%'
        }}
      >
        Bookings
        {/* <BigCalendar /> */}
      </Box>
    </>
  );
}
