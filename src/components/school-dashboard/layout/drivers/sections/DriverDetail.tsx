import {Box} from '@mui/material';
import React from 'react';
import Header from '../components/Header';

export default function DriverDetail() {
  return (
    <Box
      sx={{
        width: '100%',
        height: {xs: '100%', md: '100%'},
        padding: {xs: '16px', md: '24px'},
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '2px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
        // display: 'grid',
        // gridTemplateRows: 'auto',
        // gridTemplateColumns: 'repeat(2, 1fr)',
        // gap: 3,
        // overflow: 'scroll',
        // '&::-webkit-scrollbar': {
        //   display: 'none'
        // },
        // scrollbarWidth: 'none',
        // msOverflowStyle: 'none'
      }}
    >
      <Header />
    </Box>
  );
}
