import {Box} from '@mui/material';
import React from 'react';
import Leftside from './components/Leftside';

export default function Setting() {
  return (
    <>
      <Box gap={2} sx={{display: 'flex', height: '100vh', width: '100%'}}>
        <Leftside />
        <Box
          sx={{
            maxWidth: '1176px',
            width: '100%',
            height: '100%',
            background: 'rgba(248,250,252,0.3)',
            padding: {xs: '8px', lg: '24px'},
            border: '1px solid #fff',
            borderRadius: {xs: '24px', md: '0px 24px 24px 0px'},
            display: 'flex',
            flexDirection: {xs: 'row', md: 'column'},
            gap: '20px'
          }}
        >
          Einstellungen
        </Box>
      </Box>
    </>
  );
}
