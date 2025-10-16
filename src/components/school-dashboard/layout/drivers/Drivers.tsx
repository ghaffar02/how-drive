import {Box} from '@mui/material';
import React from 'react';
import DetailSide from './sections/DetailSide';
import DriverDetail from './sections/DriverDetail';

export default function Drivers() {
  return (
    <Box sx={{width: '100%', height: '100%', display: 'flex', gap: '16px'}}>
      <DetailSide />
      <DriverDetail />
    </Box>
  );
}
