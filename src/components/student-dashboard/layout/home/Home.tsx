import {Box} from '@mui/material';
import React from 'react';
import Header from './components/Header';

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: '1176px',
        width: '100%',
        height: '100%',
        background: 'rgba(248,250,252,0.3)',
        padding: '24px',
        border: '1px solid #fff',
        borderRadius: '0px 24px 24px 0px'
      }}
    >
      <Header />
    </Box>
  );
}
