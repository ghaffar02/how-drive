import {Box} from '@mui/material';
import React from 'react';
import Leftside from './components/Leftside';
import RightSide from './components/RightSide';

export default function Setting() {
  return (
    <>
      <Box
        gap={2}
        sx={{
          display: 'flex',
          width: '100%',
          height: {
            xs: 'calc(100svh - 194px)',
            md: 'calc(100svh - 40px)'
          }
        }}
      >
        <Leftside />

        <RightSide />
      </Box>
    </>
  );
}
