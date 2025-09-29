import {Box} from '@mui/material';
import React from 'react';
import Leftside from './components/Leftside';
import RightSide from './components/RightSide';

export default function Setting() {
  return (
    <>
      <Box gap={2} sx={{display: 'flex', height: '100vh', width: '100%'}}>
        <Leftside />

        <RightSide />
      </Box>
    </>
  );
}
