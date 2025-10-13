import {Box} from '@mui/material';
import React from 'react';
import Header from '../components/Header';

export default function StudentDetail() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',

        padding: '24px',
        background: 'rgba(248,250,252,0.3)',
        backdropFilter: 'blur(15px)',
        boxShadow: `0px 0px 0px 1px rgb(255, 255, 255, rgb(255, 255, 255)), 0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.25)`,
        border: '1px solid #fff',
        borderRadius: {xs: '24px', md: '0px 24px 24px 0px'}
      }}
    >
      <Header />
    </Box>
  );
}
